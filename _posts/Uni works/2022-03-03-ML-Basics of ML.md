---
title: "Basics of Machine Learning (COMP30027 W1 L2)"

categories: 
- Uni works

tags:
- COMP30027
- Machine Learning
  
toc: true
toc_sticky: true
---

## Basic Framework

- <mark style='background-color: #fff5b1'> Instances</mark>
  - Input to a machine learning system. individual, independent samples of the world. (= examplars, observations)
  - Composed of:
    - <mark style='background-color: #ffdce0'> Attributes</mark> (= features): measured aspects of each instance
    - <mark style='background-color: #ffdce0'> Concepts</mark> : Anything we aim to learn; often in the form of labels
  - Examples of concepts
    - Discrete class labels (classification): categorizing things into finite classes
    - Numeric output (regression): weight, offset
    - Clusters: identifying data structure, forming groups
    - Probability of an event: imperical, applying relative frequency
    - The most likely order of events
    - A sequence of commands
    - A complex model
    - ...

- <mark style='background-color: #fff5b1'> Generalisation</mark>
  - Learning a function that maps attributes to concepts, concept = f(attributes)
  - Purpose: Return the concept for any set of attributes, including new sets
  
- Example: weather dataset
  ![image](https://user-images.githubusercontent.com/54295374/157854584-ac7fe90b-1133-4c5c-bd8c-db4246800ae0.png)

- <mark style='background-color: #fff5b1'> Supervised vs. unsupervised</mark>
  - <mark style='background-color: #ffdce0'>Supervised</mark>
    - Receive **labelled instances** during training (attributes are labeled by the concept)
    - Learn the **association** f in concept = f(attributes)
  - <mark style='background-color: #ffdce0'> Unsupervised</mark>
    - Receive **unlabelled data** and learn both the concept and the function only from the attributes
      - Discover structure in a dataset (correlated features, groups, sequences, etc.)
      - Discover **latent variables** that explain patterns in the observed instances
      - **Reduce dimensionality** for a supervised learner (first stage of supervised learning)
    - Example: google search keyword 

- <mark style='background-color: #fff5b1'>Supervised train & test</mark>
  - Goal: learn mapping from attributes to concepts (concept = f(attributes))
  - Three steps
    1. **Training**: model sees many examples of attributes-concepts pairs
         - Model **learns a trained function f()** which produces a concept (i.e. probability distribution)
    2. **Testing**: model sees a new set of attributes, predicts concept
    3. **Evaluation**: compare prediction to ground truth
        - Probability models: see if future samples from the same distribution are well-predicted by the model
        - Find error probability (frequency of mistake)
   - Example
     - Training: 20 images of aminals and non-animals are given
     - Testing: new images are given to be labeled.
     - Evaluation: error probability is measured.

- <mark style='background-color: #fff5b1'>Association learning</mark>
  - Detect useful patterns, associations, correlations or casual relations between attributes or between attributes and the concept
  - A "good pattern" is:
    - A combination of attribute values where the presence of certain values **strongly predicts** the presence of other values
  - Any kind of structure is considered interesting and there may be **no "right" answer**
  - **Evaluation** can be **difficult**, potentially many possible association rules in one dataset

## Levels of analysis

Framework for understanding information-processing systems (cognitive science)

Marr's level of analysis and machine learning framework:
1. <mark style='background-color: #ffdce0'>Computational level</mark>
   - What am I looking for? 
   - What is the goal of this system?
   - **Finding the model**:
     - What structure does this ML model expect to see in the world?
     - What rule/pattern/model/etc. explains the data?

2. <mark style='background-color: #ffdce0'>Algorithmic level</mark>
   - How will I do it? (i.e. drawing a circuit)
   - How do you achieve the goal?
   - Algorithms and data structures
   - **Finding the best fit of the data**:
     - Usually involves minimizing an error or loss function

3. <mark style='background-color: #ffdce0'>Implementational level</mark>
   - Physical implementation (i.e. building a circuit)
   - **Python code writing**:
     - How to find that best fit in finite time? 
     - Not always possible to solve exactly

Example: linear regression
   - Computational: looks linear - try fitting a line
   - Algorithmic: Linear regression, minimize square error by turning the slope
   - Implementational: Linear algebra or gradient descent

Summary:
   - Even when models have the same goal (find clusters), they make **very different assumptions** which leads to different results
     - Changed parameter (assumptions) → different results
   - Fewer assumptions **!=** better model
     - Models that make some assumptions to simplify the problem may find a better result