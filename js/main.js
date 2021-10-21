var workInfo = [];

function importData() {
    $.getJSON("../data/data.json", function(data) {
        if (data[0].title == "Work") {
            console.log(data[0]);
            workInfo.push(data[0].timeframes);
        }
    })
}

console.log(workInfo);

$("#daily").click(function() {
    console.log("work");
});

$("#weekly").click(function() {
    console.log("work");
});

$("#monthly").click(function() {
    console.log("work");
});