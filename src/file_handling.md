# FILE HANDLING
<hr style="height: 5px; border: none;
background: rgb(255,55,55);background: linear-gradient(90deg, rgba(255,55,55,1) 0%, rgba(152,27,228,1) 48%, rgba(251,251,251,1) 100%);">
<br>

Like many other languages, C++ provides file handling meaning you can create or write a file. You need to include `fstream` library for file handling.

🚀 There're three classes in the `fstream` library:

|Class|Description|
|--|--|
|`ofstream`|Creates and writes files|
|`ifstream`|Reads file|
|`fstream`|A combination of ofstream and ifstream: creates, reads, and writes to files|

## 📁Creating a file and write something in it
<hr style="background: black">
<br><br>

👉Here we'll be creating a file and writing some text in it. To create a file, use either the `ofstream` or `fstream` class, and specify the name of the file.

To write to the file, use the insertion operator (`<<`).

<b>

```c++
#include<iostream>
#include<fstream>
using namespace std;

int main(){
    
    //We will write this piece of string in a file
    string text = "A quick bworn fox jumps over the lazy dog!";

    //Creating and open a text file called 'test_file.txt' 
    ofstream myFile("test_file.txt");

    //Writing and then saving the file
    myFile<<text;

    //Closing the file
    myFile.close();

    return 0;
}
```
</b>

## 📖Reading a file
<hr style="background: black">
<br><br>

Now we'll be reading a text file and printing the contents on terminal. First create a text file named `lazyDog.txt` and write something in it. Now the following code reads from this file and print the content on terminal:

<b>

```c++
#include<iostream>
#include<string>
#include<fstream>
using namespace std;

int main(){

    string text;

    //Read from the file 'laztDog.txt'
    ifstream myFile("lazyDog.txt");

    //Use while loop and getline() to read the file content
    while(getline(myFile, text)){
        cout<<text;
    }

    //Closing the file
    myFile.close();
    
    return 0;
}
```

</b>

><b>💡It's a good practice to close the file, it cleans up unnecessary memory space.


 
