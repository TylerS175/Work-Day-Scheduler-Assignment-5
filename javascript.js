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
    })
}
var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);

var hourAudit = function (){
    var currentHour = moment().hour()
    for(var i=8; i<18; i++){
        var taskArea = $("#task-"+i)
        if(currentHour>i){
            $(taskArea).addClass("past");
        } else if (currentHour === i){
            $(taskArea).addClass("present");
        } else{
            $(taskArea).addClass("future")
        }
    }
}


$(".saveBtn").on("click", function() {
    var index = $(".saveBtn").index(this);
    task[index] = $(this).parent().find(",taskItem").text();
    localstore.setItem("tasks", JSON.stringify(tasks));
});