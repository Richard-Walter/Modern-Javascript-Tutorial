const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
const result_text = document.querySelector('.text-primary')


form.addEventListener('submit', e => {
    e.preventDefault(); //prevent page refresh

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;

        }
    });

    //scroll to the top
    scrollTo(0, 0)

    result.classList.remove('d-none')

    let output = 0;
    const scoreboard = result.querySelector('span')
    const timer = setInterval(() => {
        //do another query selector on the first query selector
        scoreboard.textContent = `${output}%`

        if (output === score) {
            clearInterval(timer)
        } else{
            output ++;
        }
    }, 10);

});

