# USER INPUT, DATA TYPES
<hr style="height: 5px; border: none; background: rgb(71,55,255); background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">

## Taking user input
<hr style="height:1px; background: black; border: none;">

Now will be seeing how to get an input from the user. Here we'll be using `cin >>` to assign the user input to a variable. The following code asks for your name(which is out input) and then greets you in the output.
<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {
    string x;
    cout << "Enter your name: \n";
    cin >> x; 
    cout << "Hello " + x + ". Nice to meet you!";
    return 0;
}
```
</b>


👉When you run this code, it asks your name by displaying `Enter your name`. Then you type your name (say `Roy Mustang` for example) and hit the enter. Now you will see `Hello Roy Mustang! Nice to meet you.` Here you name was an input that you entered.
**A few things you may already have noticed**  
  
✍ We're including another header  `<string>`  in our code. That's because, your name is a string i.e. sequence of characters. Unlike some other high level languages like python; C++ is statically typed and we need to tell the compiler beforehad that hey we are going to use string in this code.

> **✌**: Another thing worth mentioning is that the above code might still work even without using  `#include<string>`. The implementation of  `iostream`  header file indirectly adds the string to your code. But this trick does not always work(depending on what you're doing), so its better to add string explicitly.

✍ Also from now on, we'll be dropping  `std::`  by adding  `using namespace std`  before starting  `main()`.

>**🚧 String Concatenation**: `+` is used for appending strings one by one.

## Data types
<hr style="height:1px; background: black; border: none;">

📌Basic data-types in C++

|Data type|Description|
|--|--|
|`int`|Stores integer|
|`float`|Srotes decimal number|
|`char`|Stores a single character|
|`string`|Stores sequence of characters|
|`bool`|Stores true or false type|

