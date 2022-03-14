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

``` pseudocode
function SIMPLE-PROBLEM-SOLVING-AGENT(p) returns an action
    inputs: p, a percept
    static: s, an action sequence, initially empty
            state, some description of the current world state
            g, a goal, initially null
            problem, a problem formulation
    state ← UPDATE-STATE(state, p)
    if s is empty then
        g ← FORMULATE-GOAL(state)
        problem ← FORMULATE-PROBLEM(state, g)
        s ← SEARCH(problem)
    action ← RECOMMENDATION(s, state)
    s ← REMAINDER (s, state)
    return action
```

1. Check if there is any action sequence.
2. If it is empty (starting from scratch),
    1. Formulate a goal
    2. Search for sequence of actions it should take
    3. Choose the next action to execute

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
        - *initial state*: e.g. "at Arad"
        - *actions* (or *successor function S(x)*): e.g. Arad to Zerind, Arad to Sibiu, etc. (A graph defines all possible actions)
        - *goal test*, can be
            - *explicit*: exact state. e.g. x = "at Bucharest"
            