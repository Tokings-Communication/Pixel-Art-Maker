// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    
    makeGrid();
    // console.log("height: " + height + " and width: " + width);
});

function makeGrid() {
    $("tr").remove();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();

for (let i = 1; i <= height; i++) {
    $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
    for (let j = 1; j <= width; j++) {
        $("#table" + i).append("<td></td>");
    }
}

// add color to cell
$("td").click(function () {
    color = $("#colorPicker").val();

    if ($(this).attr("style")) {
        $(this).removeAttr("style");
    } else {
        // console.log(color);
        $(this).attr("style", "background-color:" + color);
    }
});
}
   