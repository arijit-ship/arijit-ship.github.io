/**
 * Grafy
 * Written by Arijit Das. Project started Dec 2021
 * This code manages all the frontend GUI related events and send the user input to validator.js.
 * (c) Arijit Das, 2021.
 */


/* Data table processes*/
var data = [];
var tableData = [
  //dictionary
];

function createInitialDataTable(){
  for (i = 1; i <= 50; i++) {
    tableData.push({
      id: i,
      slno: i,
      //xPoints: i,
      //yPoints: i*i,
      marker: "⬤ (Circle)",
      name: "P"+ String(i),
      color: "Red",
      size: 3,
      movable: "✔",
      yexp: "y(x) = "
    });
  }
}

createInitialDataTable ();
buildDataTable();

//Build Tabulator
//var table;
var DataTableObject;
function buildDataTable(){

      DataTableObject = new Tabulator(document.getElementById("data-table"), {
      data: tableData,
      height: "87%",
      addRowPos: "bottom",
      columns:[
        {title:"#", field:"slno", width:50, headerSort:false},
        {title:"X Data", field:"xPoints", width:"auto", hozAlign:"right", editor:"number", visible: true },
        {title:"Y Data", field:"yPoints", width:"auto", hozAlign:"right", editor:"number", visible: true},
        {title:"Name", field:"name",width:80, hozAlign:"center", editor:"input", visible: true},
        {title:"Marker", field:"marker", width:100, editor:"select", editorParams:{values:["⬤ (Circle)", "◼(Square)", "🞮 (Cross)", "➕ (Plus)", "⯅ (Triangle)"]}, visible: true},
        {title:"Color", field:"color", width:"auto", hozAlign:"center", editor:"select", editorParams:{values:["Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"]}, visible: true},
        //{title:"Others", field:"msg", width: 100, hozAlign:"center"},
        {title:"Size", field:"size", width:"auto", hozAlign:"center", editor:"number", editorParams:{max:25, min: 1}, visible: true},
        {title:"Movable", field:"movable", width:90,  hozAlign:"center", editor:"select", editorParams:{values:["✔", "✘"]}, visible: true }, 

        // Equation 
        //{title:"Equation Editor", field:"eqn", visible: false, width:"480",  hozAlign:"center", editor:"input" },
    ],
    });
}


//Build table for eduation input

var tableEqnData = [
  //dictionary
];

function createInitialEquationTable(){
      for (k = 1; k <= 10; k++) {
      tableEqnData.push({
        id: k,
        slno: k,
        color: "Red",
        yexp: "y(x) = "
      });
    }
}

createInitialEquationTable();
buildEquationTable();

var eqTable;
function buildEquationTable(){
    eqTable = new Tabulator(document.getElementById("equation-div"), {
      data: tableEqnData,
      height: "87%",
      addRowPos: "bottom",
      columns:[
        {title:"#", field:"slno", width:50, headerSort:false},
        {title:"Color", field:"color", width:"auto", hozAlign:"center", editor:"select", editorParams:{values:["Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"]}},
        // Equation 
        {//create column group
          title:"Equation",
          //field: "eqn",
          //visible: false,
          columns:[
          {title:"Y", field:"yexp", align:"right", sorter:"number", width:50},
          {title:"Expression of X(Use .math prefix when required)", field:"xexp", align:"left", width:"350", editor:"input"},
          ],
      },
        {title:"Error Log", field:"errlog", width:"500", formatter:"html", headerSort:false},
    ],
    });
}



//Add row on "+Row" button click
var adddRow_i = tableData.length;
document.getElementById("addRows").addEventListener("click", function () {
  DataTableObject.addRow({
    id: adddRow_i + 1,
    slno: adddRow_i + 1,
    xPoints: null,
    yPoints: null,
    marker: "⬤ (Circle)",
    name: "P"+ String(i+1),
    color: "Red",
    size: 3,
    movable: "✔",
    yexp: "y = "
  });
  adddRow_i += 1;
  tableData = DataTableObject.getData();
});

//Add row for equation input on "+Equation" button click
var add_eqRow_k = tableEqnData.length;
document.getElementById("addEqn").addEventListener("click", function () {
  eqTable.addRow({
    id: add_eqRow_k + 1,
    slno: add_eqRow_k + 1,
    color: "Red",
    yexp: "y(x) = "
  });
  add_eqRow_k += 1;
  tableEqnData = eqTable.getData();
});

// JSX Graph page
var b3a = JXG.JSXGraph.initBoard("jxgbox3a", {
  axis: true,
  boundingbox: [-10, 10, 10, -10],
  showCopyright: false,
  showFullscreen: true,
  showClearTraces: true,
  showScreenshot: true,
  pan: {
    enabled: true,
    needTwoFingers: false,
    needShift: false,
  },
  zoom: { needShift: false },
});

// Changing option div
function optionDivChange(){
  //console.log("optionDivChange()")
  //xml = "test div";
  if(document.getElementById("plotType").value == "scatter2d"){
    document.getElementById("option-div").style.display = "inline";
    document.getElementById("poly-div").style.display = "none";
    //document.getElementById("poly-div").style.visibility = "hidden";
    document.getElementById("show-poly-term").disabled = true;
    document.getElementById("best-slope-intercept").style.display = "none";
  }
  else if(document.getElementById("plotType").value == "poly"){
    //console.log("poly")
    document.getElementById("option-div").style.display = "none";
    document.getElementById("poly-div").style.display = "inline";
    document.getElementById("show-poly-term").disabled = false;
    document.getElementById("best-slope-intercept").style.display = "none";
  }
  else if(document.getElementById("plotType").value == "linearReg"){
    document.getElementById("option-div").style.display = "none";
    document.getElementById("poly-div").style.display = "none";
    document.getElementById("show-poly-term").disabled = true;
    document.getElementById("best-slope-intercept").style.display = "inline";
  }
  else{
    document.getElementById("option-div").style.display = "none";
    document.getElementById("poly-div").style.display = "none";
    document.getElementById("show-poly-term").disabled = true;
    document.getElementById("best-slope-intercept").style.display = "none";
  }
}
// Toggling to equation input
function toggleEquationEdit(){
  if(document.getElementById("plotType").value == "functionPlot"){
    document.getElementById("data-table").style.display = "none";
    document.getElementById("equation-div").style.display = "block";
    // Table needs to redrawn since table was created when disply was set to none.
    eqTable.redraw(true);
    document.getElementById("addEqn").disabled = false;
    document.getElementById("addRows").disabled = true;
    document.getElementById("randomPoint").disabled = true;
  }
  else{
    document.getElementById("data-table").style.display = "block";
    document.getElementById("equation-div").style.display = "none";
    document.getElementById("addEqn").disabled = true;
    document.getElementById("addRows").disabled = false;
    document.getElementById("randomPoint").disabled = false;
    DataTableObject.redraw(true);
  }
}

// Reset clears the board, sets all arrays to empty arrays and redraw the board
function resetClear(){
  console.log("Reset and clear!")
  //clearing the board
  JXG.JSXGraph.freeBoard(b3a);
  //Redraw the board
  b3a = 0;  // clearing vlaue
  b3a = JXG.JSXGraph.initBoard("jxgbox3a", {
    axis: true,
    boundingbox: [-10, 10, 10, -10],
    showCopyright: false,
    showFullscreen: true,
    showClearTraces: true,
    showScreenshot: true,
    pan: {
      enabled: true,
      needTwoFingers: false,
      needShift: false,
    },
    zoom: { needShift: false },
  });
  // Clearing data table
  tableData = [];
  console.log(tableData)
  DataTableObject.clearData();
  i = 0;
  j = 0;
  k = 0;
  createInitialDataTable ();
  buildDataTable();
  adddRow_i = tableData.length; //Need to update the slno so that when addRows() is called it shows slno correctly

  // Clearing equation table
  tableEqnData = [];
  eqTable.clearData();
  createInitialEquationTable();
  buildEquationTable();
  add_eqRow_k = tableEqnData.length; //Need to update the slno so that when new row for equation is added, it shows slno correctly

  // Validated data arrays empty
  xData = [];
  yData = [];

  // Erasing best fit html
  document.getElementById("best-slop").innerHTML =   "Best slop:    "; 
  document.getElementById("y-intercept").innerHTML = "Y-intercept:  "; 
}

//Clear the board when Plot button is clicked
function clearBoard(){
  //console.log("Clear board");
  JXG.JSXGraph.freeBoard(b3a);
  b3a = 0; 
  b3a = JXG.JSXGraph.initBoard("jxgbox3a", {
    axis: true,
    boundingbox: [-10, 10, 10, -10],
    showCopyright: false,
    showFullscreen: true,
    showClearTraces: true,
    showScreenshot: true,
    pan: {
      enabled: true,
      needTwoFingers: false,
      needShift: false,
    },
    zoom: { needShift: false },
  });
}

//Reploting does not erase the last drawing
  function replot(){
  isFunctionPlot();
}

// Generating random points
function randomPoints(){
  // Check conditions and then calls createRandomPoints()
  createRandomPoints();
}

function createRandomPoints(){
  //Math.floor(Math.random() * 101); 0 to 100 range
  console.log("Random Points Generated");
  for(m=1; m<=tableData.length; m++){
    randX = Math.floor(Math.random()*101) * (Math.random()*2|0 || -1);
    randY = Math.floor(Math.random()*101) * (Math.random()*2|0 || -1);
    //console.log(randX, randY)
    DataTableObject.updateRow(m, {xPoints: randX, yPoints: randY, name: "Random" + m})
  }
}

/*
// SAME TABLE WILL NOT BE USED, ADDING A ROW WILL AFFECT THE ENTIRE TABLE. NEED TO MAKE A NEW TABLE/DIV_BASED EDITOR FOR EQUATION.
function toggleEquationEdit(){
  //console.log("toggleEquationEdit()")
  if(document.getElementById("plotType").value == "functionPlot"){
    table.hideColumn("xPoints");
    table.hideColumn("yPoints");
    table.hideColumn("name");
    table.hideColumn("marker");
    //table.showColumn("color");
    table.hideColumn("size");
    table.hideColumn("movable");
    table.hideColumn("xPoints");
    table.showColumn("yexp");
    table.showColumn("xexp");
  }
  else{
    table.showColumn("xPoints");
    table.showColumn("yPoints");
    table.showColumn("name");
    table.showColumn("marker");
    //table.hideColumn("color");
    table.showColumn("size");
    table.showColumn("movable");
    table.showColumn("xPoints");
    table.hideColumn("yexp");
    table.hideColumn("xexp");
  }  
}
*/