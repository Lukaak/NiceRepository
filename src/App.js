import React from 'react'
import {useState,useRef} from 'react'
import "./AppStyle.css"
import Comp from './component/Comp'


const App = () => {



    const [player, setPlayer] = useState(1)


    const box1_1 = useRef()
    const box1_2 = useRef()
    const box1_3 = useRef()
    const box1_4 = useRef()
    const box1_5 = useRef()
    const box1_6 = useRef()

    const box2_1 = useRef()
    const box2_2 = useRef()
    const box2_3 = useRef()
    const box2_4 = useRef()
    const box2_5 = useRef()
    const box2_6 = useRef()

    const box3_1 = useRef()
    const box3_2 = useRef()
    const box3_3 = useRef()
    const box3_4 = useRef()
    const box3_5 = useRef()
    const box3_6 = useRef()

    const box4_1 = useRef()
    const box4_2 = useRef()
    const box4_3 = useRef()
    const box4_4 = useRef()
    const box4_5 = useRef()
    const box4_6 = useRef()

    const box5_1 = useRef()
    const box5_2 = useRef()
    const box5_3 = useRef()
    const box5_4 = useRef()
    const box5_5 = useRef()
    const box5_6 = useRef()

    const box6_1 = useRef()
    const box6_2 = useRef()
    const box6_3 = useRef()
    const box6_4 = useRef()
    const box6_5 = useRef()
    const box6_6 = useRef()

    const box7_1 = useRef()
    const box7_2 = useRef()
    const box7_3 = useRef()
    const box7_4 = useRef()
    const box7_5 = useRef()
    const box7_6 = useRef()
    

    const AddballLogic = (boxNumber) =>{
        if(player === 1){
            boxNumber.current.className = 'box box1'
        }else{
            boxNumber.current.className = "box box2"
        }
    }


    const nextPlayer = () => {
        if(player === 1){
            setPlayer(2)
        }else{
            setPlayer(1)
        }
    }
    


    const AddBall = (box_1,box_2,box_3,box_4,box_5,box_6) => {
        if(box_1.current.className === 'box'){
            AddballLogic(box_1)
        }else if(box_2.current.className === "box"){
            AddballLogic(box_2)
        }else if(box_3.current.className === 'box'){
            AddballLogic(box_3)
        }else if(box_4.current.className === 'box'){
            AddballLogic(box_4)
        }else if(box_5.current.className === 'box'){
            AddballLogic(box_5)
        }else if(box_6.current.className === 'box'){
            AddballLogic(box_6)
        }
    }

    const Action_1 = () =>{
        nextPlayer();
        AddBall(box1_1,box1_2,box1_3,box1_4,box1_5,box1_6);
        
    }
    const Action_2 = () => {
        nextPlayer();
        AddBall(box2_1,box2_2,box2_3,box2_4,box2_5,box2_6)
    }
    const Action_3 = () => {
        nextPlayer();
        AddBall(box3_1,box3_2,box3_3,box3_4,box3_5,box3_6)
    }
    const Action_4 = () => {
        nextPlayer();
        AddBall(box4_1,box4_2,box4_3,box4_4,box4_5,box4_6)
    }
    const Action_5 = () => {
        nextPlayer();
        AddBall(box5_1,box5_2,box5_3,box5_4,box5_5,box5_6)
    }
    const Action_6 = () => {
        nextPlayer();
        AddBall(box6_1,box6_2,box6_3,box6_4,box6_5,box6_6)
    }
    const Action_7 = () => {
        nextPlayer();
        AddBall(box7_1,box7_2,box7_3,box7_4,box7_5,box7_6)
    }

    return(
        <div className="Container">
            
                <Comp box1={box1_1} box2={box1_2} box3={box1_3} box4={box1_4} box5={box1_5} box6={box1_6} Action={Action_1}/>

            

            <div className="Column" onClick={Action_2}>
                <div ref={box2_6} className="box"></div>
                <div ref={box2_5} className="box"></div>
                <div ref={box2_4} className="box"></div>
                <div ref={box2_3} className="box"></div>
                <div ref={box2_2} className="box"></div>
                <div ref={box2_1} className="box"></div>
            </div>

            <div className="Column" onClick={Action_3}>
                <div ref={box3_6} className="box"></div>
                <div ref={box3_5} className="box"></div>
                <div ref={box3_4} className="box"></div>
                <div ref={box3_3} className="box"></div>
                <div ref={box3_2} className="box"></div>
                <div ref={box3_1} className="box"></div>
            </div>
            <div className="Column" onClick={Action_4}>
                <div ref={box4_6} className="box"></div>
                <div ref={box4_5} className="box"></div>
                <div ref={box4_4} className="box"></div>
                <div ref={box4_3} className="box"></div>
                <div ref={box4_2} className="box"></div>
                <div ref={box4_1} className="box"></div>
            </div>
            <div className="Column" onClick={Action_5}>
                <div ref={box5_6} className="box"></div>
                <div ref={box5_5} className="box"></div>
                <div ref={box5_4} className="box"></div>
                <div ref={box5_3} className="box"></div>
                <div ref={box5_2} className="box"></div>
                <div ref={box5_1} className="box"></div>
            </div>
            <div className="Column" onClick={Action_6}>
                <div ref={box6_6} className="box"></div>
                <div ref={box6_5} className="box"></div>
                <div ref={box6_4} className="box"></div>
                <div ref={box6_3} className="box"></div>
                <div ref={box6_2} className="box"></div>
                <div ref={box6_1} className="box"></div>
            </div>
            <div className="Column" onClick={Action_7}>
                <div ref={box7_6} className="box"></div>
                <div ref={box7_5} className="box"></div>
                <div ref={box7_4} className="box"></div>
                <div ref={box7_3} className="box"></div>
                <div ref={box7_2} className="box"></div>
                <div ref={box7_1} className="box"></div>
            </div>

        </div>
    )
}

export default App