import React, { useState } from "react";

const Assessment = () => {
  const sections = [
    {
      title: "Vision and Goals",
      questions: [
        "I have a clear vision for my business idea.",
        "I understand the specific problem my business will solve.",
        "I have set realistic short-term and long-term goals for my entrepreneurial journey.",
        "I am passionate about my business idea and committed to making it a reality.",
      ],
    },
    {
      title: "Business Knowledge and Planning",
      questions: [
        "I can explain my business model in simple terms to others.",
        "I understand my target market and their needs well.",
        "I am confident in my ability to identify my competitors and analyze their strengths and weaknesses.",
        "I feel prepared to create a comprehensive business plan.",
      ],
    },
    // Add other sections here in the same format
  ];

  const [responses, setResponses] = useState(
    sections.flatMap((section, sectionIndex) =>
      section.questions.map((_, questionIndex) => ({
        id: `${sectionIndex}-${questionIndex}`,
        score: 0,
      }))
    )
  );

  const handleScoreChange = (id, score) => {
    const updatedResponses = responses.map((response) =>
      response.id === id ? { ...response, score } : response
    );
    setResponses(updatedResponses);
  };

  return (
    <div className="p-5 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">Assessment</h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            {section.title}
          </h2>
          {section.questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4">
              <p className="text-lg">{question}</p>
              <div className="flex justify-between mt-2">
                {["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"].map(
                  (option, score) => (
                    <button
                      key={score}
                      onClick={() =>
                        handleScoreChange(`${sectionIndex}-${questionIndex}`, score + 1)
                      }
                      className={`w-14 h-14 rounded-full border ${
                        responses.find(
                          (r) => r.id === `${sectionIndex}-${questionIndex}`
                        )?.score === score + 1
                          ? "bg-green-400 text-white"
                          : "border-gray-400 text-gray-500 hover:bg-green-100"
                      }`}
                    >
                      {score + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="text-center mt-5">
        <p className="text-lg font-semibold">Total Score: {responses.reduce((sum, r) => sum + r.score, 0)}</p>
      </div>
    </div>
  );
};

export default Assessment;
