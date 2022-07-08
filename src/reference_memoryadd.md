# REFERENCE & MEMORY ADDRESS
<hr style="height: 5px; border: none;
background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">
<br>

## 📌Reference
<hr style="background: black">
<br><br>

A `reference` is a variable which 'refers' to another existing variable. A reference is created using the ampersand operator(`&`):
 
 ```c++
 #include <iostream>
using namespace std;
int main() {

    string food = "rice"; //food variable
    string &meal = food; //reference to food
    
    return 0;
}
```

Now, we can use either the variable name `food` or the reference name `meal` to refer to the `food` variable:
```c++
#include <iostream>
using namespace std;
int main() {

    string food = "rice"; //food variable
    string &meal = food; //reference to food
    
    cout<<"Variable food: "<< food <<"\n";
    cout<<"Reference to food: "<<meal<<"\n";
    
    return 0;
}
```

## ✌Memory address
<hr style="background: black">
<br><br>

Earlier, we've used the `&` operator to create a reference to a variable. But it can also be used to get the memory address of a variable; which is the location of where the variable is stored on the computer.
<p>
When you declare a variable is C++, a memory address is assigned to that variable. And when we assign a value to the variable, it is stored in this memory address.

To access it, use the  `&`  operator, and the result will represent where the variable is stored:

```c++
#include <iostream>
using namespace std;
int main() {

    string food = "rice"; //food variable
 
    cout << "Memory address of variable 'food' : "<< &food <<"\n";
    
    return 0;
}
```

🤔Output: `Memory address of variable 'food' : 0x7ffeb2511150`

>The memory address is in hexadecimal. 
Here,  `0x`  at the beginning represents the address is in the hexadecimal form. Also, you may not get the exact same value, since you don't have any control which memory cells were to be allocated.

## Dereference operator (`*`)
<hr style="background: black">
<br><br>

I already mentioned, pointer is a special kind of variable that stores momory address of another variable.

An interesting property of pointers is that they can be used to access the variable they point to directly. This is done by preceding the pointer name with the dereference operator (*). The operator itself can be read as "value pointed to by". We'll see how to use it in the next chapter.
