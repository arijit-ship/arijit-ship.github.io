# SORTING(BUBBLE SORT)
<hr style="height: 5px; border: none; background: rgb(71,55,255);
background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">
<br>
<br>

# 📢Problem

## 1. User will enter some numbers(int or float whatever he wants) and sort these numbers in both ascending & descending order and print the sorted numbers.</b>
<hr style="background: black">

### 📌Bubble sort using array:
 
Here the user knows, exactly how many numbers he wants to enter. So you can use an array to store them:

<b>

```c++
/*
* Bubble sort using array. User will enter some some number, sort then and then
* print them.
*/
#include <iostream>
using namespace std;
int main() {
    int total = 0; //How many numbers to be sorted
    
    cout<<"How many numbers to be sorted?"<<endl;
    cin>>total;
    
    //Array to store user inputs
    float unsorted_numbers[total] = {};
    
    //Populating the array
    for(int i=0; i<total; i++){
        cout<<"Enter your number: ";
        cin>>unsorted_numbers[i];
    }
    
    //Bubble sort algorithm
    for(int i = 0; i<total; i++ ){
        for(int j = 0; j<total - 1; j++){
            
            if(unsorted_numbers[j] > unsorted_numbers[j+1]){
                float temp = unsorted_numbers[j];
                unsorted_numbers[j] = unsorted_numbers[j+1];
                unsorted_numbers[j+1] = temp;
            }
        }
    }
    
    //Printing result
    
    cout<<"Sorted numbers in ascending order:"<<endl;
    for(int i = 0; i<total; i++){
        cout<< unsorted_numbers[i]<<"\n";
    }
    
    //Just print the array in reverse order to get descending order
    cout<<"\n\n"<<"Sorted numbers in descending order:"<<endl;
     for(int k = total-1; k >= 0; k--){
        cout<< unsorted_numbers[k]<<"\n";
    }
    
    return 0;
}
```
</b>

### 📌Bubble sort using vector(when size is not explicitly mentioned):

Here the user is not sure about exactly how many numbers he wants to sort. So we will be using `vector` for changing the size of the container(here `vactor`) dynamically as long as user enters some input. One he's done, he can type 'done' to sort the entered numbers.

<b>

```c++
#include <iostream>
#include<string>
#include<vector>
using namespace std;
int main() {
    vector <double> unsorted_numbers; //Vector of type float for storing input numbers
    string num;
    
    //Storing user input in the vector
    while(true){
        cout<<"Enter the number(type 'done' to sort): ";
        cin >> num;
        if(num != "done"){
            
            //Converting input string to double number
            double num2 = ::atof(num.c_str());
            unsorted_numbers.push_back(num2);
        }
        else{
            break;
        }
    }
    
    //Size of vector after storing input numbers in it
    int size = unsorted_numbers.size();
    
    //Bubble sort algorithm
    for(int i = 0; i<size; i++ ){
        for(int j = 0; j<size - 1; j++){
            
            if(unsorted_numbers[j] > unsorted_numbers[j+1]){
                float temp = unsorted_numbers[j];
                unsorted_numbers[j] = unsorted_numbers[j+1];
                unsorted_numbers[j+1] = temp;
            }
        }
    }
    
    cout<<"Sorted numbers in ascending order:"<<endl;
    for(int i = 0; i<size; i++){
        cout<< unsorted_numbers[i]<<"\n";
    }
    
    //Just print the vector in reverse order to get descending order
    cout<<"\n\n"<<"Sorted numbers in descending order:"<<endl;
     for(int k = size-1; k >= 0; k--){
        cout<< unsorted_numbers[k]<<"\n";
    }
    
    return 0;
}

```
</b>

<br><br>

## 2. User will enter some numbers(int or float) and tells you whether they need to be sorted in ascending / descending order.</b>
<hr style="background: black">

📌There's a couple of ways you can do this. Here I'll be writing a function which takes two arguments: (1) an array/vector storing the numbers (2) A flag keyword to specify sorting order. And in the end, this function returns an array which stores sorted numbers.

<br><br>

><b>🚧 Now arrays are not something that your function can return directly. Luckily we have another library called `<array>` which can be used to set a variable of data type `array` and now this can be returned. 

