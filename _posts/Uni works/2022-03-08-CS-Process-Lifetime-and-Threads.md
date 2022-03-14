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

Can be created by any of the devices. What happens next depends on the devices. (device: "I need an attention from the OS")

![image](https://user-images.githubusercontent.com/54295374/157152407-b86f8648-ec1d-4daa-8400-0753c927cbfd.png)

- The steps in starting an I/O device and getting an interrupt:

![image](https://user-images.githubusercontent.com/54295374/157152495-36efc0c9-390f-4b2f-8fd9-fab82f8b3007.png)

- When a hardware device needs attention from the CPU, e.g. because it has finished carrying out its current command and is ready to receive its next command, it generates a signal to interrupt the CPU.
- Asynchronous with the currently executing process
- When an interrupt occurs, the CPU’s hardware takes the values in the program counter and program status word registers (and, on some kinds of machines, the stack pointer register), and saves them in privileged memory locations reserved for this purpose.
  - Copy and remember the state of the process, then load the interrupt handler
- It then replaces them with new values.
- The replacement PSW will put the CPU into kernel mode. The replacement PC will cause execution to resume at the start of the interrupt handler, code that is part of the kernel.

## Interrupt vector and handler

- Interrupt vector: address of the interrupt handler (where the process is stopped)
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
- Catch interrupts with trap command (helps you choose which interrupt to catch)

## Process Table

- One entry per process
- Contains state information to resume a process
- Fields include information about:
  - process management (e.g., registers, program counter, program status word)
  - memory management
  - file management

## Threads 

*When the forked child process changes its variables, the change cannot be seen by the parent. However, sometimes you want to execute parallel code. (i.e. edit values based on different inputs, etc.)*

- Thread: "Lightweight process" that *creates parallelism*
  - A single process may have multiple threads
- Definition: A sequential execution stream within the process
- Threads are the basic unit of CPU utilization
  - It has its own program counter, register set and stack space.
  - *They have their own information on how they execute; can call their own functions, etc. Exist different from the other threads.*
  - A proess is already a thread
<br><br>

- Threads can communicate with each other without invoking the kernel – **threads share global variables and dynamic memory**.
  - *Any communication between processes have to go via system calls made by operating system. (In order to invoke a system call, you need to switch from user to kernel mode)*
    - *Threads do not require this because they share dynamic memory. It is created within a process.*
  - Shared by threads:
    - Address space and memory – code and data sections; contents of memory (global variables, heap); open files; child processes; signal and signal handlers.
  - Threads have their own copy of:
    - program counter; registers; stack (local variables, function call stack); state (running/waiting etc).
    - *State of each functions is saved in the stack.*


- Thread usage: Text Editor
![image](https://user-images.githubusercontent.com/54295374/157153465-3fe04597-b216-4626-9b20-0d32facbd7ff.png)
  - *Editing a huge file*
    - *There is a thread for the UI that's reading the file*
    - *Another thread is created for the substitution of words*
    - *Another thread is created for updating the file at disk*
    - *Three threads running in parallel!*
    - *They are sharing local states, which allows them to exist together*

## Threads vs. Processes

![image](https://user-images.githubusercontent.com/54295374/157153650-52216472-66c1-401d-b90b-8050f210dc50.png)

- *Having thread is more efficient than processes*
  - *Main reason: OS is not involved in the creation of threads*
- A process has one container but may have more than one thread, and each thread can perform computations (almost) independently of the other threads in the process.

- There is reduced overhead than when using multiple processes:
  - less time to create a new thread;
  - less time to terminate;
  - less time to switch between threads;
  - less time to communicate between threads.

## Pthreads

![image](https://user-images.githubusercontent.com/54295374/157153783-93180c62-45ba-4f32-9e5d-c4a2fc237969.png)

- A POSIX (Portable Operating System Interface) standard API for thread creation and synchronisation. Most UNIX systems support it.
  - User level library
  - all functions start with `pthread`
  - include `pthread.h`
  - all threads have an id of type `thread_t`

- Global variables are shared across threads.
  - thread switches could occur at any point
  - thus, another thread could modify shared data at any time
  - consequently, there is a need to **synchronize** threads – if not, problems could arise. (if two threads are modified at the same time, which is right?)

## Implementing Threads in user space

A user-level threads package vs a threads package managed by the kernel

![image](https://user-images.githubusercontent.com/54295374/157154001-b1d6891b-f152-46da-832a-533e1513b4ad.png)

- From the kernel: there are no threads, there is only a single process. CPU does not know which thread is being executed.
  - Possible problem: If the process is blocked, all threads within the process also cannot run even if they logically can be executed.
- The package (library) manages the threads instead of the CPU 

## Challenge of multi-threading

- Multi-threading is extremely powerful, but it comes with a significant challenge: Concurrency
- If you are running multiple threads with a shared memory/data store modelling how they interact becomes critical, otherwise the following can happen:
  - Race conditions: where the output is dependent on the sequence/timing of events
  - Deadlock: each thread is waiting for another thread to complete a task
- Requires locks, synchronization, and careful analysis

## Recap

- Processes and their lifetime
  - How they are created, terminated, and what happens inbetween
- Processes can be interrupted by the OS
  - i.e. I/O device
- Threads
  - Adds more parallelism to the program