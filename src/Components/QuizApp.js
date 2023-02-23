import { Outlet } from "react-router";
import "./Question.css"

const QuizApp = () => {
    return <>
    <h1 className="qap">Quiz App</h1> 
    <Outlet></Outlet>
    </>;
}
export default QuizApp;