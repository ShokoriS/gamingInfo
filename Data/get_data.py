import os
import requests
import pymongo
from dotenv import load_dotenv
import re

# Load environment variables
load_dotenv()
API_KEY = os.getenv("RAWG_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")

# MongoDB setup
client = pymongo.MongoClient(MONGO_URI)
db = client["gamingInfo"]  # ✅ make sure this matches your backend DB name
collection = db["games"]

# Base RAWG endpoint
BASE_URL = "https://api.rawg.io/api/games"

# Search for game and get slug
def get_game_slug(game_name):
    params = {"key": API_KEY, "search": game_name}
    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        raise Exception("Failed to search game.")

    results = response.json().get("results", [])
    if not results:
        print(f"⚠️ No results found for: {game_name}")
        return None

    return results[0]["slug"]

# Get full game details by slug
def get_game_details(slug):
    url = f"{BASE_URL}/{slug}"
    params = {"key": API_KEY}
    response = requests.get(url, params=params)

    if response.status_code != 200:
        raise Exception("Failed to get game details.")

    return response.json()

# Convert API data to MongoDB format
def transform_game_data(game, id):
    return {
        "id": id,
        "title": game.get("name", "").strip(),
        "description": game.get("description_raw"),
        "releaseDate": game.get("released"),
        "genres": [g['name'] for g in game.get("genres", [])],
        "platforms": [p['platform']['name'] for p in game.get("platforms", [])],
        "images": [game.get("background_image")] if game.get("background_image") else [],
        "ratings": {
            "metacritic": game.get("metacritic"),
            "user": None
        },
        "featured": True  # ✅ move out of ratings for clarity
    }

# Insert into MongoDB
def save_to_db(game_data):
    if game_data:
        collection.insert_one(game_data)
        print(f"✅ Game '{game_data['title']}' saved to MongoDB.")

# Check for duplicates (case-insensitive)
def check_for_dupl(game_title):
    return collection.find_one({"title": {"$regex": f"^{re.escape(game_title)}$", "$options": "i"}}) is not None

# Main execution
if __name__ == "__main__":
    with open("exer", 'r') as games:
        game_names = [game.strip() for game in games.readlines() if game.strip()]

    for id, game_name in enumerate(set(game_names)):
        if check_for_dupl(game_name):
            print(f"⚠️ Game '{game_name}' already exists. Skipping.")
            continue

        try:
            slug = get_game_slug(game_name)
            if slug:
                game_details = get_game_details(slug)
                formatted = transform_game_data(game_details, id)
                save_to_db(formatted)
        except Exception as e:
            print(f"❌ Failed for '{game_name}': {e}")
