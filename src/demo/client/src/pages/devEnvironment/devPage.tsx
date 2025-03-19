import React from "react"
import './devPage.scss'

import SfButton from '@components/button/Button'
// import SfInput from '@components/input/Input'


import SfInput from '../../../../../library/components/react/src/components/input/Input'




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

            <SfInput 
                isSearch={true}
                searchData={['aa','aaa','aaaa', 'bb','bbb']}    
            ></SfInput>

        </div>
    )
    
}

export default DevComponents