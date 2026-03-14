//setup variables
let question = "Loading..."
let answer = 0;
let submit = false;
let stop;
//the two factors for the question
let a;
let b;

//detect keyboard
window.addEventListener('keydown', function(e) {
    key = Number(e.key); //number version of e.key for simplicity
    if (key > -1 && key < 10 && answer.toString().length < 9) {
        answer *= 10;
        answer += key;
        console.log(answer);
    } else if (e.key == "Backspace") {
        answer = Math.floor(answer / 10);
        console.log(answer);
    } else if (e.key == "Enter") {
        submit = true;
    }
});

//detect on-screen numpad
function numpad(key){
    $(`#${key}`).click(function(){
        if (typeof key == "number") {
            if (answer.toString().length < 9) {
                answer *= 10;
                answer += key;
                console.log(answer);
            };
        } else if (key == "backspace") {
            answer = Math.floor(answer / 10);
            console.log(answer);
        } else if (key == "enter") {
            submit = true;
        };
    });
};

numpad(1);
numpad(2);
numpad(3);
numpad(4);
numpad(5);
numpad(6);
numpad(7);
numpad(8);
numpad(9);
numpad(0);
numpad("backspace");
numpad("enter");

//start from homescreen
$("#practice").css("visibility", "hidden");
$("#start-button").click(function(){
    //hide start, show main
    $("#start").remove();
    $("#practice").css("visibility", "visible");

    //start practice
    setInterval(main(), 16)
});

function main() {
    $("#question").innerHTML = question;
    $("#answer").innerHTML = answer;
};