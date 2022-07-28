---
title: CS61B 课程笔记
tags: [数据结构与算法, Java]
categories: [笔记]
description: 学习 CS 61B 课程的笔记
---

# Before Class

## Links

[Resources here](https://sp18.datastructur.es/)

[Text book](http://gitbook.com/book/joshhug/hug61b)

[Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/)

[CS61B Exams and Solutions](https://tbp.berkeley.edu/courses/cs/61B/)

[COS226 Spring 2008 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-s08-sol.pdf)

[COS226 Fall 2008 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f08-sol.pdf)

[COS226 Fall 2009 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f09-sol.pdf)

[CS61B Fall 2009 Exam Solutions (Final, Midterm, Midterm2, Midterm3)](https://inst.eecs.berkeley.edu//~cs61b/fa13/samples/)

[COS226 Fall 2010 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f10.pdf)

[COS226 Fall 2011 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f11-sol.pdf)

[COS226 Spring 2012 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-s12-sol.pdf)

[COS226 Fall 2012 Midterm Solution](https://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f12-sol.pdf)

[COS226 Spring 2013 Midterm Solution](https://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/mid-s13-sol.pdf)

[CS61B Fall 2014 Test Solutions (Final, Final2, Final3, Midterm, Midterm2)](https://inst.eecs.berkeley.edu/~cs61b/fa14/test-solutions/)

[CS61B Spring 2016 Midterm2 Walkthrough](https://www.youtube.com/watch?v=rciRgoiJVGY)

[CS61B Spring 2017 Midterm2 Walkthrough](https://www.youtube.com/channel/UCqiudaLea8HNE23GBC34R5Q/videos)

[CS61B Spring 2016 MT1, Spring 2017 Exam Prep, Spring 2018 MT1, Spring 2019 MT1, Spring 2019 MT2, Fall 2020 MT1](https://www.youtube.com/channel/UCNBSbBTFx8nFahcQyZOYOgQ/videos)

[CS61B Spring 2019 Discussion](https://www.youtube.com/channel/UCdh0Rpk6C1w1ypiEjjKh_Uw/videos)

[CS61B Fall 2020 Discussion](https://www.youtube.com/channel/UCtic6FhXmfR0PSntIXjhwaw/videos)


## Entry Code For GradeScope

You should select your university as UC Berkeley.

sp18: MNXYKX

sp21 code: BP25V6

sp22 code: 743W56

I would like to choose sp18, which is the most classic one and have a total function of the lab.

# Lecture 01

More detailed here: ](https://joshhug.gitbooks.io/hug61b/content/chap1/chap11.html

## Things about the course

I don't care actually. After all I'm a worldwide student.

## Things about Java

### Java is an object oriented language with strict requirements
- Every Java file must contain a class declaration (This is not completely true, e.g. we can also declare “interfaces” in .Java files that may contain code. We’ll cover these later.).

- **All code** lives inside a class*, even helper functions, global constants, etc.

- To run a Java program, you typically define a main method using `public static void main(String[] args)`

### Java and Static Typing
Java is statically typed!

- All variables, parameters, and methods must have a declared type.

- That type can **never change**.

- Expressions also have a type, e.g. “larger(5, 10) + 3” has type int.

- The compiler checks that all the types in your program are compatible **before the program ever runs**!

- - e.g. String x = larger(5, 10) + 3 will fail to compile.
  - This is unlike a language like Python, where type checks are performed DURING execution.

### Reflections on Static Typing

The Good:

- Debugging is a lot easier, type errors are avoided.
- Produciton code has no type errors, so that means people’s phones won’t crash because of type errors.
- Programs run more efficiently in time and memory.
- Self-documenting: YOU KNOW WHAT YOU’VE GOT.


The Bad:

- Code is more verbose.
- Code is less general.

### Basic Rules
- ALL code in Java must be part of a class.

- We delimit the beginning and end of segments of code
using `{` and `}`

- All statements in Java must end in a semi-colon.

- For code to run we need `public static void main(String[])`

### Vars 

- Before Java variables can be used,they must be declared.

- Java variables must have a specific type.

- Java variable types can never change.

- Types are verified before the code even runs!

### Define A Function

- Functions must be declared as part of a class in Java. A function that is part of a class is called a **"method"**. So in Java, all functions are methods.

- To define a function in Java,we use "public static".We will see alternate ways of defining functions Later.

- ALl parameters of a function must have a declared type, and the return value of the function must have a declared type. Functions in Java return **only one** value!

- We use `/** comments here */` to describe what a function does. You could also add tags like this  `@bugfix`. 

## Lab 1

](https://sp18.datastructur.es/materials/lab/lab1setup/lab1setup

So easy.

Notice: If you enter Chinese Characters, you should open the control pannel, go to: Clock & Area -> Area -> Management -> Program not using unicode -> Select the beta option.
However, some pre-installed software may have some configure issues.
