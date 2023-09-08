---
title: "Coding Challenge: Java Fundamentals"

categories:
- Coding Challenges

tags:
- Coding Challenges

toc: true
toc_sticky: true
---
> ✒ Reference: [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83/java)


# Some simple challenges to brush up on Java!
## Challenge 1 - Regex
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
``` java
// Example:
Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) 
// => returns "(123) 456-7890"
```

My solution:
```java
public class Kata {
  public static String createPhoneNumber(int[] numbers) {
    return String.format("(%d%d%d) %d%d%d-%d%d%d%d",numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6],numbers[7],numbers[8],numbers[9]);
  }
}
```

Best solution suggested to spice up the regex as below:
```java
String.format("(%d%d%d) %d%d%d-%d%d%d%d", java.util.stream.IntStream.of(numbers).boxed().toArray());
```
- `java.util.stream` package supports functional-style operations on streams of elements, such as map-reduce transformations on collections.
- The `stream(T[] array)` method returns a sequential Stream with the elements of the array, passed as parameter, as its source.
- `IntStream` returns a sequence of primitive int-valued elements.