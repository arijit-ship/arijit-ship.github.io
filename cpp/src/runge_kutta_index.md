# RUNGE-KUTTA
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

We will be solving differential equation using Runge-Kutta method:

## RK-2(second order aka Modified Euler method)
<hr style="height: 2px; border: none; background: black">

```
        k1=h*f(x0,y0)
        k2=h*f((x0+h),(y0+k1))
        y0=y0+(k1+k2)/2
        x0=x0+h
```

## RK-4(fourth order)
<hr style="height: 2px; border: none; background: black">

```
        k1 = h*f(x0, y0);
        k2 = h*f(x0 + h/2, y0 + k1/2);
        k3 = h*f(x0 + h/2, y0 + k2/2 );
        k4 = h*f(x0 + h, y0 + k3);

        y0 = y0 + (k1 + 2*k2 + 2* k3 + k1)/6.0;
        x0 = x0 + h;
```
