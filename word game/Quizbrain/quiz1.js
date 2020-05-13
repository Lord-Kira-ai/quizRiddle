const option = document.getElementById('options')
const alloption = document.getElementsByClassName('quiz-option');

option.addEventListener('click', function (e) {
    const answer = document.querySelector('#right-answer');
    const final_massage = document.querySelector('#massege');
    if (e.target.id !== 'options') {
        if (e.target.textContent === answer.textContent) {
            e.target.style.background = "#2bff00";
            e.target.style.borderRadius = "10px";
            e.target.style.color = "white";
            final_massage.textContent = `Great Man! Keep going: 🤗🤗🤗`;
        }
        else {
            e.target.style.background = "red";
            e.target.style.borderRadius = "10px";
            e.target.style.color = "white";
            answer.style.visibility = "hidden";
            final_massage.textContent = `Please do some practice and Best of luck for next time: 💜💜💜`;
        }
        const percentage  = document.getElementById('calulated_percentage');
        console.log(numbers/10)
        if(numbers/10 >= 70){
            percentage.textContent = `Congratulation! Pass: ${numbers/70}%`;
        }
    }
});
