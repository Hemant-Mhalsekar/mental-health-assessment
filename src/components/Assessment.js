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

  const getButtonColor = (score, currentScore) => {
    if (score === currentScore) {
      switch (score) {
        case 1:
          return "bg-red-400 text-white";
        case 2:
          return "bg-red-200 text-black";
        case 3:
          return "bg-yellow-200 text-black";
        case 4:
          return "bg-green-200 text-black";
        case 5:
          return "bg-green-400 text-white";
        default:
          return "border-gray-400 text-gray-500 hover:bg-gray-200";
      }
    }
    return "border-gray-400 text-gray-500 hover:bg-gray-200";
  };

  return (
    <div className="w-full bg-gradient-to-r from-green-100 via-blue-200 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Assessment</h1>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              {section.title}
            </h2>
            {section.questions.map((question, questionIndex) => (
              <div key={questionIndex} className="mb-6">
                <p className="text-lg mb-3">{question}</p>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      onClick={() =>
                        handleScoreChange(`${sectionIndex}-${questionIndex}`, score)
                      }
                      className={`w-14 h-14 rounded-full border ${
                        getButtonColor(
                          score,
                          responses.find(
                            (r) => r.id === `${sectionIndex}-${questionIndex}`
                          )?.score
                        )
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold">
            Total Score: {responses.reduce((sum, r) => sum + r.score, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
