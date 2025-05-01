import React, { useRef, useEffect } from "react"
import './devPage.scss'

// import SfButton from '@components/button/Button'
// import SfInput from '@components/input/Input'
import { SfButton, SfInput } from '@scriptify_js/vanilla';


// import SfInput from '../../../../../library/components/react/src/components/input/Input'




const DevComponents = () => {

  const btnHandler = () => {
    console.log("its WORKING")
  }

  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const btn = new SfButton({
      label: 'React 연동 버튼',
      onClick: () => alert('클릭!'),
    })
    btn.mount(containerRef.current)

    const input = new SfInput({

    })
    input.mount(containerRef.current)
  }, [])
  
    return (
        <div className="dev-container">
            <div ref={containerRef}></div>
            {/* <SfButton 
                label="Button" 
                href="https://react.dev/" 
                onClick={btnHandler}
                color="blue"
                style={{backgroundColor: "gray"}}
            ></SfButton>

            <SfInput 
                isSearch={true}
                searchData={['aa','aaa','aaaa', 'bb','bbb']}    
            ></SfInput> */}

        </div>
        
    )
}

export default DevComponents