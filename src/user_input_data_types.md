# USER INPUT & DATA-TYPES
<hr style="height: 5px; border: none; background: rgb(71,55,255);
background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">
<br>

## Taking user input:
<hr style="background: black">
Now will be seeing how to get an input from the user. Here we'll be using `cin >>` to assign the user input to a variable. The following code asks for your name(which is out input) and then greets you in the output.

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
<br><br>
👉When you run this code, it asks your name by displaying `Enter your name`. Then you type your name (say `Roy Mustang` for example) and hit the enter. Now you will see `Hello Roy Mustang! Nice to meet you.` Here you name was an input that you entered.

<br><br>
**A few things you may already have noticed**
<br><br>
✍ We're including another header `<string>` in our code. That's because, your name is a string i.e. sequence of characters. Unlike some other high level languages like python; C++ is statically typed and we need to tell the compiler beforehad that hey we are  going to use string in this code.


> **✌**: Another thing worth mentioning is that the above code might still work even without using `#include<string>`.  The implementation of `iostream` header file indirectly adds the string to your code. But this trick does not always work(depending on what you're doing), so its better to add string explicitly.


✍ Also from now on, we'll be dropping `std::` by adding `using namespace std` before starting `main()`.

**🚧 String Concatenation**: `+` is used for appending strings one by one.

## Data type:
<hr style="background: black">
Basic data-types in C++

|Type| Description |
|--|--|
| `int` | Stores integer |
| `float` | Stores decimal numbers |
| `char` | Stores a single character |
| `string` | Stores sequence of characters |
| `bool` | Stores true or false type |


























