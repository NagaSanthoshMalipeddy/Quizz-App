import { Link } from "react-router-dom";
import "./Question.css"
const StartQuiz = () => {
    return <Link to="/ques"><button className="stq">Start Quiz</button></Link>;
}
export default StartQuiz;