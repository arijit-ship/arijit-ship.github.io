# POINTER 101
<hr style="height: 5px; border: none;
background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">
<br>

Here we'll be exploring some very beginners stuff in pointer.
<br><br>

I already mentioned, a point is a special kind of variable that stores memory address of another variable. Pointers are said to "point to" the variable whose address they store.


## Creating a pointer
<hr style="background: black">

To create a pointer specify the `data type` followed by dereference operator (`*`) and an identifier or name of your pointer variable:
<br><br>
👉A pointer variable with the name 'foo' point to another string variable.
```c++
int bar; //an int variable
int* foo; // a pointer variable to store memory address
```

>📢Note that the type of the pointer has to match the type of the variable your pointer is pointing to.

<br>

### 📌 An example:

_Ref_ : W3 School

```c++
string food = "Pizza";  // A food variable of type string
string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

// Output the value of food (Pizza)
cout << food << "\n";

// Output the memory address of food (0x6dfed4)
cout << &food << "\n";

// Output the memory address of food with the pointer (0x6dfed4)
cout << ptr << "\n";
```

## Get memory address and value using pointer:
<hr style="background: black">

In pointer you store memory address of another variable; however you can also get the value of that variable with pointer:

```c++
#include <iostream>
using namespace std;
int main() {
    
    int bar = 5;
    int*  foo = &bar;
    
    //Value of bar
    cout<<"bar = "<<bar<<"\n";
    
    //Value of bar using pointer
    cout<<"bar(using pointer) = "<<*foo<<"\n";
    
    //Memory address of bar using pointer
    cout<<"Memory address of bar: "<<foo<<"\n";

    return 0;
}
```

## Updating value with pointer:
<hr style="background: black">

A variable's value can be updated/modified using pointer:

```c++
#include <iostream>
using namespace std;
int main() {
    
    int bar = 5;
    int*  foo = &bar;
    
    //Value of bar
    cout<<"Old value: bar = "<<bar<<"\n";
    
    //Updating value of bar using the pointer
    *foo = 10;
    
    //New value of bar
    cout<<"New value: bar = "<<bar<<"\n";
    
    //Printing new value of bar with pointer
    cout<<"This new value is printed using pointer: bar = "<<*foo<<"\n";
    
    //Memory address of bar using pointer
    cout<<"Memory address of bar: "<<foo<<"\n";

    return 0;
}
```

