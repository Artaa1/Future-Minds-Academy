import { useState } from 'react';
import QUESTIONS from '../assets/js/questions.js';


export default function Quiz(){
    const[userAnswers, setUserAnswers] = useState([]);
    const activeQuestionsIndex = userAnswers.length;
    function handelAnswer(selectedAnswer){
        setUserAnswers(
            (previusAnswer) => {
                return[...previusAnswer, selectedAnswer];
            }
        )
    }
return(
<main>
            <div id="quiz">
                <div id="question">
                    <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
                    <ul id="answers">
                    {
                    QUESTIONS[activeQuestionsIndex].answers.map((answer) => 
                    <li className="answer" key={answer}><button onClick={() => handelAnswer(answer)}>{answer}</button></li>)
                    }
                        {/* <li className="answer"><button>{QUESTIONS[1].answers[0]}</button></li>
                        <li className="answer"><button>By using the "new" keyword followed by the component name.</button></li>
                        <li className="answer"><button>By creating a file with a .jsx extension.</button></li>
                        <li className="answer"><button>By defining a custom HTML tag in JavaScript.</button></li> */}
                    </ul>
                </div>
            </div>
        </main>

)

}
