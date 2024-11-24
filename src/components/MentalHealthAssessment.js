import React, { useState } from "react";

const MentalHealthAssessment = () => {
  // Questions and scores
  const questions = [
    { id: 1, text: "I feel optimistic about my future.", score: 0 },
    { id: 2, text: "I find it easy to concentrate.", score: 0 },
    { id: 3, text: "I feel relaxed most of the time.", score: 0 },
    { id: 4, text: "I find it difficult to manage my emotions.", score: 0 },
    { id: 5, text: "I feel supported by people around me.", score: 0 },
  ];

  const [responses, setResponses] = useState(
    questions.map((q) => ({ id: q.id, score: 0 }))
  );
  const [totalScore, setTotalScore] = useState(0);

  const handleResponse = (id, score) => {
    const updatedResponses = responses.map((response) =>
      response.id === id ? { ...response, score } : response
    );
    setResponses(updatedResponses);
    const total = updatedResponses.reduce((sum, r) => sum + r.score, 0);
    setTotalScore(total);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">Mental Health Assessment</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="text-lg">{q.text}</p>
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleResponse(q.id, score)}
                className={`px-3 py-1 rounded ${
                  responses.find((r) => r.id === q.id)?.score === score
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-blue-300"
                }`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-5 text-center">
        <p className="text-xl font-semibold">
          Total Score: <span className="text-blue-600">{totalScore}</span>
        </p>
        <p className="mt-2 text-gray-700">
          {totalScore <= 10 && "Low mental health indicators. Consider seeking support."}
          {totalScore > 10 && totalScore <= 20 && "Moderate indicators. Take proactive steps."}
          {totalScore > 20 && "Good mental health indicators. Keep it up!"}
        </p>
      </div>
    </div>
  );
};

export default MentalHealthAssessment;
