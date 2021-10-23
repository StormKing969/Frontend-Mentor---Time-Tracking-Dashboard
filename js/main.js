var workInfo = [];
var playInfo = [];
var studyInfo = [];
var exerciseInfo = [];
var socialInfo = [];
var self_careInfo = [];
var hasBeenClicked = false;

function DailyData() {
    
    $.ajax({
        dataType: 'json',
        success: function(data) {
            // Default Work Data
            var workData = data[0].timeframes;
            for (var i in workData) {
                workInfo.push([i, workData[i]])
            };

            $("#work_hours").text(workInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#work_hours_previous").text("Last Week - " + workInfo[0][1].previous + "hrs");

            // Default Play Data
            var playData = data[1].timeframes;
            for (var i in playData) {
                playInfo.push([i, playData[i]])
            };
            
            $("#play_hours").text(playInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#play_hours_previous").text("Last Week - " + playInfo[0][1].previous + "hrs");

            // Default Study Data
            var studyData = data[2].timeframes;
            for (var i in studyData) {
                studyInfo.push([i, studyData[i]])
            };
           
            $("#study_hours").text(studyInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#study_hours_previous").text("Last Week - " + studyInfo[0][1].previous + "hrs");

            // Default Exercise Data
            var exerciseData = data[3].timeframes;
            for (var i in exerciseData) {
                exerciseInfo.push([i, exerciseData[i]])
            };
            
            $("#exercise_hours").text(exerciseInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#exercise_hours_previous").text("Last Week - " + exerciseInfo[0][1].previous + "hrs");

            // Default Social Data
            var socialData = data[4].timeframes;
            for (var i in socialData) {
                socialInfo.push([i, socialData[i]])
            };
            
            $("#social_hours").text(socialInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#social_hours_previous").text("Last Week - " + socialInfo[0][1].previous + "hrs");

            // Default Self Care Data
            var self_careData = data[5].timeframes;
            for (var i in self_careData) {
                self_careInfo.push([i, self_careData[i]])
            };
            
            $("#self_care_hours").text(self_careInfo[0][1].current + "hrs").css("font-size", "24px");
            $("#self_care_hours_previous").text("Last Week - " + self_careInfo[0][1].previous + "hrs");
        },
        url: '../data.json'
    });
}

function WeeklyData() {
    
    $.ajax({
        dataType: 'json',
        success: function(data) {
            // Default Work Data
            var workData = data[0].timeframes;
            for (var i in workData) {
                workInfo.push([i, workData[i]])
            };

            $("#work_hours").text(workInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#work_hours_previous").text("Last Week - " + workInfo[1][1].previous + "hrs");

            // Default Play Data
            var playData = data[1].timeframes;
            for (var i in playData) {
                playInfo.push([i, playData[i]])
            };
            
            $("#play_hours").text(playInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#play_hours_previous").text("Last Week - " + playInfo[1][1].previous + "hrs");

            // Default Study Data
            var studyData = data[2].timeframes;
            for (var i in studyData) {
                studyInfo.push([i, studyData[i]])
            };
           
            $("#study_hours").text(studyInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#study_hours_previous").text("Last Week - " + studyInfo[1][1].previous + "hrs");

            // Default Exercise Data
            var exerciseData = data[3].timeframes;
            for (var i in exerciseData) {
                exerciseInfo.push([i, exerciseData[i]])
            };
            
            $("#exercise_hours").text(exerciseInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#exercise_hours_previous").text("Last Week - " + exerciseInfo[1][1].previous + "hrs");

            // Default Social Data
            var socialData = data[4].timeframes;
            for (var i in socialData) {
                socialInfo.push([i, socialData[i]])
            };
            
            $("#social_hours").text(socialInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#social_hours_previous").text("Last Week - " + socialInfo[1][1].previous + "hrs");

            // Default Self Care Data
            var self_careData = data[5].timeframes;
            for (var i in self_careData) {
                self_careInfo.push([i, self_careData[i]])
            };
            
            $("#self_care_hours").text(self_careInfo[1][1].current + "hrs").css("font-size", "24px");
            $("#self_care_hours_previous").text("Last Week - " + self_careInfo[1][1].previous + "hrs");
        },
        url: '../data.json'
    });
}

function MonthlyData() {
    
    $.ajax({
        dataType: 'json',
        success: function(data) {
            // Default Work Data
            var workData = data[0].timeframes;
            for (var i in workData) {
                workInfo.push([i, workData[i]])
            };

            $("#work_hours").text(workInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#work_hours_previous").text("Last Week - " + workInfo[2][1].previous + "hrs");

            // Default Play Data
            var playData = data[1].timeframes;
            for (var i in playData) {
                playInfo.push([i, playData[i]])
            };
            
            $("#play_hours").text(playInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#play_hours_previous").text("Last Week - " + playInfo[2][1].previous + "hrs");

            // Default Study Data
            var studyData = data[2].timeframes;
            for (var i in studyData) {
                studyInfo.push([i, studyData[i]])
            };
           
            $("#study_hours").text(studyInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#study_hours_previous").text("Last Week - " + studyInfo[2][1].previous + "hrs");

            // Default Exercise Data
            var exerciseData = data[3].timeframes;
            for (var i in exerciseData) {
                exerciseInfo.push([i, exerciseData[i]])
            };
            
            $("#exercise_hours").text(exerciseInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#exercise_hours_previous").text("Last Week - " + exerciseInfo[2][1].previous + "hrs");

            // Default Social Data
            var socialData = data[4].timeframes;
            for (var i in socialData) {
                socialInfo.push([i, socialData[i]])
            };
            
            $("#social_hours").text(socialInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#social_hours_previous").text("Last Week - " + socialInfo[2][1].previous + "hrs");

            // Default Self Care Data
            var self_careData = data[5].timeframes;
            for (var i in self_careData) {
                self_careInfo.push([i, self_careData[i]])
            };
            
            $("#self_care_hours").text(self_careInfo[2][1].current + "hrs").css("font-size", "24px");
            $("#self_care_hours_previous").text("Last Week - " + self_careInfo[2][1].previous + "hrs");
        },
        url: '../data.json'
    });
}

// Fetch Data

$("#daily").click(function() {
    DailyData();

    UserChoice(hasBeenClicked=true, "#daily");
    $("#monthly").removeClass("chosen");
    $("#weekly").removeClass("chosen");
});

$("#weekly").click(function() {
    WeeklyData();

    UserChoice(hasBeenClicked=true, "#weekly");
    $("#daily").removeClass("chosen");
    $("#monthly").removeClass("chosen");
});

$("#monthly").click(function() {
    MonthlyData();

    UserChoice(hasBeenClicked=true, "#monthly");
    $("#daily").removeClass("chosen");
    $("#weekly").removeClass("chosen");
});

function UserChoice(hasBeenClicked, currentId) {
    if (hasBeenClicked) {
        $(currentId).addClass("chosen");
    }
}
