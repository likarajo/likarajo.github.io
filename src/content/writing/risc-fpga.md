---
title: "A 16-bit RISC processor on an FPGA"
year: "2014"
order: 1
summary: "A 16-bit RISC design on an FPGA, first runner-up in the IETE Technical Paper Contest."
---

*Undergraduate research project, 2014. Written up on my blog on June 8, 2018.*

## Abstract

FPGA devices now look like system-on-chips (SoC) with embedded processors, signal processing blocks, embedded memory interface controllers, multi-gigabit transceivers, improved performance and a broad choice of IPs available from FPGA vendors and third parties.

With this advantage, a short design cycle and reconfigurable options, FPGAs are pushing ASICs out of the market. With the increasing popularity of FPGAs, optimized architecture design for FPGAs is also becoming a challenge for the system designer. Currently, very few processor IP cores are available for designing a big system-on-a-chip.

In this project, we implemented and tested a RISC (Reduced Instruction Set Computing) processor core on an FPGA.

## Design

The CPU is based on the Harvard architecture, with 2 KB of code memory (ROM) and 2 KB of data memory (RAM) for program code storage and temporary data storage respectively.

It has a 16-bit data bus and a 12-bit address bus, with registers, an ALU, and control logic.

The processor uses 14 different instructions in total, including logical and arithmetic operations.

## Programming and Testing

The processor is tested by loading a program into code memory. Different test programs were used to test the processor, and the corresponding results were obtained.

Both functional and timing simulations confirmed that the processor works correctly.

The processor uses only about 10K gates on the FPGA, which is minimal compared to other processor architectures available on the market.

## Slides

[Download the overview slides (PDF)](/files/risc-using-harvard.pdf)
