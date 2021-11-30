import React, { useEffect, useState } from "react";
import { Component } from "react";
import ButtonsPannel from "./ButtonsPannel";
import ClockFunctional from "./ClockFunctional";
import './css/Counter.css';
import Display from "./Display";
import Step from "./Step";


const Counter = (props) => {


    const [counterValue, setCounterValue] = useState(props.initValue);
    const [stepValue, setStepValue] = useState(1);
    const [displayClock, setdisplayClock] = useState(true);


    const showHideClock = (e) => {

            setdisplayClock(!displayClock)
    }




    const stepValueChange = (e) => {

        setStepValue(+e.target.value)
    }


    const buttonHandleChange = (action) => {


        let currentCounterValue = counterValue
        let currentStepValue = stepValue
        console.log(currentStepValue);


        if (action === 'add-x') {
            currentCounterValue += currentStepValue

        } else if (action === 'reset') {
            currentCounterValue = 0
        } else {
            currentCounterValue = props.initValue

        }

        setCounterValue(currentCounterValue)
    }

    return (
        <div>
            <div>
                <Display counterValueToDisplay={counterValue} />
                <ButtonsPannel buttonMethod={buttonHandleChange}
                    stepValueToDisplay={stepValue} />
                <Step stepMethod={stepValueChange} />
            </div>
            <div>
                {(displayClock ? <ClockFunctional clockMethod={showHideClock}/> : <span onClick={showHideClock}>Show clock</span>)}
            </div>
        </div>
    )
}




export default Counter;