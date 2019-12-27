
var m=1;

function f1()
{
   // alert("wrewerwer");
    
    if(m<=1)
    {
    var total1=0;
    var score1 = [];
    for(let j=0;j<17;j++)
    {
        let num=(Math.random()*100)%7;
        score1[j]=Math.floor(num);
        total1=score1.reduce(function(total,num){
            return total+num;
        });
        document.getElementById("team1_score").innerHTML="THE TOTAL SCORE OF TEAM 1 IS"+total1;
       // document.querySelector(".b1").addEventListener('click',f1);
    }m++;
}
    localStorage.setItem("team1_score",total1);
    localStorage.setItem("score_per_ball_team1",score1);

    

}

