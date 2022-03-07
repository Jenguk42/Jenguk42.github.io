---
title: "Intelligent Agents (COMP30024 W1 L2)"

categories: 
- Uni works

tags:
- COMP30024
- Artificial Intelligence
  
toc: true
toc_sticky: true
---

## Intelligent Agents

Agents can be evaluated empirically, sometimes analysed mathematically

- Chess: logical, well-organized problem with finite life time and objective.
- Medical diagnosis: ill-defined problem, where environment is changing. (multiple diseases, patient may not reveal everything, etc.)
- Walking on two legs: real-time control, getting through obstacles, maintaining stability, etc.
- Taxi driver: complex, quickly evolving environment.

How do we characterize These different types of intelligent agents?

## 4 properties of the <mark style='background-color: #ffdce0'> Agent model </mark>

- <mark style='background-color: #ffdce0'>**Percepts/observations**</mark> of the environment
  - Made by sensors (How does the model sense the environment?)
  - Input
  - How does the model sense the enviroment?
- <mark style='background-color: #ffdce0'>**Actions**</mark> which may affect the environment
  - Made by actuators (What action does the agent perform?)
  - Output
  - i.e. Ability to exelerate, move, accept money, change the state of a chess board, etc.
- <mark style='background-color: #ffdce0'>**Environment**</mark> in which the agent exists
  - What's being sensed and modified?
  - More complex, need to be modeled.
- <mark style='background-color: #ffdce0'> **Performance measure**</mark> of the desirability of environment states
  - What's the object applied to the agent?
<br><br>
- Example: Automated taxi
  - **Percepts**: video, accelerometers, temperature gauges, engine sensors, keyboard, GPS, ...
  - **Actions**: steer, accelerate, brake, horn, speak/display, ...
  - **Environment**: city streets, freeways, traffic (other vehicles, traffic lights), pedestrians, weather, customer, ...
  - **Performance measure**: safety, reach destination, maximize profits, obey laws, passenger comfort, ...


## Agent types

## Environment types