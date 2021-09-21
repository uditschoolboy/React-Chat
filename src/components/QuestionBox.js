import React, {useState} from 'react';
const QuestionBox = ({question, options, correct, setResponse}) => {
    const [answer, setanswer] = useState(options);

    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, idx) => {
                return <button key={idx} className="answerBtn" onClick={() => {
                    setanswer([text]);
                    setResponse(text);
                }}>{text}</button>
            })}
        </div>
    );
}

export default QuestionBox;