import sys 
sys.path.insert(0, './lib/')
from operations import kinships

kinships(
        ACCESS_TOKEN = "2390269165-bTMxMFUrJma8etDMHoB6uTOl8WElxLMPp3WDRFE",
        ACCESS_SECRET = "yEhAL19G3sgOAtzioBYyV1CLrx93GtZYhowWsLJARZwmA",
        CONSUMER_KEY = "jz0ikcqx7F4VH7haLxn16rOH4",
        CONSUMER_SECRET = "Y5jHZdHguM3YtDcH2RED1KZcepjkenNMOtGZF1XMZ9RG9oddUc",
        word = 'Wimbledon',
        kins = 5,
        tweet_count = 20
)