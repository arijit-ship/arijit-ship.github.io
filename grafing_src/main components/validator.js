/**
 * Grafy
 * Validates user inputs and calls ploting function.
 * (c) Arijit Das, 2021 
 */

var updatedData = [];
var xData = [];
var yData = [];
var updatedTableEqnData = [];
var showTermFlag ; // Falg to show/hide polynomial terms on the board(b3a)

function isFunctionPlot(){
    if(document.getElementById("plotType").value != "functionPlot"){
        markerValidate();
    }
    else if(document.getElementById("plotType").value == "functionPlot"){
        functionValidate();
    }
}

function markerValidate(){
    console.log("This is Validator.JS");
    updatedData = DataTableObject.getData();
    for(i=0; i<updatedData.length; i++){
        marker = updatedData[i].marker;
        if(marker == "⬤ (Circle)"){
            updatedData[i].marker = 'o';
        }
        else if(marker == "◼(Square)"){
            updatedData[i].marker = '[]';
        }
        else if(marker == "🞮 (Cross)"){
            updatedData[i].marker = 'x';
        }
        else if(marker == "➕ (Plus)"){
            updatedData[i].marker = '+';
        }
        else if(marker == "⯅ (Triangle)"){
            updatedData[i].marker = '^';
        }   
    }
    //fixedPoint();

    //dataArray();
    validateArray();
    xData = [];
    yData = [];
    for(i=0; i<updatedData.length; i++){
        xData.push(updatedData[i].xPoints);
        yData.push(updatedData[i].yPoints);
    }
    graphType();

}

function graphType(){
    if(document.getElementById("plotType").value == "scatter2d"){
        scatterPlot(updatedData);
    }
    else if(document.getElementById("plotType").value == "linearReg"){
        console.log(yData);
        linearRegression(yData, xData);
    }
    else if(document.getElementById("plotType").value == "poly"){
        console.log("POLY NOT DONE.");
        showTermFlag = 0;
        showTermFlag = showPolyTerm();
        polynomialReg(showTermFlag);
    }
    else if(document.getElementById("plotType").value == "functionPlot"){
        console.log("FUNCTION NOT DONE.");
        textMathValidation();
    }
    else if(document.getElementById("plotType").value == "bez"){
        console.log("BEZ NOT DONE.");
    }
}
function fixedPoint(dictionary){
    movableFlag = dictionary.movable;
        if(movableFlag == "✔"){
            return false;
        }
        else if(movableFlag == "✘"){
            return true;
        }
  }
function showPolyTerm(){
    if(document.getElementById("show-poly-term").checked == true){
        return true;
    }
    else{
        return false;
    }
}


// Validating updatedData if contains null or string value in the data point fields.
function validateArray(){
    for(j=0; j<updatedData.length; j++){
        if(typeof(updatedData[j].xPoints) != "number" || typeof(updatedData[j].yPoints) != "number"){
            updatedData.splice(j, 1);
            j--;
        }
        else{
            updatedData = updatedData;
        }
    }
}

function functionValidate(){
    console.log("Function validate");
    updatedTableEqnData = eqTable.getData(); 
    // Creates an array of string expressions from UpdatedTableData
    expression_of_x = [];
    for(i=0; i<updatedTableEqnData.length; i++){
        expression_of_x.push(updatedTableEqnData[i].xexp);
    }
    for(i=0; i<expression_of_x.length; i++){
        try{
            plotFunction(expression_of_x[i], updatedTableEqnData[i].color);
            eqTable.updateRow(i+1, {errlog: "<i style='color:green;'>Successfully parsed.</i>"})
        }
        catch(e){
            eqTable.updateRow(i+1, {errlog: "<i style='color:red;'>Error:  </i>" + e});   
        }
    }
    
}

// ASCII Math expression validation
//var expression_of_x = [];
function textMathValidation(){
    //expression_of_x.splice(0, expression_of_x.length);
    expression_of_x = [];
    console.log("Validationg math text!!");
    for(i=0; i<updatedData.length; i++){
        expression_of_x.push(updatedData[i].xexp);
    }
    console.log(expression_of_x);
    
    for(i=0; i<expression_of_x.length; i++){
        plotFunction(expression_of_x[i]);
    }
    
    
}