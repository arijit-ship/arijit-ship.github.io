# MONTE CARLO INTEGRATION
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Not all integrals can be solved analytically as we have done in earlier chapters. We can use Monte-Carlo simulation to estimate an approximate value of an integral.

**🔥Monte Carlo integration code**
<b>

```c++
/**
 * @file 2.monte_carlo_integration.cpp
 * @author Arijit Das
 * @brief Evaluating definite integral using Monte Carlo simulation
 * @version 0.1
 * @date 2022-08-14
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
#include<cmath>
#include<ctime>
#include<cstdlib>
#include<array>

using namespace std; 

//Generating random number between a and b
float getRandom(float a, float b){

    //A random no between 0 to 1
    float random_no = rand()/float(RAND_MAX);

    //A random no between a to b
    random_no= a + (b-a)*random_no;
    return random_no;
}

//Function to be integrated
float f(float x){
    return sin(x); 
}

//Maxima and minima of the f(x)
array<float, 2> getExtrima(float low, float up){

    array<float, 2> extrimaArr; //Will be used for storing maxima and minima values
    float f_max = f(low), f_min = f(up), y=0;

    for(float x=low; x<=up; x+=0.01){

        if(f(x)>f_max){
            f_max = f(x);
        }
        else if(f(x)<f_min){
            f_min = f(x);
        }
    }

    if(f_max<0){
        f_max = 0.0;
    }
    else if(f_min>0){
        f_min = 0.0;
    }

    extrimaArr[0] = f_max;
    extrimaArr[1] = f_min;

    return extrimaArr; //First elemet maxima and second element minima

}

int main(){
    srand(time(NULL));

    int n=0;//Total random numbers
    float a=-M_PI/2, b=M_PI/2; //Limits 
    int c1=0, c2=0; // flags
    cout << "Enter total random numbers: \n";
    cin >> n;

    //cout << "Enter lower limit & upper limit: \n" ;
    //cin >> a >> b;

    array<float, 2> extrima = getExtrima(a, b);
    float f_max = extrima[0];
    float f_minima = extrima[1];    

    for(int i=0; i<n; i++){
        float x = getRandom(a, b);
        float y = getRandom(f(a), f(b));

        if(y>0 && y<f(x)){
            c1++;
        }
        else if(y<0 && y>f(x)){
            c2++;
        }
    }

    float area = ( ( (c1-c2)*1.0 )/n) * ( (b-a)*(f_max-f_minima) );

    cout<<area;

}
```
</b>