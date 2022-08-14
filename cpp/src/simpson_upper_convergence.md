# SIMPSON UPPER LIMIT CONVERGENCE
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

**📢Problem**

$$ \int_{0}^{\infty }x^{2}e^{-x^{2}}dx $$
<br><br>

<b>

```c++
/**
 * @file 3.simpson_converge.cpp
 * @author Arijit Das
 * @brief Simpson 'n' and 'b'(b tends to infinity) convergence
 * @version 0.1
 * @date 2022-08-14
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
#include<cmath>

using namespace std;

struct conv{
    int num;
    float integral;
};

float f(float x){
    return (x*x)*exp(-x*x);
    //return sin(x);
}

float Simpson(float a, float b, float n){
    float h = (b-a)/n;
    float sum_odd = 0, sum_even = 0;

    for(int i=1; i<n; i+=2){
        sum_odd += f(a + i*h);
    }
    for(int i=2; i< n-2; i+=2){
        sum_even += f(a+i*h);
    }

    return (h/3)*(f(a)+f(b)+ 4*sum_odd + 2*sum_even);
}

conv converge_n(float b){

    conv out; //For storing Integral val and 'n'
    int n = 0;
    float a= 0, result=0;

    while(abs( Simpson(a, b, n+2) - Simpson(a, b, n) ) >= pow(10, -5.0) ){
        result = Simpson(a, b, n);
        n += 2;
    }
    out.num = n;
    out.integral = result;

    return out;
}

int main(){

    float b=1, integral_val, err = 1.0, s1 = 0;
    
    while(abs(converge_n(b+0.01).integral - converge_n(b).integral) >= pow(10, -5)){
        integral_val = converge_n(b).integral;
        err = abs(integral_val - s1);
        s1 = integral_val;
        b += 0.01;

        cout<<"At b= "<<b<<", Integral = "<<integral_val<<" and n= "<<converge_n(b).num<<endl;
    }

    cout<<endl<<"Value of the integral: "<<integral_val<<" , b: "<< b <<" and n:"<<converge_n(b).num<<endl;

    return 0;
}
```
</b>
