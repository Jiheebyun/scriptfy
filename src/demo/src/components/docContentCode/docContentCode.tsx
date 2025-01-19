import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import "./docContentCode.scss";

const DocContentCode = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("복사 실패:", error);
    }
  };

  return (
    <div className="code-snippet-container">
      {/* CodeMirror 코드 블록 */}
      <div className="code-wrapper">
        <CodeMirror
          value={code}
          height="auto"            // 코드 길이에 맞춰 세로 길이 자동 조절
          theme={dracula}         // 드라큘라 테마 (원하는 경우 다른 테마로 교체 가능)
          extensions={[javascript()]}  // 예: 자바스크립트 하이라이팅 (다른 언어 확장도 가능)
          readOnly={true}         // 읽기 전용 (편집 불가능)
          basicSetup={{
            lineNumbers: true,    // 라인 번호 표시
          }}
        />
      </div>

      {/* 복사하기 버튼 */}
      <button className="copy-btn" onClick={copyToClipboard}>
        {copied ? "복사 완료!" : "복사하기"}
      </button>
    </div>
  );
};

export default DocContentCode;
