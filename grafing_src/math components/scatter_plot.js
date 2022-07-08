/**
 * Grafy
 * (c) Arijit Das, 2021 
 * 
 * For scatter points ploting using JSX Graph library.
 */

var PolyChain = [];
function scatterPlot(updatedData) {
  console.log("This is Scatter Plot!!");
  PolyChain = [];
  for (i = 0; i < updatedData.length; i++) {
    //console.log([tableData[i].xPoints, tableData[i].yPoints]);
      a = b3a.create("point", [updatedData[i].xPoints, updatedData[i].yPoints], {
      face: updatedData[i].marker,
      fixed: fixedPoint(updatedData[i]),
      strokeColor: "black",
      fillColor: updatedData[i].color,
      size: updatedData[i].size,
      name: updatedData[i].name,
    }); 
    PolyChain.push(a)
  }
  if(document.getElementById("polyChain").checked == true){
    //randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    b3a.create("polygonalchain", PolyChain, {borders: {strokeWidth: 3}} );
  }
  else{
      b3a.create("point", PolyChain, {borders: {strokeWidth: 3}} );
  } 
}



