# LOOPS
<hr style="height: 5px; border: none; background: rgb(71,55,255);
background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">
<br>

In C++, we have `for`, `while`, `do-while` loops. A _loop_ is used for executing a block of code repeatedly. 
<br><br>

## For-loop
<hr style="background: black">

**Boilerplate of `for ` loop**
```c++
for  (_statement 1_; _statement 2_; _statement 3_) {  
	// code block to be executed_  
}
```
<br><br>

🐱‍👤Like you're a huge fan of Naruto and you want to print his name 1000 time.  You can do this by writing 1000 time `cout<< "Naruto!"` but that's so boring and you probably start hating Naruto. So to pritnt Naruto 1000 time, we will be using for loop:

<b>

```c++
#include <iostream>

using namespace std;
int main() {
    
    for(int i=0; i<1000; i++){
    
        cout << "Naruto!\n";
    }
    return 0;
}
```
</b>

🎉Congrats! You just printed Naruto 1000 time, a loyal fan!!!
<br><br>

🔢 Similarly you can print 0 to 1000 all nubers just by modifing the above code a little bit:

<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {
    
    for(int i=0; i<=1000; i++){
	
	    //Converting an integer i to a string to concatinate with '\n'
        cout << to_string(i)+"\n";
    }
    return 0;
}
```
</b>

> 😎 To make things a little bit overkilling, here we're converting an integer to a string using `to_string()` function(need to include `<string>`)


<br><br>


## While-loop
<hr style="background: black">

**Boilerplate**

```c++
while(condition) {
   statement(s);
}
```
So untill the condition satisfies, the statement(s) will be executed.
<br><br>
👉Suppose you want to print all the integers less than 100. Now you can do this by combining a *for-loop* & an *if statement* and congrats if you already figured this out. But alterbatively we can use a `while` loop to do the same thing:

<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {

   //Setting initial value of integer i to zero
   int i =0;
   
   while(i <=100){
   
	    //Converting an integer i to a string to concatinate with '\n'
        cout << to_string(i)+"\n";
        
        //Incrementing i by 1
        i++;
    }
    return 0;
}
```
</b>

## Do-while loop:
<hr style="background: black">

**Boilerplate**

```c++
do {
   statement(s);
}
while( condition );
```
<br><br>
So after executing the statements inside `do{}` , conditions are checked. Unlike a *while loop*, Since the conditions are being checked at the bootm, the stamements must run at least once.

<br>
The same code to pring all the integers less than 100 in do-while loop is:

<b>

```c++
#include <iostream>
#include<string>

using namespace std;

int main() {
    //Setting initial value of integer i to zero
   int i =0;
   do{
       cout << to_string(i) + "\n";
       i++;
   }
   while(i<100);
   return 0;
}
```
</b>
<br><br>

👌**While vs do-while loop:**
<br><br>
![while vs do-while loop](https://preview.redd.it/6wksqjmmyw321.jpg?auto=webp&s=aceebdeb23af98598c2508b42f77debbcd36cf4b)
