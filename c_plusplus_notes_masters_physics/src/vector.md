# VECTOR
<hr style="height: 5px; border: none; background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">

**_Vectors are sequence containers representing arrays that can change in size._**  
  
🔥In C++, arrays are fixed-size data containers which means you have to know the array length beforehand. But often cases you may not know the exact number of elements that are going to be stored in an array! Well you can declare an array of arbitrarily large size(again here size refers to the length) and expect it to hold all the elements. But we have a more decent way of doing it by using another type of data containter called vector.

Just like arrays, vectors use contiguous storage locations for their elements, which means that their elements can also be accessed using offsets on regular pointers to its elements, and just as efficiently as in arrays. But unlike arrays, their size can change dynamically, with their storage being handled automatically by the container.  
  

🚀  _Read more:_  [https://m.cplusplus.com/reference/vector/vector/](https://m.cplusplus.com/reference/vector/vector/)


## Creating a vector
<hr style="height:1px; background: black; border: none;">


First thing's first. Add  `<vector>`  library along with the usual  `<iostream>`.  
  
✍Syntax to create a vector:  `std::vector<data_type> name (items);`

-   Write  `std::vector`  keyword. You may ignore  `std::`  if you have included  `using namespace std;`
-   `<data_type>`  specifies the type of data that the vector will store, and is surrounded by opening and closing angle brackets,  `<>`. Some examples of data types that can be stored are:  `<string>`s,  `<int>`s,  `double`s, and  `char`s. Note that the type of the vector cannot be changed once it has been declared.
-   Now you need to give an identifier or a name to the vector. Defining the data type and giving the vector a name are mandatory steps.
-   Optionally, you can specify the number of elements the vector will hold. This will define the size of the vector. It comes in handy when you don't know the specific values of the items that the vector will hold from the beginning, but you do know the size.
-   Lastly, don't forget to end the statement with a semicolon,`;`.


**Example**
<b>

```c++
#include <iostream>
#include <vector>
using namespace std;
int main() {

    //without specifying the number of elements
    //defines a vector named prices that stores floating point numbers

    vector<double> prices;

}
```
</b>

## Populating a vector
<hr style="height:1px; background: black; border: none;">


**👉Create a vector for storing names of some programming languages:**

To add items one at a time to the  **end**  of a vector, you use the  `.push_back()`  method.

<b>

```c++
#include <iostream>
#include <vector>
using namespace std;
int main() {

    vector<string> programming_lan;
    
    programming_lan.push_back("PHP");
    programming_lan.push_back("C#");
    programming_lan.push_back("C++");
    programming_lan.push_back("Python");
    programming_lan.push_back("Ruby on Rails");
    
}
```
</b>

**👉Now print all these stored items:**


To print _all_ the items, first we need to know the size of the vector(  _size_  means how many item(s) is/are stored).

⚡We can use  `vector_name.size()`  to get the size! It takes item(like string in this particular case) as the argument.
<b>

```c++
#include <iostream>
#include <vector>
using namespace std;
int main() {

    vector<string> programming_lan;
    
    programming_lan.push_back("PHP");
    programming_lan.push_back("C#");
    programming_lan.push_back("C++");
    programming_lan.push_back("Python");
    programming_lan.push_back("Ruby on Rails");
    
    int size = programming_lan.size();
    cout<<size;
    
    return 0;

}
```
</b>

Now can print all items...

>📢Indexing in vectors starts from 0 – the first item in a vector has an index of 0, the second item has an index of 1, and so on.

<b>

```c++
#include <iostream>
#include <vector>
using namespace std;
int main() {

    vector<string> programming_lan;
    
    programming_lan.push_back("PHP");
    programming_lan.push_back("C#");
    programming_lan.push_back("C++");
    programming_lan.push_back("Python");
    programming_lan.push_back("Ruby on Rails");
    
    int size = programming_lan.size();
    
    for(int i=0; i<size; i++){
        cout<<programming_lan[i]<<"\n";
    }
    
    return 0;

}
```
</b>

## Deleting intems form a vector
<hr style="height:1px; background: black; border: none;">


Uing  `vector_name.pop_back()`, you can delete the  **last**  item in a vector. Unlike  `vector_name.push_back()`  method which is used for adding elements, the  `.pop_back()`  function doesn't take any arguments.  
  

For example if we want to remove  `Ruby on Rails`(which is indeed the last item) from the vector  `programming_lan`, simply use  `programming_lan.pop_back();`. You can compare sizes before and after using  `.pop_back()`  method:
<b>

```c++
#include <iostream>
#include <vector>
using namespace std;
int main() {

    vector<string> programming_lan;
    
    programming_lan.push_back("PHP");
    programming_lan.push_back("C#");
    programming_lan.push_back("C++");
    programming_lan.push_back("Python");
    programming_lan.push_back("Ruby on Rails");
    
    //Prinitng size before deleting
    cout<<"Size before deleting: "<<programming_lan.size()<<"\n";
    
    //Deleting the last item which is Ruby on Rails
    programming_lan.pop_back();
    
    cout<<"Size after deleting the last item: "<<programming_lan.size();
    
    return 0;

}
```
</b>