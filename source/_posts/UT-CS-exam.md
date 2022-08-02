---
title: UT CS exam
date: 2022-08-02 16:39:00
tags: [考试题]
categories: [测试]
description: 一些测试题。
plugins:
  - katex
---

# 2022 Winter CS

## Problem 1

For a matrix denoted by $M$, we write $M_{i: j, j k: l}$ for the submatrix formed from the rows $i$ through $j$ and the columns from $k$ through $l$ of the matrix. We also denote $M_{i: i, k: l}$ and $M_{i: j, k: k}$ by $M_{i, k: l}$ and $M_{i: j, k}$, respectively. (Note that they are row and column vectors, respectively.)

Assume below that $A$ is an $n \times n$ nonsingular matrix which can be LU factorized. In addition, assume that a positive integer $w$ exists such that all entries in the $k$-th sub- and super-diagonal of $A$ are zero if $k>w$. Namely, if $|i-j|>w, A_{i, j}$ is zero.

We denote the LU factorization of $A$ by $A=L U$, where $L$ is a lower triangular matrix with unit diagonal elements, and $U$ is an upper triangular matrix.

The following algorithm $\mathbf{P}$ computes $L$ and $U$ from the input $A$ in-place in such a way that the strictly lower triangular part and the upper triangular part of $A$ will be $L$ and $U$, respectively. In other words, $A_{i, j}$ will be $L_{i, j}$ for $i>j$, and $A_{i, j}$ will be $U_{i, j}$ for $i \leq j$, when it terminates.

Algorithm P


`for(k=1 ; k<n ; k=k+1) {`
$$
\begin{aligned}
A_{k+1: n, k} & \leftarrow \frac{1}{A_{k, k}} A_{k+1: n, k} ; \\
A_{k+1: n, k+1: n} & \leftarrow A_{k+1: n, k+1: n}-A_{k+1: n, k} A_{k, k+1: n} ;
\end{aligned}
$$
`}`

Answer the following questions.
(1) Compute the LU factorization of the following matrix.
$$
\left(\begin{array}{cccc}
1 & 1 & 0 & 0 \\
-1 & 1 & 1 & 0 \\
0 & -2 & 2 & 1 \\
0 & 0 & -3 & 3
\end{array}\right)
$$
(2) Prove that $L_{i, j}=0$ and $U_{i, j}=0$ if $|i-j|>w$.
(3) Assume that $n \gg 1, w \ll n$, and $m \gg n$. We wish to solve a set of linear systems,
$$
A \vec{x}_{i}=\vec{b}_{i}, \quad i=1,2, \ldots, m
$$
where $\vec{b}_{i}(i=1,2, \ldots, m)$ are the constant vectors, and $\vec{x}_{i}(i=1,2, \ldots, m)$ are the unknown vectors. Explain the relative merits of the following methods (I) and (II) with respect to the amount of arithmetic operations.

(I) Compute $A^{-1}$ first, and then compute each $\vec{x}_{i}$ as $A^{-1} \vec{b}_{i}$.

(II) Compute the LU factorization of $A$ first, and then solve $L \vec{y}_{i}=\vec{b}_{i}$ for $\vec{y}_{i}$. Solve $U \vec{x}_{i}=\vec{y}_{i}$ for $\vec{x}_{i}$ lastly.

## Problem 2
Let $G=(V, E)$ be a simple undirected graph with the vertex set $V=\left\{v_{i} \mid i=1, \ldots, n\right\}$ and edge set $E$. For an $n$-dimensional vector $\boldsymbol{x}=\left(x_{1}, \ldots, x_{n}\right) \in\{-1,+1\}^{n}$, define $f_{G}(\boldsymbol{x})$ by
$$
f_{G}(\boldsymbol{x})=\sum_{\left(v_{i}, v_{j}\right) \in E} \frac{1-x_{i} x_{j}}{2} .
$$

Answer the following questions.

(1) For the case where $G$ is a complete graph $K_{n}$ of $n$ vertices, compute $\displaystyle a_{n}=\max _{\boldsymbol{x} \in\{-1,+1\}^{n}} f_{G}(\boldsymbol{x})$.

(2) Let $K_{n}$ and $a_{n}$ be those given in question (1). Let $b_{n}$ be the number of edges of $K_{n}$. Compute $\displaystyle \lim _{n \rightarrow \infty} \frac{a_{n}}{b_{n}}$.

(3) Let $G$ be an arbitrary simple undirected graph. When each $x_{i}$ takes a value of either $-1$ or $+1$ with probability $\displaystyle \frac{1}{2}$ independently, compute the expected value of $\displaystyle f_{G}(\boldsymbol{x})$. You may use the linearity of expectation.

(4) Show that, for any simple undirected graph $G$, there exists some $x \in\{-1,+1\}^{n}$ such that $\displaystyle f_{G}(\boldsymbol{x}) \geq \frac{|E|}{2}$. Here, $|E|$ denotes the number of edges of $G$.

## Problem 3

Let $\boldsymbol{\Sigma}=\{a, b\}$. Answer the following questions.

(1) Give a non-deterministic finite state automaton with 3 states that accepts the following language.
$$
\left\{w b a \mid w \in \Sigma^{*}\right\}
$$

(2) Show the minimal deterministic finite state automaton that accepts the language given in question (1).

(3) Prove that the following language $L$ over $\Sigma$ is not regular. You may use the pumping lemma for regular languages.
$$
L=\left\{w^{R} b a w \mid w \in \Sigma^{*}\right\}
$$
Here, $w^{R}$ denotes the reverse of $w$. For example, $(a b b)^{R}=b b a$.

(4) Is the language $L$ in question (3) a context-free language? If it is, construct a context-free grammar that generates $L$. If not, prove that $L$ is not a context-free language.

## Problem 4
Answer the following questions on digital circuits.
(1) Provide a Boolean expression of the output D according to the following truth table. Design and depict a corresponding combinational circuit by using at most six 2-input NAND gates.

Truth table
| Input |  |  | Output |
| :---: | :---: | :---: | :---: |
| A | B | C | D |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |


(2) Depict the internal structure of a D-flip-flop, and explain how the D-flip-flop holds a 1-bit value.

(3) Consider a clock-synchronous sequential circuit with a 1-bit input CLK, a 1-bit input $\mathbf{X}$, and a 1-bit output Y, where the input CLK is used for the clocking. The output Y is '1' when the number of ' 1 ' in the input $\mathrm{X}$ values in the past three clock cycles (excluding the current clock cycle) is greater than the number of ' 0 '. Otherwise, the output $Y$ is ' 0 '. The output $\mathrm{Y}$ may be any value during the initial three clock cycles after the circuit is powered on. Assume that the circuit satisfies the setup-time and hold-time constraints. Design and depict the circuit. You may use at most two D-flip-flops and an arbitrary number of 2-input AND gates, 2-input OR gates, and NOT gates, if necessary.

# 2022 Winter Math

## 第 1 問

以下の $x, y, z \in \mathbb{R}$ に関する複数の条件を考える.
$$
\left\{\begin{array}{cc}
0<z-x y & <1 \\
0<z-(x+y)^{2} & <-x y
\end{array}\right.
$$
$\Omega$ を上記の条件を満たす $z$ が一つでも存在するような点 $(x, y)$ の集合とする. $\Omega$ は三次元デ カルト座標系において上記の条件を満たすような点 $(x, y, z)$ の集合を $x y$ 平面上に正射影し た図形とも解釈できる. 以下の問いに答えよ.

(1) $\Omega$ を $x$ と $y$ に関する不等式で表現せよ.

(2) 集合 $\Omega$ を $x y$ 平面上に図示せよ. 図形の境界が $x$ 軸, $y$ 軸と交わる場合は, その交点 の座標も明記せよ.

(3) 集合 $\Omega$ の境界の湾曲した区間は, 単位円の複数の円弧をある線形変換行列 $\mathbf{X}$ で変換 した図形になっている. このような Xを一つ求めよ. ただし, 単位円上の点 $(1,0)$ は, 湾曲した区間の最も曲率の高い点に変換されなければならない.

(4) (3)で求めた X の行列式を求めよ.

(5)集合 $\Omega$ の面積を求めよ. ただし, 図形を線形変換した場合の面積変化率は, その線形 変換行列の行列式の絶対值に等しいことを用いてもよい.

## Problem 1
Consider the following multiple conditions on $x, y, z \in \mathbb{R}$.
$$
\left\{\begin{array}{cc}
0<z-x y & <1 \\
0<z-(x+y)^{2} & <-x y
\end{array}\right.
$$

Let $\Omega$ be the set of points $(x, y)$ for which at least one $z$ exists satisfying the above conditions. Note that the set $\Omega$ can be seen in the three-dimensional Cartesian coordinate system as the orthogonal projection of points $(x, y, z)$ satisfying the above conditions onto the $x y$-plane. Answer the following questions.

(1) Find the inequalities on $x$ and $y$ representing $\Omega$.

(2) Draw a figure of $\Omega$ in the $x y$-plane. If the boundary of $\Omega$ intersects with the $x$-axis or the $y$-axis, write down the coordinates at each intersection.

(3) The curved segments of the boundary of $\Omega$ correspond to the linear transformation of arcs of the unit circle with a matrix $\mathbf{X}$. Find one such $\mathbf{X}$. Note that the point $(1,0)$ on the unit circle must be transformed to a point where the curvature is maximized in the curved segments.

(4) Calculate the determinant of $\mathbf{X}$ found in (3).

(5) Calculate the area of the set $\Omega$. Note that the absolute value of the determinant of a matrix is the area scale factor of the transformation with that matrix.

## 第 2 問

$\alpha \geq 1$ と $n>0$ に対し以下の積分 $I_{n}(\alpha)$ を考える.
$$
I_{n}(\alpha)=\int_{\frac{1}{n}}^{n} \frac{f(\alpha x)-f(x)}{x} \mathrm{~d} x
$$
ただし， 実数值関数 $f(x)$ は $x \geq 0$ において連続かつ微分可能で，導関数が連続であり, $\displaystyle \lim _{x \rightarrow \infty} f(x)=0$ が成り立つと仮定する. 以下の問いに答えよ.

(1) $\displaystyle J_{n}(\alpha)=\displaystyle \frac{\mathrm{d} I_{n}(\alpha)}{\mathrm{d} \alpha}$ とおく. $\displaystyle J_{n}(\alpha)=\frac{1}{\alpha}\left(f(\alpha n)-f\left(\frac{\alpha}{n}\right)\right)$ であることを示せ. ここでは, 積分と微分が交換可能であることを用いてよい.

(2) $\displaystyle I(\alpha)=\lim _{n \rightarrow \infty} I_{n}(\alpha)$ とおく. 任意の $\beta \in[1, \alpha]$ に対して $\displaystyle \lim _{n \rightarrow \infty} J_{n}(\beta)$ が存在し, かつ, これが $[1, \alpha]$ 上一様収束することを示し,

$$
I(\alpha)=\int_{1}^{\alpha}\left(\lim _{n \rightarrow \infty} J_{n}(\beta)\right) \mathrm{d} \beta
$$
であることを示せ.

(3) $I(\alpha)$ を求めよ.

(4) 以下の積分を求めよ. ただし, $p>q>0$ とする.
$$
\int_{0}^{\infty} \frac{e^{-p x} \cos (p x)-e^{-q x} \cos (q x)}{x} \mathrm{~d} x
$$

## Problem 2

Consider the following integral $I_{n}(\alpha)$ for $\alpha \geq 1$ and $n>0$.
$$
I_{n}(\alpha)=\int_{\frac{1}{n}}^{n} \frac{f(\alpha x)-f(x)}{x} \mathrm{~d} x
$$
Assume that a real-valued function $f(x)$ is continuous and differentiable on $x \geq 0$, its derivative is continuous, and $\displaystyle \lim _{x \rightarrow \infty} f(x)=0$. Answer the following questions.

(1) Define $\displaystyle J_{n}(\alpha)=\frac{\mathrm{d} I_{n}(\alpha)}{\mathrm{d} \alpha}$. Show that $\displaystyle J_{n}(\alpha)=\frac{1}{\alpha}\left(f(\alpha n)-f\left(\frac{\alpha}{n}\right)\right)$.

You can use the fact that the integration and the differentiation commute in this context.

(2) Define $\displaystyle I(\alpha)=\lim _{n \rightarrow \infty} I_{n}(\alpha)$. Show that $\displaystyle \lim _{n \rightarrow \infty} J_{n}(\beta)$ exists for any $\displaystyle \beta \in[1, \alpha]$ and it uniformly converges on $[1, \alpha]$, and show that
$$
I(\alpha)=\int_{1}^{\alpha}\left(\lim _{n \rightarrow \infty} J_{n}(\beta)\right) \mathrm{d} \beta .
$$

(3) Obtain $I(\alpha)$.

(4) Calculate the following integral. Note that $p>q>0$.
$$
\int_{0}^{\infty} \frac{e^{-p x} \cos (p x)-e^{-q x} \cos (q x)}{x} \mathrm{~d} x
$$

## 第 3 問

$x y$ 平面上に, $0<x<1$ かつ $0<y<1$ で定義される領域 $R$ を考える. $R$ 上にランダムに 1 点を選び, それを点 $\mathrm{A}$ とする. ただし, 点 $\mathrm{A}$ は $R$ 上に一様に分布するとする. 図に表すよ うに, 点 $\mathrm{A}$ から $y$ 軸への垂線を $\mathrm{AB}$, 点 $\mathrm{A}$ から $x$ 輣への垂線を $\mathrm{AC}$ とする. 原点を $\mathrm{O}$ とした とき, 長有形 $\mathrm{OCAB}$ を「点 $\mathrm{A}$ の長方形」と呼ぶ. また, 点 $\mathrm{A}$ の長友形の面䅡を表す確率変 数を $S$ とする. 以下の問いに答えよ.

(1) $S$ の期待值を求めよ.

(2) $S \leq r$ となる確率を求めよ. ただし $0<r<1$ とする.

(3) $S$ の確率密度関数を求めよ.
再び, 領域 $R$ を考える. $n$ を正の整数とする. $R$ 上にランダムに $n$ 点を選び, それらを点 $\mathrm{A}_{1}, \mathrm{~A}_{2}, \ldots, \mathrm{A}_{n}$ とする. ただし, 各点は $R$ 上に一梂に分布し, $i \neq j$ である $\mathrm{A}_{i}$ と $\mathrm{A}_{j}$ は独立 に選ばれるとする. 次の問いに答えよ.

(4) 点 $\mathrm{A}_{i}$ の長方形の面積を表す確率変数を $S_{i}$ とする. $Z$ を $S_{1}, S_{2}, \ldots, S_{n}$ の最小值を表 す確率変数とする. この時, $Z$ の確率密度関数を求めよ.

{% image https://search.pstatic.net/common/?src=https://i.imgur.com/MflVU51.jpeg::width=300px::alt=第 3 問 %}

## Problem 3
Consider a region $R$ defined by $0<x<1$ and $0<y<1$ in the $x y$-plane. We randomly select a point on $R$ and refer to the selected point as $\mathrm{A}$. We assume that $\mathrm{A}$ is uniformly distributed on $R$. Let $\mathrm{AB}$ be a perpendicular line from $\mathrm{A}$ to the $y$-axis and $\mathrm{AC}$ be a perpendicular line from A to the $x$-axis as shown in the figure. We call rectangle OCAB as "the rectangle of $\mathrm{A}$ ", where $\mathrm{O}$ denotes the origin. Let $S$ be a random variable representing the area of the rectangle of $\mathrm{A}$. Answer the following questions.

(1) Calculate the expectation value of $S$.

(2) Calculate the probability that $S \leq r$ holds, where $0<r<1$.

(3) Calculate the probability density function of $S$.
Again consider the region $R$. Let $n$ be a positive integer. We select $n$ points on $R$ and refer to the selected points as $A_{1}, A_{2}, \ldots, A_{n}$. We assume that each of the points is uniformly distributed on $R$, and $\mathrm{A}_{i}$ and $\mathrm{A}_{j}$ for $i \neq j$ are selected independently. Answer the following question.

(4) Let $S_{i}$ be a random variable representing the area of the rectangle of $\mathrm{A}_{i}$. Let $Z$ be a random variable which is the minimum of $S_{1}, S_{2}, \ldots, S_{n}$. Calculate the probability density function of $Z$.

{% image https://search.pstatic.net/common/?src=https://i.imgur.com/MflVU51.jpeg::width=300px::alt=Problem 3 %}
