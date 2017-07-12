from datetime import datetime
from streamer import stream
from miner import mine
from plotter import plot

def kinships(ACCESS_TOKEN, ACCESS_SECRET, CONSUMER_KEY, CONSUMER_SECRET, word, kins, tweet_count):
    curr = datetime.now().strftime('%y%m%d_%H%M')
    streamed_data_file = 'streamedData_'+word.lower()+'_'+curr+'.json'
    mined_data_file = 'minedData_'+word.lower()+'_'+curr+'.json'
    
    stream(ACCESS_TOKEN, ACCESS_SECRET, CONSUMER_KEY, CONSUMER_SECRET,
               word,
               tweet_count,
               streamed_data_file)
    
    mine(word, kins, streamed_data_file, mined_data_file)
    
    plot(mined_data_file)


