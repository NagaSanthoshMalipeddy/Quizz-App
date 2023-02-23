import StartQuiz from "./StartQuiz";
import "./Question.css"

const Results = (props) => {
    return <div>
        <h1 className="h1">You have answered {props.res}/5 correctly</h1>
        <StartQuiz></StartQuiz>
    </div>;
}
export default Results;