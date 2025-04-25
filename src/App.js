import React, { useState } from 'react';
import './App.css';

const questions = [
  
  
    {
      "questionText": "Which of the following is not true according to the Dennard Scaling?",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Voltage is proportional to the dimension of a transistor", "isCorrect": false },
        { "answerText": "Current is inversely proportional to the dimension of a transistor", "isCorrect": true },
        { "answerText": "Power of a transistor is proportional to its area", "isCorrect": false },
        { "answerText": "Current is proportional to the dimension of a transistor", "isCorrect": false }
      ]
    },
    {
      "questionText": "According to the reinterpreted Moore's law, number of cores per chip will double every two years along with clock speed",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is/are true for Intel core i7 CMP?",
      "week": "Week 1",
      "multiple": true,
      "answerOptions": [
        { "answerText": "L3 is the last level cache", "isCorrect": true },
        { "answerText": "L2 is the last level cache", "isCorrect": false },
        { "answerText": "8 cores", "isCorrect": false },
        { "answerText": "4 cores", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is/are not true for PCI?",
      "week": "Week 1",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Stands for Peripheral Component Interconnect", "isCorrect": false },
        { "answerText": "Connects multiprocessor, main memory and I/O devices", "isCorrect": true },
        { "answerText": "I/O bus connecting high speed I/O interfaces to disk, network and slow devices", "isCorrect": false },
        { "answerText": "Act as interconnect for low bandwidth devices", "isCorrect": true }
      ]
    },
    {
      "questionText": "Instruction Level Parallelism can be applied on the instructions having dependency on each other",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which ONE of the following options is true for GPU?\n\nS1: High bandwidth needed.\n\nS2: ALU not needed.\n\nS3: Designed for highly parallel applications.",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Only S1", "isCorrect": false },
        { "answerText": "Only S3", "isCorrect": false },
        { "answerText": "S1 and S3", "isCorrect": true },
        { "answerText": "S1, S2 and S3", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following comes under Flynn's Taxonomy?",
      "week": "Week 1",
      "multiple": true,
      "answerOptions": [
        { "answerText": "MIMD", "isCorrect": true },
        { "answerText": "MISD", "isCorrect": true },
        { "answerText": "SIMD", "isCorrect": true },
        { "answerText": "SISD", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is/are true according to the Amdahl's law?",
      "week": "Week 1",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Maximum possible speedup is limited by the fraction of the code that cannot be speeded up", "isCorrect": true },
        { "answerText": "Adding more cores can solve the problem of speeding up permanently", "isCorrect": false },
        { "answerText": "A program can be divided into fractions that can be parallelized and the remaining as sequential", "isCorrect": true },
        { "answerText": "If the program has more sequential portions, it will benefit from Amdahl's law", "isCorrect": false }
      ]
    },
    {
      "questionText": "Gustafson's law gives benefit when the fraction of the program that can be parallelized (F_par) reaches beyond 90%.",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "Smaller transistors consume less power due to",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Increased capacitance", "isCorrect": false },
        { "answerText": "Reduced voltage", "isCorrect": true },
        { "answerText": "Higher frequency", "isCorrect": false },
        { "answerText": "Moore's law", "isCorrect": false },
        { "answerText": "Increased current", "isCorrect": false }
      ]
    },
    {
      "questionText": "GPU come under the category of",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Data parallel", "isCorrect": true },
        { "answerText": "TLP", "isCorrect": false },
        { "answerText": "ILP", "isCorrect": false },
        { "answerText": "Dataflow", "isCorrect": false }
      ]
    },
    {
      "questionText": "Table indicates the speed-up achieved by each program on the respective machines over the reference machine ref_1 and ref_2... Using geometric mean, identify which of the following statements is correct?\n\nS1: Machine-2 better than Machine 1 with respect to ref_1 \n\nS2: Machine-1 better than Machine-2 with respect to ref_1 \n\nS3: Machine-2 better than Machine-1 with respect to ref_2 \n\nS4: Machine-1 better than Machine-2 with respect to ref_2",
      "week": "Week 1",
      "img":"/week1.png",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1 and S2 are true", "isCorrect": false },
        { "answerText": "S2 and S3 are true", "isCorrect": true },
        { "answerText": "S1 and S3 are false", "isCorrect": false },
        { "answerText": "S2 and S4 are false", "isCorrect": false }
      ]
    },
    {
      "questionText": "Does Instruction Level Parallelism (ILP) exist in the following code?\n\nY1 = X1 + 100;\n\nY2 = Y1 + 200;\n\nY3 = Y2 + 300;\n\nY4 = Y2 + 100;",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "For which of the following 'means', does the 'overall mean' remain unstable across different reference machines?",
      "week": "Week 1",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Harmonic mean", "isCorrect": true },
        { "answerText": "Geometric mean", "isCorrect": false },
        { "answerText": "Arithmetic mean", "isCorrect": true }
      ]
    },
    {
      "questionText": "Increase in clock speed increases heat consumption",
      "week": "Week 1",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": true },
        { "answerText": "False", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following options is correct?\n\nI Join at network - 1 Program with SIMD\nII Join at memory - 2 Program with message Passing model\nIII Join at processor - 3 Program with shared memory model",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-1, II-3, III-2", "isCorrect": false },
        { "answerText": "I-2, II-1, III-3", "isCorrect": false },
        { "answerText": "I-2, II-3, III-1", "isCorrect": true }
      ]
    },
    {
      "questionText": "Programming Model = Programming Language",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "TRUE", "isCorrect": false },
        { "answerText": "FALSE", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following programming model requires no communication or synchronization at the program level?",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Shared Address Space", "isCorrect": false },
        { "answerText": "Message Passing", "isCorrect": false },
        { "answerText": "Multiprogramming", "isCorrect": true }
      ]
    },
    {
      "questionText": "Memory capacity can be increased by adding more additional I/O controllers",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "TRUE", "isCorrect": false },
        { "answerText": "FALSE", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is/are not true for the communication of programming models?",
      "week": "Week 2",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Top layer is the Hardware/Software boundary", "isCorrect": true },
        { "answerText": "Message Passing can directly use load/store", "isCorrect": true },
        { "answerText": "User/system boundary is realized by the compiler/library support", "isCorrect": false },
        { "answerText": "Shared Memory requires library or system call to write the messages to a buffer", "isCorrect": true },
        { "answerText": "Communication hardware is organized to provide these operations directly using physical wires that connect the machines together", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following interconnect is less scalable?",
      "week": "Week 2",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Multi-Stage Network", "isCorrect": false },
        { "answerText": "CrossBar", "isCorrect": true },
        { "answerText": "Star Network", "isCorrect": false },
        { "answerText": "Bus", "isCorrect": true }
      ]
    },
    {
      "questionText": "Coordination among the cores needs",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Synchronization", "isCorrect": false },
        { "answerText": "Communication", "isCorrect": false },
        { "answerText": "Load Balancing", "isCorrect": false },
        { "answerText": "All of the Above", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following statements is/are true for Message Passing Architecture?\n\nS1: Does not have tight integration.\nS2: Processor-to-processor communication.\nS3: Takes help from OS and library calls for actual implementation.",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1 and S2", "isCorrect": false },
        { "answerText": "S1 and S3", "isCorrect": false },
        { "answerText": "S2 and S3", "isCorrect": true },
        { "answerText": "S1, S2 and S3", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are correct for the network interface in message passing architectures?\n\nS1: The network interface is the I/O device.\nS2: The network interface is tightly coupled with the cache controller or local memory controller.",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Only S1 is true", "isCorrect": false },
        { "answerText": "Only S2 is true", "isCorrect": false },
        { "answerText": "Both S1 and S2 are true", "isCorrect": true },
        { "answerText": "Both S1 and S2 are false", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following programming model requires SEND and RECEIVE system calls for communication?",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Message passing", "isCorrect": true },
        { "answerText": "Shared memory", "isCorrect": false },
        { "answerText": "Multiprogramming", "isCorrect": false },
        { "answerText": "MISD Design", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following match is correct?\n\nI Cache - 1 Same item may be needed again\nII Temporal Locality - 2 Nearby items may be needed in near future\nIII Spatial Locality - 3 Highest or first level of the memory hierarchy",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-2, II-1, III-3", "isCorrect": false },
        { "answerText": "I-3, II-2, III-1", "isCorrect": true },
        { "answerText": "I-3, II-1, III-2", "isCorrect": false }
      ]
    },
    {
      "questionText": "Coordination involves which of the following?",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Communication among different processes", "isCorrect": true },
        { "answerText": "Writing data in the shared location without consulting other threads", "isCorrect": false },
        { "answerText": "Making sure that each processor gets similar amount of workload", "isCorrect": false },
        { "answerText": "Cores can compute on the data on their own without taking instructions from any controller", "isCorrect": false }
      ]
    },
    {
      "questionText": "Tag bits are used in cache hierarchy to identify ......",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Garbage values", "isCorrect": false },
        { "answerText": "Presence of word in the block", "isCorrect": true },
        { "answerText": "The set of the cache block", "isCorrect": false },
        { "answerText": "To identify the block content", "isCorrect": false }
      ]
    },
    {
      "questionText": "In a crossbar, there is a multi-level connection",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "Uniform Memory Access is also known as ___",
      "week": "Week 2",
      "multiple": false,
      "answerOptions": [
        { "answerText": "symmetric Multiprocessing", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following match is correct?\n\nI Direct Map - 1 Block can be placed at one place.\nII Fully Associative - 2 Block placement is restricted to some number of locations.\nIII Set Associative - 3 Block can be placed anywhere.",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-1, II-3, III-2", "isCorrect": true },
        { "answerText": "I-2, II-1, III-3", "isCorrect": false },
        { "answerText": "I-2, II-3, III-1", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following holds true as associativity increases?",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Blocks per set decreases, index size decreases, tag size increases", "isCorrect": false },
        { "answerText": "Blocks per set increases, index size decreases, tag size increases", "isCorrect": true },
        { "answerText": "Blocks per set increases, index size increases, tag size increases", "isCorrect": false },
        { "answerText": "Blocks per set decreases, index size decreases, tag size increases", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which type of cache has no index field?",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Direct Map", "isCorrect": false },
        { "answerText": "4-way Set Associative", "isCorrect": false },
        { "answerText": "Fully Associative", "isCorrect": true },
        { "answerText": "2-way Set Associative", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are true?\n\nS1: Write back caches use write allocate policy\nS2: Write back caches use write no allocate policy\nS3: Write through caches use write allocate policy\nS4: Write through caches use write no allocate policy",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1 and S3 are true", "isCorrect": false },
        { "answerText": "S2 and S4 are true", "isCorrect": false },
        { "answerText": "S1 and S4 are true", "isCorrect": true },
        { "answerText": "S2 and S3 are true", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider a memory system with a L1 Cache Hit Time of 2 cycles where 6% of accesses result in a miss, miss penalty for accessing main memory is 50 cycles. The system uses a two-level cache architecture, where on a miss on L1 cache, the data is first checked in the L2 Cache. L2 Cache Hit Time is 8 cycles where 10% of accesses result in a miss. Calculate the Average Memory Access Time (AMAT) for this system.",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "2.74 cycles", "isCorrect": false },
        { "answerText": "2.76 cycles", "isCorrect": false },
        { "answerText": "2.78 cycles", "isCorrect": true },
        { "answerText": "2.8 cycles", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following is/are not a classification of misses?",
      "week": "Week 3",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Capacity", "isCorrect": false },
        { "answerText": "Compulsory", "isCorrect": false },
        { "answerText": "Characteristic", "isCorrect": true },
        { "answerText": "Coherence", "isCorrect": false },
        { "answerText": "Conflict", "isCorrect": false }
      ]
    },
    {
      "questionText": "VIPT cache uses part of the address common between virtual and physical address for indexing",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": true },
        { "answerText": "False", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following is/are true for the Translation Lookaside Buffer (TLB)?",
      "week": "Week 3",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Has valid, dirty and reference bits", "isCorrect": true },
        { "answerText": "Misses in TLB are always equal to number of page faults", "isCorrect": false },
        { "answerText": "TLB is a special address translation cache to keep track of the recently used translations", "isCorrect": true },
        { "answerText": "Does not have tag and data", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider a direct mapped cache with 8 cache blocks (0-7). If the memory block requests are in the order- 11,0,7,32,21,17,69,7,13,4,9,23,20,0,54,29,37,2,2,32. Which of the following memory blocks will not be in the cache at the end of the sequence?",
      "week": "Week 3",
      "multiple": true,
      "answerOptions": [
        { "answerText": "0", "isCorrect": true },
        { "answerText": "2", "isCorrect": false },
        { "answerText": "11", "isCorrect": false },
        { "answerText": "29", "isCorrect": true },
        { "answerText": "23", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider a 2-way set associative cache having 256 lines and block size of 32 bytes. The memory address size is 32 bits. Find the number of bits in tag, index and block offset",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "20,5,7", "isCorrect": false },
        { "answerText": "32,5,7", "isCorrect": false },
        { "answerText": "20,7,5", "isCorrect": true },
        { "answerText": "32,7,5", "isCorrect": false },
        { "answerText": "20,8,5", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are false?",
      "week": "Week 3",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Larger block size reduces miss rate", "isCorrect": false },
        { "answerText": "Multilevel caches increase miss penalty", "isCorrect": true },
        { "answerText": "Avoiding address translation reduces hit time", "isCorrect": false },
        { "answerText": "Larger cache size reduces miss rate", "isCorrect": false },
        { "answerText": "Lower associativity reduces miss rate", "isCorrect": true }
      ]
    },
    {
      "questionText": "Compulsory misses will happen even in infinite size cache",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": true },
        { "answerText": "False", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following is/are true for a page fault?",
      "week": "Week 3",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Virtual address tells the location of page in the disk", "isCorrect": false },
        { "answerText": "OS handles it", "isCorrect": true },
        { "answerText": "If the valid bit is on then the page is not in memory leading to page fault", "isCorrect": false },
        { "answerText": "During page replacement, the OS uses LRU policy to choose a victim page", "isCorrect": true }
      ]
    },
    {
      "questionText": "Consider a system with a Page of size 8 KB, a 32-bit Virtual Address Space and a 24-bit Physical Address Space. Find the number of pages in the virtual address space, frames in the physical memory and the number of bits needed for the page offset?",
      "week": "Week 3",
      "multiple": false,
      "answerOptions": [
        { "answerText": "2^19, 2^10, 12", "isCorrect": false },
        { "answerText": "2^19, 2^11, 13", "isCorrect": true },
        { "answerText": "2^18, 2^11, 13", "isCorrect": false },
        { "answerText": "2^18, 2^10, 12", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are true to address cache coherence problem as a basic hardware issue?\n\nS1: Eliminate other copies of the data when one copy is getting modified.\nS2: Update the other copies with new value.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Only S1", "isCorrect": false },
        { "answerText": "Only S2", "isCorrect": false },
        { "answerText": "Both S1 and S2", "isCorrect": true },
        { "answerText": "Not S1 not S2", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are true for a coherent multiprocessor system?\n\nS1: Operation issued by a process occur in its program order.\nS2: Value returned by read operation is the value written by the previous write to that location in the serial order.\nS3: The results of any execution of a program are such that, for each location, it is possible to construct a hypothetical serial order of all operations to that location, that is consistent with the results of execution.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Only S1", "isCorrect": false },
        { "answerText": "Only S3", "isCorrect": false },
        { "answerText": "S1 and S2", "isCorrect": false },
        { "answerText": "S1 and S3", "isCorrect": false },
        { "answerText": "S1, S2 and S3", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following conditions define coherent memory system?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Read Serialization", "isCorrect": false },
        { "answerText": "Write Serialization", "isCorrect": true },
        { "answerText": "Coherent view of memory", "isCorrect": true },
        { "answerText": "Preserve Program Order", "isCorrect": true }
      ]
    },
    {
      "questionText": "Writes to the same location are ____ if two writes to the same location by any two processors are seen in the same order by all the processors.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Write serialization", "isCorrect": true }
      ]
    },
    {
      "questionText": "For the following statements choose the option that is a valid assumption made before consistency.\n\nS1: The processor can change the order of any write with respect to another memory access.\nS2: A write does not complete, and allow the next write to occur, until all processors have seen the effect of that write.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1", "isCorrect": false },
        { "answerText": "S2", "isCorrect": true },
        { "answerText": "S1 and S2", "isCorrect": false },
        { "answerText": "Not S1 not S2", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following statements is/are not true for Bus snooping?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "All devices can see the bus", "isCorrect": false },
        { "answerText": "All transactions that appear on the bus are visible to only some specific cache controllers", "isCorrect": true },
        { "answerText": "Transactions are not visible in the same order to all the controllers", "isCorrect": true },
        { "answerText": "Controllers take appropriate actions when they see a relevant transaction", "isCorrect": false }
      ]
    },
    {
      "questionText": "Directory-based coherence protocol keeps sharing states in every cached copy of the data and not at a centralized place.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "TRUE", "isCorrect": false },
        { "answerText": "FALSE", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following are the components specifying the snooping protocol?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "State transition diagram", "isCorrect": true },
        { "answerText": "Set of states", "isCorrect": true },
        { "answerText": "Cache Controller", "isCorrect": false },
        { "answerText": "The actions associated with each state transition", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is/are true for write-invalidate protocol?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "It broadcasts the write to all", "isCorrect": false },
        { "answerText": "Readers will incur a miss", "isCorrect": true },
        { "answerText": "Multiple useless updates", "isCorrect": false },
        { "answerText": "Clear out copies that will never be used again", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following match is correct in the context of MSI protocol?\n\nI Owner - 1 Gives permission to the processor to modify without informing others.\nII Exclusivity - 2 A processor modifying a block\nIII Shared - 3 Multiple caches share the block.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-1, II-3, III-2", "isCorrect": false },
        { "answerText": "I-2, II-1, III-3", "isCorrect": true },
        { "answerText": "I-3, II-1, III-2", "isCorrect": false }
      ]
    },
    {
      "questionText": "What are the properties implicit in the definition of coherence?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Write propagation", "isCorrect": true },
        { "answerText": "Consistency", "isCorrect": false },
        { "answerText": "Write serialization", "isCorrect": true },
        { "answerText": "Read serialization", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following is/are true for VI protocol?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Write-back caches", "isCorrect": false },
        { "answerText": "Write no-allocate caches", "isCorrect": true },
        { "answerText": "2 states", "isCorrect": true },
        { "answerText": "Invalidation based protocol", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following match is correct for the states in MSI protocol?\n\nI Invalid - 1 Dirty block.\nII Shared - 2 Block is present in unmodified state in this cache.\nIII Modified - 3 Block is not in this cache.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-1, II-3, III-2", "isCorrect": false },
        { "answerText": "I-2, II-1, III-3", "isCorrect": false },
        { "answerText": "I-3, II-2, III-1", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following match is correct for MSI transactions?\n\nI Bus Read (BusRd) - 1 Generated by cache controller on a write-back.\nII Bus Read Exclusive (BusRdX) - 2 Generated by Processor Write (PrWr) for block not present or valid but read-only.\nIII Bus Write Back (BusWB) - 3 Generated if Processor read (PrRd) misses in the cache.",
      "week": "Week 4",
      "multiple": false,
      "answerOptions": [
        { "answerText": "I-1, II-2, III-3", "isCorrect": false },
        { "answerText": "I-1, II-3, III-2", "isCorrect": false },
        { "answerText": "I-2, II-3, III-1", "isCorrect": false },
        { "answerText": "I-3, II-2, III-1", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is true for shared memory?",
      "week": "Week 4",
      "multiple": true,
      "answerOptions": [
        { "answerText": "Realized as LOAD/STORE on shared physical address", "isCorrect": true },
        { "answerText": "Message passing buffers treated as shared memory", "isCorrect": true },
        { "answerText": "User Processes read/write shared virtual address", "isCorrect": true },
        { "answerText": "Useful for OS", "isCorrect": true }
      ]
    },
    {
      "questionText": "The advantage of MESI protocol against MSI protocol is:",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "More number of cache states", "isCorrect": false },
        { "answerText": "No shared state", "isCorrect": false },
        { "answerText": "Less number of Bus Transactions", "isCorrect": true },
        { "answerText": "Faster Bus data transfer", "isCorrect": false }
      ]
    },
    {
      "questionText": "In MESI protocol, when a processor writes to a block which was in state 'E', which of the following is true?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Changes from state 'E' to 'I'", "isCorrect": false },
        { "answerText": "Changes from state 'E' to 'S'", "isCorrect": false },
        { "answerText": "Generates bus transaction to upgrade", "isCorrect": false },
        { "answerText": "Changes from state 'E' to 'M'", "isCorrect": true }
      ]
    },
    {
      "questionText": "From the following statements, select the option which is correct:\n\nS1: Dragon protocol is a write-through protocol\nS2: MESI protocol is a write-back protocol\nS3: Dragon protocol is a write-back protocol\nS4: MSI is an update-based protocol",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1 and S2 are True", "isCorrect": false },
        { "answerText": "S2 and S3 are True", "isCorrect": true },
        { "answerText": "S3 and S4 are True", "isCorrect": false },
        { "answerText": "S4 and S1 are True", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which of the following are valid instances of the cache states of three processors in Dragon protocol sharing the same cache block?\n\n(i)  P1- Sm, P2- Sc, P3- Sc\n(ii) P1- Sc, P2- Sm, P3- Sm\n(iii) P1- Sm, P2- Sm, P3- Sm\n(iv) P1- Sc, P2- Sc, P3- Sc",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "(i) and (ii) are True", "isCorrect": false },
        { "answerText": "(ii) and (iii) are True", "isCorrect": false },
        { "answerText": "(iii) and (iv) are True", "isCorrect": false },
        { "answerText": "(iv) and (i) are True", "isCorrect": true }
      ]
    },
    {
      "questionText": "In Dragon protocol, if all the shared cache blocks are in Sc state, then who provides the data?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "The last processor that was in Sc state", "isCorrect": false },
        { "answerText": "The memory", "isCorrect": true },
        { "answerText": "The first processor", "isCorrect": false },
        { "answerText": "Any cache that has the block in Sc state", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider the following sequence\n\n There are two processors, P1 and P2 \n\nEach cache block has four words each Block B0 = W0, W1, W2, W3  \n\nBlock B1 = W4, W5, W6, W7  \n\nBlock B2 = W8, W9, W10, W11  \n\nBlock B3 = W12, W13, W14, W15  \n\nEach cache capacity is one block size. What type of miss is incurred by Processor P1 at time T3?",
      "week": "Week 5",
      "img":"/week5.png",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Pure false sharing", "isCorrect": false },
        { "answerText": "Pure true sharing", "isCorrect": false },
        { "answerText": "True sharing capacity miss", "isCorrect": true },
        { "answerText": "False sharing cap-inval miss", "isCorrect": false },
        { "answerText": "True sharing cap-inval miss", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which miss is also known as compulsory miss?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Coherence miss", "isCorrect": false },
        { "answerText": "Capacity miss", "isCorrect": false },
        { "answerText": "Conflict miss", "isCorrect": false },
        { "answerText": "Cold miss", "isCorrect": true }
      ]
    },
    {
      "questionText": "The two conditions required to ensure sequential consistency in a system are:",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Write atomicity and completion of a write", "isCorrect": true },
        { "answerText": "Write serialization and cache invalidation", "isCorrect": false },
        { "answerText": "Write propagation and cache invalidation", "isCorrect": false }
      ]
    },
    {
      "questionText": "What is the difference between livelock and deadlock in a system?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Deadlock occurs due to shared processor, while livelock occurs due to cyclic dependency on data", "isCorrect": false },
        { "answerText": "Livelock happens in hardware systems, while deadlock occurs in software", "isCorrect": false },
        { "answerText": "In livelock, system activity is present without forward progress, whereas in deadlock there is no system activity", "isCorrect": true }
      ]
    },
    {
      "questionText": "What can prevent starvation?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Assigning priority to only certain processors", "isCorrect": false },
        { "answerText": "Using a FIFO queue to manage access to the bus", "isCorrect": true },
        { "answerText": "Increasing the memory size", "isCorrect": false },
        { "answerText": "Processor can send the request again and again", "isCorrect": false }
      ]
    },
    {
      "questionText": "What is the purpose of ensuring write serialization in a cache-coherent system?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Allows multiple processors to write to the same cache block atomically", "isCorrect": false },
        { "answerText": "Ensures that all processors see writes in the same order", "isCorrect": true },
        { "answerText": "Minimize the number of writes to memory", "isCorrect": false },
        { "answerText": "Improves the write latency", "isCorrect": false }
      ]
    },
    {
      "questionText": "What differentiates true sharing miss from false sharing misses?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Whether the block size used in the cache is same", "isCorrect": false },
        { "answerText": "Whether the modified data is not accessed by another processor", "isCorrect": false },
        { "answerText": "Whether the modified data is accessed by another processor", "isCorrect": true },
        { "answerText": "Whether the miss occurs during the first access", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which approach can reduce false sharing misses?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Using larger cache blocks", "isCorrect": false },
        { "answerText": "Using smaller cache blocks", "isCorrect": true },
        { "answerText": "Increasing the number of processors", "isCorrect": false },
        { "answerText": "Increasing number of cache levels", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider processor P1 and P2 in MESI protocol with repeating invalidation sequence. What situation is this?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Only P1 is in starvation state", "isCorrect": false },
        { "answerText": "Only P2 is in starvation state", "isCorrect": false },
        { "answerText": "P1 and P2 are in a livelock state", "isCorrect": true },
        { "answerText": "P1 and P2 are in a deadlock state", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which is true for cache misses?",
      "week": "Week 5",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Conflict miss occurs frequently in direct mapped cache", "isCorrect": true },
        { "answerText": "Conflict miss is more in fully associative cache", "isCorrect": false },
        { "answerText": "Coherence miss cannot occur in multi processors", "isCorrect": false },
        { "answerText": "Coherence miss occurs frequently in single processor", "isCorrect": false }
      ]
    },
    {
      "questionText": "The role of the write-back buffer in a snoop-based multiprocessor system is",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Store the data before forwarding to the requesting cache", "isCorrect": false },
        { "answerText": "To maintain pending write-back blocks that will be sent to memory", "isCorrect": true },
        { "answerText": "Store written data to other caches", "isCorrect": false },
        { "answerText": "To ensure the atomicity of cache reads", "isCorrect": false }
      ]
    },
    {
      "questionText": "Why are multi-level caches used in modern processors?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "To increase memory capacity", "isCorrect": false },
        { "answerText": "To reduce memory latency", "isCorrect": true },
        { "answerText": "To reduce snooping time", "isCorrect": false },
        { "answerText": "To improve write-backs to memory", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider the following statements and select the correct option:\n\nS1: During a write-back operation, the processor arbitrates for both address and data bus.\nS2: Bus upgrade transactions involve both a request and a response phase.",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "S1 is True and S2 is False", "isCorrect": true },
        { "answerText": "S2 is True and S1 is False", "isCorrect": false },
        { "answerText": "S1 and S2 are both true", "isCorrect": false },
        { "answerText": "S1 and S2 are both false", "isCorrect": false }
      ]
    },
    {
      "questionText": "What is the role of bus arbitration on the address bus in the request phase of a split transaction bus?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Facilitating data transfer", "isCorrect": false },
        { "answerText": "Contending to send data", "isCorrect": false },
        { "answerText": "Address decoding", "isCorrect": false },
        { "answerText": "Contending for permission to use the bus", "isCorrect": true }
      ]
    },
    {
      "questionText": "The Sun Enterprise uses which cache protocol?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "MSI", "isCorrect": false },
        { "answerText": "MESI", "isCorrect": false },
        { "answerText": "MOESI", "isCorrect": true },
        { "answerText": "Dragon", "isCorrect": false }
      ]
    },
    {
      "questionText": "During block replacement of a dirty block, the following transaction occurs:",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Brings new block + write-back the new block", "isCorrect": false },
        { "answerText": "Brings old block + write-back the new block", "isCorrect": false },
        { "answerText": "Brings new block + write-back the old block", "isCorrect": true },
        { "answerText": "Brings old block + write-back the old block", "isCorrect": false }
      ]
    },
    {
      "questionText": "The request-response protocol can cause protocol-level request-deadlock:",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "Which of the following is true?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Livelock can be addressed by implementing more buffers", "isCorrect": false },
        { "answerText": "Deadlock can be addressed by adopting FIFO service queues", "isCorrect": false },
        { "answerText": "Starvation can be addressed by using FIFO service queues", "isCorrect": true }
      ]
    },
    {
      "questionText": "In a multilevel cache, which of the following holds for inclusion?",
      "week": "Week 6",
      "multiple": true,
      "answerOptions": [
        { "answerText": "L1 cache is a subset of memory", "isCorrect": true },
        { "answerText": "L1 cache is a subset of L2 cache", "isCorrect": true },
        { "answerText": "L2 cache is a subset of memory", "isCorrect": true },
        { "answerText": "L2 cache is a subset of L1 cache", "isCorrect": false },
        { "answerText": "L2 cache is a superset of memory", "isCorrect": false }
      ]
    },
    {
      "questionText": "Consider a split transaction bus, if the tag bus is x-bit, then the number of outstanding requests is 2^x-1",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "During Data Request, why do we use tag-bits and not the address for matching response?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "To allow parallel use of address bus", "isCorrect": true },
        { "answerText": "To reduce tag comparison time", "isCorrect": false },
        { "answerText": "To send snoop results", "isCorrect": false }
      ]
    },
    {
      "questionText": "The flow control in the SGI Challenge Processor is managed using negative acknowledgement in split transaction bus",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": true },
        { "answerText": "False", "isCorrect": false }
      ]
    },
    {
      "questionText": "In a multilevel cache, what action must be taken when L2 evicts a block to maintain the inclusion property?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "L1 duplicates the block and updates its copy", "isCorrect": false },
        { "answerText": "The block is flushed only from the L2 cache", "isCorrect": false },
        { "answerText": "L1 is notified to evict the same block", "isCorrect": true },
        { "answerText": "L2 broadcasts a BusRdX to all caches", "isCorrect": false }
      ]
    },
    {
      "questionText": "Which one of the following is not a benefit of Inclusion property in a multi-level cache design (L1 and L2)?",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Reduces the required size of L1 cache", "isCorrect": false },
        { "answerText": "It helps eliminate the need of a bus snooper at L1", "isCorrect": false },
        { "answerText": "It ensures data coherence between L1 and L2", "isCorrect": false },
        { "answerText": "When processor writes to L1, L1 performs the operation without consulting L2", "isCorrect": true }
      ]
    },
    {
      "questionText": "The decode cycle is extended until all processors complete their snooping result",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "True", "isCorrect": false },
        { "answerText": "False", "isCorrect": true }
      ]
    },
    {
      "questionText": "We can avoid deadlock by:",
      "week": "Week 6",
      "multiple": false,
      "answerOptions": [
        { "answerText": "Service other request while waiting to be serviced", "isCorrect": true },
        { "answerText": "Service other request only after our request is serviced", "isCorrect": false },
        { "answerText": "Service request only from nearby processors", "isCorrect": false },
        { "answerText": "Not service request until all our request are serviced", "isCorrect": false }
      ]
    },
    
      {
        "questionText": "What does the term \"fetch deadlock\" refer to?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "When the processor cannot process a request due to insufficient cache", "isCorrect": false },
          { "answerText": "When a cache is waiting for its request to be serviced but also needs to service incoming requests", "isCorrect": true },
          { "answerText": "When the memory sends NACK for a cache request", "isCorrect": false },
          { "answerText": "When the buffers for both L1 and L2 cache are empty", "isCorrect": false }
        ]
      },
      {
        "questionText": "Fetch deadlock can be avoided by buffering incoming requests while waiting for outgoing requests to be serviced",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "True", "isCorrect": true },
          { "answerText": "False", "isCorrect": false }
        ]
      },
      {
        "questionText": "What is the primary purpose of the request table in a split transaction bus?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "To store completed requests", "isCorrect": false },
          { "answerText": "To manage and track outstanding requests", "isCorrect": true },
          { "answerText": "To improve cache hit rate", "isCorrect": false },
          { "answerText": "To store the response data", "isCorrect": false }
        ]
      },
      {
        "questionText": "What happens if the memory buffer is full in the SGI Challenge implementation?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "The transaction is queued", "isCorrect": false },
          { "answerText": "The memory dynamically allocates additional buffer space", "isCorrect": false },
          { "answerText": "The sender is informed to cancel the request and retry later", "isCorrect": true },
          { "answerText": "The request is added in a FIFO buffer at the memory", "isCorrect": false }
        ]
      },
      {
        "questionText": "In the context of the request table entries, which one of the following options is true for a request and a response in a snooping protocol?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "S1 and S3 are true", "isCorrect": false },
          { "answerText": "S1 and S4 are true", "isCorrect": true },
          { "answerText": "S2 and S3 are true", "isCorrect": false },
          { "answerText": "S2 and S4 are true", "isCorrect": false }
        ]
      },
      {
        "questionText": "Committing write guarantees write completeness in a split transaction bus",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "True", "isCorrect": false },
          { "answerText": "False", "isCorrect": true }
        ]
      },
      {
        "questionText": "What is the role of the FIFO queue in handling in-order responses in a split transaction bus?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "It services requests in response order", "isCorrect": false },
          { "answerText": "It allows for parallel servicing of multiple requests", "isCorrect": false },
          { "answerText": "It ensures requests are serviced in the order they arrive", "isCorrect": true },
          { "answerText": "It ensures that memory sees the request", "isCorrect": false }
        ]
      },
      {
        "questionText": "In directory-based cache coherence, the directory stores:",
        "week": "Week 7",
        "multiple": true,
        "answerOptions": [
          { "answerText": "The time when the block was first loaded by the cache", "isCorrect": false },
          { "answerText": "The priority levels of each processor", "isCorrect": false },
          { "answerText": "The sharing status of cached blocks of each processor", "isCorrect": true },
          { "answerText": "Helps to identify the owner of modified cache block", "isCorrect": true },
          { "answerText": "The time stamp of modification of the cached block", "isCorrect": false }
        ]
      },
      {
        "questionText": "In a directory based protocol, what happens during a read operation when the dirty bit is off?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "Data is fetched from memory and the presence bit is updated", "isCorrect": true },
          { "answerText": "Data is fetched from a sharer cache and dirty bit is updated", "isCorrect": false },
          { "answerText": "Invalidation messages are sent to all sharers", "isCorrect": false },
          { "answerText": "Data is first written back to memory before sharing", "isCorrect": false }
        ]
      },
      {
        "questionText": "What happens when a write request is made, and there are multiple sharers in a directory based protocol?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "The block is written to memory directly", "isCorrect": false },
          { "answerText": "Invalidation requests are sent to all sharers, and their presence bits are cleared", "isCorrect": true },
          { "answerText": "All sharers update their copy of the block and the presence bits", "isCorrect": false },
          { "answerText": "The dirty bit is turned off for all processors", "isCorrect": false }
        ]
      },
      {
        "questionText": "In directory-based systems, how are protocol actions communicated when there are limited number of sharers?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "Implicitly through a shared bus", "isCorrect": false },
          { "answerText": "Through explicit messages on the network", "isCorrect": true },
          { "answerText": "Using only Snooping Protocols", "isCorrect": false },
          { "answerText": "Through broadcast mechanisms", "isCorrect": false }
        ]
      },
      {
        "questionText": "What happens when a processor wants to write to a data block in a directory-based protocol?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "It sends a broadcast message to all nodes", "isCorrect": false },
          { "answerText": "It requests permission from the directory to update the block", "isCorrect": true },
          { "answerText": "It writes directly to the block without any checks", "isCorrect": false },
          { "answerText": "It invalidates all other shared blocks on its own", "isCorrect": false }
        ]
      },
      {
        "questionText": "In what scenario does the owner node become the dirty node?",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "When the data block is modified in any cache other than the owner", "isCorrect": false },
          { "answerText": "When the data block has been modified in the owner cache", "isCorrect": true },
          { "answerText": "When multiple nodes request the same data block", "isCorrect": false },
          { "answerText": "When the data block is modified in the home node", "isCorrect": false }
        ]
      },
      {
        "questionText": "Exclusive Nodes always contain a dirty copy of the data block in a directory based protocol",
        "week": "Week 7",
        "multiple": false,
        "answerOptions": [
          { "answerText": "True", "isCorrect": false },
          { "answerText": "False", "isCorrect": true }
        ]
      },
      
        {
          "questionText": "What is the main limitation of using a full bit vector for keeping sharers data in a system with many nodes?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "Latency overhead.", "isCorrect": false },
            { "answerText": "Processor overhead.", "isCorrect": false },
            { "answerText": "Storage overhead.", "isCorrect": true },
            { "answerText": "Cache is not coherent.", "isCorrect": false }
          ]
        },
        {
          "questionText": "Why is the no-broadcast method unsuitable for data blocks with many readers?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "Storage overhead.", "isCorrect": false },
            { "answerText": "Frequent data invalidation.", "isCorrect": true },
            { "answerText": "Pointer overhead.", "isCorrect": false },
            { "answerText": "Increased Latency.", "isCorrect": false }
          ]
        },
        {
          "questionText": "In strict request-response protocol, the number of transactions on the critical path is:",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "3", "isCorrect": false },
            { "answerText": "4", "isCorrect": true },
            { "answerText": "5", "isCorrect": false },
            { "answerText": "6", "isCorrect": false }
          ]
        },
        {
          "questionText": "What is the formula for the critical path length in strict request-response protocols, where S is number of sharers?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "S + 1", "isCorrect": false },
            { "answerText": "S", "isCorrect": false },
            { "answerText": "2 × S", "isCorrect": false },
            { "answerText": "2 × (S + 1)", "isCorrect": true }
          ]
        },
        {
          "questionText": "In reply forwarding protocol, the home node knows that all sharers of the cache block have invalidated the block by receiving Acknowledgement from:",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "All sharers", "isCorrect": false },
            { "answerText": "Any one sharer", "isCorrect": false },
            { "answerText": "The first sharer", "isCorrect": false },
            { "answerText": "The last sharer", "isCorrect": true }
          ]
        },
        {
          "questionText": "Which of the following is not a requirement for ensuring protocol correctness?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "Coherence", "isCorrect": false },
            { "answerText": "Consistency", "isCorrect": false },
            { "answerText": "High Scalability", "isCorrect": true },
            { "answerText": "Deadlock freedom", "isCorrect": false }
          ]
        },
        {
          "questionText": "What is the primary role of the home node in the buffer-at-home mechanism?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "Serve multiple requests in parallel.", "isCorrect": false },
            { "answerText": "Queues the requests in FIFO.", "isCorrect": true },
            { "answerText": "To distribute requests to other nodes.", "isCorrect": false },
            { "answerText": "To service the nodes with data.", "isCorrect": false }
          ]
        },
        {
          "questionText": "What happens when a dirty node deletes the data block in the forward-to-dirty-node mechanism?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "It buffers all the pending requests.", "isCorrect": false },
            { "answerText": "It forwards the pending requests to the home node.", "isCorrect": false },
            { "answerText": "It retries all the pending requests.", "isCorrect": false },
            { "answerText": "It sends NACKs to the pending requests.", "isCorrect": true }
          ]
        },
        {
          "questionText": "How is serial order determined in the “NACK and Retry” method?",
          "week": "Week 8",
          "multiple": false,
          "answerOptions": [
            { "answerText": "In the order of NACKS.", "isCorrect": false },
            { "answerText": "In the order of retries.", "isCorrect": false },
            { "answerText": "In the order of service by the home node.", "isCorrect": true },
            { "answerText": "In the order of original request sent by the requestor.", "isCorrect": false }
          ]
        },
        
          {
            "questionText": "Which of the following is/are not true for SGI Origin 2000?",
            "week": "Week 9",
            "multiple": true,
            "answerOptions": [
              { "answerText": "Every processing node has two MIPS R1000 processors", "isCorrect": false },
              { "answerText": "4-way set associative cache with 128 byte block", "isCorrect": true },
              { "answerText": "Hub connects processor, local memory and Xbow", "isCorrect": false },
              { "answerText": "Xbow connects two hubs", "isCorrect": true }
            ]
          },
          {
            "questionText": "What is the maximum number of processors that can connect to SGI Origin system?",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "512", "isCorrect": false },
              { "answerText": "1024", "isCorrect": true }
            ]
          },
          {
            "questionText": "In SGI Origin Protocol, consider a read miss request. Given that the directory state is EXCLUSIVE. When the request reaches the directory, the directory does which of the following actions:",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "Directory sends identity of the owner to the requester", "isCorrect": true },
              { "answerText": "Directory NACKs the request", "isCorrect": false },
              { "answerText": "Keep the request in a buffer with the directory", "isCorrect": false },
              { "answerText": "Keep the request in a buffer with the owner", "isCorrect": false }
            ]
          },
          {
            "questionText": "Which of the following statements is/are true for SGI Origin protocol?",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "Only S1 is true", "isCorrect": false },
              { "answerText": "Only S2 is true", "isCorrect": false },
              { "answerText": "S1 and S2 are true", "isCorrect": true },
              { "answerText": "S1 and S2 are false", "isCorrect": false }
            ]
          },
          {
            "questionText": "Which of the following is a valid request type for the given directory state in SGI Origin protocol?",
            "week": "Week 9",
            "multiple": true,
            "answerOptions": [
              { "answerText": "Directory state is “exclusive” and request type is “Upgrade”", "isCorrect": false },
              { "answerText": "Directory state is “exclusive” and request type is “ReadEx”", "isCorrect": true },
              { "answerText": "Directory state is “shared” and request type is “Upgrade”", "isCorrect": true },
              { "answerText": "Directory state is “unowned” and request type is “Upgrade”", "isCorrect": false }
            ]
          },
          {
            "questionText": "A ring can connect maximum ---- quads in a NUMA-Q system",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "8", "isCorrect": true }
            ]
          },
          {
            "questionText": "Which of the following options are TRUE for NUMA-Q system?",
            "week": "Week 9",
            "multiple": true,
            "answerOptions": [
              { "answerText": "Uses strict request-response protocol", "isCorrect": true },
              { "answerText": "OBIC acts as an interface to quad bus", "isCorrect": true },
              { "answerText": "From the quad only RAC is visible to the ring", "isCorrect": true },
              { "answerText": "Store the sharers in doubly linked list", "isCorrect": true }
            ]
          },
          {
            "questionText": "Consider the following diagram for the distributed linked list in a NUMA Q system\n\nIf Mid 2 performs the operation “roll-out” in the NUMA-Q system, then which of the following operations take place?",
            "week": "Week 9",
            "img": "/week9.png",
            "multiple": false,
            "answerOptions": [
              { "answerText": "Head connects to Mid 2", "isCorrect": false },
              { "answerText": "Mid 2 connects to Head", "isCorrect": false },
              { "answerText": "Mid 2 connects after Tail", "isCorrect": false },
              { "answerText": "Mid 1 point to Tail", "isCorrect": true }
            ]
          },
          {
            "questionText": "“Roll out” operation in Sequent NUMA-Q results in sending invalidations to all other nodes by Head node.",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "True", "isCorrect": false },
              { "answerText": "False", "isCorrect": true }
            ]
          },
          {
            "questionText": "While handling a Read miss in Sequent NUMA-Q, if the Directory state of the block is Home it becomes ___",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "Fresh", "isCorrect": true }
            ]
          },
          {
            "questionText": "In the Sequent NUMA-Q directory protocol, if the state of a node is HEAD-DIRTY, then what state does it become on addition of a new Head node?",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "MID-VALID", "isCorrect": true },
              { "answerText": "HEAD-GONE", "isCorrect": false },
              { "answerText": "HEAD-FRESH", "isCorrect": false },
              { "answerText": "TAIL-VALID", "isCorrect": false }
            ]
          },
          {
            "questionText": "In Sequent NUMA-Q, if the directory state is FRESH then what is the state of the head node?",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "HEAD FRESH", "isCorrect": true },
              { "answerText": "HEAD GONE", "isCorrect": false },
              { "answerText": "HEAD DIRTY", "isCorrect": false },
              { "answerText": "HEAD VALID", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the full form of RAC?",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "Remote access controller", "isCorrect": false },
              { "answerText": "Remote address cache", "isCorrect": false },
              { "answerText": "Remote address controller", "isCorrect": false },
              { "answerText": "Remote access cache", "isCorrect": true }
            ]
          },
          {
            "questionText": "On a read-miss when Directory state is Exclusive, following actions take place at the home node. Identify the correct order of these actions.",
            "week": "Week 9",
            "multiple": false,
            "answerOptions": [
              { "answerText": "S, Q, P, T, R", "isCorrect": false },
              { "answerText": "P, Q, R, S, T", "isCorrect": false },
              { "answerText": "S, T, P, R, Q", "isCorrect": true },
              { "answerText": "P, S, T, Q, R", "isCorrect": false }
            ]
          },
          
            {
              "questionText": "In Sequent NUMA-Q protocol, if the requester state is HEAD_FRESH, which of the following steps should be taken to handle write miss?",
              "week": "Week 10",
              "multiple": true,
              "answerOptions": [
                { "answerText": "Start writing to the block immediately", "isCorrect": false },
                { "answerText": "Request sent to Home to change state to GONE", "isCorrect": true },
                { "answerText": "Change requester state to HEAD_DIRTY", "isCorrect": true },
                { "answerText": "Remain in state HEAD_FRESH", "isCorrect": false }
              ]
            },
            {
              "questionText": "In Sequent NUMA-Q protocol, for the state HEAD_GONE, which of the following are TRUE?",
              "week": "Week 10",
              "multiple": true,
              "answerOptions": [
                { "answerText": "This state is terminal", "isCorrect": false },
                { "answerText": "This node is no longer in the list", "isCorrect": false },
                { "answerText": "Node can continue to respond to other nodes", "isCorrect": true },
                { "answerText": "No other node can read from this node", "isCorrect": false }
              ]
            },
            {
              "questionText": "Which of the following is TRUE for the Sequent NUMA-Q protocol?",
              "week": "Week 10",
              "multiple": false,
              "answerOptions": [
                { "answerText": "RAC of a quad can only respond to home node", "isCorrect": false },
                { "answerText": "Directory always maintains all sharers’ information", "isCorrect": false },
                { "answerText": "Head node manages invalidation of all readers", "isCorrect": true },
                { "answerText": "Tail node initiates roll-out", "isCorrect": false }
              ]
            },
            {
              "questionText": "In NUMA-Q, what does RAC stand for?",
              "week": "Week 10",
              "multiple": false,
              "answerOptions": [
                { "answerText": "Remote access controller", "isCorrect": false },
                { "answerText": "Remote address cache", "isCorrect": true },
                { "answerText": "Remote address controller", "isCorrect": false },
                { "answerText": "Remote access cache", "isCorrect": false }
              ]
            },
            {
              "questionText": "Which state in Sequent NUMA-Q indicates that the node is the final reader in the list?",
              "week": "Week 10",
              "multiple": false,
              "answerOptions": [
                { "answerText": "MID_VALID", "isCorrect": false },
                { "answerText": "HEAD_DIRTY", "isCorrect": false },
                { "answerText": "TAIL_VALID", "isCorrect": true },
                { "answerText": "HEAD_GONE", "isCorrect": false }
              ]
            },
            {
              "questionText": "In Sequent NUMA-Q, what does the 'roll-out' operation result in?",
              "week": "Week 10",
              "multiple": false,
              "answerOptions": [
                { "answerText": "All readers write their data back", "isCorrect": false },
                { "answerText": "Head invalidates all readers", "isCorrect": true },
                { "answerText": "Tail invalidates head", "isCorrect": false },
                { "answerText": "Directory writes back to memory", "isCorrect": false }
              ]
            },
              {
                "questionText": "IBM 370 model uses ..... synchronization method",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "Compare and swap", "isCorrect": true },
                  { "answerText": "Read-modify-write", "isCorrect": false },
                  { "answerText": "STBAR", "isCorrect": false }
                ]
              },
              {
                "questionText": "When using relaxed consistency models, the programmer can override the relaxations by using ______",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "Fence", "isCorrect": true },
                  { "answerText": "Branch", "isCorrect": false },
                  { "answerText": "Load", "isCorrect": false },
                  { "answerText": "Compare", "isCorrect": false }
                ]
              },
              {
                "questionText": "Which among the following are models used for relaxing all program orders",
                "week": "Week 11",
                "multiple": true,
                "answerOptions": [
                  { "answerText": "Weak-ordering", "isCorrect": true },
                  { "answerText": "Release consistency", "isCorrect": true },
                  { "answerText": "IBM PowerPC", "isCorrect": true },
                  { "answerText": "Intel Relaxed memory ordering", "isCorrect": false }
                ]
              },
              {
                "questionText": "TRY: LD R1, lockvar ..... R2, TRY ST R2, lockvar // R1 = 0 UNLOCK: ST R0, lockvar // R0 = 1 — Write the missing instruction in the above code",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "BZ", "isCorrect": true },
                  { "answerText": "BNZ", "isCorrect": false },
                  { "answerText": "BEQZ", "isCorrect": false },
                  { "answerText": "NOP", "isCorrect": false }
                ]
              },
              {
                "questionText": "A test and set operation is implemented in the following code snippet. Write the missing instruction: LOCK: T&S R0, lockvar ........ R0, LOCK RETURN UNLOCK: ST lockvar, #0 RETURN",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "bnz", "isCorrect": true },
                  { "answerText": "bz", "isCorrect": false },
                  { "answerText": "jmp", "isCorrect": false },
                  { "answerText": "nop", "isCorrect": false }
                ]
              },
              {
                "questionText": "A “Swap” instruction atomically exchanges values of lockvar with a register, where lockvar is a synchronization variable.",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "True", "isCorrect": true },
                  { "answerText": "False", "isCorrect": false }
                ]
              },
              {
                "questionText": "Which of the following statements are correct: S1: RC and PowerPC reads others’ write early S2: WO relaxes only R->W and not other dependences",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "S1 is true S2 is false", "isCorrect": true },
                  { "answerText": "S2 is true S1 is false", "isCorrect": false },
                  { "answerText": "Both S1 and S2 are true", "isCorrect": false },
                  { "answerText": "Both S1 and S2 are false", "isCorrect": false }
                ]
              },
              {
                "questionText": "To perform atomic exchange in a cache coherent system, we ____ on a local cached copy and if the lock is ___ then perform ___ .",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "Read, free, exchange", "isCorrect": true },
                  { "answerText": "Exchange, free, write", "isCorrect": false },
                  { "answerText": "Read, not-free, write", "isCorrect": false },
                  { "answerText": "Write, free, read", "isCorrect": false }
                ]
              },
              {
                "questionText": "Which of the following statements are true for LL-SC: S1: Instructions between LL and SC are not guaranteed to execute atomically; S2: Instructions between LL and SC cannot get interleaved with other processes instructions",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "Only S1 is true", "isCorrect": true },
                  { "answerText": "Only S2 is true", "isCorrect": false },
                  { "answerText": "Both S1 and S2 are true", "isCorrect": false },
                  { "answerText": "Both S1 and S2 are false", "isCorrect": false }
                ]
              },
              {
                "questionText": "The following code snippet implements “Atomic Swap” between [R1] and R2 using LL-SC. Select the correct options to fill the blank instructions: TRY: MOV R3, R2 ..... R4, O(R1) ..... R3, O(R1) BEQZ R3, TRY ......... R2,R4",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "LL, SC, MOV", "isCorrect": true },
                  { "answerText": "SC, LL, BEQZ", "isCorrect": false },
                  { "answerText": "LL, SC, TRY", "isCorrect": false },
                  { "answerText": "SC, LL, MOV", "isCorrect": false }
                ]
              },
              {
                "questionText": "Which of the following is/are not an uninterruptible instruction used for synchronization?",
                "week": "Week 11",
                "multiple": true,
                "answerOptions": [
                  { "answerText": "Test & set", "isCorrect": false },
                  { "answerText": "LL-SC", "isCorrect": false },
                  { "answerText": "Compare and swap", "isCorrect": true },
                  { "answerText": "Execute Load instruction. After it finishes, execute the Store instruction", "isCorrect": true }
                ]
              },
              {
                "questionText": "Which of the following models permits to read others’ write early?",
                "week": "Week 11",
                "multiple": true,
                "answerOptions": [
                  { "answerText": "IBM 370", "isCorrect": false },
                  { "answerText": "PC", "isCorrect": true },
                  { "answerText": "SPARC TSO", "isCorrect": false },
                  { "answerText": "RMO", "isCorrect": false },
                  { "answerText": "PowerPC", "isCorrect": true }
                ]
              },
              {
                "questionText": "During synchronisation, the LL-SC pair of instructions uses a simple (i.e. standard) store instruction. Is this statement true/false?",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "True", "isCorrect": false },
                  { "answerText": "False", "isCorrect": true }
                ]
              },
              {
                "questionText": "WO stands for ...................",
                "week": "Week 11",
                "multiple": false,
                "answerOptions": [
                  { "answerText": "Weak Ordering", "isCorrect": true },
                  { "answerText": "Write Once", "isCorrect": false },
                  { "answerText": "Wait Operation", "isCorrect": false },
                  { "answerText": "Write Ordering", "isCorrect": false }
                ]
              },
              {
                "questionText": "Which of the following is NOT TRUE for Barrier Synchronisation?",
                "week": "Week 11",
                "multiple": true,
                "answerOptions": [
                  { "answerText": "The first process reaching barrier releases the busy-wait of others", "isCorrect": true },
                  { "answerText": "If count > P then busy wait on a flag variable", "isCorrect": true },
                  { "answerText": "If count == P, then it means all processes have arrived at the barrier", "isCorrect": false },
                  { "answerText": "If count < P then busy wait on a flag variable", "isCorrect": false }
                ]
              },
                {
                  "questionText": "Identify from the following which one is in the decreasing order of size?",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "message, phit, packet, flit", "isCorrect": false },
                    { "answerText": "message, packet, phit, flit", "isCorrect": false },
                    { "answerText": "packet, message, flit, phit", "isCorrect": false },
                    { "answerText": "packet, flit, phit, message", "isCorrect": false },
                    { "answerText": "message, packet, flit, phit", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "______ determines smallest number of links that must be removed to divide the set of nodes into two sets of equal size, or a size differing by at most one node",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "Bisection width", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "For the given statements, choose the correct option.\n\nS1: Degree represents the maximum number of links connected to a node\n\nS2: Length of the minimum shortest path between any two nodes is the diameter",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "Both S1 and S2 are true", "isCorrect": false },
                    { "answerText": "Both S1 and S2 are false", "isCorrect": false },
                    { "answerText": "S1 is true and S2 is false", "isCorrect": true },
                    { "answerText": "S1 is false and S2 is true", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "In a packet, the data to be transmitted is stored in which sub-partition?",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "Payload", "isCorrect": true },
                    { "answerText": "Header", "isCorrect": false },
                    { "answerText": "Trailer", "isCorrect": false },
                    { "answerText": "Error-code", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "Switching strategy determines the path to be taken by a packet from source to destination",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "True", "isCorrect": false },
                    { "answerText": "False", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "For the given statements, choose the appropriate option.\n\nS1: Circuit switching reserves a path and then transmits data\n\nS2: Packet switching breaks into packets and transmits individually",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "S1 is true and S2 is false", "isCorrect": false },
                    { "answerText": "S1 is false and S2 is true", "isCorrect": false },
                    { "answerText": "S1 and S2 are true", "isCorrect": true },
                    { "answerText": "S1 and S2 are false", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "Identify the incorrect option in the context of interconnection networks.",
                  "week": "Week 12",
                  "multiple": true,
                  "answerOptions": [
                    { "answerText": "Store and Forward is used in packet switching", "isCorrect": false },
                    { "answerText": "Store and Forward is used in circuit switching", "isCorrect": true },
                    { "answerText": "Virtual cut through is used in circuit switching", "isCorrect": true },
                    { "answerText": "Virtual cut through is used in packet switching", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "If the network consists of 36 nodes then what is the bisection width of a 2D mesh?",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "6", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "If the network consists of 64 nodes then what is the network diameter of a hypercube?",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "6", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "Which among the following is/are examples of direct network?",
                  "week": "Week 12",
                  "multiple": true,
                  "answerOptions": [
                    { "answerText": "Bus", "isCorrect": false },
                    { "answerText": "Crossbar", "isCorrect": false },
                    { "answerText": "Rings", "isCorrect": true },
                    { "answerText": "Mesh", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "Which among the networks is more scalable?",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "Bus", "isCorrect": false },
                    { "answerText": "Crossbar", "isCorrect": false },
                    { "answerText": "Multistage", "isCorrect": true },
                    { "answerText": "Ring", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "Consider the following statements and choose the correct option.\n\nS1: Topology defines the physical connection of the network\n\nS2: Routing defines how data traverses through the network",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "S1 is true and S2 is false", "isCorrect": true },
                    { "answerText": "S1 is false and S2 is true", "isCorrect": true },
                    { "answerText": "Both S1 and S2 are true", "isCorrect": false },
                    { "answerText": "Both S1 and S2 are false", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "Turn model avoids starvation in the routing",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "True", "isCorrect": false },
                    { "answerText": "False", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "The North-last routing algorithm blocks the turn from",
                  "week": "Week 12",
                  "multiple": true,
                  "answerOptions": [
                    { "answerText": "East to North", "isCorrect": false },
                    { "answerText": "West to North", "isCorrect": false },
                    { "answerText": "North to East", "isCorrect": true },
                    { "answerText": "North to West", "isCorrect": true }
                  ]
                },
                {
                  "questionText": "Virtual channels can be used to avoid deadlock",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "True", "isCorrect": true },
                    { "answerText": "False", "isCorrect": false }
                  ]
                },
                {
                  "questionText": "Wormhole routing is a packet-level flow control mechanism",
                  "week": "Week 12",
                  "multiple": false,
                  "answerOptions": [
                    { "answerText": "True", "isCorrect": false },
                    { "answerText": "False", "isCorrect": true }
                  ]
                }
              
            
            
          
          
        
      
    
  
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map(q => (q.multiple ? [] : null))
  );
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (index) => {
    const updated = [...answers];
    if (questions[currentQuestion].multiple) {
      const sel = updated[currentQuestion];
      updated[currentQuestion] = sel.includes(index)
        ? sel.filter(i => i !== index)
        : [...sel, index];
    } else {
      updated[currentQuestion] = index;
    }
    setAnswers(updated);
  };

  const calculateScore = () => {
    return questions.reduce((score, q, idx) => {
      const sel = answers[idx];
      if (q.multiple) {
        const correct = q.answerOptions
          .map((opt, i) => (opt.isCorrect ? i : null))
          .filter(i => i !== null)
          .sort()
          .toString();
        return score + ( [...sel].sort().toString() === correct ? 1 : 0 );
      } else {
        return score + (sel !== null && q.answerOptions[sel].isCorrect ? 1 : 0);
      }
    }, 0);
  };

  const imgSrc = (path) =>
    `${process.env.PUBLIC_URL}${path}`;

  return (
    <div className="app-container">
      {!showScore ? (
        <div className="quiz-container">
          <h3>
            Question {currentQuestion + 1} / {questions.length}
          </h3>

          <div className="question-text">
            {questions[currentQuestion].questionText
              .split('\n')
              .map((line, i) => (
                <p key={i}>
                  <strong>{line}</strong>
                </p>
              ))}

            {questions[currentQuestion].img && (
              <div className="question-image">
                <img
                  src={imgSrc(questions[currentQuestion].img)}
                  alt="Question illustration"
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </div>
            )}
          </div>

          <form>
            {questions[currentQuestion].answerOptions.map((opt, idx) => (
              <div key={idx}>
                <label>
                  <input
                    type={
                      questions[currentQuestion].multiple
                        ? 'checkbox'
                        : 'radio'
                    }
                    name="answer"
                    value={idx}
                    checked={
                      questions[currentQuestion].multiple
                        ? answers[currentQuestion].includes(idx)
                        : answers[currentQuestion] === idx
                    }
                    onChange={() => handleOptionChange(idx)}
                  />
                  {' '}{opt.answerText}
                </label>
              </div>
            ))}
          </form>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentQuestion(q => q - 1)} disabled={currentQuestion === 0}>
              Prev
            </button>
            <button onClick={() => setCurrentQuestion(q => q + 1)} disabled={currentQuestion === questions.length - 1}>
              Next
            </button>
            <button onClick={() => setShowScore(true)}>Submit</button>
          </div>
        </div>
      ) : (
        <div className="score-container">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {calculateScore()} / {questions.length}
          </p>

          {questions.map((q, idx) => (
            <div key={idx} className="review-question">
              <div className="review-text">
                {q.questionText.split('\n').map((line, i) => (
                  <p key={i}>
                    <strong>{idx + 1}. {line}</strong>
                  </p>
                ))}

                {q.img && (
                  <div className="question-image">
                    <img
                      src={imgSrc(q.img)}
                      alt="Question illustration"
                      loading="lazy"
                      style={{ maxWidth: '100%', maxHeight: '300px' }}
                    />
                  </div>
                )}
              </div>

              <ul>
                {q.answerOptions.map((opt, i) => {
                  const selected = q.multiple
                    ? answers[idx].includes(i)
                    : answers[idx] === i;
                  return (
                    <li
                      key={i}
                      style={{
                        color: opt.isCorrect
                          ? 'green'
                          : selected
                            ? 'red'
                            : 'black'
                      }}
                    >
                      {selected ? '✓ ' : ''}{opt.answerText}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;