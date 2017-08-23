16-bit RISC Processor based on Harvard Architecture, implemented on FPGA kit

Design and Implementation of 16 bit RISC Processor using Harvard Architecture utilizing minimum area on FPGA.

ABSTRACT

FPGA devices now look like system-on-chips (SoC) with embedded processors, signal processing block, embedded memory interface controller, multi-gigabit transceivers, improved performance and a broad choice of IPs available from FPGA vendors and/or third parties. 
With this advantage, short design cycle and reconfigurable options, FPGAs are pushing ASICs out of the market. 
With the increasing popularity of FPGA, optimized architecture design for FPGAs are also coming as a challenge to the system designer. Currently, very few Processor IP cores are available for designing a big system on-a-chip. 

In this project, we have implemented and tested a RISC (Reduced Instruction Set Computing) processor core using FPGA. 
The CPU is based on Harvard Architecture that consist 2 KB code memory (ROM) and 2 KB data memory (RAM) for program code storage and temporary data storage respectively. 
It is characterized by 16 bit data bus and 12 bit address bus containing Registers, ALU, and Control. 
The processor uses in total 14 different instructions including instructions for logical and arithmetical operations. 
The processor is tested by inserting a program code in code memory. Different test programs have been used to test the working of the processor and corresponding results have been obtained. 
Both functional and timing simulation fund perfect to justify the working of the processor. 
This processor utilized only 10K gates in FPGA which is found minimum compared to other processor architecture available in market.
