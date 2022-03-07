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

- Chess: logical, well-organized problem with finite life time and objective.
- Medical diagnosis: ill-defined problem, where environment is changing. (multiple diseases, patient may not reveal everything, etc.)
- Walking on two legs: real-time control, getting through obstacles, maintaining stability, etc.
- Taxi driver: complex, quickly evolving environment.

How do we characterize These different types of intelligent agents?

## 4 properties of the <mark style='background-color: #ffdce0'> Agent model </mark>

<mark style='background-color: #f6f8fa'> (Characterise requirements for an agent in terms of its percepts, actions, environment, and performance measure.) </mark>

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
<br><br>
- Agents can be evaluated empirically, sometimes analysed mathematically.
- Agent is a function from *percept* sequences to *actions*.
- Ideal rational agent picks actions that is expected to maximise its *performance measure* (based on the percept sequence and its built-in knowledge)
  - Rational != omniscent (know everything)
  - Rational != clairvoyant (automatically predict the future state)
  - Rational != successful (need to experiment, then do the best it can)

## 4 <mark style='background-color: #dcffe4'> Agent types </mark>

What is the functionality that lies inside the agent? <mark style='background-color: #f6f8fa'> (Choose and justify choice of agent type for a given problem.) </mark>

- <mark style='background-color: #dcffe4'> **Simple reflex agents** </mark>
  
  ![ai l2](https://user-images.githubusercontent.com/54295374/157012767-f4f76ab1-aa9a-4466-b021-3080e6cc9b69.jpg)
  - Assumes that the world is fully observable (no missing information)
  - No long term reasoning (may result to infinite loops)
  - Tasks where this type can be sufficient: automatic door (detects person in front of the sensor)

- <mark style='background-color: #dcffe4'> **Model-based reflex agents** </mark>

  ![ai l2-1](https://user-images.githubusercontent.com/54295374/157012951-14fa2969-d148-4c9f-b55c-57d859535954.jpg)
  - Assumes some of the world is not observable, and uses a model to infer the state of the environment
  - Long-term decision, but still needs improvement

- <mark style='background-color: #dcffe4'> **Goal-based agents** </mark>
  
  ![image](https://user-images.githubusercontent.com/54295374/157013130-994e9fe0-4006-4b5e-af2c-92390f91cc30.png)
  - Looks ahead to achieve desirable future state
  - Searches for the best action to get to the focused, specific, single goal
  
- <mark style='background-color: #dcffe4'> **Utility-based agents** </mark>

  ![image](https://user-images.githubusercontent.com/54295374/157014780-134e2a75-1879-48d3-a304-988ab037179a.png)

  - Dealing with different goals (short & long)
  - Utility: contains a measure of how desirable a future state is
    - Consider which one would maximize my happiness
    - Mapping state to a value (optimize the expected outcome)
    - More general, thinks about the trade-off between achieving different goals
  - Multiple goals when trying to maximize the profit in a taxi
    - Keeping the customer happy
    - Getting the customer to the destination
    - Obeying the traffic rules (avoiding fines)
    - Not taking a route that is unnecessarily long

## 5 <mark style='background-color: #f1f8ff'> Environment types </mark>

You should choose the agent type depending on the environment. <mark style='background-color: #f6f8fa'> (characterise the environment for a given problem.) </mark>

Environments may or may not be:

- <mark style='background-color: #f1f8ff'> **Observable** </mark>
  - Percept contains all relevant information about the world; Everything is in view.
  - ↔ *partially observable*: Environments cannot be directly sensed via percept.
- <mark style='background-color: #f1f8ff'> **Deterministic** </mark>
  - Current state of the world uniquely determines the next.
  - Having high certainty about the consequences (i.e. I will get to the beach by 3:30pm if I take this train.)
  - ↔ *stochastic*: The next state is randomly determined.
- <mark style='background-color: #f1f8ff'> **Episodic** </mark>
  - Only the current (or recent) percept is relevant. (Only consider short-term actions)
  - ↔ *sequential*: The consequences are long-term.
- <mark style='background-color: #f1f8ff'> **Static** </mark>
  - Environment doesn't change while the agent is deliberating.
  - (i.e. chess: board does not change while the agent makes a move.)
  - ↔ *dynamic*: environment changes while making the decision.
    - (i.e. driving cars: environment changes constantly.)
- <mark style='background-color: #f1f8ff'> **Discrete** </mark>
  - There are finite number of possible percepts/actions.
  - (i.e. chess: number of squares on the board, number/state of pieces are finite.)
  - ↔ *continuous*: infinite number of possible percepts/actions.
    - (i.e. driving a car)
<br><br>

![image](https://user-images.githubusercontent.com/54295374/157017144-fba709ea-4fd3-42a9-940e-9fd90027841d.png)

- The environment type largely determines the agent design.
- The real world is partially observable, stochastic, sequential, dynamic, and continuous.