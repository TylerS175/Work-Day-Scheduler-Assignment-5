task = [];

// Adding Load tasks 
var loadTasks = function() {
    tasks = JSON.parse(localStore.getItem("tasks"))
    if(!tasks) {
        tasks={};
    };
    printTasks(taks)
}

var printTasks = function() {
    $.each(tasks, function(list, arr) {
        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
        console.log(list)
    }
}
