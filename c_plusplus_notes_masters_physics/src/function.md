# FUNCTION
<hr style="height: 5px; border: none; background: rgb(71,55,255); background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">

👍A function takes one or many input(s) and spits out some output. The input(s) you pass to a function is/are called _parameter(s)_. Functions are reusable, you write once and call them many times whever you need them. To create (often referred to as _declare_) a function, specify the name of the function, followed by parentheses `( )`

✍Boilerplate:

<b>

```c++
void  functionName() {  
    // code to be executed  
}
```
</b>

>**⚡  `void`  means that the function does not have a return value.**

## Calling a  function
<hr style="height:1px; background: black; border: none;">


When you define a function, it is not executed immediately. They are "saved for later use", and will be executed later, when they are called. To call a function, write the function's name followed by two parentheses `()` and a semicolon `;`

**👉Examples**

**1. Printing "Hello World!" using function**

<b>

```c++
#include <iostream>
using namespace std;

//Defining out function
void printHelloWorld(){
   cout << "Hello World!";
}

int main() {
   
   //Calling the function
   printHelloWorld();
   return 0;
}
```
</b>


**2. Adding two numbers (user-input) using a function.**

<b>

```c++
/*
*Write a function to add two numbers. Pass the user-inputs to this function
*as parameter and call it.
*/
#include <iostream>
using namespace std;

float addTwoNum(float a, float b){
    return a+b;
}

int main() {
    
    cout<< "Enter two numbers: \n";
    float x, y;
    cin >> x;
    cin >> y;
    float result = addTwoNum(x, y);
    cout << result;

    return 0;
}
```
</b>

>✍Function `addTwoNum()` returns a floating point number. That's why instead of `void`, we are using `float addTwoNum()` .

## Function prototype
<hr style="height:1px; background: black; border: none;">

In the above examples if you define, `addTwoNum()` after `main()` function, it'd throw an error. However, you can declare a function before `main()` and then define it separately after `main()`.

<b>

```c++
#include <iostream>
using namespace std;

//Function prototype
float addTwoNum(float num1, float num2);

int main() {
    
    cout<< "Enter two numbers: \n";
    float x, y;
    cin >> x;
    cin >> y;
    float result = addTwoNum(x, y);
    cout << result;

    return 0;
}

//Defining
float addTwoNum(float a, float b){
    return a+b;
}
```
</b>


