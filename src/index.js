import React, {Component}  from 'react';
import ReactDom from 'react-dom';
import './assets/style.css';
import quizService from './quizService/index.js';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class QuizBee extends Component {
    state = {
        questionBank : [],
        score: 0,
        responses: 0
    };

    getQuestions = () => {
        quizService().then(questions => {
            this.setState({
                questionBank: questions
            });
        });
    }
    componentDidMount() {
        this.getQuestions();
    }
    calcScore(res, correct) {
        if(res === correct) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses + 1
        });
    }
    playAgain() {
        this.getQuestions();
        this.setState({
            responses: 0,
            score: 0
        });
    }
    render() {
        return (
            <div className="container">
                <div className="title">
                    QuizBee
                </div>
                {this.state.questionBank.length > 0
                && this.state.responses < 5
                && this.state.questionBank
                    .map(({question, answers, correct, questionId}) => {
                    return <QuestionBox
                    question={question}
                    options={answers}
                    key={questionId}
                    correct={correct}
                    setResponse={(res) => this.calcScore(res, correct)}/>
                })}

                {this.state.responses >= 5
                && <Result score={this.state.score} playAgain={() => this.playAgain()}/>}
            </div>
        )
    }
}

ReactDom.render(<QuizBee/>, document.getElementById('root'));