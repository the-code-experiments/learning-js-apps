var STORE_NAME = "tasks";

function saveTaskData(tasks) {
    localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
}

function loadTaskData() {
    var storedTasks = localStorage.getItem(STORE_NAME);
    if (storedTasks) {
        return JSON.parse(storedTasks);
    }
    return [];
}

function clearTaskData() {
    localStorage.removeItem(STORE_NAME);
}