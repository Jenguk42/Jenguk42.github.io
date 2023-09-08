---
title: "Coding Challenge: Java Functional Programming"

categories:
- Coding Challenges

tags:
- Coding Challenges, Functional Programming

toc: true
toc_sticky: true
---
> ✒ Reference: [Java Functional Programming (Part 1: The Beginning)](https://www.codewars.com/kata/54a6b43e478d8ee14c000a5d)

# Functional Programming
## Mapping Functions
```java
Function <MyObject, String> f = p -> p.toString();
String myString = f.apply(myObject); 
//Stores whatever the toString() of myObject is in myString
```

Given this POJO, write a Function (with the appropriate types) that returns true if a given student is "John Smith" with a student number of "js123" (otherwise return false).
```java 
public class Student {
  private final String firstName;
  private final String lastName;
  public final String studentNumber;
  public String getFullName() {
    return firstName + " " + lastName;
  }
  public String getCommaName() {
    return lastName + ", " + firstName;
  }
}
```
Best Solution:
```java
import java.util.function.Function;

public class FunctionalProgramming {
  public static Function<Student, Boolean> f = s -> 
    "John Smith".equals(s.getFullName()) &&
    "js123".equals(s.studentNumber);
}
```
* `==` operators are used for reference comparison (address comparison) and `.equals()` method is used for content comparison!