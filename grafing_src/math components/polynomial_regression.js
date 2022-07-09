/**
 * Grafing
 * (c) Arijit Das, 2021 
 * 
 * For linerar regression using JSX Graph library.
 */

function  polynomialReg(termFlag, name){
    console.log("This is Polynomial Regression");
    p = [];
    for(i=0; i<updatedData.length; i++){
      if(name == true){
        a = b3a.create("point", [updatedData[i].xPoints, updatedData[i].yPoints], {
          face: updatedData[i].marker,
          fixed: fixedPoint(updatedData[i]),
          strokeColor: "black",
          fillColor: updatedData[i].color,
          size: updatedData[i].size,
          name: updatedData[i].name,
        }); 
      }
      else if(name == false){
        a = b3a.create("point", [updatedData[i].xPoints, updatedData[i].yPoints], {
          face: updatedData[i].marker,
          fixed: fixedPoint(updatedData[i]),
          strokeColor: "black",
          fillColor: updatedData[i].color,
          size: updatedData[i].size,
          name: "",
        }); 
      }
        
        p.push(a);
    }
    order = parseInt(document.getElementById("poly-Oder").value)
    regression = JXG.Math.Numerics.regressionPolynomial(order,p); 
    reg = b3a.create('functiongraph',[regression],{strokeColor:'LightSeaGreen', strokewidth: 2}); 
    
    showPolynomailTerm(termFlag);
    // t = b3a.create('text',[-9,9,
    //         function(){ return "r(x) = " + regression.getTerm();}
    //         ],
    //         {strokeColor:'black',fontSize:'14px'});
}

function showPolynomailTerm(flag){
  if(flag == true){
    t = b3a.create('text',[-9,9,
      function(){ return "r(x) = " + regression.getTerm();}
      ],
      {strokeColor:'black',fontSize:'14px'});
  }
  else{
    console.log("Polynomial terms not shown.")
  }
}

