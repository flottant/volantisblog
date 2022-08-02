---
title: 公式与代码排版测试
date: 2022-07-17 23:41:22
tags: [测试, 排版]
categories: [测试]
description: 使用 Katex 渲染公式。
plugins:
  - katex
---

$$
f(x)=\int_{-\infty}^\infty\widehat f\xi\,e^{2\pi i\xi x}\,d\xi
$$

$$
\iint_{\Sigma}\begin{vmatrix} \cos \alpha & \cos \beta & \cos \gamma \\ \cfrac{\partial}{\partial x} & \cfrac{\partial}{\partial y} & \cfrac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}dS=\oint_{\Gamma}Pdx+Qdy+Rdz
$$ 

$x_1$

正常字体测试。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello World!" << endl;
    return 0;
}
```