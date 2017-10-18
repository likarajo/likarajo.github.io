MQ Reporting
------------------

Contents
--------
   
 * Background
 * Action point
 * Value and benefits
 * Implementation
 
Background:
-----------

The application that we support in our project is connected to multiple other external applications via message queues.
Those external applications are downstream applications, which either receive feed from the central application, or can communicate with the central application on request-reply basis via message queues (IBM Websphere MQ).
Whenever any message fails to be processed at the application end, the same goes into the corresponding Backout message queue, waiting to be reprocessed.
This gives rise to the need for the same to be reprocessed manually.
Therefore, a report needs to be generated which lists the backout MQ names that contain unprocessed messages along with the server in which it is, so that support team member can reprocess the messages therein.
Manually browsing all the queues (more than 50 queues) from each of the production servers (6 in our application) i a very time consuming process and often leads to human error.
Therefore automation of the same like developing an automated script which will send Backout Message Queue status updates to the support team periodically with the queue depth of each MQ will increase productivity of the team and reduce chances of error.

Action point:
------------
The Backout MQ reporting includes the daily reporting of current queue depth of the GCSS MQ Backout queues, where an email is sent to the client with the following details:
• Production node name
• Backout queue name
• Current queue depth
This is generally done by Production support team member by manually parsing through the GCSS Queue Managers in IBM WebSphere MQ and noting down the queue depth of the Backout queues individually. 

So the action point is that automated email updates of current Backout Message Queue report of the application Message Queues (MQ) to be sent to designated team members at frequent intervals throughout the day, for the purpose of proactive monitoring and action taking.

This includes the following details:
• Server name
• MQ name
• Current Queue Depth
• Latest Get time

Also a Dynamic Web Application can be developed using Java and JSP, that will generate this report on a single mouse click.

Value and benefits:
-------------

Both client and IBM benefit with this implemention.
Without frequent message processing, messages remain un attended and can lead to information loss.
So it is recommend that we proactively and frequently make sure that no messages remain unprocessed at the application end.
Best practice is automate the Backout MQ Reporting and develop a solution that will send status report of the MQs via email notification to the designated team members at equal intervals throughout the day.
This will give the an upper hand in proactively making sure that all messages are processed in the application.


Implementation:
-----

Shell script has been developed and put as cron job in production server.
