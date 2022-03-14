---
title: "Process Communication (COMP30023 W2 L2)"

categories: 
- Uni works

tags:
- COMP30023
  
toc: true
toc_sticky: true
---

## Interprocess communication

- Why concurrency?
  - To increase efficiency (parallelism) throughout cooperation
  - *i.e. searching for the keyword and saving the file at the background, etc.*
  - Exchange information between processes/threads
  - Concerns:
    - How?
    - Processes can interfere with each other
    - Proper sequencing and order
  - Ensure system integrity and predictable behaviour

## Race conditions
  - Setting: multiple processes have access to shared object (i.e. memory or file)
  - All can read and write it
  - Race condition arises when output depends on the order of operations
    - *i.e. Shared bank account with 100$, A and B withdraw 100$ at the same time: no synchronization*
  - Very hard to bug: you don't know which processes are running at the specific time. Need to **completely avoid race conditions to begin with**

- Example of race condition

  ```c
  // Pseudo code for popping from a stack.

  stack // global shared variable

  void my_stack_function() {
    if (isEmpty(stack)) return;
    int s = pop(stack);
    // do something with s...
  }

  // Line 1 and 2 of the function: critical region
  ```

  - Potential execution transcript (order in which the process is involved):
    1. Process A tests `stack.isEmpty()` to be false
    2. Process A pops, stack is now empty
    3. Process B tests `stack.isEmpty()` to be true
    4. Process B just returns - nothing to do

  - Another potential execution transcript
    1. Process A tests `stack.isEmpty()` to be false
    2. Process B tests `stack.isEmpty()` to be false
    3. Process A pops, stack is now empty
    4. Process B pops - **Exception**

## Critical regions

- Preventing race conditions
  - Idea: prohibit access to shared object at the same time
  - Mutual exclusion: many design choices
  - Identify **critical region/section** of the program *(the part that might cause the problem)*
  - *Putting everything in the critical region: Enforcing everything to run sequentially, not efficient*

- Requirements to avoid race conditions:
  1. No two processes may be simultaneously inside their critical regions.
  2. No assumptions may be made about speeds or the number of CPUs. *(You don't know where the code is going to be run)*
  3. No process running outside its critical region may block other processes. *(In terms of parallelism and performance)*
  4. No process should have to wait forever to enter its critical region.

- Mutual exclusion using critical regions
  ![image](https://user-images.githubusercontent.com/54295374/158133926-0bbf2e9e-a83b-4e8a-849b-dc85de13f091.png)


## Techniques to ensure mutual exclusion

How do I make sure no one enters the critical region while I'm in it?

- Lock variable problem
  ``` c
  while (lock != 0) {#wait} // Wait until lock is open
  lock = 1 // Lock the region
  critical_region() {...}
  lock = 0 // Unlock the region
  ```
  - Shared variable: lock
  - Doesn't solve the problem; two processes may enter the critical region at the same time when lock != 0

- Techniques for avoiding race conditions
  - Disabling interrupts
  - Strict alternation
  - Test and set lock
  - Sleep and wakeup
  - Other: semaphores, monitors, message passing
  - Implementation: **Busy Waiting, Blocking**

- **Strict alternation** with Busy Waiting
  ``` c
  // Thread A
  while (true) {
    while (turn != 0) {/*loop*/} 
    critical_region();
    turn = 1;
    noncritical_region();
  }

  // Thread B
  while (true) {
    while (turn != 1) {/*loop*/}
    critical_region();
    turn = 0;
    noncritical_region();
  }
  ```
  - Shared variable: turn

- Test and lock
  - Most CPUs come with a test and set lock instruction: `TSL RX, LOCK`
  - Atomic operation: <br>
    Set RX to LOCK <br>
    Test LOCK, if it is 0, set LOCK to 1
  - RX can be used to decide whether to enter critical region or not: Compare RX and LOCK

- Busy Waiting
  - When a process wants to enter a critical section,
    - it checks of the entry is allowed
    - if not, the process executes a **loop**, checking if it is allowed to enter a critical section
  - Cons:
    - Waste of CPU
    - Priority Inversion Problem
      - Low priority process may starve
      - High priority process is blocked by a lower priority process

- Blocking
  - Approach:
    - Attempt to enter a critical section
    - If critical section available, enter it
    - If not, register interest in the critical section and block
    - When the critical section becomes available, the OS will unblock a process waiting for the critical section (if one exists)
  - Example: `sleep()` and `wakeup()`
  - Using blocking constructs improves the CPU utilization

## Deadlock

A set of processes is deadlocked if each process in the set is **waiting for an event that only another process in the set can cause**. (May exist in many shared resource settings; not just memory)

``` c
// Process A
Lock(M1)
DoWork(...)
Lock(M2)
DoWork(...)
Release_lock(M1)
Release_lock(M2)

// Process B
Lock(M2)
DoWork(...)
Lock(M1)
DoWork(...)
Release_lock(M2)
Release_lock(M1)

// Deadlock may happen when process A is waiting for M2 to release and process B is waiting for M1 to release.
```

- Dealing with deadlocks
  1. Ignore the problem, since it does not happen often
  2. Detection and recovery; identify where the problem happens
      - graph algorithms: if there is a cycle in the resource allocation graph, there is a deadlock.
      - i.e. Process A -> M2 -> Process B -> M1 -> Process A -> ...
  3. Avoid by careful resource allocation
      - Synchronize the two copies
  4. Prevention

