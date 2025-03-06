import React from "react"
import './devPage.scss'

import Button from '@components/button/Button'



const Input = ({

}) => {
    return (
        <input placeholder="hi">

        </input>
    )
}


const DevComponents = () => {

    const btnHandler = () => {
        console.log("its WORKING")
    }
    return (
        <div className="dev-container">

            <Button 
                label="Button" 
                href="https://react.dev/" 
                onClick={btnHandler}
                color="blue"
                style={{backgroundColor: "gray"}}
            ></Button>

            <Input></Input>

        </div>
    )
    
}

export default DevComponents