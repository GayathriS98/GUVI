let score2=[];
let total2;
function f2()
{
    if(count1>=(6*overs)+1 && count1<=2*(6*overs))
    {
    let num=((Math.random()*100)%7);
    score2.push(Math.floor(num));
    total2=score2.reduce(function(total,num){
        return total+num;
    });
    console.log(score2);
    let a=document.getElementById("team2_score");
    a.innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
    localStorage.setItem("team2_total",total2);
    localStorage.setItem("team2_score",score2);
    count1++;
    }
}
