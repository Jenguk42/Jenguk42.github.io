---
title: "What is AI? (COMP30024 W1)"

categories: 
- Uni works

tags:
- COMP30024
- Artificial Intelligence
  
toc: true
toc_sticky: true
---

## AI is everywhere!

Healthcare, customer service (online chat, order delivery), transportation, manufacturing, gaming, smart homes, etc. 

<mark style='background-color: #f1f8ff'> But it has risks and limitations. We learn about the bounds of AI from its failures. (Privacy violations, algorithmic bias, discrimination, etc.) </mark>

## Defining AI

<mark style='background-color: #f1f8ff'> AI is the science of "making computers look more like those in the movies". </mark>

- The big question: "How does the mind arise from the brain?" 
- Different types of "intelligent behaviours"
  - <mark style='background-color: #f1f8ff'> Knowledge of cause and effect, logic </mark>
  - <mark style='background-color: #f1f8ff'> Thinking like a human </mark>
  - <mark style='background-color: #f1f8ff'> Emotional response </mark>
  - <mark style='background-color: #f1f8ff'> Conversation </mark>
  - <mark style='background-color: #f1f8ff'> Vision, pattern recognition </mark>
  - <mark style='background-color: #f1f8ff'> Natural language understanding </mark>
  - <mark style='background-color: #f1f8ff'> Deduction </mark>
  - <mark style='background-color: #f1f8ff'> Indoor navigation, autonomy </mark>
  - <mark style='background-color: #f1f8ff'> Curiosity </mark>
  - Abstract thinking and problem solving
  - Learning and memory
  - Language, communication
  - Intuition and creativity
  - Consciousness
  - Emotions
  - Surviving in a complex world
  - Adapting to new situations

- Four approaches to defining AI
  1. Thinking like a human
     - Cognitive modelling: figure out how we think by *introspection* or *experimentation*
     - Self-awareness is important: "I think therefore I am"
     - Humans feel emotions and apparently <mark style='background-color: #fff5b1'> don't always think or act rationally </mark>
  2. Thinking rationally
      - The laws of thought: eg "Socrates is a man. All mans are mortal. Therefore Socrates is mortal." <mark style='background-color: #f1f8ff'> This is a valid conclusion. </mark>
      - Codifying rational thinking started with Aristotle (at least in the West)
      - The study of *logic* has greately influenced AI.
  3. Acting like a human
  4. Acting rationally (behaving intelligently in a specific part of domain)

## Test for Intelligence: The Turing Test

Proposed by Alan Turing in 1950. A human interrogates/converses with the computer via a teletype (something like a twitter). The aim is for the computer to *imitate* a human well enough to fool people. Turing thought a computer would pass this test by the end of the century, and the Loebner Prize (Turing test) competition is held each year. The "total Turing test" allows physical objects to be passed to the machines as well as characters via the teletype.

- "Can machines think?" -> "Can machines behave intelligently?"
- Operational test for intelligent behavior: the Imitation Game
- Predicted that by 2000, a machine might have a 30% chance of
fooling a lay person for 5 minutes
- Anticipated all major arguments against AI in following 50 years
- Suggested major components of AI: knowledge, reasoning, language
understanding, learning

<mark style='background-color: #fff5b1'> Problem: Turing test is limited. It is not *reproducible* (depends on the specific type of interogation), *constructive*, or amenable to *mathematical analysis*</mark>

- The earliest attempt: Eliza (1966)
  - Visitor: The trouble is, my mother’s ill.
Eliza: How long has she been ill?
...
Visitor: The trouble is, my mother’s Irish.
Eliza: How long has she been Irish?
  - <mark style='background-color: #f1f8ff'> Limitation: It syntactically does not have knowledge to understand the part of the speech. </mark>

- Acting rationally (goal-driven acts)
  - The rational agent: perform actions which will (most likely) achieve one’s *goals*
  - Knowledge may not be perfect — we need to go beyond strict rational thought in general
  - The rational agent view is the basis of “Artificial Intelligence: A Modern Approach”

## State of the art

Which can be done at present?

- Play a decent game of chess: <font color='forestgreen'> O </font>
- Drive down Brunswick St on a Saturday night: <font color='forestgreen'> O </font>
- Discover and prove a new mathematical thorem: <font color='forestgreen'> O (One of the first things that AI did in the 1980s) </font> 
- Give competent legal advice in a specialized area of law: <font color='forestgreen'> O (becoming common) </font>
- Translate spoken English into spoken Japanese in real time: <font color='forestgreen'> O (Getting better!) </font> 
- Play a decent game of table tennis: <font color='Firebrick'> X (Real-time decision making, physical movements, etc.) </font>
- Write an intentionally funny story: <font color='Firebrick'> X </font>

AI has been improving dramatically!

- Natural language generation via AI <http://openai.com/blog/gpt-3-apps>
- Google Translator
- Conversational agents: Apple's Siri, IBM's Watson for question answering
- Robotic vehicles: Google's self-driving car autonomous vehicle that can drive safely through traffic <http://www.google.com/selfdrivingcar/>
- Versatile robots: 2015 DARPA Robotics Challenge - mobile robot that can walk over rubble and operate power tools
- Human action recognition: Microsoft Kinect