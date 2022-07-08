# STRUCTURE, UNION AND ENUM
<hr style="height: 5px; border: none;
background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">
<br>

>😢It'd be catastrophic if your teacher introduces structures by asking you to calculate vector dot product(Physics) or some math stuff with complex number! You should start with some basic simple cases which can be implemented with structure and **vectors(Physics) or complex numbers** are definitely not good choices here.

## 1️⃣ Structure
<hr style="background: black">

The popular definition of structure is that "Structure is a user defined data type". Now at the beginning of this chapter, it may seem totally nonsensical when you write a structure, but bear with me, we'll get to this "user defined data type" after covering some basics. For now, it'd be better if we define  _Structures_ like this: **_Structures_ provide a way to put several variables into on place. These variables can be of different data types**.

<p>

Each variable in the structure is known as a _member_ of the structure.

###  👨‍👨‍👧‍👦 Creating a structure:


Use `struct` keyword and declare each of its members inside curly braces and then specify the name of the structure variable(s). For example:

```c++
struct{ // Structure declaration

 string name; //Member(type string)
 float age;	//Member(type float)
 string sex;	//Member(type string)
 
} person  //Name of the structure variable
```

### ✍ Accessing structure members:

To access a member of a structure, use `structure_name.member`. For example:

👉 To access `name`(a member) of the structure variable `person` use `person.name` .
<br>
👉 To access `age`, use `person.age`.

### ⚡Example: Assign data to members of a structure and print it:

```c++
#include <iostream>
using namespace std;
int main() {
    
    //Creating a structure named 'person'
    struct{
        string name;
        float age;
        string sex;
    }person;

    //Accessing members
    person.name = "Barack Obama";
    person.age = 60;
    person.sex = "male";
    
    cout<<"Name: "<<person.name<<"\n";
    cout<<"Age: "<<person.age<<"\n";
    cout<<"Sex: "<<person.sex<<"\n";
    return 0;
}
```

### 🚀One structure in multiple variables:

Here we have multiple persons(persion1, person2 and person3) and this how to do this:

```c++
struct{ // Structure declaration

 string name; //Member(type string)
 float age;	//Member(type float)
 string sex;	//Member(type string)
 
} person1, person2, person3  //Name of the structure variables
```

📌Example

```c++
#include <iostream>
using namespace std;
int main() {
    
    //Creating a structure named 'person'
    struct{
        string name;
        float age;
        string sex;
    }person1, person2, person3;

    //Accessing members
    person1.name = "Tanjiro kamado";
    person1.age = 15;
    person1.sex = "male";
    
    person2.name = "Lucy Heartfilia";
    person2.age = 17;
    person2.sex = "female";
    
    person3.name = "Izaya Orihara";
    person3.age = 25;
    person3.sex = "male";
    
	//Printing
    cout<<"Person 1: "<<"\n";
    cout<<"Name: "<<person1.name<<"\n";
    cout<<"Age: "<<person1.age<<"\n";
    cout<<"Sex: "<<person1.sex<<"\n\n";
    
    cout<<"Person 2:"<<"\n";
    cout<<"Name: "<<person2.name<<"\n";
    cout<<"Age: "<<person2.age<<"\n";
    cout<<"Sex: "<<person2.sex<<"\n\n";
    
    cout<<"Person 3: "<<"\n";
    cout<<"Name: "<<person3.name<<"\n";
    cout<<"Age: "<<person3.age<<"\n";
    cout<<"Sex: "<<person3.sex<<"\n\n";
    
    return 0;
}
```

### ⚡Named structure and "user defined data type":
<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💡**By giving a name to the structure, you can treat it as a data type.** This means that you can create variables with this structure anywhere in the program at any time.

To create a named structure, put the name of the structure right after the `struct` keyword:


🔨 Let's create a structure called `person` and then use it as a data-type:

```c++
struct person{
	
	string name;
	float age;
	string sex;
}
```

🔥Now lets use it as the user-defined data type:

```c++
#include <iostream>
using namespace std;
int main() {
    
    //Creating a structure named 'person'
    struct person{
        string name;
        float age;
        string sex;
    };
    
    //So now we have a user defined data type caleed 'person'
    person tanjiro; //Variable 'tanjiro' with 'person' data type
    person lucy;    //Variable 'lucy' with 'person' data type
    person izaya;   //Variable 'izaya' with 'person' data type
    
    tanjiro.name = "Tanjiro kamado";
    tanjiro.age = 15;
    tanjiro.sex = "male";
    
    lucy.name = "Lucy Heartfilia";
    lucy.age = 17;
    lucy.sex = "female";
    
    izaya.name = "Izaya Orihara";
    izaya.age = 25;
    izaya.sex = "male";

    //Printing
    cout<<"Person 1: "<<"\n";
    cout<<"Name: "<<tanjiro.name<<"\n";
    cout<<"Age: "<<tanjiro.age<<"\n";
    cout<<"Sex: "<<tanjiro.sex<<"\n\n";
    
    cout<<"Person 2:"<<"\n";
    cout<<"Name: "<<lucy.name<<"\n";
    cout<<"Age: "<<lucy.age<<"\n";
    cout<<"Sex: "<<lucy.sex<<"\n\n";
    
    cout<<"Person 3: "<<"\n";
    cout<<"Name: "<<izaya.name<<"\n";
    cout<<"Age: "<<izaya.age<<"\n";
    cout<<"Sex: "<<izaya.sex<<"\n\n";
    
    return 0;
}
```
<hr>
<br>
<br><br>

> 🚧The following two topics were not introduced in our class!

## 2️⃣ Union
<hr style="background: black">


👉 Just like structure, __union__ is also a user-defined data type and groups multiple variables of different data types. However, unlike **structure**, all members of a union has the same memory location meaning it's provides memory optimization. 
<br><br>
🤔 Earlier, we have created a structure named `person` with three members-- `name`, `age` and `sex`. In _structure_ there'll be memory allocation for all three members, but in case, you don't need all three members simultaneously, you can save some memory by using the same memory location for all three members. Size of _union_ is decided by the size of largest member of union.

<br><br>

### 📌Creating a union:

```c++
union person{
	string name;
	float age;
	string sex;
}
```

## 3️⃣ Enum(Enumerations)
<hr style="background: black">

✍An enumeration is a user-defined type that consists of a set of named integral constants that are known as enumerators.

### Creating enum:

Syntax: 

```c++
enum season{
	winter,
	spring,
	summer,
	fall
}
```

Here, the name of the enumeration is `season` and `winter`, `spring`, `summer` and `fall` are values of type `season`. By default, `winter` is `0`, `spring` is `1` and so on. But, these default values can be changed: 

```c++
enum season{
	winter = 101,
	spring = 102,
	summer = 103,
	fall = 104
}
```

📌Example:

```c++
#include <iostream>
using namespace std;

//Creating enum
enum season{
    winter,
    spring,
    summer,
    fall
};
int main() {
    season s;
    s = summer;
    cout<<s;
    return 0;
}
```
💻Output: `3`


### 🤔Why use `enum` ?

Enums put constraints to the values of a variable. In the above example, the variable of type `season`(user-defined of course!) expects 4 possible values each for a particular season. if we try to assign a another random value to this variable, it will throw a compilation error. This increases compile-time checking and avoid errors that occurs by passing in invalid constants.

_Ref_ : [https://beginnersbook.com/2017/09/cpp-enumeration/](https://beginnersbook.com/2017/09/cpp-enumeration/)
