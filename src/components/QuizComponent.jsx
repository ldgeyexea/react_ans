import React, {useState} from "react";

//pobranie pytań
import questions from '../questions.json';
import Question from "./question";
import Answers from "./answer";
import Results from "./results";
import Actions from "./actions";

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

const QuizComponent = (props) => {
    //hooki
    const [currentIndex, setIndex] = useState(0);
    const [currentQuestion, setQuestion] = useState(questions[currentIndex]);
    const [currentPoints, setPoints] = useState(0);
    const [allowToChoose, setCanChoose] = useState(true);
    const [markedAnswer, markAnswer] = useState({key: -1, variant: ''});

    //przejscie do nastepnego pytania
    const handleNextQuestion = () => {

        const nextIndex = currentIndex + 1
        if (nextIndex > questions.length) {
            setIndex((questions.length - 1));
            return;
        }
        setIndex(nextIndex)

        setQuestion(questions[nextIndex]);
        setCanChoose(true)
        markAnswer({key: -1, variant: ''});


    };

    const handlePrevQuestion = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            setIndex(0);
            return;
        }
        setIndex(prevIndex);
        setQuestion(questions[prevIndex]);
        setCanChoose(true);
        markAnswer({key: -1, variant: ''});

    }
    // sprawdzenie poprawnej odpowiedzi

    const handleCheckAnswer = (chosenOption, key) => {
        if (!allowToChoose) {
            return;
        }
        if (currentQuestion.correct_answer === chosenOption) {
            const points = currentPoints + 1;
            setPoints(points);
            setCanChoose(false);
            markAnswer({key, variant: 'bg-success'})
        } else {
            setCanChoose(false);
            markAnswer({key, variant: 'bg-danger'})
        }
    };


    return (
        <div style={styles}>
            <div className="containter">
                <Question
                    className="col-12"
                    currentQuestion={currentQuestion.question}
                    currentIndex={currentIndex + 1}
                    allQuestions={questions.length}
                >
                </Question>
                <Answers className="col-12"
                         checkAnswer={handleCheckAnswer}
                         currentAnswers={currentQuestion.answers}
                         markedAnswer={markedAnswer}
                />
                <Results points={currentPoints}/>
                <Actions
                    prev={handlePrevQuestion}
                    next={handleNextQuestion}
                />

            </div>
        </div>

    )


};
export default QuizComponent;