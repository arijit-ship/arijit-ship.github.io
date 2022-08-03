# SIMPSONS 1/3-RD RULE
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

**Working Formula**

$$ \int_{a}^{b}f(x)dx\approx \frac{h}{3}\left [ f(a)+f(b)+4*\sum f_{odd} + 2*\sum f_{even}\right ] $$
$$ \texttt{Where,} h = \frac{(b-a)}{n} = \texttt{Step size}; n=\texttt{Steps count and must be an even integer} $$

## 1. Basic example on Simpson 1/3-rd rule:
<hr style="height: 2px; border: none; background: black">
<br><br>
$$ \int_{1}^{5}(x^{2}+3x)dx $$
<br><br>

<b>

```c++
/*Simpson's 1/3-rd rule*/

#include<iostream>
#include<cmath>
using namespace std;

float f(float x){
    return x*x + 3*x;
}

//Simpson(lower, upper, steps count)
float simpson(float a, float b, int n){

    //Step length
    float h = (b-a)/n;
    float sum_odd = 0, sum_even = 0;

    //Odd sum
    for(int i=1; i<n; i+=2){
        sum_odd += f(a + i*h);
    }
    //Even sum
    for(int i=2; i<=(n-2); i+=2){
        sum_even += f(a + i*h);
    }

    return (h/3)*((f(a) + f(b) + 4*sum_odd + 2*sum_even));

}

int main(){
    float up, low;
    int step;
    cout<<"**********SIMPSON 1/3-rd RULE**********************\nEnetr lower limit, upper limit and the steps count(even integer): \n";
    cin >> low >> up >> step;
    float result  = simpson(low, up, step);
    cout<<"Result is: "<<result;
    return 0;
}
```
</b>

## 2. Convergence of steps count 'n' :
<hr style="height: 2px; border: none; background: black">

<br><br>
$$ \texttt{Converge the integral for steps count until the error is less than }10^{-4}. $$
$$ \int_{0}^{\pi /2}sin(x)dx $$
<br><br>

<b>

```c++
/*Simpson's 1/3-rd rule*/

#include<iostream>
#include<cmath>
using namespace std;

float f(float x){
    return sin(x);
}

//Simpson(lower, upper, steps count)
float simpson(float a, float b, int n){

    //Step length
    float h = (b-a)/n;
    float sum_odd = 0, sum_even = 0;

    //Odd sum
    for(int i=1; i<n; i+=2){
        sum_odd += f(a + i*h);
    }
    //Even sum
    for(int i=2; i<=(n-2); i+=2){
        sum_even += f(a + i*h);
    }

    return (h/3)*((f(a) + f(b) + 4*sum_odd + 2*sum_even));

}

int main(){
    float up = M_PI/2.0, low = 0;
    int n = 0; //Steps: must be even integer

    cout<<"**********SIMPSON 1/3-rd RULE**********************\n";

    //Convergence of steps
    while(abs(simpson(low, up, n+2) - simpson(low, up, n)) >= pow(10, -5.0)){
        cout << "At n = "<<n<<", I = " << simpson(low, up, n)<<endl;
        n += 2;
    }
    cout << "Converged at n = "<<n<<endl;
    cout << "Result : "<<simpson(low, up, n);
    return 0;
}
```
</b>