import React, { useRef, useEffect } from "react"
import './devPage.scss'

// import SfButton from '@components/button/Button'
// import SfInput from '@components/input/Input'


import {KanbanBoard} from '../../../../../library/components/react/src/components/dragDrop/subComponents/kanbanBoard/KanbanBoard.js'

import { SfButton } from '@scriptify_js/vanilla';
// @ts-ignore  // 경고만 잠재움
import { SfInput } from "../../../../../library/components/vanilla/src/components/input/Input.js"




const DevComponents = () => {


  
    return (
        <div className="dev-container">

            <KanbanBoard/>
            
        </div>
        
    )
}

export default DevComponents