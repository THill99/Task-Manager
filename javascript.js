//  <div class="container">
//   <div class="row">
//   <div class="col-sm">
//     One of three columns
//   </div>
//   <div class="col-sm">
//     One of three columns
//   </div>
//   <div class="col-sm">
//     One of three columns
//   </div>
// </div>
// </div>
var day = moment().format("dddd, MMMM Do YYYY");
var currentDay = $("#currentDay").text(day);
for (let i = 0; i<9; i++){   
    var saveButton = $("<div>").addClass("saveBtn").addClass("col-sm-1");
    var task = $("<textarea>").addClass("textarea").addClass("col-xl-10").attr("id", i);
    var hour = $("<div>").addClass("hour").addClass("col-sm-1");
    var row = $("<div>").addClass("row");
    var currentTime = moment();
    var rowTime = moment().hour(i+9).format("h A");
    hour.text(rowTime);
    var icon = $("<i>").addClass("bi bi-save");
    saveButton.append(icon);
    saveButton.click(function() {
        var texttoSave = $("#"+i).val();
        console.log(i);
        console.log(task);
        console.log(task.attr("id"));
        localStorage.setItem(JSON.stringify(i), texttoSave);
        
      });

    task.val(localStorage.getItem(JSON.stringify(i)));

    if(currentTime.hour() === i+9){
        task.addClass("present");
    }
    else if(currentTime.hour() < i+9){
        task.addClass("future");
    }
    else if(currentTime.hour() > i+9){
        task.addClass("past");
    }
    row.append(hour,task,saveButton);
    $(".container").append(row);
}

