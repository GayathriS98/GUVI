var players = /** @class */ (function () {
    function players() {
        this.turns = 1;
        this.count = 1;
    }
    players.prototype.play = function () {
        console.log(this.turns);
        if (this.turns <= 9) {
            if (this.count % 2 == 0) {
                this.turns++;
                this.count++;
                return "O";
            }
            else {
                this.turns++;
                this.count++;
                return "X";
            }
        }
    };
    return players;
}());
var player1 = new players();
var check_array = new Array(3);
for (var i = 0; i < check_array.length; i++) {
    check_array[i] = new Array(3);
}
var x = document.querySelector(".current");
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var b6 = document.querySelector(".b6");
var b7 = document.querySelector(".b7");
var b8 = document.querySelector(".b8");
var b9 = document.querySelector(".b9");
function f11() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b1.innerHTML = "" + ans;
    $(".b1").prop('disabled', true);
    if (ans == "X") {
        check_array[0][0] = 1;
    }
    else {
        check_array[0][0] = 0;
    }
    check(check_array);
}
function f12() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b2.innerHTML = "" + ans;
    $(".b2").prop('disabled', true);
    if (ans == "X") {
        check_array[0][1] = 1;
    }
    else {
        check_array[0][1] = 0;
    }
    check(check_array);
    //document.getElementsByClassName("b2").disabled=true;
}
function f13() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b3.innerHTML = "" + ans;
    $(".b3").prop('disabled', true);
    if (ans == "X") {
        check_array[0][2] = 1;
    }
    else {
        check_array[0][2] = 0;
    }
    check(check_array);
    //document.getElementsByClassName("b3").disabled=true;
}
function f21() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b4.innerHTML = "" + ans;
    $(".b4").prop('disabled', true);
    if (ans == "X") {
        check_array[1][0] = 1;
    }
    else {
        check_array[1][0] = 0;
    }
    check(check_array);
    //document.getElementsByClassName("b4").disabled=true;
}
function f22() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b5.innerHTML = "" + ans;
    $(".b5").prop('disabled', true);
    if (ans == "X") {
        check_array[1][1] = 1;
    }
    else {
        check_array[1][1] = 0;
    }
    check(check_array);
    //document.getElementsByClassName("b5").disabled=true;
}
function f23() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b6.innerHTML = "" + ans;
    $(".b6").prop('disabled', true);
    if (ans == "X") {
        check_array[1][2] = 1;
    }
    else {
        check_array[1][2] = 0;
    }
    check(check_array);
}
function f31() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b7.innerHTML = "" + ans;
    $(".b7").prop('disabled', true);
    if (ans == "X") {
        check_array[2][0] = 1;
    }
    else {
        check_array[2][0] = 0;
    }
    check(check_array);
}
function f32() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b8.innerHTML = "" + ans;
    $(".b8").prop('disabled', true);
    if (ans == "X") {
        check_array[2][1] = 1;
    }
    else {
        check_array[2][1] = 0;
    }
    check(check_array);
}
function f33() {
    if (player1.count % 2 == 0) {
        x.innerHTML = "Player 2 is playing....";
    }
    else {
        x.innerHTML = "Player 1 is playing....";
    }
    var ans = player1.play();
    b9.innerHTML = "" + ans;
    $(".b9").prop('disabled', true);
    if (ans == "X") {
        check_array[2][2] = 1;
    }
    else {
        check_array[2][2] = 0;
    }
    check(check_array);
    //document.getElementsByClassName("b9").disabled=true;
}
function check(check_array) {
    if (check_array[0][0] == check_array[0][1] && check_array[0][1] == check_array[0][2] || check_array[0][0] == check_array[1][0] && check_array[0][0] == check_array[2][0]) {
        var temp = check_array[0][0];
        if (temp == 1) {
            x.innerHTML = "PLAYER 1 WINS";
        }
        else {
            x.innerHTML = "PLAYER 2 WINS";
        }
    }
    // else if(check_array[1][0]==check_array[1][1] && check_array[1][1]==check_array[1][2] || check_array[0][1]==check_array[1][1] && check_array[1][1]==check_array[2][1])
    // {
    //     let temp=check_array[1][1];
    //     if(temp==1)
    //     {
    //         x.innerHTML="PLAYER 1 WINS";
    //     }
    //     else{
    //         x.innerHTML="PLAYER 2 WINS";
    //     }
    // }
    // else if(check_array[2][0]==check_array[2][2] && check_array[2][2]==check_array[2][1] || check_array[0][2]==check_array[2][2] && check_array[2][2]==check_array[1][2])
    // {
    //     let temp=check_array[0][0];
    //     if(temp==1)
    //     {
    //         x.innerHTML="PLAYER 1 WINS";
    //     }
    //     else{
    //         x.innerHTML="PLAYER 2 WINS";
    //     }
    // }
    // else if(check_array[0][0]==check_array[1][1] && check_array[1][1]==check_array[2][2] || check_array[0][2]==check_array[1][1] && check_array[1][1]==check_array[2][0])
    // {
    //     let temp=check_array[0][0];
    //     if(temp==1)
    //     {
    //         x.innerHTML="PLAYER 1 WINS";
    //     }
    //     else{
    //         x.innerHTML="PLAYER 2 WINS";
    //     }
    // }
}
