# SYNTACTIC SUGAR IN C++
<hr style="height: 5px; border: none; background: rgb(0,53,255);
background: linear-gradient(90deg, rgba(0,53,255,1) 0%, rgba(255,255,255,1) 100%);">
<br>

>🚧Advanced stuff!! You can ignore it!.

Syntactic sugar makes you code 'sweeter'!

## 📌Printing all array elements:
<hr style="background: black">
<br><br>

👉Previously, we've printed array using its indices. These are some alternative approaches:
<br><br>

**1️⃣ Using range-based for-loop**

```c++
#include <iostream>
using namespace std;
int main() {
    
    string name[5] = {"Inuyasha", "Ichigo", "Elrick", "Shibazaki", "Natsu"};
    
    for(const auto &value: name){
        cout<<value<<"\n";
    }

    return 0;
}
```
<br><br>

**2️⃣ Using iterators with `cbegin()` and `cend()`**

```c++
#include <iostream>
using namespace std;
int main() {
    
    string name[5] = {"Inuyasha", "Ichigo", "Elrick", "Shibazaki", "Natsu"};
    
    for(auto i = cbegin(name); i != cend(name);  i++){
        std::cout << *i << '\n';
    }

    return 0;
}
```
