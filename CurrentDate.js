//current date

function displayCurrentDate(){
    var today=new Date();
    var date=today.toLocaleDateString();
    console.log("Current Date:",date);
}
displayCurrentDate();