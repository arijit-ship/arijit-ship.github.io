# CONDITIONAL STATEMENTS
<hr style="height: 5px; border: none; background: rgb(71,55,255); background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">

>In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over - [MDN](https://developer.mozilla.org/)


⚡C++ has the following conditional statements:

-   Use  `if`  to specify a block of code to be executed, if a specified condition is true
-   Use  `else`  to specify a block of code to be executed, if the same condition is false
-   Use  `else if`  to specify a new condition to test, if the first condition is false
-   Use  `switch`  to specify many alternative blocks of code to be executed


## If-else statement in C++
<hr style="height:1px; background: black; border: none;">

👉Boilerplate:

<b>

```c++
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```
</b>


👉Let's begin with an example. Here we'll be using if-else statement for making decisions. Here user will enter an input interger and we will be checking wheather it is an odd number or an even number.

<b>

```c++
/*
* Written by Arijit Das, 2022
* C++ code to check if an integer is odd or even using if-else statements
*/
#include <iostream>
using namespace std;

int main() {
    //First declare variable of type interger for storing the input
    int x;
    
    //Ask to enter an integer
    cout << "Enter an interger\n";
    
    //Assign the input integer to the variable
    cin >> x;
    
    //Checking if it's odd or even using if-else statements
    if(x%2 == 0){
        cout << "Even number";
    }
    else{
        cout << "Odd number";
    }
    return 0;
}
```
</b>

>⚡In the above code we're using comments for better understanding. Comments are ignored during compilation. Having comments on your code is a good practice, it help you and other understand the code. For single line coment use `/`(forward slash) for multiline comments use `/*Multiline comments*/`

>**✍Note**  `%` is called _modulo operator_. `x%2` returns the value of remainder after dividing x by 2. `==` is another operator which comapres two values. If value matches it returns `true` otherwise `false`. So with `x%2 == 0`, we are comparing the value of remainder to zero, if it is zero, then x is an even number otherwise is an odd number.


## Switch-case
<hr style="height:1px; background: black; border: none;">

Switch-case is used for selecting one of many code-blocks to be executed.

✍Boilerplate:
<b>

```c++
switch(_expression_) {  
case  x:  
_// code block_  
break;  
case y:  
_// code block_  
break;  
default:  
_// code block_  
}
```
</b>

<br><br>
👌Example: A nice example from W3 School
<br>
<b>

```c++
#include <iostream>
using namespace std;

int main() {
  int day = 4;
  switch (day) {
  case 1:
    cout << "Monday";
    break;
  case 2:
    cout << "Tuesday";
    break;
  case 3:
    cout << "Wednesday";
    break;
  case 4:
    cout << "Thursday";
    break;
  case 5:
    cout << "Friday";
    break;
  case 6:
    cout << "Saturday";
    break;
  case 7:
    cout << "Sunday";
    break;
  }
  return 0;
}
```
</b>

>👀 beak keyword stops further execution of a code block. By using it properly, a lot of execution time can be saved.