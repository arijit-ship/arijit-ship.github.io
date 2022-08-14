# RUNGE KUTTA 4TH ORDER(RK 4) FOR COUPLED DE
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

**⚡Algorithm**

```
        x0 = x0 + h;
        k1 = h*f1(x0, y0, z0);
        m1 = h*f2(x0, y0, z0);

        k2 = h*f1(x0+h/2.0, y0+k1/2.0, z0+m1/2);
        m2 = h*f2(x0+h/2.0, y0+k1/2.0, z0+m1/2);

        k3 = h*f1(x0+h/2.0, y0+k2/2.0, z0+m2/2);
        m3 = h*f2(x0+h/2.0, y0+k2/2.0, z0+m2/2);

        k4 = h*f1(x0+h, y0+k3, z0+m3);
        m4 = h*f2(x0+h, y0+k3, z0+m3);

        y0 = y0 + (1.0/6)*(k1 + 2*k2 + 2*k3 + k4);

        z0 = z0 + (1.0/6)*(m1 + 2*m2 + 2*m3 + m4);
```
<br><br>

**Problem📢**

$$ \frac{d^{2}y}{dx^{2}}+\omega _{0}^{2}y+cos(\omega x)=0; f(0)=0,f'(0)=0 $$

<br><br>

<b>

```c++
/**
 * @file 2.runge_kutta_for_second_oderde.cpp
 * @author Arijit Das
 * @brief Runge Kutta for second order coupled DE
 * @version 0.1
 * @date 2022-08-13
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
#include<fstream>
#include<cmath>
using namespace std;

//f"(x) + (w0^2)y = a*cos(wx) with f(0)=0 and f'(0) = 0

float f1(float x,float y,float z){
    return z;
   //return 2*cos(x)-y*cos(x);
}
float f2(float x,float y,float z){
    float w0=1,w=1;
    return -w0*w0*y+cos(w*x);
}

/*   Another example

float f1(float x, float y, float z){
    return z;
}

float f2(float x, float y, float z){
    
    return cos(x)-f1(x,y,z) + y;
}
*/


//Driver
int main(){

    float x0 = 0, y0 = 0, z0=0; //initial conditions

    float k1=0, k2=0, k3=0, k4=0, m1=0, m2=0, m3=0, m4=0;
    
    int n;
    cout<<"Enter no of steps: \n";
    cin>>n;
    float h = (50 - x0)/(1.0*n); //(b-a)/n
    ofstream data("rk_data_2nd.txt");

    for(int i=0; i<n; i++){

        x0 = x0 + h;
        k1 = h*f1(x0, y0, z0);
        m1 = h*f2(x0, y0, z0);

        k2 = h*f1(x0+h/2.0, y0+k1/2.0, z0+m1/2);
        m2 = h*f2(x0+h/2.0, y0+k1/2.0, z0+m1/2);

        k3 = h*f1(x0+h/2.0, y0+k2/2.0, z0+m2/2);
        m3 = h*f2(x0+h/2.0, y0+k2/2.0, z0+m2/2);

        k4 = h*f1(x0+h, y0+k3, z0+m3);
        m4 = h*f2(x0+h, y0+k3, z0+m3);

        y0 = y0 + (1.0/6)*(k1 + 2*k2 + 2*k3 + k4);

        z0 = z0 + (1.0/6)*(m1 + 2*m2 + 2*m3 + m4);

        data<<x0<<" "<<y0<<endl;   

    }
    return 0;
}
```
</b>
