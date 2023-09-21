/////// Task 1 //////

function Dark(){
   document.body.style.backgroundColor = "black";
}
function Light(){
    document.body.style.backgroundColor = "white";
}


////// Task 2 ///////
function myFunction(){
let age = prompt("Enter your age", "18")

if (age > 18){
    Document.getElementById("demo").innerHTML = "You are welcome"
}
else{
    alert("Close the page")
}
}


////// Task 3 //////
class User{constructor(ad,soyad,password)
{
    this.ad= ad;
    this.soyad= soyad;
    this.password= password;
    
}

FullName()
{
    return '${this.ad} ${this.soyad}';
}}
const user = new User("Nuray","Orucova","123456789");
function nameInUpperCase(){
   const fullName = user.FullName();
   const fullNameInUpperCase = fullName.toUpperCase(;)

}