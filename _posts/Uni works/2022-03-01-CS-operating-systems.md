---
title: "Introduction to Operating Systems (COMP30023 W1)"

categories: 
- Uni works

tags:
- COMP30023
- Operating Systems
  
toc: true
toc_sticky: true
---

We need to understand the ecosystem of where our application is running. Running too slow? Know where to optimize it

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

*These are hardwares. OS seamlessly takes care of everything!*

## Operating systems

*OS is a layer in between the hardware and the software.*

Examples: Windows, macOS, Unix, Linux, Android... GUI or a command line shell is not an operating system.

- OS Provides an **abstraction**
  - Abstraction from the hardware resources to the software that is running on it. -> The developer can ignore the underlying processes.

![1](https://user-images.githubusercontent.com/54295374/156156789-9dbdf43b-5d9b-4985-a1c1-18efcd25f5c0.png)

- OS as a **2. resource manager**
  - *Managing: ensuring that the software get their CPU time, all being run*
  - Top down view
    - Provide <u>abstractions to application programs</u>
  - Bottom up view
    - <u>Manage pieces of complex system</u>
  - Alternative view
    - Provide <u>orderly, controlled allocation of resources</u>
    - *Isolation of the memory given to different programs?*

- OS as an **3. extended machine**
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

## Processes

- Key concept in all operating systems
- Definition: a program in execution
- Assocciated with an address space & set of resources
- A container that holds all info needed to run the program
- A process is dynamic (<-> a program is static)
  - The state of a process consists of:
    - The code / text of the program
    - The values of all the variables in memory and registers
    - Address of the current instruction
    - Current directory, etc.
  - Act of cooking (=process) is dynamic <-> A recipe is a static entity (=program)

## Typical memory hierarchy

![3](https://user-images.githubusercontent.com/54295374/156156864-eba632dd-124c-495f-8ec8-0510a6ef5595.png)
