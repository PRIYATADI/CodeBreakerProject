let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}
function setHiddenFields(){
    answer=Math.floor(Math.random()*10000);
    while(answer.Value.length<4){
        answer.Value += 0 + answer.Value.toString();
    }
}

//implement new functions here