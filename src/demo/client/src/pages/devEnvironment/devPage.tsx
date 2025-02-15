import React from "react"
import './devPage.scss'

import Button from '@components/button/Button'

const DevComponents = () => {

    const btnHandler = () => {
        console.log("its WORKING")
    }
    return (
        <div className="dev-container">

            <Button label="Button" href="https://react.dev/" onClick={btnHandler}></Button>

        </div>
    )
    
}

export default DevComponents