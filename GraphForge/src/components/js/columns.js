const simpleXYPlotColumn = [
    {
        formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "left", headerSort: false, frozen: true, cellClick: function (e, cell) {
            cell.getRow().toggleSelect();
        }
    },
    { title: "#", field: "slno", width: 50, headerSort: false, visible: false },
    { title: "X Data", field: "xPoints", width: "auto", hozAlign: "right", editor: "number", visible: true },
    { title: "Y Data", field: "yPoints", width: "auto", hozAlign: "right", editor: "number", visible: true },
    { title: "Name", field: "name", width: 80, hozAlign: "center", editor: "input", visible: true },
    { title: "Marker", field: "marker", width: 100, editor: "select", editorParams: { values: ["⬤ (Circle)", "◼(Square)", "🞮 (Cross)", "➕ (Plus)", "⯅ (Triangle)"] }, visible: true },
    { title: "Color", field: "color", width: "auto", hozAlign: "center", editor: "select", editorParams: { values: ["Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"] }, visible: true },
    //{title:"Others", field:"msg", width: 100, hozAlign:"center"},
    { title: "Size", field: "size", width: "auto", hozAlign: "center", editor: "number", editorParams: { max: 25, min: 1 }, visible: true },
    { title: "Movable", field: "movable", width: 90, hozAlign: "center", editor: "select", editorParams: { values: ["True", "False"] }, visible: true },
];