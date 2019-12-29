var count1=1;
var total1=0;
var score1 = [];
var overs=prompt("ENTER THE NUMBER OF OVERS");
function f1()
{
   // alert("wrewerwer");
   console.log(count1);
   if(count1<=(6*overs))
   {
        let num=(Math.random()*100)%7;
        score1.push(Math.floor(num));
        total1=score1.reduce(function(total,num){
            return total+num;
        });
        console.log(score1);
        document.getElementById("team1_score").innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+total1;
       // document.querySelector(".b1").addEventListener('click',f1);
       localStorage.setItem("team1_total",total1);
       localStorage.setItem("team1_score",score1);
       count1++;
    }
}
   

    

