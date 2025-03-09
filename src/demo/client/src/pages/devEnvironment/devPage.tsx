import React from "react"
import './devPage.scss'

import SfButton from '@components/button/Button'
import SfInput from '@components/input/Input'





const DevComponents = () => {

    const btnHandler = () => {
        console.log("its WORKING")
    }
    return (
        <div className="dev-container">

            <SfButton 
                label="Button" 
                href="https://react.dev/" 
                onClick={btnHandler}
                color="blue"
                style={{backgroundColor: "gray"}}
            ></SfButton>

            <SfInput></SfInput>

        </div>
    )
    
}

export default DevComponents