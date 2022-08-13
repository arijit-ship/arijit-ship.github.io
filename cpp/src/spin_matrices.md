# PAULI'S SPIN MATRICES
<hr style="height: 5px; border: none;background-image: linear-gradient(to right, #a282c6, #f378af, #ff8470, #ffb51a, #a8eb12);">

![Spin matrices](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJISNQJP1b2JAP9CPMVdg9mGIsX29yRE8i8I2EFSNsA&s)
<br>
![Spin matrics properties](https://knoji.com/images/user/sonia/2bpauliproperties-85837377.png)

**⚡Code for spin matrices commutator and anti-commutator**
<b>

```c++
/**
 * @file 6.pauli_matrices.cpp
 * @author Arijit Das
 * @brief Checking properties of Paulis spin matrices: Commutator and anti-commutator
 * @version 0.1
 * @date 2022-08-13
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include<iostream>
#include<array>
using namespace std;

struct complex{
    float real, img;
};

//spinMat object
struct spinMat{
    complex elem[2][2];
};

complex parseComplex(int a, int b){
    complex output;

    output.real = a;
    output.img =  b;

    return output;

}

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

spinMat complex_mat_add(spinMat A, spinMat B){
    spinMat add;
    for(int i=0; i<2; i++){
        for(int j=0; j<2; j++){
            add.elem[i][j] = ComAdd(A.elem[i][j], B.elem[i][j]);
        }
    }

    return add;
}

spinMat complex_mat_sub(spinMat A, spinMat B){
    spinMat sub;
    for(int i=0; i<2; i++){
        for(int j=0; j<2; j++){
            sub.elem[i][j] = ComSub(A.elem[i][j], B.elem[i][j]);
        }
    }
    return sub;
}

spinMat complex_mat_mul(spinMat a, spinMat b){
    spinMat mul;
    for(int i=0; i<2; i++){
        for(int j= 0; j<2; j++){

            mul.elem[i][j].real = 0;
            mul.elem[i][j].img = 0;

            for(int k=0; k<2; k++){
                mul.elem[i][j] = ComAdd(mul.elem[i][j], ComMul(a.elem[i][k], b.elem[k][j]));
            }
        }
    }

    return mul;
}

//Printing a complex matrix
void print_spinMat(spinMat A){
    for(int i = 0; i<2; i++){
        for(int j = 0; j<2; j++){
            cout<<"("<<A.elem[i][j].real<<" + i* "<<A.elem[i][j].img<<")"<<" ";
            if(j == 2-1){
                cout<<endl;
            }
        }
    }
}

spinMat getCommutator(spinMat A, spinMat B){
    return complex_mat_sub( complex_mat_mul(A, B), complex_mat_mul(B, A) );
}

spinMat getAntiCommutator(spinMat A, spinMat B){
    return complex_mat_add( complex_mat_mul(A, B), complex_mat_mul(B, A) );
}

int main(){
   
    //Sx matrix
    spinMat sx = { parseComplex(0, 0), parseComplex(1, 0), parseComplex(1, 0), parseComplex(0, 0)};

    //Sy matrix
    spinMat sy = {parseComplex(0, 0), parseComplex(0, -1), parseComplex(0, 1), parseComplex(0, 0)};

    //Sz matrix
    spinMat sz = {parseComplex(1, 0), parseComplex(0, 0), parseComplex(0, 0), parseComplex(-1, 0)};

    spinMat commutator_xy = getCommutator(sx, sy);
    spinMat anti_commutator_xy = getAntiCommutator(sx, sy);

    spinMat commutator_yz = getCommutator(sy, sz);
    spinMat anti_commutator_yz = getAntiCommutator(sy, sz);

    spinMat commutator_zx = getCommutator(sz, sx);
    spinMat anti_commutator_zx = getAntiCommutator(sz, sx);

    cout<<"Pauli's spin matrices: "<<endl<<endl;
    cout<<endl<<"Sx: \n";
    print_spinMat(sx);

    cout<<endl<<"Sy: \n";
    print_spinMat(sy);

    cout<<endl<<"Sz: \n";
    print_spinMat(sz);


    cout<<endl<<endl<<"Commutators of Pauli's spin matrices"<<endl<<endl;
    cout<<"[SX, SY]: \n";
    print_spinMat(commutator_xy);

    cout<<endl<<"[SY, SZ]: \n";
    print_spinMat(commutator_yz);

    cout<<endl<<"[SZ, SX]: \n";
    print_spinMat(commutator_zx);

    cout<<endl<<endl<<"Anti-commutators of Pauli's spin matrices"<<endl<<endl;

    cout<<"{SX, SY}: \n";
    print_spinMat(anti_commutator_xy);

    cout<<endl<<"{SY, SZ}: \n";
    print_spinMat(anti_commutator_yz);

    cout<<endl<<"{SZ, SX}: \n";
    print_spinMat(anti_commutator_zx);
    return 0;
}

```
</b>
