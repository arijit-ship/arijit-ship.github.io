# #2. MATRIX ADDITION
<hr style="height: 5px; border: none; background: rgb(71,55,255);
background: linear-gradient(90deg, rgba(71,55,255,1) 0%, rgba(29,195,162,1) 48%, rgba(251,251,251,1) 100%);">
<br>
<br>

# 📢Problem

## 1. Write a program to add two matrices:
<hr style="background: black">

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
