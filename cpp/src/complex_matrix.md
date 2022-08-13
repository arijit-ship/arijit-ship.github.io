# COMPLEX MATRIX
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

Use structure to define a complex number and then use them as matrix elements.

**🔥Code: Make a complex matrix and print it**

<b>

```c++
#include<iostream>
using namespace std;

struct complex{
    float real, img;
};

int main(){
    int row, col, i, j;
    cout<<"Enter ROW and COL: \n";
    cin >> row >> col;
    complex mat[row][col];

    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"Z"<<i+1<<" "<<j+1<<endl;
            cout<<"Real: \n";
            cin>>mat[i][j].real;
            cout<<"Img: \n";
            cin>>mat[i][j].img;
        }
    }
    cout<<"The Matrix is: "<<endl;
    //Printing the complex matrix
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"("<<mat[i][j].real<<" + i*"<<mat[i][j].img<<")"<<" ";
            if(j == col-1){
                cout<<endl;
            }
        }
    }

    return 0;
}
```
</b>

## Complex Matrix Algebra:
<hr style="height: 2px; border: none; background: black">

<b>

```c++
/**
 * @file 5.complex_matrix_algebra.cpp
 * @author Arijit Das
 * @brief Complex matrices addition, subtraction, multiplication
 * @version 0.1
 * @date 2022-08-13
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
using namespace std;

struct complex{
    float real, img;
};

complex ComAdd(complex z1, complex z2){

    complex z;

    z.real = z1.real + z2.real;
    z.img = z1.img + z2.img;

    return z;
}

complex ComSub(complex z1, complex z2){
    complex z;

    z.real = (z1.real-z2.real);
    z.img = (z1.img - z2.img);

    return z;
}

complex ComMul(complex z1, complex z2){
    complex z;

    z.real = (z1.real * z2.real) - (z1.img * z2.img);
    z.img = (z1.real * z2.img) + (z1.img * z2.real);
    return z;
}


int main(){
    int row, col, i, j, k;
    cout << "Enter the dimension: ROW and COL: \n";
    cin >> row >> col;
    complex a[row][col], b[row][col], add[row][col]={0}, sub[row][col]={0}, mul[row][col]={0};

    cout<<"Matrix A: \n";
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"Z "<<i+1<<" "<<j+1<<endl;
            cout<<"Real: \n";
            cin >> a[i][j].real;
            cout<<"Img: \n";
            cin >> a[i][j].img;
        }
    }

    cout<<endl<<"Matrix B: \n";
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"Z "<<i+1<<" "<<j+1<<endl;
            cout<<"Real: \n";
            cin >> b[i][j].real;
            cout<<"Img: \n";
            cin >> b[i][j].img;
        }
    }

    //Matrix add
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            add[i][j] = ComAdd(a[i][j], b[i][j]);
        }
    }
    cout<<endl<<"Sum is: "<<endl;
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"("<<add[i][j].real<<" + i* "<<add[i][j].img<<")"<<" ";
            if(j == col-1){
                cout << endl;
            }
        }
    }

    //Matrix sub
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            sub[i][j] = ComSub(a[i][j], b[i][j]);
        }
    }
    cout<<endl<<"Sub is: "<<endl;
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"("<<sub[i][j].real<<" + i* "<<sub[i][j].img<<")"<<" ";
            if(j == col -1){
                cout << endl;
            }
        }
    }

    //Matrix mul
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){

            mul[i][j].real = 0; //Important: initialize to zero
            mul[i][j].img = 0;

            for(k=0; k<col; k++){

                //mul[i][j] += matA[i][k]*matB[k][j];

                mul[i][j] = ComAdd( mul[i][j], ComMul( a[i][k], b[k][j])  );
                
            }
        }
    }
    cout<<endl<<"Multiplication is: "<<endl;
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            cout<<"("<<mul[i][j].real<<" + i* "<<mul[i][j].img<<")"<<" ";
            if(j == col-1){
                cout << endl;
            }        }
    }

    return 0;
}
```
</b>
