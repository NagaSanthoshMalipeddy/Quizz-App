import { useState } from "react";
import "./Question.css"
const Question = (props) => {

    const [o1,setO1]=useState(false);
    const [o2,setO2]=useState(false);
    const [o3,setO3]=useState(false);
    const [o4,setO4]=useState(false);

    //console.log(props.que.que);

    const butClicked = (par) => {
        if(par==1){
            setO2(true);
            setO3(true);
            setO4(true);
            props.check(props.qno,props.que.o1);
        }
        else if(par==2){
            setO3(true);
            setO4(true);
            setO1(true);props.check(props.qno,props.que.o2);
        }
        else if(par==3){
            setO4(true);
            setO1(true);
            setO2(true);props.check(props.qno,props.que.o3);
        }
        else{
            setO1(true);
            setO2(true);
            setO3(true);props.check(props.qno,props.que.o4);
        }
    }

    return <div className={props.sty}>
        <h3>{props.que.que}</h3>
        <button className={"but"} disabled={o1} onClick={()=>butClicked(1)}>{props.que.o1}</button>
        <button className={"but"} disabled={o2} onClick={()=>butClicked(2)}>{props.que.o2}</button>
        <button className={"but"} disabled={o3} onClick={()=>butClicked(3)}>{props.que.o3}</button>
        <button className={"but"} disabled={o4} onClick={()=>butClicked(4)}>{props.que.o4}</button>
    </div>
}
export default Question;