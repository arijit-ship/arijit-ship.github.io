# HELLO WORLD
<hr style="height: 5px; border: none; background: rgb(71,55,255); background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">

## ⚡Boilerplate:

<b>

```c++
#include<iostream>

int main()
{
    /*
    *Everything inside
    *here will be executed
    */
    return 0;
}
```
</b>
<br><br>
Open your favorite code editor and type the following lines of code:
<b>

```c++
#include <iostream>

int main(){
    std::cout<<"Hello World!";
    return 0;
}
```
</b>

👉After compiling and running it successfully, you should get `Hello World!` in the output.

Now let's break down the code---

|Snippet|Meaning|
|--|--|
|`#include<iostram>`|We are adding basic input-output functionalities to our code by including a library(aka a _header file_) called iostream. You need iostream for every C++ coding.|
|`int main()`|This is our main function. Everything inside this function will be executed. Here, the prefix `int` specifies return type of the main function.|
|`std::cout<<"Hello World!";`|To print _Hello World!_ write standard character output(`std::`) followed by `cout` followed by `<<` and a string literal. You can get rid of `std::` by adding `using namespace std;` on the top of `main()` function.|
|`return 0`|After executing everything, `main()` function returns an integer like 0 or 1: `0` means a normal exit and any non-zero integer means an abnormal exit. You don't need to dig into details at this point. Just remember it like some kind of _grammartical rule_. However, I'm putting a link for reference 👉[Stackoverflow](https://stackoverflow.com/questions/204476/what-should-main-return-in-c-and-c).|

> **🚧In C++,  `main()`  strictly needs to be  `int`!**

💡 Now to get rid of that `std::` we'll be using `using namespace std` from now on:
<b>

```c++
#include <iostream>
using namespace std;

int main() {
    //Printing 'Hello world!'
    cout<<"Hello world!";
    return 0;
}
```
</b>