function _addTask() {
    add();
}

function _deleteAllTasks() {
    clear();
}

function _saveChanges() {
    save();
}

function _cancelChanges() {
    cancel();
}

function _deleteTask(clickEvent) {
    remove(clickEvent);
}

function _registerEventHandlers() {
    $("#new-task-button").on("click", _addTask);
    $("#delete-all-button").on("click", _deleteAllTasks);
    $("#save-button").on("click", _saveChanges);
    $("#cancel-button").on("click", _cancelChanges);
    $("#task-list").on("click", ".delete-button", _deleteTask);
}

function init() {
    _registerEventHandlers();
    render();
}