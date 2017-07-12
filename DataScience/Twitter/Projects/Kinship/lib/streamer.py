from twitter import OAuth, TwitterStream
import json

def stream(ACCESS_TOKEN, ACCESS_SECRET, CONSUMER_KEY, CONSUMER_SECRET,
           word,
           tweet_count,
           streamed_data_file):
    
    oauth = OAuth(ACCESS_TOKEN, ACCESS_SECRET, CONSUMER_KEY, CONSUMER_SECRET)
    twitter_stream = TwitterStream(auth=oauth)
    iterator = twitter_stream.statuses.filter(track=word, language="en")
    
    try:
        with open(streamed_data_file,'a') as outfile:
            print('Accessing Twitter Stream....')
            for tweet in iterator:
                if tweet_count == 0:
                    break
                else:
                    try:
                        json.dump(tweet,outfile)
                        outfile.write("\n")
                        tweet_count -= 1
                    except ValueError:
                        print('Abnormal Value')
                        continue            
    except IOError:
        print('IOError')
    
    outfile.close()