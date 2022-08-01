# MATRIX ALGEBRA
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Here, we'll be seeing how to use arrays for matrix algebra. A matrix can be implementd using a two-dimensional array.


## 1. Write a program to add two matrices:
<hr style="height: 2px; border: none; background: black">

**📌Formula:**
<br><br>
$$ \begin{bmatrix}a & b \\\ c & d\end{bmatrix}+\begin{bmatrix}m & n \\\ o & p\end{bmatrix}=\begin{bmatrix}a+m & b+n \\\ c+o & d+p \end{bmatrix} $$
<br><br>


<b>

```c++
#include <iostream>
using namespace std;

int main() {
    int row, col;
    cout<<"Enter the row: ";
    cin>>row;
    cout<<endl<<"Enter the column: ";
    cin>>col;
    
    float matA[row][col], matB[row][col], sum[row][col];
    cout<<"\n\nMatrix A:"<<endl;
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<<"Element a("<<i+1<<j+1<<"): ";
            cin>>matA[i][j];
        }
    }
    //Printing matA
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<<matA[i][j]<<" ";
            if(j == col - 1){
                cout << endl;
        }
        }
    }
    
    cout<<"\n\nMatrix B: "<<endl;
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<<"Element a("<<i+1<<j+1<<"): ";
            cin>>matB[i][j];
        }
    }
    //Printing matB
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<<matB[i][j]<<" ";
            if(j == col - 1){
                cout << endl;
        }
        }
    }
    
    //Addming matA and matB
    for(int m=0; m<row; ++m){
        for(int n=0; n<col; ++n){
            sum[m][n] = matA[m][n] + matB[m][n];
        }
    }
    //Printing sum
    cout<<endl<<"Sum of these two matrices is:"<<endl;
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<<sum[i][j]<<" ";
            if(j == col - 1){
                cout << endl;
        }
        }
    }

  return 0;  
   
}
```
</b>

## 2. Write a program for matrix-multiplication:
<hr style="height: 2px; border: none; background: black">
