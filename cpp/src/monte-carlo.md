# MONTE CARLO SIMULATION
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Monte Carlo Simulation, aka the Monte Carlo Method or a multiple probability simulation, is a mathematical technique, which is used to estimate the possible outcomes of an uncertain event. It relys on repeated random sampling to obtain numerical results. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/CmpWM2HMhxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Estimating the value of Pi
<hr style="height: 2px; border: none; background: black">

![Monte-Carlo](https://media.geeksforgeeks.org/wp-content/uploads/MonteCarlo.png)

### 📌Formulae

$$\frac{\textrm{Area of the circle}}{Area of the square}=\frac{\pi r^{2}}{4r^{2}}=\frac{\pi}{4}$$
$$\texttt{For a verylarge number of random points,} $$
$$ \frac{\pi}{4}=\frac{\textrm{no. of points generated inside the circle}}{\textrm{total no. of points generated or total no of points generated inside the square}} $$


### 🔥Code

<b>

```c++
/*Estimating PI using Monte Carlo simulation
*Needs random numbers
*/
#include<iostream>
#include<cstdlib>
#include<time.h>
using namespace std;

float getRandom(float a, float b){

    //A random no between 0 to 1
    float random_no = rand()/float(RAND_MAX);

    //A random no between a to b
    random_no= a + (b-a)*random_no;
    return random_no;
}

int main(){
    int total, flag=0;
    srand(time(NULL));
    cout<<"Random no counts: \n";
    cin >> total;
    for(int i=0; i<total; i++){
        float randX = getRandom(-1, +1);
        float randY = getRandom(-1, 1);        

        //cout<<randX<<endl;

        if( (randX*randX) + (randY*randY)<=1){
            flag += 1;
        }

    }

    float pi = (4*flag)/(1.0*total);
    cout << "Estimated Pi: " <<pi<<endl;
    return 0;
}
```
</b>