import os
import requests
import pymongo 
from dotenv import load_dotenv


load_dotenv()
API_Key = os.getenv("69d914ceefaa48ec8c24a3d1644e888a")
MONGO_URI = os.getenv("mongodb://localhost:27017/gamingInfo")


#connect to MongoDB
client = pymongo.MongoClient(MONGO_URI)
