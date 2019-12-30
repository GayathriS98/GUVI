let score2=[];
let ball2=[];
let total2;
let individual2=[];
let wickets2=0;
var count=0;
let b2_c=1;
//var overs=prompt("ENTER THE NUMBER OF OVERS ");
let per_over2=document.querySelector(".score_per_over_team2");
function f2()
{
    let temp2;
    if(count>=(6*overs) && count<2*(6*overs))
 {
    console.log(count);
    temp2=Math.floor((Math.random()*100)%7);
    score2.push(temp2);
    total2=score2.reduce(function(total,num){
        return total+num;
    });
    
    //individual cores and ball
    if(temp2==0 || b2_c==6)
    {
        ball2.push(b2_c);
        b2_c=0;
        if(wickets2<11)
        {
            if(wickets2!=0)
            {
            let index=wickets2-1;
            wickets2++;
            let sum=individual2.reduce(function(total,num){
                return total+num;
            });
            individual2.push(total2-sum);
           
            document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
            document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
            }
            else
            {
                wickets2++;
               
                individual2.push(total2);  
                document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
                document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;  
            }
         }
    }
    else
    {
        document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
        document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
       
    }
 }
    if(temp2!=0 && count==(2*(6*overs))-1)
    {
        if(b2_c!=0)
        {
        let sum=individual2.reduce(function(total,num){
            return total+num;
        });
        individual2.push(total2-sum);
        ball2.push(b2_c);
        document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
        document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
    }
   
    }
//console.log(temp2);
    if(count<(2*6*overs))
    {
        if((count)%6 != 0 && (count+1)%6 !=0)
        {
        per_over2.innerHTML=per_over2.innerHTML+temp2+",";
        }
    
        else if((count)%6 != 0 && (count+1)%6 ==0)
        {
            per_over2.innerHTML=per_over2.innerHTML+temp2;
        }
        else if((count)%6 == 0)
        {
        per_over2.innerHTML=temp2+",";
        }
    }
    if(count==(2*6*overs)-1)
    {
        setTimeout(function estimate1()
        {
            per_over2.innerHTML="";
        },1000);
    }
    if(count>=(6*overs) && count<2*(6*overs))
    {
    b2_c++;
count++;
    }
localStorage.setItem("team2_score",score2);
    localStorage.setItem("team2_total",total2);
    localStorage.setItem("team2_individual",individual2);
    localStorage.setItem("ball_2",ball2);
       
}
