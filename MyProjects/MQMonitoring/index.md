MQ Monitoring
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

Proactive Monitoring & Alerting demands automation like developing an automated script which will send alerts to the support team periodically.
It includes building checkpoints into the different interfaces, which can minimize monitoring efforts.

Action point:
------------

Automated email updates of current status of the application Message Queues (MQ) to be sent to designated team members at frequent intervals throughout the day, for the purpose of proactive monitoring. 

This includes the following details:
• Server name
• MQ name
• Current Queue Depth
• Latest Get time

Value and benefits:
-------------

There are benefits for the Client and IBM on this implemention.
Without continuous status and threshold checking, we are left with inefficient, reactive monitoring - waiting until a problem is reported, while performing a limited series of standard checks based on knowledge gained from previous issues experienced, all after the event.
So it is recommend that we proactively and continuously monitor the environment.
Best practice is automating the MQ monitoring and develop a solution that will send status report of the MQs via email notification to the designated team members at equal intervals throughout the day.
This will give the an upper hand in proactively monitoring, and preventive measures can be taken before an issue occurs with the MQ.


Implementation:
-----

Shell script has been developed and put as cron job in production server.
