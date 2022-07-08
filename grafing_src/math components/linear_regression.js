/**
 * GraphLab
 * (c) Arijit Das, 2021 
 * 
 * For linerar regression using JSX Graph library.
 */
/*
function pointPlot(updatedData){
    p = [];
    for(i=0; i<updatedData.length; i++){
        a = b3a.create("point", [updatedData[i].xPoints, updatedData[i].yPoints], {
            face: updatedData[i].marker,
            fixed: fixedPoint(),
            strokeColor: "black",
            fillColor: updatedData[i].color,
            size: updatedData[i].size,
            name: updatedData[i].name,
          }); 
        p.push(a);
    }

    bestFit(p); //This piece is taken form JSX Graph website
    //console.log("Making Linear Regression!!")
}
*/

function linearRegression(y,x){

    p = [];
    for(i=0; i<updatedData.length; i++){
        a = b3a.create("point", [updatedData[i].xPoints, updatedData[i].yPoints], {
            face: updatedData[i].marker,
            fixed: fixedPoint(updatedData[i]),
            strokeColor: "black",
            fillColor: updatedData[i].color,
            size: updatedData[i].size,
            name: updatedData[i].name,
          }); 
        //p.push(a);
    }
    //console.log(y);

    lr = {};
    n = y.length;
    sum_x = 0;
    sum_y = 0;
    sum_xy = 0;
    sum_xx = 0;
    sum_yy = 0;
    
    startX = 1;
    endX = 10;

    for (var i = 0; i < y.length; i++) {

        sum_x += x[i];
        sum_y += y[i];
        sum_xy += (x[i]*y[i]);
        sum_xx += (x[i]*x[i]);
        sum_yy += (y[i]*y[i]);
    } 

    lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
    lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
    lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

    //return lr;
    //x = 1;
    startY = ((lr.slope)*startX)+(lr.intercept);
    endY = ((lr.slope)*endX)+(lr.intercept);
    b3a.create('line',[[startX, startY], [endX, endY]], {strokeColor:'green'});

    showSlopeIntercept();
    //document.getElementById("option-div").style.display = "inline";

    //document.getElementById("option-div").innerHTML = "LSF Slpoe: " + lr.slope
    //console.log("hohoh");
}

function showSlopeIntercept(){
    document.getElementById("best-slop").innerHTML =   "Best slop:    " + lr.slope;
    document.getElementById("y-intercept").innerHTML = "Y-intercept:  " + lr.intercept;
}