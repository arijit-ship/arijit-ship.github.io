/**
 * This code manages front-end ui for main_page.html.
 * All the ui-related functions must be defined here.
 * 
 * (c) Arijit Das/2022 
 * 
 */


const date = new Date();
const dateCreated = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

var slno = 1;   //Page serial number
//Page data contaner
var pageData = [    /*{'pagename':'sample page', 'pagetype' : 'dataplot', 'editorDtls': {editorId: 'id', 'obj': } }*/];
//Data for opened page
var colData = [     /*{'coltitle': "X Data", 'vals': [] }*/   ];

//Empty project, no page messages
const projectDiv = $('#project-page-dtls-grid');
const editorDiv = $('#editor-panel-div');
const spanEmptyProj = `<span id="empty-project-message-span"
style="display: flex;justify-content: center;align-items: center;height: 100%;">Empty Project! Please create a page to get started.</span>`;

const spanEmptyProjEditor = `<span id="no-page-selected-message-span" style="display: flex;justify-content: center;align-items: center;height: 100%;"> Create a page to start editing. </span>`;

//Page Tools generic
const DataPlotToolsVTab = `<div id="page-tool-tab" class="easyui-tabs" tabPosition="left" data-options="pill: false, justified: true, narrow: true">
                                            <div title="Graph" style="padding:10px; width: 100%;">     
                                            </div>
                                            <div title="Column setup" style="padding:10px"> 
                                            </div>
                                            <div title="Style" data-options="iconCls:'icon-help'" style="padding:10px">
                                            </div>
                                    </div>`;

//Data table point properties options
const ptColor = ["Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"];
const ptMarker = ["⬤ (Circle)", "◼(Square)", "🞮 (Cross)", "➕ (Plus)", "⯅ (Triangle)"];


//Empty project messages
projectDiv.append(spanEmptyProj);
editorDiv.append(spanEmptyProjEditor);


//Defining addNewPage(). It creates a modal form for book name, type and, description.
function addNewPage() {
    $('#dd').dialog({
        title: 'New Page',
        width: '500px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true
    });
}

/**
 * Sorry, I've never written professional type comments before.
 * createPage(pageName, pageType, description) creates project table, editor and page tools.
 * @returns {null}
 * It pushes new entry, {'pagename':'sample page', 'pagetype' : 'dataplot', 'editorDtls': editorObject},  to 'pageData' array.
 */

function createPage() {
    //Capturing form data
    const pageName = $("#page-name").val();
    const pageType = $("#page-type").val();
    const pageDes = $("#page-des").val();
    //closing the modal window
    $('#dd').dialog({
        closed: true,
        cache: false,
    });

    var editorObject = [];
    let editorId = '';  //An unique editorId is attached to each page created.
    let editorDivChild = `<div id="data-table-editor-${slno}" style=" display: none;width: auto;"></div>`;
    var i = pageData.length - 1;

    //Now append the edito as child.
    $('#editor-panel-div').append(editorDivChild);

    /**
     * Crating an editor based on the page type.
     * Each page has its own editor with an unique editor id(which indeed refers to a div).
     * Editor id must not be changed in a project.
     * 
     */
    if (pageType == "data-plot") {

        /**
         * Creating a data table editor using Tabulator JS.
         * editorDivID and editorId are basically storing the same value. But two separate variables are, 
         * one as simple value that will be pushed in an array object
         * and another is for refering the div tag used for Tabulator()
         */

        editorId = `data-table-editor-${slno}`;
        var editorDivID = `data-table-editor-${slno}`;

        var editorTable = new Tabulator(document.getElementById(editorDivID), {
            movableColumns: true, //enable user movable columns
            data: Array.from({ length: 50 }, (_, i) => {
                var id = i + 1;
                return {
                    slno: i + 1,
                    marker: "⬤ (Circle)",
                    name: "P" + String(i + 1),
                    color: "Red",
                    size: 3,
                    movable: "False",
                    yexp: "y(x) = "
                };
            }),
            height: "100%",
            addRowPos: "bottom",
            columns: [

                {
                    formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "left", headerSort: false, frozen: true, cellClick: function (e, cell) {
                        cell.getRow().toggleSelect();
                    }
                },
                { title: "#", field: "slno", width: 50, headerSort: false, visible: false },
                { title: "X Data", field: "xPoints", width: "100", hozAlign: "right", editor: "number", visible: true, editableTitle: true },
                { title: "Y Data", field: "yPoints", width: "100", hozAlign: "right", editor: "number", visible: true, editableTitle: true },


                {//create column group
                    title: "Properties",
                    columns: [
                        { title: "Name", field: "name", width: 80, hozAlign: "center", editor: "input", visible: true },
                        { title: "Marker", field: "marker", width: 100, editor: "select", editorParams: { values: ptMarker }, visible: true },
                        { title: "Color", field: "color", width: "auto", hozAlign: "center", editor: "select", editorParams: { values: ptColor }, visible: true },
                        //{title:"Others", field:"msg", width: 100, hozAlign:"center"},
                        { title: "Size", field: "size", width: "auto", hozAlign: "center", editor: "number", editorParams: { max: 25, min: 1 }, visible: true },
                        { title: "Movable", field: "movable", width: 90, hozAlign: "center", editor: "select", editorParams: { values: ["True", "False"] }, visible: true },

                    ],
                },

            ],
        });

        /**
         * Everytime a new page is created or deleted, 
         * 'editorObject' and 'pageData' must be updated accordingly.
         */
        editorObject.editorId = editorId;
        editorObject.obj = editorTable;
        pageData.push(
            { 'slNo': slno, 'pageName': pageName, 'pageType': pageType, 'pageDes': pageDes, 'editorDtls': editorObject }
        );

    }
    else {
        console.log("Yet to be done");
    }

    slno += 1;

    /**
     * Creating table for project panel using EasyUi Datagrid
     * Every time a page created, the data grid will be redrawn. 
     */
    projectDiv.empty(); //Removing empty project message
    projectDiv.append(`<table id="project-table" style="height: 100%"></table>`);

    //Redrawing the project table
    $("#project-table").datagrid({
        columns: [[
            { field: 'slNo', title: '<b>#<b>', width: 'auto', hidden: "true" },
            { field: 'pageName', title: '<b>Page Name<b>', width: 100, editor: 'text' },
            { field: 'pageType', title: '<b>Type<b>', width: 100, align: 'left' },
            { field: 'pageDes', title: '<b>Description<b>', width: 350, align: 'left', editor: 'textarea' },
            { field: 'editorDtls', title: 'Editor Details', width: 'auto' },
        ]],
        data: pageData,
        singleSelect: true,
        rownumbers: true,
        onLoadSuccess: function () {
            $(this).datagrid('enableDnd');
        },
        //Page clicking action
        onClickRow: function (index, row) {
            $('#editor-panel-div').panel('options').title = 'New Title';
            $("#editor-panel-div").children().css('display', 'none');
            $("#data-table-editor-" + row.slNo).show();
            $("#row-management-container-span button").prop("disabled", false);
        }
    });

    //Clearing the form values
    $('#new-page-form :input').val('');

}

/**
 * Deletes a page and its editor.
 * 'editorObject' and 'pageData' must be handled accordingly without affecting the uinque ids.
 */

function deletePage() {
    var datagrid = $("#project-table");
    var selectedRow = datagrid.datagrid("getSelected");
    var editorObject = selectedRow.editorDtls;
    var editorIdSelectedRow = selectedRow.editorDtls.editorId;

    if (selectedRow) {
        $.messager.confirm("Confirm", "Are you sure you want to delete this page?", function (r) {
            if (r) {
                //Delete this entry from editorObject
                // find the index of the element with the given ID
                let indexToDelete = editorObject.findIndex(function (element) {
                    return element.editorId === editorIdSelectedRow;
                });
                if (indexToDelete !== -1) {
                    let deletedItem = editorObject.splice(indexToDelete, 1)[0];
                    $('#' + editorIdSelectedRow).remove();
                }

                //Deleting page entry and editor(ui component)
                var rowIndex = datagrid.datagrid("getRowIndex", selectedRow);
                datagrid.datagrid("deleteRow", rowIndex);
                $('#' + editorIdSelectedRow).remove();

            }
        });
    } else {
        $.messager.alert("Error", "No row selected for deletion.", "error");
    }
}

//Adds a single row at the bottom of the table
function addNewRow() {
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        var totalRowCount = table.getDataCount();
    }
    table.addRow({
        id: totalRowCount + 1,
        slno: totalRowCount + 1,
        xPoints: null,
        yPoints: null,
        marker: "⬤ (Circle)",
        name: "P" + String(totalRowCount + 1),
        color: "Red",
        size: 3,
        movable: "False",
        yexp: "y = "
    })
}


//Adds multiple(user input) rows
function addNewRows() {
    $('#dd-add-rows').dialog({
        title: 'Add Rows',
        width: '400px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true
    });
}

function createRows() {
    var addRowsNo = $('#no-of-rows').val();
    $('#dd-add-rows').dialog({
        closed: true,
        cache: false,
    });
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        var totalRowCount = table.getDataCount();
    }
    var totalRowCount = table.getDataCount();
    for (i = 0; i < addRowsNo; i++) {
        table.addRow({
            id: totalRowCount + (i + 1),
            slno: totalRowCount + (i + 1),
            xPoints: null,
            yPoints: null,
            marker: "⬤ (Circle)",
            name: "P" + String(totalRowCount + i + 1),
            color: "Red",
            size: 3,
            movable: "False",
            yexp: "y = "
        })
    }
}

//Deletes selected rows
function deleteRows() {
    var row = $('#project-table').datagrid('getSelected');

    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        //var totalRowCount = table.getDataCount();
    }
    // Get an array of the selected rows
    var selectedRows = table.getSelectedRows();
    var rowCount = selectedRows.length;

    if (true) {
        $.messager.confirm("Confirm", `${rowCount} row(s) will be deleted. Are you sure you want to delete selected row(s)?`, function (r) {
            if (r) {

                // Loop through each selected row and delete it from the table
                selectedRows.forEach(function (row) {
                    table.deleteRow(row);
                });
            }
        },
            {
                ok: 'Delete',
                cancel: 'Cancel'
            });
    }
    else {
        $.messager.alert("Error", "No row selected for deletion.", "error");
    }
}

//Makes the form availabe for adding a new data column
function addColumn() {
    $('#dd-add-column').dialog({
        title: 'Add Data Column',
        width: '400px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true,
        buttons: [
            {
                text: 'Add Column',
                handler: function () {
                    // button is clicked
                    const ctitle = $('#new-column-title').val();
                    const coltype = $('#col-type').val();
                    createColumn(ctitle, coltype);
                }
            },
            {
                text: 'Cancel',
                handler: function () {
                    // close the dialog when the cancel button is clicked
                    $('#dd-add-column').dialog('close');
                }
            }
        ]
    });
}
function createColumn(ctitle, coltype) {
    var newCol = null;
    $('#dd-add-column').dialog('close');
    var row = $('#project-table').datagrid('getSelected');

    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        var totalRowCount = table.getDataCount();
    }
    //table.addColumn({title:"Age", field:"age"}, true, "name");
    if (coltype === 'Numerical Data') {
        newCol = { title: ctitle, field: ctitle.toLowerCase().replace(/\s+/g, '_'), width: "100", hozAlign: "right", editor: "number", visible: true, editableTitle: true }
    }
    if (coltype === 'Text') {
        newCol = { title: ctitle, field: ctitle.toLowerCase().replace(/\s+/g, '_'), width: "100", hozAlign: "right", editor: "input", visible: true, editableTitle: true }
    }
    table.addColumn(newCol, false, "yPoints");
}

/**
 * 
 */

function GET_COLUMN_DATA(){
     var colData = [];
     //Capture the editor
     var row = $('#project-table').datagrid('getSelected');

     if (row) {
         var editorDtls = row.editorDtls;
         var table = editorDtls.obj;
         //var totalRowCount = table.getDataCount();
     }
     let tg = table.getData();
     let l = tg.length;
     for(i=0; i<l; i++){
        colData.push(tg);
     }
     return colData;
  }

/**
 * Creates the form where user can define each column function
 */
function editTableWindow() {
    var row = $('#project-table').datagrid('getSelected');

    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        //var totalRowCount = table.getDataCount();
    }

    var columns = table.getColumns();
    var columnTitles = columns.map(function (column) {
        return column.getTitle();
    });
    console.log(columnTitles);
    $('#dd-table-editing').dialog({
        title: 'Edit Table',
        width: '400px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true,
        buttons: [
            {
                text: 'Save',
                handler: function () {
                    // button is clicked
                    const ctitle = $('#new-column-title').val();
                    const defaultVal = $('#new-column-dval').val();
                    createColumn(ctitle, defaultVal);
                }
            },
            {
                text: 'Discard',
                handler: function () {
                    // close the dialog when the cancel button is clicked
                    $('#dd-add-column').dialog('close');
                }
            }
        ]
    });
    var Table = new Tabulator(document.getElementById('table-edit'), {
        data: data,
        height: "100%",
        addRowPos: "bottom",
        columns: [
            { title: "Columns Title", field: "column", width: "auto", hozAlign: "right", hozAlign: "center", editor: "input" },
            { title: "Type", field: "type", width: "auto", hozAlign: "right", editor: "select", editorParams: { values: ["True", "False"] } },
        ],
    });

}

/**
 * Column functions
 */

function colFuncDefWindow() {

    //Open Modal Window
    $('#dd-col-fun-window').dialog({
        title: 'Define Columns',
        width: '900',
        height: '500',
        closed: false,
        cache: false,
        modal: true,
    });

    //Capture the editor
    var row = $('#project-table').datagrid('getSelected');

    if (row) {
        var editorDtls = row.editorDtls;
        var table = editorDtls.obj;
        //var totalRowCount = table.getDataCount();
    }

    //Variables
    // let tg = table.getData();
    // let l = table.getData().length;
    // for(i=0; i<l; i++){
    //     colWiseData.push(tg[i].)
    // }
    var variableAsssigned = [];
    var columns = table.getColumns();
    let coltype = 'NUMERICAL';
    var data = [    /**{column: , datatype: , variable: } */    ];
    
    // extract the column titles and store them in an array
    var columnTitles = [];  //Stores columns name(only data point cols)
    for (var i = 2; i < (columns.length - 5); i++) {
        columnTitles.push({'title': columns[i].getDefinition().title, 'field': columns[i].getDefinition().field});
    }
    

    for (i = 0; i < columnTitles.length; i++) {
        if(columns[i+2].getDefinition().editor === 'number'){
            coltype = 'NUMERICAL';
        }
        if(columns[i+2].getDefinition().editor === 'input'){
            coltype = 'TEXT';
        }

        data.push({variable: `C${i+1}`, coltitle: columnTitles[i].title, coltype: coltype});
        variableAsssigned.push(`C${i+1}`);  
    }
    
    var DefColtable = new Tabulator("#table-col-fun-def", {
        data: data,
        columns: [
            { title: "Variable Assigned", field: "variable", width: 'auto', hozAlign: "center"},
            { title: "Column", field: "coltitle", width: 100 },
            { title: "Type", field: "coltype", width: 100 },
            { title: "Function/Value", field: "val", width: '265', hozAlign: "center", editor: "input", visible: true },
            { title: "Error Log", field: "function", width: '265', hozAlign: "left", visible: true }
        ],
    });


}
