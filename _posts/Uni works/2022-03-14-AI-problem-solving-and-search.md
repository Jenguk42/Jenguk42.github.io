---
title: "Problem Solving and Search (COMP30024 W2)"

categories: 
- Uni works

tags:
- COMP30024
  
toc: true
toc_sticky: true
---

## Problem-solving agents

Based on the percept and the environment, find out what action it should take.

![image](https://user-images.githubusercontent.com/54295374/158181790-e0fdc050-5165-4d15-9873-7a2f6255b615.png)

This is *offline* problem solving; *online* problem solving involves acting without complete knowledge of the problem and solution.

## Example: Romania (travel planning)

Holiday in Romania; currently in Arad. Flight leaves tomorrow from Bucharest.

- Steps to take
    - Formulate goal: be in Bucharest
    - Formulate problem: states - various cities / operators (actions) - drive between cities
    - Find solution: sequence of cities (i.e. Arad, Sibiu, Fagaras, Bucharest)

- Single-state problem formation
    - "single state": Environment is completely observable, we know which city we are currently in. (read the road sign, etc.)
    - A *problem* is defined by four items:
        - <u>*initial state*</u>: e.g. "at Arad"
        - <u>*actions*</u> (or *successor function S(x)*)
            - A graph defines all possible actions
            - Sometimes refered to as "operators"
            - e.g. Arad to Zerind, Arad to Sibiu, etc.
        - <u>*goal test*</u>, can be
            - *explicit*: exact state. e.g. x = "at Bucharest"
            - *implicit*: properties of rule to apply. e.g. "in the west border of Romania", Checkmate in chess
        - <u>*path cost*</u> (additive): e.g. sum of distances, number of actions executed, etc.
    - A *solution* is a sequence of actions leading from the initial state to a goal state

- Selecting a state space
    State space must be *abstracted* for problem solving, to make the problem sufficiently realistic.

    - (abstract) state = set of real states
        - e.g. Being in Arad = being in lots of different distincts in Arad
    - (abstract) action = complex combination of real actions
        - e.g. "Arad → Zerind" represents a complex set of possible routes, detours, rest stops, etc.
        - For guaranteed realizability, <u>any</u> real state "in Arad" must get to <u>some</u> real state "in Zerind".
        - Each abstract action should be "easier" than the original problem.
    - (abstract) solution = set of real paths that are solutions in the real world

- Example: The 8-puzzle
    - States: integer locations of the tiles (ignore intermediate positions)
    - Actions: move blank left, right, up, down (ignore unjamming etc.)
    - Goal test: goal state (given)
    - Path cost: 1 per move
    - Optimal solution of n-Puzzle family is NP-hard.

- Example: robotic assembly
    - States: real-valued coordinates of robot joint angles, parts of the object to be assembled.
        - The robot joint and the object part locations are specified as real continuous values
    - Actions: continuous motions of robot joints
    - Goal test: complete assembly with *no robot included*
        - final coordinates of the part components (not the state of the robot)
    - Path cost: time to execute
        - How long it takes to move each joint
        - Made simultaneously or sequentially?

## Search algorithms

- General Search

    ![image](https://user-images.githubusercontent.com/54295374/158170440-75431171-61c6-48db-868d-4f9daf4458bf.png)

    - Offline, simulated exploration of state space by generating successors of already-explored states (a.k.a. *expanding* states)
    - Example: getting from Arad to Bucharest
        ![image](https://user-images.githubusercontent.com/54295374/158171560-bc88b629-a5d2-4b60-8ed0-3d9f676aaf50.png)
        - Comments
            1. It is possible to have loops 
                - links are bidirectional; need to test and keep track to avoid infinite loops
            2. State space in this problem: 20 cities, but size of the tree can be infinite 
                - State space != size of the search tree

- Implementation of search algorithms
    ![image](https://user-images.githubusercontent.com/54295374/158182056-8daf5e29-f651-4dd3-8d2c-27fb1d21df2c.png)

    - States vs. nodes
        - A *node* is a data structure constituting part of a search tree, which includes *parent, children, depth, path cost g(x)*
        - A *state* is a (representation of) physical configuration (does not have parent, children, etc.)

    - The `EXPAND` function creates new nodes, filling in various fields and using `OPERATORS` (or `ACTIONS`) of problem to create the corresponding states.

- Search strategies
    - A strategy is defined by picking the `order of node expansion`
    - Strategies are evaluated along the following dimensions:
        - <u>completeness</u>: does it always find a solution if one exists?
        - <u>time complexity</u>: number of nodes generated/expanded
        - <u>space complexity</u>: maximum number of nodes in memory
        - <u>optimality</u>: does it always find a least-cost solution?
    - Time and space complexity are measured in terms of:
        - `b` - maximum branching factor of the search tree (i.e. angles of robot arm)
        - `d` - depth of the least-cost solution
        - `m` - maximum depth of the state space (may be infinite)