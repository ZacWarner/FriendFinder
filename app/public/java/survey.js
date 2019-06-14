$(document).ready(function () {
    var questions = ["Your mind is always buzzing with unexplored ideas and plans.", "Generally speaking, you rely more on your experience than your imagination.", "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.", "People can rarely upset you.", "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.", "You rarely get carried away by fantasies and ideas.", "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."];


    var count = 0;
    var answers = [];

    $("#question").html(questions[count]);



    //function to create buttons
    function createButton() {
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
    };

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

    function countCheck() {
        if (count < 10) {
            $("#question").html(questions[count]);
        }
        else {
            $("#question").html("Thats the quiz!")
            console.log(answers);
        }
    }

    createButton();
});