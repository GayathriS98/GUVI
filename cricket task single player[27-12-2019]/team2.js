
var k=1;

function f2()
{
   // alert("wrewerwer");
   
   
   if(k<=1){

    var total2=0;
    var score2 =[];
    for(let i=0;i<17;i++)
    {
        let num=(Math.random()*100)%7;
        score2[i]=Math.floor(num);
        total2=total2+score2[i];
        //console.log(total2);
        document.getElementById("team2_score").innerHTML="THE TOTAL SCORE OF TEAM 2 IS"+total2;
     
        
    }
    k++;
   }
   
 
         localStorage.setItem("team2_score",total2);
         localStorage.setItem("score_per_ball_team2",score2);
   
}



