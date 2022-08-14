# RUNGE KUTTA 4TH ORDER(RK 4)
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

**🔥Algorithm**


```
        k1 = h*f(x0, y0);
        k2 = h*f(x0 + h/2, y0 + k1/2);
        k3 = h*f(x0 + h/2, y0 + k2/2 );
        k4 = h*f(x0 + h, y0 + k3);

        y0 = y0 + (k1 + 2*k2 + 2* k3 + k1)/6.0;
        x0 = x0 + h;
```

<br><br>

$$ \frac{dy}{dx}-2xy=0; \texttt{ with at }x=0; y=0 $$
<br><br>
<b>

```c++
/**
 * @file rk.cpp
 * @author Arijit Das
 * @brief RK 2nd order for solving ODE
 * @version 0.1
 * @date 2022-08-15
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
#include<fstream>
using namespace std;

float f(float x, float y){
    return -2*x*y;
}

int main(){
    float x0 = 0, y0 = 1, k1, k2, k3, k4, y;
    
    int n;
    cout<<"Enter no of steps: \n";
    cin>>n;
    float h = (10 - x0)/n;
    ofstream data("rk_data.txt");

    for(int i = 0; i<n; i++){

        k1 = h*f(x0, y0);
        k2 = h*f(x0 + h/2, y0 + k1/2);
        k3 = h*f(x0 + h/2, y0 + k2/2 );
        k4 = h*f(x0 + h, y0 + k3);

        y0 = y0 + (k1 + 2*k2 + 2* k3 + k1)/6.0;
        x0 = x0 + h;

        data<<x0<<" "<<y0<<endl;        

    }
    return 0;
}
```
</b>
