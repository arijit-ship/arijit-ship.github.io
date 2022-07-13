# SYNTACTIC SUGAR IN C++
<hr style="height: 5px; border: none; background: rgb(0,53,255); background: linear-gradient(90deg, rgba(0,53,255,1) 0%, rgba(255,255,255,1) 100%);">

>🚧Advanced stuff!! You can ignore it!

Syntactic sugar makes you code 'sweeter'!

## 📌Printing all array elements:
<hr style="height:1px; background: black; border: none;">

<br>
👉Previously, we've printed array using its indices. These are some alternative approaches:

### 1️⃣ Using range-based for-loop
<b>

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
</b>

### 2️⃣ Using iterators with `cbegin()` and `cend()`
<b>

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
</b>
