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

<b>

```c++

#include<iostream>

using namespace std;

int main(){
    int r1=0, c1=0, r2=0, c2=0;

    cout<<"Marrix A: Enter ROW and COL: \n";
    cin >> r1 >> c1;
    cout <<"Matrix B: Enter ROW and COL: \n";
    cin >> r2 >> c2;

    while(c1!=r2){
        cout << "Invalid matrix-dimension\n";

        cout<<"Marrix A: Enter ROW and COL: \n";
        cin >> r1 >> c1;
        cout <<"Matrix B: Enter ROW and COL: \n";
        cin >> r2 >> c2;

    }

    int matA[r1][c1]={0}, matB[r2][c2]={0}, mul[r1][c2] = {0};
   
    //Matrix A
    cout<<"Mat A: \n";
    for(int i=0; i<r1; i++){
        for(int j=0; j<c1; j++){
            cout<<"Mat A "<<i+1<<" "<<j+1<<endl;
            cin >> matA[i][j];
        }
    }
    
    //Matrix B
    cout<<"Mat B: \n";
    for(int i=0; i<r2; i++){
        for(int j=0; j<c2; j++){
            cout<<"Mat B "<<i+1<<" "<<j+1<<endl;
            cin >> matB[i][j];
        }
    }

    //Matrix multiplication
    for(int i=0; i<r1; i++){
        for(int j=0; j<c2; j++){
            for(int k=0; k<c1; k++){

                mul[i][j] += matA[i][k]*matB[k][j];

            }
            
        }
    }

    //Printing the result
    cout<<"Multiplication is: \n";
    for(int i=0; i<r1; i++){
        for(int j=0; j<c2; j++){
            cout<<mul[i][j]<< " ";
            if(j == c2-1){
                cout << endl;
            }
        }
    }

    return 0;


}
```
</b>
