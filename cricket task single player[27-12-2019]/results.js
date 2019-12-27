var a=window.localStorage.getItem("score_per_ball_team1");
var b=window.localStorage.getItem("score_per_ball_team2");
var c=window.localStorage.getItem("team1_score");
var d=window.localStorage.getItem("team2_score");

var res=document.querySelector(".winner");
var sum1=document.querySelector(".team1_summary");
var sum2=document.querySelector(".team2_summary");
sum1.innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+c+" [ "+a+" ]";
sum2.innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+d+" [ "+b+" ]";
var x=parseInt(c)
var y=parseInt(d)
console.log(typeof x);


    if(x>y)
    {
        res.innerHTML="THE WINNER IS TEAM 1";
    }
    else if(y>x)
    {
        res.innerHTML="THE WINNER IS TEAM 2";
    }
    else{
        res.innerHTML="THIS GAME IS A TIE.";
    
    }

