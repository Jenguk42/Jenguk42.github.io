---
title: "Process Lifetime and Threads (COMP30023 W2 L1)"

categories: 
- Uni works

tags:
- COMP30023
  
toc: true
toc_sticky: true
---

## Process Creation & Termination

Four principal events that **create** processes:
  1. System initialisation
      - Starts when you boot your computer
  2. Execution of a process creation system call by a running process
      - A process interacts with the network to receive data while another process is doing computations on the data.
  3. A user request to create a new process
     - Type in which process to request next
  4. Initiation of a batch job
     - Scheduled program checks whether the CPU is free then schedules the next job
     - Similar to 2: there is a process already running, which invokes another process to run
     - Might not be immediate; depends on the time it is scheduled and the events that are already happening

Typical conditions which **terminate** a process:
  1. Normal exit (voluntary)
     - return 0: indication for the system that the program exits.
  2. Error exit (voluntary)
     - if input parameter is not expected, exit with error. (program considers it beforehand)
  3. Fatal error (involuntary).
     - seg faults, division by 0 (invoking an illegal instruction)
     - OS catches them and terminates the program
  4. Killed by another process (involuntary).
     - In shell, `kill -(process ID)`

## Example: process creation/control & exit
![image](https://user-images.githubusercontent.com/54295374/157151756-c18dcbaf-028d-4694-89d9-b261412b5bc1.png)

- `fork()` creates a new process; copy of the parent process
  - Clone all the memory of parent into the child; resumed at the exact point when the parent is forked
  - Returns 2 different values depending on whether it is parent or child: in the code, you incorporate this
- `fork()` returns `pid` value (each process has a process id)
  - Change made in the child does not affect the parent
- `execve()` is used after a fork to replace one of the two processes virtual memory space with a new program;
  - Common use: the child does a different job than the parent process
<br>
- `exit()` terminates a process
- A parent may wait for a child process to terminate:
  - `wait` provides the process id of a terminated child so that the parent can tell which child is terminated
    - Specifies who you're waiting on: parent waits until the child is terminated
  - `wait3` allows the parent to collect performance statistics about the child

## Process States

![image](https://user-images.githubusercontent.com/54295374/157152295-6a7286b5-8aba-4d16-88d4-57919119fd50.png)

Three states a process may be in:
  1. **Running** (actually using the CPU at that instant, executing the instructions).
  2. **Ready** (runnable; temporarily stopped while another process is running).
  3. **Blocked** (unable to run until some external event happens).
     - Waiting for the external event in order to proceed (i.e. type in the input)

![image](https://user-images.githubusercontent.com/54295374/157152384-37a49524-8a9b-4af3-9f39-ff50a7861ead.png)

- Multiple processes getting ready and terminated
- The lowest layer of a process-structured operating system handles interrupts and scheduling. Above that layer are sequential processes.

## Interrupts

![image](https://user-images.githubusercontent.com/54295374/157152407-b86f8648-ec1d-4daa-8400-0753c927cbfd.png)

- The steps in starting an I/O device and getting an interrupt:

![image](https://user-images.githubusercontent.com/54295374/157152495-36efc0c9-390f-4b2f-8fd9-fab82f8b3007.png)

- When a hardware device needs attention from the CPU, e.g. because it has finished carrying out its current command and is ready to receive its next command, it generates a signal to interrupt the CPU.
- Asynchronous with the currently executing process
- When an interrupt occurs, the CPU’s hardware takes the values in the program counter and program status word registers (and, on some kinds of machines, the stack pointer register), and saves them in privileged memory locations reserved for this purpose.
- It then replaces them with new values.
- The replacement PSW will put the CPU into kernel mode. The replacement PC will cause execution to resume at the start of the interrupt handler, code that is part of the kernel.

## Interrupt vector and handler

- Interrupt vector: address of the interrupt handler
- The interrupt handler must
    - save the rest of the status of the current process,
    - service the interrupt,
    - restore what it saved, and
    - execute a return from interrupt or similar instruction to restore whatever the hardware saved when the interrupt occurred (i.e. the PC, the PSW).

## Pseudo-interrupts

- True interrupts come from hardware devices outside the CPU; peudo-interrupts from the CPU itself.
- User programs may generate pseudo-interrupts inadvertently, e.g. by executing divide-by-zero: 
  - Such events are usually called exceptions. Some exceptions cause process termination.
- Users can generate pseudo-interrupts intentionally by executing a special instruction for system calls (e.g., CTRL-C)
- Catch interrupts with trap command

## Process Table

- One entry per process
- Contains state information to resume a process
- Fields include information about:
  - process management (e.g., registers, program counter, program status word)
  - memory management
  - file management

## Threads 

- "Lightweight process"
- Definition: A sequential execution stream within the process
- Threads are the basic unit of CPU utilization – including the program counter, register set and stack space.

- Threads can communicate with each other without invoking the kernel – threads share global variables and dynamic memory.
- Shared by threads:
  - address space and memory – code and data sections; contents of memory (global variables, heap); open files; child processes; signal and signal handlers.
- Threads own copy:
  - program counter; registers; stack (local variables, function call stack); state (running/waiting etc).

- Thread usage: Text Editor
![image](https://user-images.githubusercontent.com/54295374/157153465-3fe04597-b216-4626-9b20-0d32facbd7ff.png)

## Threads vs. Processes

![image](https://user-images.githubusercontent.com/54295374/157153650-52216472-66c1-401d-b90b-8050f210dc50.png)

- A process has one container but may have more than one thread, and each thread can perform computations (almost) independently of the other threads in the process.

- There is reduced overhead than when using multiple processes:
  - less time to create a new thread;
  - less time to terminate;
  - less time to switch between threads;
  - less time to communicate between threads.

## Pthreads

![image](https://user-images.githubusercontent.com/54295374/157153783-93180c62-45ba-4f32-9e5d-c4a2fc237969.png)

- A POSIX (Portable Operating System Interface) standard API for thread creation and synchronisation. Most UNIX systems support it.
  - all functions start with `pthread`
  – include `pthread.h`
  – all threads have an id of type `thread_t`

- Global variables are shared across threads.
  - thread switches could occur at any point
  - thus, another thread could modify shared data at any time
  - consequently, there is a need to synchronize threads – if not, problems could arise.

## Implementing Threads in user space

A user-level threads package vs a threads package managed by the kernel

![image](https://user-images.githubusercontent.com/54295374/157154001-b1d6891b-f152-46da-832a-533e1513b4ad.png)

## Challenge of multi-threading

- Multi-threading is extremely powerful, but it comes with a significant challenge: Concurrency
- If you are running multiple threads with a shared memory/data store modelling how they interact becomes critical, otherwise the following can happen:
  - Race conditions: where the output is dependent on the sequence/timing of events
  - Deadlock: each thread is waiting for another thread to complete a task
- Requires locks, synchronization, and careful analysis