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
var colData = [     /*{'coltitle': "X Data", 'vals': [] }*/];

//Coluns counts
//Initial column counts; 2(data columns) +  5(properties columns)
let dataColCount = 2;
const propColCount = 5;
let TotalColCount = dataColCount +  propColCount;

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

/**
 * Modify, updates UI commponents
 * @param {string} id 
 */
function CONSTRUCT_PLOTSETUP(id) {
    const plotSetup = `<div id="plot-setup-div-${id}" class="win7" style="display: none; flex-direction: row;">
    <div style="display: flex; flex-direction: column;">
        <div>
            <fieldset style="display: flex; flex-direction: column;">
                <legend>PLOT TYPE</legend>
                <div>
                    <label for="plot-type-${id}">Type: </label>
                    <select id="plot-type-${id}" style="margin-left: 43px;">
                        <option value="Data Plot">Scatter Plot</option>
                        <option value="Equation Plot">Linear Regression</option>
                        <option value="Notepad">Polynomial Regression</option>
                    </select>
                </div>
                <hr style="width:100%; margin-top: 10px;">
                <div style="margin: 3px 0 0 0">
                    <button id="content-menu-button-${id}"
                    style="display: flex; align-items: center;justify-content: center; width: 230px;"
                    title="More appearance settings"><img src="../../icons/icon_menu_30x30.png"><b>Context Menu</b></button>
                </div>
                <br>
            </fieldset>
        </div>
    </div>
    &nbsp;
    <div>
        <fieldset style="display: flex; flex-direction: column; height: 127px;">
            <legend>APPEARANCE</legend>
            <div style="display: flex; flex-direction: row;">
                <button id="add-graph-axes-label-${id}"
                    style="display: flex; align-items: center;justify-content: center; min-width: 0; width: 34px;"
                    title="Add axes label"><img src="../../icons/icon_addlabel_30x30.png"></button>
                    &nbsp;
                <button id="more-graph-appearance-setting-${id}"
                    style="display: flex; align-items: center;justify-content: center; min-width: 0; width: 34px;"
                    title="More appearance settings"><img src="../../icons/icon_settings_30x30.png"></button>
            </div>
            <br>
            <div style="margin-left: -4px">
                <input type="checkbox" id="show-pt-name-checkbox-${id}">
                <label for="show-pt-name-checkbox-${id}">Show Point Names</label>
            </div>
            <div style="margin-left: -4px">
                <input type="checkbox" id="show-grid-checkbox-${id}">
                <label for="show-grid-checkbox-${id}">Show Grid</label>
            </div>
        </fieldset>
    </div>
    &nbsp;
    <div>
        <fieldset style="display: flex; flex-direction: column; height: 127px;">
            <legend>DATA SOURCES</legend>
            <div>
                <label for="h-axis-data-source-${id}">Horizontal axis: </label>
                <select id="h-axis-data-source-${id}" style="margin-left: 43px; width: 100px;">
                    <option value="x_data">X Data</option>
                    <option value="y_data">Y Data</option>
                </select>
            </div>
            <br>
            <div>
                <label for="v-axis-data-source-${id}">Vertical axis: </label>
                <select id="v-axis-data-source-${id}" style="margin-left: 61px; width: 100px;">
                    <option value="x_data">X Data</option>
                    <option value="y_data">Y Data</option>
                </select>
            </div>
            
        </fieldset>
    </div>
</div>`

    $('#plot-setup-container-div').append(plotSetup);

}

//Empty project messages
projectDiv.append(spanEmptyProj);
editorDiv.append(spanEmptyProjEditor);


//On launching disable the graph area  
$('#jsx-graph-div').css({
    'pointer-events': 'none',
    'cursor': 'not-allowed'
});

//Defining addNewPage(). It creates a modal form for book name, type and, description.
function addNewPage() {
    $('#dd').dialog({
        title: 'New Page',
        width: '500px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true,
        buttons: [
            {
                text: 'Create Page',
                handler: function () {
                    // button is clicked
                    let PAGENAME = $('#page-name').val();
                    let PAGETYPE = $('#page-type').val();
                    let PAGEDES = $('#page-des').val()
                    createPage(PAGENAME, PAGETYPE, PAGEDES);
                }
            },
            {
                text: 'Cancel',
                handler: function () {
                    // close the dialog when the cancel button is clicked
                    $('#dd').dialog('close');
                }
            }
        ]
    });
}

function createPage(name, type, des) {
    $('#dd').dialog('close');
    var editorObject = [];
    const UNIQUEID = generateUniqueId({
        excludeSymbols: ['@', '#', '|', '%', '(', ')', '$']
    });
    let editorDivChild = `<div id="div-editor-${UNIQUEID}" style=" display: none;width: 100%; height: 100%"></div>`;
    //Now append the edito as child.
    $('#editor-panel-div').append(editorDivChild);

    //Editor div id. An unique editorId is attached to each page created.
    let editorDivId = `div-editor-${UNIQUEID}`;

    //Create editor based on the page type
    if (type === 'Data Plot') {
        var Editor = new jspreadsheet(document.getElementById(editorDivId), {
            copyCompatibility: true,
            data: Array.from({ length: 50 }, (_, i) => {
                var id = i + 1;
                return {
                    'X Data': null,
                    'Y Data': null,
                    'Point Name': `P${i + 1}`,
                    'Marker': "⬤ (Circle)",
                    'Color': "Red",
                    'Size': 3,
                    'Movable': "False",
                };
            }),
            columns: [
                { type: 'text', title: 'X Data', width: '100' },
                { type: 'text', title: 'Y Data', width: '100' },
                { type: 'text', title: 'Point Name', width: '100' },
                { type: 'dropdown', title: 'Marker', width: '100', source: ptMarker },
                { type: 'dropdown', title: 'Color', width: '100', source: ptColor },
                { type: 'dropdown', title: 'Size', width: '100', source: Array.from({ length: 25 }, (_, i) => i + 1) },
                { type: 'dropdown', title: 'Movable', width: '100', source: ['True', 'False'] }
            ],
            // nestedHeaders:[
            //     {
            //         title: 'Data',
            //         colspan: '2',
            //     },
            //     {
            //         title: 'Properties',
            //         colspan: '5',
            //     },
            // ]
        });
        // create "Plot Setup"
        CONSTRUCT_PLOTSETUP(UNIQUEID);
    }
    if (type === 'Notepad') {
        var Editor = $(`#${editorDivId}`).texteditor({
            name: "TEXT",
            toolbar: ['bold', 'italic', 'strikethrough', 'underline', '-', 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', '-', 'insertorderedlist', 'insertunorderedlist', 'outdent', 'indent', '-', 'formatblock', 'fontname', 'fontsize', 'lineheight']
        });
    }
    //Adding JSX Graph
    const graphspandiv = `<span id="jsx-graph-span-${UNIQUEID}"><div id="jsx-graph-div-${UNIQUEID}" class="jxgbox" style="height: 100%;;background:whitesmoke; width: 100%;border-radius: 0;"></div></span>`;
    $('#graph-div-panel').append(graphspandiv);
    var graph = JXG.JSXGraph.initBoard(`jsx-graph-div-${UNIQUEID}`, {
        axis: true,
        boundingbox: [-50, 50, 50, -50],
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

    /**
    * Everytime a new page is created or deleted, 
    * 'editorObject' and 'pageData' must be updated accordingly.
    */
    editorObject.editorId = editorDivId;
    editorObject.obj = Editor;

    pageData.push(
        { 'id': UNIQUEID, 'pageName': name, 'pageType': type, 'pageDes': des, 'editorDtls': editorObject, 'graphDtls': graph }
    );

    /**
     * Creating table for project panel using EasyUi Datagrid
     * Every time a page created, the data grid will be redrawn. 
     */
    projectDiv.empty(); //Removing empty project message
    projectDiv.append(`<table id="project-table" style="height: 100%"></table>`);

    //Redrawing the project table
    $("#project-table").datagrid({
        columns: [[
            { field: 'id', title: '<b>#<b>', width: 'auto', hidden: "true" },
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
            if (row.pageType === 'Data Plot') {
                $('#editor-panel-div').panel('options').title = 'New Title';
                //Hiding elements of unselected pages
                $("#editor-panel-div").children().css('display', 'none');
                $(`#graph-div-panel`).children().css('display', 'none');
                $('#plot-setup-container-div').children().css('display', 'none');
                //Make selected pages components visible
                $(`#div-editor-${row.id}`).show();
                $(`#jsx-graph-span-${row.id}`).show();
                $(`#plot-setup-div-${row.id}`).css('display', 'flex');
                $("#row-management-container-span button").prop("disabled", false);
            }
            if (row.pageType === 'Notepad') {
                $("#row-management-container-span button").prop("disabled", true);
                $("#editor-panel-div").children().css('display', 'none');
                $(`#div-editor-${row.id}`).show();
                $(`#div-editor-${row.id}`).parent().show();
            }
        }
    });
    slno += 1;
    //Clearing the form values
    $('#page-name').val('');
    $('#page-type').val('Data Plot');
    $('#page-des').val('');
    //Allowing cursor events 
    $('#jsx-graph-div').css({
        'pointer-events': 'auto',
        'cursor': 'auto'
    })

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
        var sheet = editorDtls.obj;
        var lastRowIndex = sheet.records.length;
    }
    const newRowData = [null, null, `P${lastRowIndex + 1}`, "⬤ (Circle)", "Red", 3, "False"]
    sheet.insertRow(newRowData, lastRowIndex, false);
}

//Adds multiple(user input) rows
function addNewRows() {
    $('#dd-add-rows').dialog({
        title: 'Add Rows',
        width: '400px',
        height: 'auto',
        closed: false,
        cache: false,
        modal: true,
        buttons: [
            {
                text: 'Add Rows',
                handler: function () {
                    // button is clicked
                    let rowCount = $('#no-of-rows').val();
                    createRows(rowCount);

                }
            },
            {
                text: 'Cancel',
                handler: function () {
                    // close the dialog when the cancel button is clicked
                    $('#dd-add-rows').dialog('close');
                }
            }
        ]
    });
}

function createRows(c) {
    $('#dd-add-rows').dialog('close');
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        var editorDtls = row.editorDtls;
        var sheet = editorDtls.obj;
        var lastRowIndex = sheet.records.length;
    }
    for (i = 0; i < c; i++) {
        var lastRowIndex = sheet.records.length;
        var newRowData = [null, null, `P${lastRowIndex + 1}`, "⬤ (Circle)", "Red", 3, "False"];
        sheet.insertRow(newRowData, lastRowIndex, false);
    }
}

//Delete rows
function deleteRows() {
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        var editorDtls = row.editorDtls;
        var sheet = editorDtls.obj;
        var lastRowIndex = sheet.records.length;
    }
    let selectedRows = sheet.getSelectedRows(true);
    sheet.deleteRow(selectedRows[0], selectedRows[selectedRows.length - 1]);
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
    $('#dd-add-column').dialog('close');
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        var editorDtls = row.editorDtls;
        var sheet = editorDtls.obj;
    }
    var newCol = { type: coltype, title: ctitle, width: '100' };
    sheet.insertColumn(1, 1, false, newCol);

    dataColCount += 1;
    RECONSTRUCT_PAGE_SETUP_DATA_SOURCE(ctitle); 
}

/**
 * Ploting
 */

function initPlot() {
    var id = null;
    var row = $('#project-table').datagrid('getSelected');
    if (row) {
        id = row.id;
        var editorDtls = row.editorDtls;
        var sheet = editorDtls.obj;
        var lastRowIndex = sheet.records.length;
    }

    var x_data = []

}

function test() {
    window.open("https://www.w3schools.com");
}