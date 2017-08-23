CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * Requirements
 * Inputs
 * Outputs

Intoduction:
------------

Twitter users tweet (post status) about any topic within the character limit, making it a powerful medium of information sharing.
'Kinship' is a simple tool that finds out what are the related words (kins) to a particular word that twitter users have twitted.

For example, if we take into account the word *Wimbledon*, this tool will fetch the twitter stream of all tweets containing the word Wimbledon, and display the top n most related words - like *Federer*, *Tennis*, *Champion*, *record* etc. expectedly.

Requirements:
-------------

The code is written in Python language. So to run the same, any software that can run python code can be used.
Recommended (Anaconda) 

Inputs:
-------

  * ACCESS_TOKEN 
  * ACCESS_SECRET 
  * CONSUMER_KEY 
  * CONSUMER_SECRET
  * 'The Word'
  * No. of 'kin' words required (n)
  * Total no. of tweets to be fetched from Twitter Stream for the data corpus
  
Output:
-------

  A plot displaying the 'n' most closely related 'kins' that Twitter users use with the given 'word'.
