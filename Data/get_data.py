import os
import requests
import pymongo
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
API_KEY = os.getenv("RAWG_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")

# MongoDB setup
client = pymongo.MongoClient(MONGO_URI)
db = client["gamingInfo"]
collection = db["games"]

# Base RAWG endpoint
BASE_URL = "https://api.rawg.io/api/games"

# Get game name from user
def get_game_name():
    return input("🎮 Enter game name: ").strip()

# Search for game and get slug
def get_game_slug(game_name):
    params = {"key": API_KEY, "search": game_name}
    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        raise Exception("Failed to search game.")

    results = response.json().get("results", [])
    if not results:
        print("⚠️ No results found.")
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
def transform_game_data(game):
    return {
        "title": game.get("name"),
        "description": game.get("description_raw"),
        "releaseDate": game.get("released"),
        "genres": [g['name'] for g in game.get("genres", [])],
        "platforms": [p['platform']['name'] for p in game.get("platforms", [])],
        "images": [game.get("background_image")],
        "ratings": {
            "metacritic": game.get("metacritic"),
            "user": None
        }
    }

# Insert into MongoDB
def save_to_db(game_data):
    if game_data:
        collection.insert_one(game_data)
        print("✅ Game saved to MongoDB.")

# Main execution
if __name__ == "__main__":
    game_name = get_game_name()
    slug = get_game_slug(game_name)

    if slug:
        game_details = get_game_details(slug)
        formatted = transform_game_data(game_details)
        save_to_db(formatted)
