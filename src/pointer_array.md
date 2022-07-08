# POINTER WITH ARRAY
<hr style="height: 5px; border: none;
background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">
<br>

🚧As discussed earlier, pointer is a special kind of variable that stores memory address of another variable which it is pointing to. In addition to this, pointer can also store the address of array cells and thus array cells(thereby elements) can be accessed.

<br><br>
_Reference_: <a href='https://www.programiz.com/cpp-programming/pointers-arrays'>Programiz</a>

<br>

## 👌Pointer with array with some examples:
<hr style="background: black">
<br>

**1️⃣ Storing the address of the first element of an array**

```c++
#include <iostream>
using namespace std;
int main() {

	//Array of type integer
    int bar[5];
    
    //Pointer to store memory address of first element of bar
    int* foo = bar;
    int* spam = &bar[0];
    
    cout<<"foo = "<<foo<<"\n";
    cout<<"spam = "<<spam;
    return 0;
}
```

👉 In the output, both `foo` and `bar` have the same value(a memory address). `int* foo = bar` and `int* spam = &bar[0]` both the equivalent code.

<br><br>
**2️⃣ Pointing to every array element**

In the above code `int* foo = bar`.<br><br>
`foo` is the memory address of `bar[0]`<br>
`foo + 1` is the memory address of `bar[1]` (i.e. `&bar[1]`) <br>
`foo + 2` is the memory address of `bar[2]` (i.e. `&bar[2]`)<br>
`foo + 3` is the memory address of `bar[3]` (i.e. `&bar[3]`)<br>
`foo + 4` is the memory address of `bar[4]` (i.e. `&bar[4]`)<br>

 
<br><br>

**3️⃣ Printing memory address with and without pointers**

```c++
#include <iostream>
using namespace std;

int main()
{
    int foo[5] = {11, 23, 31, 42, 51};
    int* pointer_foo = foo;
    
    //Printing address using array
    cout<<"Printing array memory addresses without pointer \n\n";
    for(int i=0; i<5; i++){
        cout<<"Address of foo["<<i<<"] is: "<< &foo[i]<<"\n";
    }
    
    //Printing address with array
    cout<<"\nPrinting array memory addresses with pointer\n\n";
    for(int i=0; i<5; i++){
        cout<<"Pointer 'pointer_foo"<<i<<"' is: "<<pointer_foo+i<<"\n";
    }
    return 0;
}
```

<br><br>

**4️⃣ Populating an array with user inputs using pointer**

```c++
#include <iostream>
using namespace std;

int main() {
    float arr[5];
    
   // Insert data using pointer notation
    cout << "Enter 5 numbers: ";
    for (int i = 0; i < 5; ++i) {

        // store input number in arr[i]
        cin >> *(arr + i) ;

    }

    // Display data using pointer notation
    cout << "Displaying data: " << endl;
    for (int i = 0; i < 5; ++i) {

        // display value of arr[i]
        cout << *(arr + i) << endl ;

    }

    return 0;
}
```

