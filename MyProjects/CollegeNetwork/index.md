Designing a College Network
-------------------------------------

Contents
---------------------
 * Paper Title
 * Abstract
 * Design
 * Advantages

Project Title:
------------
Designing a College Network for an Institution, which has campuses in multiple locations.


Abstract:
---------
Designing a College Campus Network for an Institution, which has three campuses in three different locations. 
All campuses to be connected with each other through a network to enable communication among them, making sure that the network design be cost effective, scalable and compatible with different protocols.  


Design:
-------

### Network Elements Used: 
* In some site access switch and aggregation switch both are being used, in some sites only access switches have been used. 
* All the sites have a router. 
* The whole network is designed based on TCP/IP protocol suite. 
* For the ease of implementation network comprises of DHCP server and one web server. 

### Allotted IP Range (for three branches of the institute, located at City-A, City-B and City-C):
* 152.220.0.0/16 for hosts
* 10.10.10.0/24 for inter-router links

To make proper utilization of the IP addresses, <a href="https://www.tutorialspoint.com/ipv4/ipv4_vlsm.htm">VLSM</a> technique has been used. 
To avoid the single broadcast domain, VLAN (802.1q) technique has been adopted.

### Host Distribution:
* CITY-A: ECE => 100 hosts, CSE =>  50 hosts, ME => 20 hosts, EE => 10 hosts
* CITY-B: ECE => 80 hosts, CSE => 20 hosts, ME => 10 hosts
* CITY-C: ECE => 50 hosts, 	CSE => 20 hosts, EE => 25 hosts

Since there are three different campus locations, and keeping in mind the future scope of expansion of the network, net space for a total of 16 locations are being kept. 
Now, 16=2^4
This implies that the first 4 bits of the third octet of the IP 152.220.0.0/16 are also included into the network address part. This changes the IP to 152.220.0.0/20.
This pool is then sub-netted to get the IP address pools for the hosts.

### IP Address Pools for the hosts: 
* City-A: 10011000.11011100.00000000.00000000 = 152.220.0.0
* City-B: 10011000.11011100.00010000.00000000 = 152.220.16.0
* City-C: 10011000.11011100.00100000.00000000 =	152.220.32.0
* left for expansion: 10011000.11011100.11110000.00000000 = 152.220.240.0

According to the obtained IP distribution from the pool, the hosts in each network are assigned their IP addresses.

This is, however, implemented Dynamically using a DHCP server, that is being connected to the ECE department network in City-A.
The DHCP/DNS  server is assigned its own static IP and gateway, and DHCP Pools are created in it

At each of the LAN connecting interfaces of the routers, IP helper address, pointing to the DHCP server, is set, so that the Hosts connected to that interface are able to get their IP Dynamically from the DHCP server.
 
### The inter-router link networks are as follows:
* City-A <-> City-B	: 10.10.10.8/30
* City-B <-> City-C	: 10.10.10.0/30
* City-A <-> City-C	: 10.10.10.4/30

The City-A campus network has been subdivided into 4 VLAN networks each bearing a VLAN ID. 
Each VLAN (ECE, CSE, ME and EE) has been connected to separate switches from where a connection to an aggregate switch has been done.

Also, we created and assigned each of the VLAN’s to the respective switch interfaces.
 
Adding to it, an encapsulation of 802.Iq is given to the link between City-A aggregation switch and router.
To access each of the four different VLAN’s through the same interface, the router at City-A is accordingly configured. 

The interface Fa0/0 of the City-A router is Sub-interfaced.
The respective sub-interfaces are assigned the corresponding network’s 1st allowable IP address of hosts.
 
For the routers at City-B and City-C, no such Sub- interfacing is required as they include only plain simple Stream networks that access the router through separate switches at different router interfaces.
Thus, plain simple configuring of router interfaces, which include assigning of the first host IP address of the corresponding network is done.

The routers situated at City-A, City-B and City-C are then interconnected using Serial link.
Such connection has by default <a href="https://en.wikipedia.org/wiki/High-Level_Data_Link_Control">HDLC</a> protocol.
The link’s IP address is assigned to the outgoing interface of the corresponding router, and a clock rate is also specified at both the ends of the serial link.
 
Finally, a Routing Protocol is assigned to all the routers.
Here <a href="https://en.wikipedia.org/wiki/Open_Shortest_Path_First">OSPF</a> protocol has been used.

 
Summary
-------

The desired network- namely, the College Campus network, has been built using a Simulator. 
The given IP pool has been used judiciously. The aim of minimal wastage of IP address has been achieved. 
The scope of expansion of the network with the same IP pool has also been kept into account. This has been achieved by Subnetting.
Proper configurations of Routers and Switches have been done, providing them with necessary network IP address and protocols wherever required.
The VLAN technology has been used for the City-A division.
IP addressing of the end devices has been fulfilled by the use of DHCP.
A DHCP/DNS server has been created at the City-A ECE department network.