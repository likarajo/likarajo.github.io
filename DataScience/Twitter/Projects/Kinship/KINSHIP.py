import sys 
sys.path.insert(0, './lib/')
from operations import kinships

kinships(
        ACCESS_TOKEN = "xxxxxxxx",
        ACCESS_SECRET = "xxxxxxxx",
        CONSUMER_KEY = "xxxxxxxx",
        CONSUMER_SECRET = "xxxxxxxx",
        word = 'Wimbledon',
        kins = 20,
        tweet_count = 1000
)
