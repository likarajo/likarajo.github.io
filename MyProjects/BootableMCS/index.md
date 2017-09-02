Bootable Microcontroller System Board
-------------------------------------

Contents
---------------------
   
 * Paper Title
 * Abstract
 * Design
 * Advantages

Paper Title:
------------

Design and Development of a Bootable Microcontroller System Board


Abstract:
---------

The single board microcontroller avoids the inconvenience of loading the program into 8051 chip using separate loader and then again removing it and placing it in appropriate circuit. 
The board will “boot up” to a user-friendly menu-driven monitor program. The menu gets displayed on the Computer HyperTerminal and gives options for downloading, uploading and running the program. 
This allows user to download programs from the PC directly to the Random-Access Memory of the microcontroller and run them, which is much faster and easier than reprogramming the microcontroller Read Only Memory separately. 
Being very easy to use, together with the 8051-family assembler, it provides a very low cost 8051 development system. 

Design:
-------

* Nonvolatile EPROM IC27C256
* Volatile RAM - IC62256
* Latch - IC74LS373
* I/O Ports - IC8255
* Serial Communication - ICMAX232
* Inverter - IC74LS04
* NAND - IC74LS00 
* AND - IC74LS08

This board is designed around the ATMEL AT89S532 chip. The AT89S52 is an 8052 processor with the on-board flash ROM preprogramed with a monitor utility program. 
The AT89S52 provides the following standard features: 8K bytes of downloadable flash, 2K bytes of EPROM, 256 bytes of RAM, 32 I/O lines, programmable watchdog timer, two data pointers, three 16-bit timer/counters, a full duplex serial port, on-chip oscillator, and a clock circuitry. 
Other devices on this board includes 62256(32kB external RAM) 27c256 (32kB external TROM), MAX232 and DB-9 connector (RS232 section), 825CC (external 4 port expansion chip). 
The two 8052 internal serials are designed and configured as RS232 serial communications ports that provide connections to the PC using a terminal such as Window's HyperTerminal. 
In this way, the programs are written to the text editor, then assembled, and downloaded into RAM or flash ROM using the MONITOR utility.
 

Advantages:
-----------------------

The single board microcomputer does not require a separate burner or programmer to burn the program code into the microcontroller. 
This is its advantage over other ordinary microcomputers. The subroutines used in its monitor program can be also be stored in the code library within the memory. 
These can therefore, be used by the user in their own programs.
