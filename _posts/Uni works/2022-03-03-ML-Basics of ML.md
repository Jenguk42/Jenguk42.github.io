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

- <mark style='background-color: #fff5b1'> Supervised vs. unsupervised</mark>
  - <mark style='background-color: #ffdce0'>Supervised</mark>
    - Receive **labelled instances** during training (attributes are labeled by the concept)
    - Learn the **association** f in concept = f(attributes))
  - <mark style='background-color: #ffdce0'> Unsupervised</mark>
    - Receive **unlabelled data** and learn both the concept and the function only from the attributes
      - Discover structure in a dataset (correlated features, groups, sequences, etc.)
      - Discover **latent variables** that explain patterns in the observed instances
      - **Reduce dimensionality** for a supervised learner (first stage of supervised learning)

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