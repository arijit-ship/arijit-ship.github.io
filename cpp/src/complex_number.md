# COMPLEX NUMBER: HOW TO IMPLEMENT IN C++
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

We will be usig `structure` for implementing complex number. A complex number has two parts: A real part and and an imaginaty part. We can define a custom data-type to storing these real and imaginary part.

## 1. Complex number using `structure`
<hr style="height: 2px; border: none; background: black">

<br>

<b>

```c++
/*Complex number using structure*/

#include<iostream>
using namespace std;

struct complex
{
    float real, imag;
};

int main(){
    complex z;
    cout<<"Enter the real and the imaginary part of the complex number\n";
    cin >> z.real >> z.imag;
    cout <<"Z = "<<z.real<<" + "<<z.imag<<"i"<<endl;

    return 0;
}

```
</b>

## 2. Complex algebra
<hr style="height: 2px; border: none; background: black">

<b>

```c++
/*Complex number using structure*/

#include <iostream>
#include <cmath>
using namespace std;

// Difining custom data-type 'complex'
struct complex
{
    float real, imag;
};

// Subroutine for complex numbers addition
complex complex_add(complex z1, complex z2)
{
    complex z;
    z.real = z1.real + z2.real;
    z.imag = z1.imag + z2.imag;

    return z;
}

// Subroutine for complex multiplication
complex complex_mul(complex z1, complex z2)
{
    complex z;

    z.real = (z1.real * z1.real) - (z1.imag * z2.imag);
    z.imag = (z1.real * z2.imag) + (z1.imag * z2.real);
    return z;
}

// Subroutine for calculating the mod
float complex_mod(complex z)
{
    return sqrt(z.real * z.real + z.imag * z.imag);
}

// Subroutine for calculating phase
float getPhase(complex z)
{
    float phase=0;
    if(z.real == 0){

        if (z.imag > 0){
            phase = M_PI/2;
        }
        else{
            phase = M_PI + M_PI/2;
        }
    }
    if(z.real > 0){
        phase = atan(z.imag/z.real);
    }
    if(z.real<0){
        phase = M_PI + atan(z.imag/z.real);
    }
    
    return phase; //in rad
}

int main()
{
    complex z1, z2;
    cout << "Real and imaginary parts of Z1: \n";
    cin >> z1.real >> z1.imag;
    cout << "Real and imaginary parts of Z2: \n";
    cin >> z2.real >> z2.imag;

    complex add, mul;
    float mod1, mod2, phase1, phase2;

    add = complex_add(z1, z2);
    mul = complex_mul(z1, z2);
    mod1 = complex_mod(z1);
    mod2 = complex_mod(z2);
    phase1 = getPhase(z1);
    phase2 = getPhase(z2);

    cout << "Z1 = " << z1.real << " + " << z1.imag << "i\n Z2 = " << z2.real << " + " << z2.imag << "i" << endl;

    cout << "Add: " << add.real << " + " << add.imag << "i" << endl;
    cout << "Mul: " << mul.real << "+" << mul.imag << "i" << endl;
    cout << "Amp(Z1): " << mod1 << endl;
    cout << "Phase(Z1)" << phase1 << endl;
    cout << "Amp(Z2)" << mod2 << endl;
    cout << "Phase(Z2) " << phase2 << endl;

    return 0;
}

```
</b>



