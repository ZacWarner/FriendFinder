$(document).ready(function () {
    var questions = ["Your mind is always buzzing with unexplored ideas and plans.", "Generally speaking, you rely more on your experience than your imagination.", "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.", "People can rarely upset you.", "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.", "You rarely get carried away by fantasies and ideas.", "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."];


    var count = 0;
    var answers = [];

    $("#question").html(questions[count]);

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


});