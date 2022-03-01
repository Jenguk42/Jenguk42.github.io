---
title: "Introduction to Machine Learning (COMP30027 W1)"

categories: 
- Uni works

tags:
- COMP30027
- Machine Learning
  
toc: true
toc_sticky: true
---

![image](https://user-images.githubusercontent.com/54295374/156159327-8cc254b7-43b9-46cb-b11e-d8f01a113b92.png)

How many buildings? How many pedestrians? -> Too much to answer in short time

Problem

- Lots of data
- How to use it?
  - Which parts are meaningful & what parts are noise?
  - How do you extract useful info from the data?

## Definition of machine learning

Automatic extraction of valid, novel, useful, and comprehensible knowledge (rules, regularities, patterns, constraints, models, ...) from arbitrary sets of data

## ML tasks

- Classification
- Clustering
- Regression
- Probability estimation
- Sequence discovery
- Association rule mining
- Model fitting
- ...

## ML vs. data mining / data science?

- Machine learning tends to:
  - Focus on theory more than application (Why do we apply this model to this task?)
  - Ignore problems of run time/complexity unlike data mining
- Data mining tends to:
  - Focus more on applications than theory
  - Worry about run time and scalability
- Data science tends to:
  - Combine elements of both
  - Focus on interpreting and communicating data insights

… but there’s a lot of overlap between all three

Tutorial: theoretical concepts and methods cover (work through numerical examples, understand how and why the algorithms work. Similar to the final exam)

Practical: hands-on experience applying machine learning methods (scikit-learn, experiment and see results on small data sets. Helpful for assignments)

## What is learning?

- "Fitting a function to data: finding the relationship between input and output"
- output = f(input)
- Why do we learn?
  - Learning makes it possible to generalise: produce an output for any input, even inputs you’ve never seen before

## Why generalise?

- When don't you need to learn?
  - If the input set is finite (one to one), then you can memorize all the mappings from input->output. (small input set)
  - When you cannot derive anything from the input&output. If there is no rule that could relate input to output.
  - However, memorization does not work for real-world problems.
    - Because
    1. input is continuous (infinite values) and
    2. we want to predict future events

## Machine learning tasks

- Classification – predict discrete class labels based on features
- Regression – predict continuous outcomes based on features
- Predict relationships between features / outcomes (sequence learning, association rule mining)
- Understand and reconstruct the processes that produced the features / outcomes (model fitting, probability estimation)

## Specific machine learning methods

- Naïve Bayes classifiers
- Decision trees
- Support vector machines
- Linear regression
- Logistic regression
- Gaussian mixture models
- Hidden Markov models
- Perceptron
- Deep neural networks
