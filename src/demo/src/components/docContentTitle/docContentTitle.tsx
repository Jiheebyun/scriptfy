import React from "react";

import './docContentTitle.scss';

type DocContentTitleProps = {
    subTitle: string;
  };

const DocContentTilte = ({ subTitle }: DocContentTitleProps) => {
    return(
        <>
            <h1>{subTitle}</h1>
        </>
    )
};

export default DocContentTilte