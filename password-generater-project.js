/*function getpassword(){
    let char = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^^&**(";
    let paslength = ;
    let Password = "";
    for(let i=0; i<=paslength; i++){
        let randNum = Math.floor(Math.random()* char.length);
        Password+= char.substring(randNum, randNum+1);
    }
    document.getElementById("password").value = Password;
}
function copy(){
   var copytext= document.getElementById("password");
   copytext.select();
   document.execCommand("copy");
   alert("You can paste the copy password");
};*/
function getpassword(){
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(";
    let paslength = 10;
    let Password =" " ;
    for(let i=0; i<=paslength; i++){
        let randNum = Math.floor(Math.random()*char.length);
        Password+= char.substring(randNum,randNum+1);
    }
    document.querySelector("#password").value = Password;

}
function copy(){
    var copytext= document.querySelector("#password");
    copytext.select();
    document.execCommand("copy");
}