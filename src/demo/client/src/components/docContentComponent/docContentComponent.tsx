import React from "react";

import componentsRegistry from "../../utils/componentsRegistry";
import './docContentComponent.scss';

const DocContentComponent = ({component}) => {
    const DynamicComponent = componentsRegistry[component];

    const testStyle = { // Test Style
        border: "1px solid black",
        borderRadius: '10px',
        padding: '1rem',
        radius: '10px'
    };
    console.log("COMPONENT!!!!!!!!!!!!!!")
    console.log(component)
    console.log(componentsRegistry)
    return (
        <>
        <div className="component-layout">
            {DynamicComponent ? (
            // 가져온 컴포넌트를 렌더링합니다. 필요하다면 추가 props를 전달할 수 있습니다.
            <DynamicComponent style={testStyle} />
            ) : (
                // 매핑된 컴포넌트가 없으면 대체 UI를 보여줍니다.
                <div>No component found</div>
            )}
        </div>
        </>
    )
}


export default DocContentComponent;
