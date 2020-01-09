class players{
    turns=1;
    count=1;
    win=0;
    
    play(){
       
        if(this.turns<=9)
        {
        if(this.count%2==0){

            this.turns++;
            this.count++;
            return "O";
        }
        else 
        {
            this.turns++;
            this.count++;
            return "X";
  
        }
    }
}
let player1=new players();

let check_array=new Array(3);
for(let i=0;i<check_array.length;i++)
{
    check_array[i]=new Array(3);
}

let x=document.querySelector(".current");
let b1=document.querySelector(".b1");
let b2=document.querySelector(".b2");
let b3=document.querySelector(".b3");
let b4=document.querySelector(".b4")
let b5=document.querySelector(".b5")
let b6=document.querySelector(".b6")
let b7=document.querySelector(".b7")
let b8=document.querySelector(".b8")
let b9=document.querySelector(".b9")
function f11(){
        if(player1.count%2==0){
            x.innerHTML="Player 1 's turn.....";
        }
        else{
            x.innerHTML="Player 2 's turn.....";
        }
    let ans=player1.play();
    b1.innerHTML=`${ans}`;
    $(".b1").prop('disabled', true);
    if(ans=="X")
    {
        check_array[0][0]=1;
    }
    else{
        check_array[0][0]=0;
    }
      
    check(check_array);
      
      
}
function f12(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
let ans=player1.play();
    b2.innerHTML=`${ans}`;
    $(".b2").prop('disabled', true);
    if(ans=="X")
    {
        check_array[0][1]=1;
    }
    else if(ans=="O"){
        check_array[0][1]=0;
    }
    check(check_array);

    
}
function f13(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b3.innerHTML=`${ans}`;
$(".b3").prop('disabled', true);
if(ans=="X")
    {
        check_array[0][2]=1;
    }
    else if(ans=="O"){
        check_array[0][2]=0;
    }
    check(check_array);

    
}
function f21(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b4.innerHTML=`${ans}`;
$(".b4").prop('disabled', true);
if(ans=="X")
    {
        check_array[1][0]=1;
    }
    else if(ans=="O"){
        check_array[1][0]=0;
    }
    check(check_array);

    
}
function f22(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b5.innerHTML=`${ans}`;
$(".b5").prop('disabled', true);
if(ans=="X")
    {
        check_array[1][1]=1;
    }
    else if(ans=="O"){
        check_array[1][1]=0;
    }
    check(check_array);

    
}
function f23(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b6.innerHTML=`${ans}`;
$(".b6").prop('disabled', true);
if(ans=="X")
    {
        check_array[1][2]=1;
    }
    else if(ans=="O"){
        check_array[1][2]=0;
    }
    check(check_array);

    }
function f31(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b7.innerHTML=`${ans}`;
$(".b7").prop('disabled', true);
if(ans=="X")
    {
        check_array[2][0]=1;
    }
    else if(ans=="O"){
        check_array[2][0]=0;
    }
    check(check_array);

   }
function f32(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
b8.innerHTML=`${ans}`;
$(".b8").prop('disabled', true);
if(ans=="X")
    {
        check_array[2][1]=1;
    }
    else if(ans=="O"){
        check_array[2][1]=0;
    }
    check(check_array);

    }
function f33(){
    if(player1.count%2==0){
        x.innerHTML="Player 1 's turn.....";
    }
    else{
        x.innerHTML="Player 2 's turn.....";
    }
    let ans=player1.play();
    b9.innerHTML=`${ans}`;
    $(".b9").prop('disabled', true);
    if(ans=="X")
    {
        check_array[2][2]=1;
    }
    else if(ans=="O"){
        check_array[2][2]=0;
    }
    check(check_array);

   
}

function check(check_array)
{
if((check_array[0][0]==check_array[0][1] && check_array[0][1]==check_array[0][2]) || (check_array[0][0]==check_array[1][0] && check_array[0][0]==check_array[2][0]))
{
    
    let temp=check_array[0][0];
    if(temp==1)
    {
        x.innerHTML="PLAYER 1 WINS";
        player1.win=1;
        $(':button').prop('disabled', true);
    }
    else if(temp==0){
        x.innerHTML="PLAYER 2 WINS";
        player1.win=1;
        $(':button').prop('disabled', true);
    }
 }
 else if(check_array[1][0]==check_array[1][1] && check_array[1][1]==check_array[1][2] || check_array[0][1]==check_array[1][1] && check_array[1][1]==check_array[2][1])
 {
    
     let temp=check_array[1][1];
     if(temp==1)
     {
         x.innerHTML="PLAYER 1 WINS";
         player1.win=1;
         $(':button').prop('disabled', true);
     }
     else if(temp==0){
        x.innerHTML="PLAYER 2 WINS";
        player1.win=1;
        $(':button').prop('disabled', true);
     }
 }
 else if(check_array[2][0]==check_array[2][2] && check_array[2][2]==check_array[2][1] || check_array[0][2]==check_array[2][2] && check_array[2][2]==check_array[1][2])
 {

     let temp=check_array[2][2];
     if(temp==1)
     {
         x.innerHTML="PLAYER 1 WINS";
         player1.win=1;
         $(':button').prop('disabled', true);
     }
     else if(temp==0){
         x.innerHTML="PLAYER 2 WINS";
         player1.win=1;
         $(':button').prop('disabled', true);
     }
 }
 else if(check_array[0][0]==check_array[1][1] && check_array[1][1]==check_array[2][2] || check_array[0][2]==check_array[1][1] && check_array[1][1]==check_array[2][0])
 {
    player1.win=1;
     let temp=check_array[1][1];
     if(temp==1)
     {
         x.innerHTML="PLAYER 1 WINS";
         player1.win=1;
         $(':button').prop('disabled', true);
     }
     else if(temp==0){
         x.innerHTML="PLAYER 2 WINS";
         player1.win=1;
         $(':button').prop('disabled', true);
      }
  }
  else if(player1.count==10 && player1.win==0){
    x.innerHTML="Match is drawn";
  }

}