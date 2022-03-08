---
title: "Operating Systems (COMP30023 W1 L1,2)"

categories: 
- Uni works

tags:
- COMP30023
  
toc: true
toc_sticky: true
---

<font color='forestgreen'> 3/1 W1 L1 </font>

<mark style='background-color: #fff5b1'> We need to understand the ecosystem of where our application is running. Running too slow? Know where to optimize it. </mark>

What hardware and software components are involved between recording a video and getting it to viewers?

- CPU memory to process and render the video
- Network protocol to get the recording to the colud
- Hosting the recording on the cloud
- Web application where a user connects
- User downloads and watches it

## Topic

- The role of the operating system
- The memory hierarchy (caches, virtual memory)
  - Where is it stored?
- Interrupt handling, processes and scheduling
  - Multiple processes running at the same time?
- Introduction to multiprocessors and synchronization
  - Conflict resolution
- Computer system security and cryptographic protocols
- Introduction to network protocols (OSI model)
- Development of client-server applications

## Components of a modern computer

- 1+ processors
- Main memory
- Disks
- Printers
- Keyboard
- Mouse
- Display
- Network interfaces
- I/O devices

<mark style='background-color: #fff5b1'> These are hardwares. OS seamlessly takes care of everything! </mark>

## Operating systems

<mark style='background-color: #fff5b1'> OS is a layer in between the hardware and the software. (The manager that makes sure that the recipe is done in the kitchen)</mark>

Examples: Windows, macOS, Unix, Linux, Android... GUI or a command line shell is not an operating system.

- OS Provides an <font color='dodgerblue'> **1. abstraction** </font>
  - Abstraction between the hardware resources and the software that is running on it. → The developer can ignore the underlying processes.
  - <mark style='background-color: #fff5b1'> i.e. The main cook in the kitchen that makes sure that the recipe is done </mark>

  ![1](https://user-images.githubusercontent.com/54295374/156156789-9dbdf43b-5d9b-4985-a1c1-18efcd25f5c0.png)

- OS as a <font color='dodgerblue'> **2. resource manager** </font>
  - <mark style='background-color: #fff5b1'> Managing: ensuring that the software get their CPU time, all being run </mark>
  - Top down view
    - Provide <u>abstractions to application programs</u>
  - Bottom up view
    - <u>Manage pieces of complex system</u>
  - Alternative view
    - Provide <u>orderly, controlled allocation of resources</u>
    - <mark style='background-color: #fff5b1'> Isolation of the memory given to different programs? </mark>

- OS as an <font color='dodgerblue'> **3. extended machine** </font>
  - OS turns ugly hardware into beautiful abstractions.

  ![2](https://user-images.githubusercontent.com/54295374/156156858-07f4364a-624f-4106-837a-1c6ec8719627.png)

## History of OS

- Driven by computer architecture
  - The first generation (1945–55) vacuum tubes
  - The second generation (1955–65) transistors and batch systems
  - The third generation (1965–1980) integrated circuits and multiprogramming
  - The fourth generation (1980–present) personal computers
  - The fifth generation (1990–present) mobile computers

## OS concepts

- Processes (running program)
- Address spaces (memory)
- Files and file system
- Input and Output
- Protection (manage security)

## Typical memory hierarchy

![3](https://user-images.githubusercontent.com/54295374/156156864-eba632dd-124c-495f-8ec8-0510a6ef5595.png)

<font color='forestgreen'> 3/3 W1 L2: Introduction to Processes and Process Management</font>

## Processor/CPU

- Central processing unit (CPU)
- Fetches instructions from registers (memory); executes them (marks the job done)
- Registers keep some process state information
- Two modes of execution:
  - Kernel (execute any CPU instruction and reference any memory address) i.e. initiate I/O
  - User (only a subset) i.e. add, sub
- <mark style='background-color: #fff5b1'> CPU: The cooks that are doing the job, Kernel: higher level chef that deals with important ingredients  </mark>


## Processes: program in execution

- Key concept in all operating systems
- At any given time, the number of processes running a given program can be 0, 1, 2, 3, ....
- Assocciated with an address space & set of resources
- A container that holds all info needed to run the program
- A **process is dynamic** (↔ **a program is static**)
  - The state of a process consists of:
    - The code / text of the program
    - The values of all the variables in memory and registers
    - Address of the current instruction
    - Current directory, etc.
  - <mark style='background-color: #fff5b1'> Act of cooking (=process) is dynamic <-> A recipe is a static entity (=program) </mark>

<mark style='background-color: #f1f8ff'> Typically, number of processes run by a machine > number of CPUs </mark>

## Multiple processes

- Each process has its own address space 
  - <mark style='background-color: #fff5b1'> The state of the process has to be remembered, which requires "complete isolation" between processes </mark>
- Process memory has three segments:
  - text (program code, "read only")
  - data (constant data strings, global vars)
  - stack (local vars like functions and state of the variable)
- Conceptually, each process has its own **virtual CPU**.
- In reality, multiple processes share a CPU, each taking a small period of time to run. (**multiprogramming**)

  ![4](https://user-images.githubusercontent.com/54295374/156994028-d44abaf4-0cc9-4af7-8be0-fd1772e528f4.jpg)

## OS as a process

- Another way of defining the OS: process
- OS ensures that different proesses do not get in each other's way while they are active at the "same" time
- Provides services such as "read N bytes from this file", which is used by application programs, utilities, and non-privileged parts of the OS.

## User vs. Kernel mode

- The program status word (PSW) register gives the CPU its current mode.
  - <font color='dodgerblue'> Code running in User mode </font> cannot issue privileged instructions, and can only access the parts of memory that is allowed by kernel mode code.
  - <font color='dodgerblue'> Code running in kernel mode </font> can issue all instructions, and can access all memory.
  - Privileged instructions and memory locations: those which access anything that might interfere with another system (i.e. accessing I/O device)
- User / kernel distinction builds the security mechanisms for OS.

## System call

- Transition between user and kernel mode is made via system calls
  - Allow user programs to ask the OS to execute privileged instructions / memory locations on their behalf.
  - Preserves **system integrity and security** since OS checks the requst before executing them.
  - Several privileged things are carried out as a single logical operation to make system calls more convenient to use.
- To the application programmer: system call = call to a privileged function

  ![5](https://user-images.githubusercontent.com/54295374/156995961-c8464955-c41f-474b-9465-8eca6c2209d2.jpg)

- Mode bit (register) helps you distinguish which mode the system is running on.

  ![image](https://user-images.githubusercontent.com/54295374/157000201-3c2e1d64-5806-47d6-9438-fb1d819065df.png)

- Example of a system call: Standard C library handling of write(). The library provides the system-call interface.

## Typical system calls

- Process control (load/execute; create and terminate a process; get/set process attributes)
- File management (read/create/delete/open/close a file; get/set file attributes)
- Device management (request/release a device; read/write from a device)
- Information maintenance (get/set time or date)
- Communication (create/delete communication connections)

