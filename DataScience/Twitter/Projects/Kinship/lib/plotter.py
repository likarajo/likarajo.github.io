import pylab
import json

def plot(mined_data_file):
    print('Plotting data....')
    f = open(mined_data_file,'r')
    words, counts = zip(*json.load(f))
        
    pylab.figure(1)
    x = range(len(words))
    pylab.xticks(x, words, rotation='vertical')
    pylab.plot(x, counts, 'xr')
    pylab.show()