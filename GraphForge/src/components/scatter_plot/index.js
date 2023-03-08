/**
 * Grafing
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

//Build Tabulator
//var table;
var DataTableObject;
function buildDataTable(){

      DataTableObject = new Tabulator(document.getElementById("data-table"), {
      data: tableData,
      height: "500px",
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
createInitialDataTable ();
buildDataTable();
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
  

