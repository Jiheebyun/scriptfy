import React from "react";

import './docContentTitle.scss';

type DocContentTitleProps = {
    subTitle: string;
  };

const DocContentTilte = ({ subTitle }: DocContentTitleProps) => {
    return(
        <>
            <h1 className="doc-content-title">{subTitle}</h1>
        </>
    )
};

export default DocContentTilte