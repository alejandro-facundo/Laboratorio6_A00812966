$("#newItem").on("click", function(add) {
    
    add.preventDefault();
    var name = $("#input").val();

    $("#list").append(
        `<div class="item">
            <h2 class="h2" name="0">${name}</h2>
            
            <button type="submit" id="checkButton">Check</button>
            <button type="submit" id="deleteButton">Delete</button>
        </div>`);
})

$("#list").on("click", "#checkButton", function() { 
    var currentVal = $(this).parent().find("h2").attr("name");

    if (currentVal.localeCompare("0") == 0) {
        $(this).parent().find("h2").attr("name", "1");
        $(this).parent().find("h2").css("text-decoration", "line-through");
    }
    else {
        $(this).parent().find("h2").attr("name", "0");
        $(this).parent().find("h2").css("text-decoration", "none");
    }
    
})


$("#list").on("click", "#deleteButton", function() {
    $(this).parent().remove();
})