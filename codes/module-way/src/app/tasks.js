function add() {
    renderNew();
}

function remove(clickEvent) {
    var taskElement = clickEvent.target;
    $(taskElement).closest(".task").remove();
}

function clear() {
    clearTaskData();
    render();
}

function save() {
    var tasks = [];
    $("#task-list .task").each(function(index, task) {
        var $task = $(task);
        tasks.push({
            complete: $task.find(".complete").prop('checked'),
            description: $task.find(".description").val()
        });
    });

    saveTaskData(tasks);
}

function cancel() {
    render();
}

function render() {
    renderTasks(loadTaskData());
}