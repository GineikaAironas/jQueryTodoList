//Using jQuery
let input = $("#todoInput");
let todoBox = $("#allTodos");
let todosRemoveButtons = $("#allTodos .removeTodoButton");

input.keyup(function (e) {
    //If user pressed enter (keyCode 13)
    if (e.which == 13 && $(this).val()) {
        //Add new todo with entered text and clear input
        let inputText = $(this).val();
        $(this).val("");
        addTodo(inputText);
    }
});

function addTodo(text) {
    todoBox.append(`<div class="todoContainer">
    <li>${text}</li>
    <button class="removeTodoButton">
        <i class="fas fa-check"></i>
    </button>
    </div>`);
    //Strike out functionality
    $(".todoContainer > li")
        .last()
        .on("click", function () {
            $(this).toggleClass("strikedOut");
        });
    //Remove button functionality
    $(".removeTodoButton")
        .last()
        .on("click", function () {
            $(this)
                .parent()
                .slideUp("slow", function () {
                    $(this).remove();
                });
        });
}
