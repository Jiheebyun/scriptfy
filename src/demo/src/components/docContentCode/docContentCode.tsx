import React, { useState } from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './docContentCode.scss'


const DocContentCode = () => {
    const [hovered, setHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const codeString = `// with npm
npm install scriptify

// with yarn
yarn add scriptify

import React from "react";

const test = function() {
    console.log('TEST');
}
`;

    // materialDark 테마를 복사해서 주석 색상만 오버라이드
    const customTheme = {
        ...materialDark,
        comment: {
        color: 'green',
        fontStyle: 'italic',
        },
        'block-comment': {
        color: 'green',
        fontStyle: 'italic',
        },
    };

    // 코드 블록 전체에 적용할 커스텀 스타일
    const customStyle = {
        backgroundColor: '#374151',
        borderRadius: '10px',
        padding: '1rem',
    };

  const copyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(codeString);
        setCopied(true);
        // 2초 후 "복사 완료" 문구 초기화
        setTimeout(() => setCopied(false), 2000);
        } catch (error) {
        console.error('복사 실패:', error);
        }
    };

        return (
        <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        {/* 코드 하이라이팅 */}
        <SyntaxHighlighter
            language="jsx"
            style={customTheme}
            customStyle={customStyle}
            showLineNumbers
            wrapLongLines
        >
            {codeString}
        </SyntaxHighlighter>

        {/* 복사하기 버튼 */}
        <button
            onClick={copyToClipboard}
            style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            opacity: hovered ? 1 : 0,          // 호버 시 보이도록
            pointerEvents: hovered ? 'auto' : 'none', // 호버 아닐 때 클릭 불가
            transition: 'opacity 0.2s ease-in-out',
            cursor: 'pointer',
            }}
        >
            {copied ? '복사 완료!' : '복사하기'}
        </button>
        </div>
    );
}

export default DocContentCode