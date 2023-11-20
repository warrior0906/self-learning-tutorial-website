import React, { useState } from "react";
import "./quizzes.scss";
import { questions } from "../../utils";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, options, answer, id } = questions[activeQuestion];

  const onAnswerSelected = (selectedAnswer, index) => {
    setSelectedAnswerIndex(index);
    if (selectedAnswer === answer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  };

  const onClickPrev = () => {
    setSelectedAnswerIndex(null);
    setActiveQuestion((prev) => prev - 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (id === questions.length) {
      setActiveQuestion(0);
      setShowResult(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onClickTryAgain = () => {
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const resultView = () => (
    <div className="result">
      <p>
        Total Question: <span>{questions.length}</span>
      </p>
      <p>
        Total Score:<span> {result.score}</span>
      </p>
      <p>
        Correct Answers:<span> {result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers:<span> {result.wrongAnswers}</span>
      </p>
    </div>
  );

  return showResult ? (
    <div>
      <h3 className="quizzes">Quiz Result</h3>
      {resultView()}
      <button className="try-again-button" onClick={onClickTryAgain}>
        Try Again
      </button>
    </div>
  ) : (
    <div>
      <h3 className="quizzes">Take quiz to test your knowledge</h3>
      <h2>{id + ". " + question}</h2>
      <ul>
        {options.map((item, index) => (
          <li
            onClick={() => onAnswerSelected(item, index)}
            key={item}
            className={selectedAnswerIndex === index ? "selected-answer" : null}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          className="prev-button"
          onClick={onClickPrev}
          disabled={id === 1}
        >
          Prev
        </button>
        <button
          className="next-button"
          onClick={onClickNext}
          disabled={selectedAnswerIndex === null}
        >
          {id === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
