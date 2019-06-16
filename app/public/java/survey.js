$(document).ready(function () {
    var questions = ["Your mind is always buzzing with unexplored ideas and plans.", "Generally speaking, you rely more on your experience than your imagination.", "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.", "People can rarely upset you.", "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.", "You rarely get carried away by fantasies and ideas.", "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."];

    var name;
    var email;
    var count = 0;
    var answers = [];
    var sumArr = [];
    var matchLoc;
    var jsonSurveys;

    //constructer for JSON
    function survey(name, email, answers) {
        this.name = name;
        this.email = email;
        this.answers = answers;
    };



    //function to create buttons
    function createButton() {
        //makes btns
        var btn1 = $("<div>").addClass("col-md-2");
        var in1 = $("<button>").addClass("btn btn-danger").attr("id", "btn1").html("1");
        btn1.append(in1);

        var btn2 = $("<div>").addClass("col-md-2");
        var in2 = $("<button>").addClass("btn btn-warning").attr("id", "btn2").html("2");
        btn2.append(in2);

        var btn3 = $("<div>").addClass("col-md-2");
        var in3 = $("<button>").addClass("btn btn-success").attr("id", "btn3").html("3");
        btn3.append(in3);

        var btn4 = $("<div>").addClass("col-md-2");
        var in4 = $("<button>").addClass("btn btn-info").attr("id", "btn4").html("4")
        btn4.append(in4);

        var btn5 = $("<div>").addClass("col-md-2");
        var in5 = $("<button>").addClass("btn btn-primary").attr("id", "btn5").html("5")
        btn5.append(in5);

        $("#btnRow").append(btn1, btn2, btn3, btn4, btn5);

        //make tool tip spots under buttons
        var tip1 = $("<div>").addClass("col-md-2");
        tip1.append($("<h5>").attr("id", "btnTip1").html("not very"));

        var tip2 = $("<div>").addClass("col-md-2");
        tip2.append($("<h5>").attr("id", "btnTip2").html(""));

        var tip3 = $("<div>").addClass("col-md-2");
        tip3.append($("<h5>").attr("id", "btnTip3").html(""));

        var tip4 = $("<div>").addClass("col-md-2");
        tip4.append($("<h5>").attr("id", "btnTip4").html(""));

        var tip5 = $("<div>").addClass("col-md-2");
        tip5.append($("<h5>").attr("id", "btnTip5").html("Very Much"));

        $("#clarification").append(tip1, tip2, tip3, tip4, tip5);
    };

    //click function for start button
    $(document).on("click", "#start", function () {
        event.preventDefault();
        name = $("#name").val().trim();
        email = $("#email").val().trim();

        $("#btnRow").empty();
        $("#clarification").empty();


        createButton();
        count = 0;
        $("#question").html(questions[count]);
    });




    //click functions for the buttons.
    $(document).on("click", "#btn1", function () {
        answers.push(1);
        count++;
        countCheck();
    });

    $(document).on("click", "#btn2", function () {
        answers.push(2);
        count++;
        countCheck();
    });

    $(document).on("click", "#btn3", function () {
        answers.push(3);
        count++;
        countCheck();
    });

    $(document).on("click", "#btn4", function () {
        answers.push(4);
        count++;
        countCheck();
    });

    $(document).on("click", "#btn5", function () {
        answers.push(5);
        count++;
        countCheck();
    });

    //checks count
    function countCheck() {
        if (count < 10) {
            $("#question").html(questions[count]);
        }
        else {
            $("#question").html("Thats the quiz!")
            $("#btnRow").empty();
            $("#clarification").empty();
            var yourSum;
            for (let i = 0; i < answers.length; i++) {
                yourSum += parseInt(answers[i]);
                console.log(yourSum);
            };
            var obj = new survey(name, email, answers);
            console.log(obj);
            $.post("/api/postsurveys", obj).then(function (data) {
                jsonSurveys = data;
                console.log(data[0].name);
                for (let i = 0; i < data.length; i++) {
                    var sum = 0;
                    for (let j = 0; j < 10; j++) {
                        sum += parseInt(data[i].answers[j]);
                    }
                    sumArr[i] = sum;
                    console.log(sumArr);
                }

                //this will find your match;
                for (let i = 0; i < data.length - 1; i++) {
                    var match = 100;
                    var check;
                    check = Math.abs(sumArr[i] - yourSum);
                    console.log(check);
                    if (check <= match) {
                        match = check;
                        matchLoc = i;
                        console.log(matchLoc);
                    }
                }
                $("#question").html("This is your match! Send them an email!");
                var h3 = $("<h3>").html(jsonSurveys[matchLoc].name);
                var h4 = $("<h4>").html(jsonSurveys[matchLoc].email);
                $("#btnRow").append(h3, h4);
            });

        }
    }

    // function showMatch(loc) {
    //     $("#question").html("This is your match! Send them an email!");
    //     var h3 = $("<h3>").html(jsonSurveys[loc].name);
    //     var h4 = $("<h4>").html(jsonSurveys[loc].email);
    //     $("#btnRow").append(h3, h4);

    // }

});