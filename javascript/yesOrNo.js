(function(){
    let button = document.getElementById("button");
    let answer = document.getElementById("answer");
    let reset = document.getElementById("reset");
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    function DetermineXmas(){
        if (dd == 25 && mm == 12){
            answer.innerHTML = "YES!";
        }
        answer.style.visibility = "visible";
        reset.style.transition = "opacity 1s";
        reset.style.opacity = 0.4;
    }

    function Reset() {
        answer.style.visibility = "hidden";
        reset.style.transition = "opacity 1s";
        reset.style.opacity = 0;
    }

    button.addEventListener("click", DetermineXmas);
    reset.addEventListener("click", Reset);
}());