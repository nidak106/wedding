import React, { useState } from 'react';

const quizData = [
  {
    question: 'When was the Nikkah?',
    options: ['1st July 2023', '2nd July 2023', '4th March 2023', '4th June 2023'],
    correct: '2nd July 2023',
  },
  {
    question: 'When was the Wedding?',
    options: ['1st May 2023', '11th November 2023', '10th November 2023', '10th June 2023'],
    correct: '11th November 2023',
  },
  {
    question: 'Where was the Nikkah?',
    options: ['Classic Grand Marque', 'Palm Marque', 'Serina', 'Paradise'],
    correct: 'Classic Grand Marque',
  },
  {
    question: 'When is Rafiah’s birthday?',
    options: ['1st January', '7th Sep', '7th March', '20th April'],
    correct: '7th Sep',
  },
  {
    question: 'When is Shavaiz’s birthday?',
    options: ['6th March', '13th May', '8th May', '1st July'],
    correct: '8th May',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === quizData[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center">
        {showScore ? (
          <div>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">Quiz Completed 🎉</h2>
            <p className="text-gray-700 text-lg">Your score: {score} / {quizData.length}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Question {currentQuestion + 1} of {quizData.length}
            </h2>
            <p className="text-lg font-medium mb-6">{quizData[currentQuestion].question}</p>
            <div className="flex flex-col gap-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="px-4 py-2 bg-pink-100 border border-pink-300 rounded hover:bg-pink-200 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
