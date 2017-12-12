(function(){
    let button = document.getElementById("button");
    let answer = document.getElementById("answer");
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    function DetermineXmas(){
        if (dd == 25 && mm == 12){
            answer.innerHTML = "YES!"
        }
        answer.style.visibility = "visible"
    }

    button.addEventListener("click", DetermineXmas);
}());