# LINEAR REGRESSION USING LEAST SQUARE FIT(LSF)
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Here we will be estimiting the best slope and y-intercept of a straight line, from a given set of data.

**👉Formule**


$$  \texttt{Solope  }m = \frac{\overline{xy}-\overline{x}\cdot \overline{y}}{\overline{x^{2}}-(\overline{x})^2} $$
$$ \texttt{intercept  }c = \overline{y}-m\overline{x} $$

$$ \texttt{where,  } \overline{xy}=\frac{1}{n}\sum x\textrm{  ;  } \overline{x^{2}}=\frac{1}{n}\sum x^{2}\textrm{  ;  }\overline{x}=\frac{1}{n}\sum x\textrm{  ;  }\overline{y}=\frac{1}{n}\sum y $$



## Derivation 
<hr style="height: 2px; border: none; background: black">

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DSQ2plMtbLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Read data from a file and estimate best slope and intercept
<hr style="height: 2px; border: none; background: black">

🚧I've used `vector` in this code; if case you don't know about this container, check out [Vector](./vector.md)

<b>

```c++
/*
*Linear regression code. Reading data from file and estimating slope and intercept
*/

#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;

int main()
{

    vector<float> x_data;
    vector<float> y_data;

    float sum_x = 0, sum_y = 0, x_bar = 0, y_bar = 0, x2 = 0, y2 = 0, x2_bar = 0, y2_bar = 0, xy = 0, xy_bar = 0, slope = 0, y_intercept = 0;

    //Data is store in 'data.dat' file. You can use some fake data to test the code.
    ifstream dataPt("data.dat");
    float n = 0;
    int i = 0;
    while (dataPt >> n)
    {
        //This is bit naive, storing x, y data based on their 'position' i.e. odd/even!! 
        if (i % 2 == 0)
        {
            x_data.push_back(n);
        }
        else
        {
            y_data.push_back(n);
        }
        i += 1;
        n += 1;
    }

    int size = x_data.size();
    for (int i = 0; i < size; i++)
    {
        sum_x = sum_x + x_data[i];
        sum_y = sum_y + y_data[i];

        x2 = x2 + (x_data[i] * x_data[i]);
        y2 = y2 + (y_data[i] * y_data[i]);

        xy = xy + (x_data[i] * y_data[i]);
    }

    x_bar = sum_x / size;
    y_bar = sum_y / size;

    x2_bar = x2 / size;
    y2_bar = y2 / size;

    xy_bar = xy / size;

    slope = (xy_bar - (x_bar * y_bar)) / (x2_bar - (x_bar * x_bar));
    y_intercept = y_bar - (slope * x_bar);

    cout << "Slope: " << slope << "\n";
    cout << "Y intercept: " << y_intercept << "\n";

    // cout<<"X sum"<<sum_x<<"\n";
    // cout<<"Y sum"<<sum_y<<"\n";

    return 0;
}
```

</b>