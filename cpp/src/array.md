# ARRAY
<hr style="height: 5px; border: none; background: rgb(71,55,255); background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">


Arrays are fixed-size sequence containers: they hold a specific number of elements ordered in a strict linear sequence. Arrays are used for storing multiple values in a single object(kinda like variable). Each value is called an element of the array and the total number of elements in the array is called array length. Each element has an index. In C++ all the elements in an array have to be of the same type and indexing starts from zero.  
  
For example `[1, 2, 3, 4, 5]` is an array of integers or `[1.0, 2.0, 3.0]` is an array of floating numbers.

## Creating an array in C++
<hr style="height:1px; background: black; border: none;">


To declare an array, define the variable type, specify the name of the array followed by  **square brackets**  and specify the number of elements it should store:

👉 Declare an array to store any of 5 anime characters' name:

<b>

```c++
string name[5] = {"Inuyasha", "Ichigo", "Elrick", "Shibazaki", "Natsu"}
```
</b>


**👌Accessing array element: Now write a code to print "Elrick"**

The index of Inuyasha is 0, Ichigo is 1, Elrick is 2 and so on. We need these indices to access the array elements.

<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {
    
   string name[5] = {"Inuyasha", "Ichigo", "Elrick", "Shibazaki", "Natsu"};
   cout << name[2];
   
   return 0;
}
```
</b>


**✌C'mon! Lets print other characters too.**  
  
Again you can do this manually by writing `cout<<` for each element. This method is not pragmatic when you have an array of larger size. So we will be using for loop to print each element of `name`.
<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {
    
   string name[5] = {"Inuyasha", "Ichigo", "Elrick", "Shibazaki", "Natsu"};
   
   for(int i=0; i<=4; i++){
   
       cout << name[i]+"\n";
       
   }
   
   return 0;
}
```
</b>

>
⚡Here we are running the loop from `i=0` to `i=4` i.e. total 5 values of `i` since we know that the array length is 5. **But what if we had an array and we didn't know its length?!**


## Populating an array with user inputs
<hr style="height:1px; background: black; border: none;">

⚡ Here we'll populate an array with some user-inputs.

<b>

```c++
#include <iostream>
#include<string>
using namespace std;

int main() {
    //Declare an array
    string name[5];
    cout<<"Enter your all time fovorite 5 anime:\n";
    
    //Storing user inputs in the array cells
    for(int i = 0; i<4; i++){
        cout<<"No #"<<(i+1)<<": ";
        cin>>name[i];
    }
    
    //Printing stored values 
    for(int i = 0; i<4; i++){
        cout<<"Anime no."<<(i+1)<<" "<<name[i]<<"\n";
    }
    
    return 0;
}
```
</b>

## 🚧Finding length of an array:
<hr style="height:1px; background: black; border: none;">

Finding array length is bit tricky in C++. Here we'll use  `sizeof()`  function to  _calculate_  an array length:  `sizeof()`  returns the total size of an array(or any data type). Now, dividing the total size by the size of any array-element's data-type, we'll get the length of the array.

👍For example,  `integer_array = [10 ,25, 37, 56,63, 100]`  So here length of the array is  `(Total size of the array/Size of an integer)`.  
  
🤔Now you may ask,  _how do I know the size of an integer?!_  Well you can remember it!! But that will be so painstaking task to remember size of every data-type. So again we can use  `sizeof()`  function to get the size of an integer(or any other data type).

<b>

```c++
#include <iostream>
using namespace std;

int main() {
    // declaring the array of integer type
    int integer_array[]= {10 ,25, 37, 56,63, 100};
    
    //calculating length. You can divide by size of any array element since all elements are of integer type
    int length = sizeof(integer_array)/sizeof integer_array[0];
    
    cout << length;

    return 0;
}
```
</b>
<br><br>

**🦥 Now programmers are lazy creatures! So there should be a better way of finding array length. Because in real world software development, you don't want to write that much just to get an array length.**

👌Well there is a dedicated *class*(we'll discuss about class later) called `array` which does all array-related stuff for you. The following code, find the array in more delicate way:
<b>

```c++
#include <iostream>
#include<array>
using namespace std;

int main() {
    
    // Declaring an array by uing 'array' keyword followed by type and length inside angular brackets
    array<int, 6> integer_array{10, 25, 37, 56,63, 100};
    
    //arrayname.size() returns the length of the array
    cout << integer_array.size();

    return 0;
}
```
</b>

>😅**Note**: In the above code you probably have noticed that we're declaring array in different way: first we use `array` keyword followd by array elements' data-type, length of the arrray inside `<>`. `arrayname.size()` returns the 'size' (here size refers to length) of an array. Now its a bit stupid for find an array length which we have already specified in `array<int, 6>`!!

🚀 _Related topic:_  [Vector](vector.html)

