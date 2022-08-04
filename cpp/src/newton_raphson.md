# NEWTON–RAPHSON
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Newton-Raphson method is a root-finding algorithm is a root-finding algorithm which produces successively better approximations to the roots (or zeroes) of a real-valued function. 

**⚡Working Formula**

$$ f(x) \texttt{ is single variable real function and let } x_{0} \texttt{ be an initial guess for the root of }f, $$
$$ \texttt{then, the one of the approximate roots }$$
$$ x=x_{0}-\frac{f(x_{0})}{f'(x_{0})} $$

## A very basic example on Newton-Raphson
<hr style="height: 2px; border: none; background: black">

<br><br>

$$ \texttt{Find the approximate root of }f(x) = x^{2}-5x+6 $$

<br><br>

<b>

```c++
#include<iostream>
#include<cmath>
using namespace std;

//The function f(x)=x^2 - 5x +6
float f(float x){
    return (x*x) - 5*x + 6;
}

//Derivation of f(x)
float df(float x){
    return 2*x - 5;
} 

int main(){

    float a ; //Initial guess 
    cout << "Enter a guess value\n";
    cin >> a;
    float root = a - (f(a)/df(a)); //Working formula

    while(abs(f(root)) > 0.0001){
        root = a - (f(a)/df(a));
        a = root;
        cout << root << endl;
    }

    //cout << root;

    return 0;
}
```
</b>

## Finding root for a complex root using Newton-Raphson method
<hr style="height: 2px; border: none; background: black">


**⚡Working Formula for complex root**

$$ \texttt{A complex function: }f(z)=u(x,y)+iv(x,y) $$
$$ \texttt{Let, }x_{0} \texttt{ and }y_{0} \texttt{ be initial guess values, then} $$
$$ x = x_{0}-\frac{1}{D}\left [ v_{y}(x_{0},y_{0})\cdot u(x_{0},y_{0})- u_{y}(x_{0},y_{0})\cdot v(x_{0},y_{0})\right ] $$
$$ y = y_{0}-\frac{1}{D}\left [ v_{x}(x_{0},y_{0})\cdot u(x_{0},y_{0})+ u_{x}(x_{0},y_{0})\cdot v(x_{0},y_{0})\right ] $$
$$ \texttt{With, }D=u_x(x_{0}, y_{0})\cdot v_{y}(x_{0},y_{0})-u_{y}(x_0,y_0)\cdot v_{x}(x_{0},y_{0}) $$

<br><br><br>
**🔥Example**
<br>

$$ z^{2}+1=0 $$

<b>

```c++
// Find the roots of Z^2 + 1 = 0

#include <iostream>
#include <cmath>
using namespace std;

float u(float x, float y)
{
    return (x * x) - (y * y) + 1;
}

float v(float x, float y)
{
    return 2 * x * y;
}

// Derivative of u wrt x
float ux(float x, float y)
{
    return 2 * x;
}

// Derivative of u wrt y
float uy(float x, float y)
{
    return -2 * y;
}

// Derivative of v wrt x
float vx(float x, float y)
{
    return 2 * y;
}

// Derivative of v wrt y
float vy(float x, float y)
{
    return 2 * x;
}

int main()
{
    float x, y, D, e;

    cout << "Enter a guess roots of X and Y: \n";
    cin >> x >> y;
    cout << "Enter tolerance\n";
    cin >> e;
    while (abs(u(x, y) * u(x, y) + v(x, y) * v(x, y)) > e * e)
    {

        float D = (ux(x, y) * vy(x, y) - uy(x, y) * vx(x, y));

        x += -(vy(x, y) * u(x, y) - uy(x, y) * v(x, y)) / D;
        y += -(-vx(x, y) * u(x, y) + ux(x, y) * v(x, y)) / D;
    }

    cout << "X " << x << endl << "Y " << y << endl;
    return 0;
}
```
</b>



