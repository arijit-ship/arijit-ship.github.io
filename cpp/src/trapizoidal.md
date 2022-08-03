# TRAPIZOIDAL METHOD
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

**Working Formula**



$$ \int_{a}^{b}f(x)dx \approx \frac{h}{2}*s = \frac{h}{2} * \left [ f(a) + f(b) + 2 * \sum_{i=1}^{n}f(a+ih) \right] $$
$$ \texttt{Where} $$
$$ h = \frac{(b-a)}{n} = \texttt{Step Size} $$

## 1. A very basic example on trapizoidal integration
<hr style="height: 2px; border: none; background: black">
<br><br>
$$ \int_{1}^{5}(x^{2}+3x)dx $$
<br><br>
<b>

```c++
/*Trapizoal method for solving definite integration*/

#include<iostream>
#include<cmath>
using namespace std;

//Define the function which is to be integrated

float f(float x){

    //f(x) = x^2 + 3x
    return x*x + 3*x;
}

float trapizoidal(float a, float b, float n){
    //Step side h
    float h = (b-a)/n;

    float s = f(a)+f(b);

    for(int i=0; i<n; i++){
        s += 2*f(a + i*h); 
    }

    float integral = (s*h)/2;
    return integral;
}

int main(){
    float x0, xn;
    int n;
    cout << "\n**************************INTEGRATION IN TRAPIZOIDAL METHOD*************************\n Enter the upper limit, lower limit and number of steps\n ";
    cin >> xn >> x0 >> n;
    // cin >> xn; //Upper limit
    // cin >> x0; //Lower limit
    // cin >> n; //Steps

    float result = trapizoidal(x0, xn, n);
    cout <<"RESULT IS: "<<result<<endl;
    return 0;
}
```
</b>

## 2. Convergence of steps count n:
<hr style="height: 2px; border: none; background: black">

<br><br>
$$ \texttt{Converge the integral for steps count until the error is less than }10^{-4}. $$
$$ \int_{0}^{\pi /2}sin(x)dx $$
<br><br>

<b>

```c++
/*Trapizoal method for solving definite integration.
*Checking convergence
*/

#include<iostream>
#include<cmath>
using namespace std;

//Define the function which is to be integrated

float f(float x){

    return sin(x);
}

float trapizoidal(float a, float b, float n){
    //Step side h
    float h = (b-a)/n;

    float s = f(a)+f(b);

    for(int i=0; i<n; i++){
        s += 2*f(a + i*h); 
    }

    float integral = (s*h)/2;
    return integral;
}

int main(){
    float x0 = 0, xn= M_PI/2.0;
    int n = 1;
    cout << "**************************INTEGRATION IN TRAPIZOIDAL METHOD*************************";
   
    while(trapizoidal(x0, xn, n+1) - trapizoidal(x0, xn, n) >=pow(10.0,-4.0)){

        cout << trapizoidal(x0, xn, n) << endl;
        n += 1;
    }
    cout << "No of steps: "<<n;
    return 0;
}
```
</b>