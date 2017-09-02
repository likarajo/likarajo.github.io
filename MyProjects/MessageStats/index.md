Message Stats Tool
------------------

Contents
--------
   
 * Background
 * Problems faced
 * How the tool helps
 * Description
 * Requirements
 * Inputs
 * Outputs
 * Note

Background:
-----------

The application that we support in our project is connected to multiple other external applications via message queues.
Those external applications are downstream applications, which either receive feed from the central application, or can communicate with the central application on request-reply basis via message queues.

In 2016 Quarter 1, the central application in our project had an issue for which request (query) messages sent from another external application to the central application were not getting processed within the set limit and were getting timed out.
Application support team received multiple high and critical priority incidents to resolve this issue. 
So, being a member of the support team, I developed this tool which can retrieve the Message Statistics of the requests made from all the external applications that communicate with the central application on request-reply basis. 

Problems faced:
---------------

The only way to check the request messages was to dig into the huge set of application logs present in the application server (Linux).
Moreover, the full set of logs in all the 6 application production servers had to be parsed through individually, which itself being tremendously hectic also consumed a high amount of time and reduced team members' productivity, ultimately delaying monitoring.

How the tool helps?
-------------------

Using the tool, the request message monitoring can be done with just a few mouse clicks. Without this tool it would have taken almost 7-8 hours per issue incidents to manually check the logs one by one.
In 2016 Q1, about 7-8 issue incidents occurred, and using the tool for monitoring clearly saved more than 60 hours of manual effort.

Description:
------------

The tool displays the number of request messages sent to the central application from another external application and the number of such messages that timed-out, on an hourly basis for the particular date.
Along with that, it also calculates the average request message processing time taken by the central application before replying back to the external application.

Requirements:
-------------

Connect to application server (Linux) using Putty or the Windows UI designed with Java. Log in with required credentials when asked.
Take a note of the log file location and change the script accordingly.

Inputs:
-------
 
1) Date of request (in format YYMMDD)
2) External application (sender application name)
3) Time-out limit (in seconds, which represents the maximum time-limit for processing the request message)

Outputs:
--------

1) The number of requests made to the central application from the external application given as the input
2) The number of requests that have processing time greater than the time-out limit given as the input 
3) The Average processing time of the request messages
These above data is displayed on an hourly basis for the particular date taken as an input.

Note:
-----

This tool is specifically designed for the custom application used in our project.
The code logic can be reused for similar other applications, by carefully locating the log file names and locations, along with (most importantly) the log data structure.
