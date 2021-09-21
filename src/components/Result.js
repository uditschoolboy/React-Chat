import React from 'react';

const Result = ({score, playAgain}) => {
    return (
        <div className="score-board">
            <div className="score">
                {score}
                <button onClick={playAgain} className="playBtn">Restart</button>
            </div>
        </div>
    );
}

export default Result;