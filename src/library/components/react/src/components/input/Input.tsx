import React, { useState, ChangeEvent } from "react";
import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    iconClassName?: string;
    isSearch?: boolean;
    searchData?: string[]; // 검색 데이터 배열 (문자열로 가정), 만약에 객체라면? 고려해야된
}

const SfInput: React.FC<InputProps> = ({
    type = "text",
    placeholder,
    isSearch = false,
    searchData = [],
    iconClassName = "bx bxs-user",
    onChange,
    ...rest
}) => {
    const [keyword, setKeyword] = useState("");
    const [filteredResults, setFilteredResults] = useState<string[]>([]);

    //input 변경 시 처리
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setKeyword(value);

        if (onChange) {
            onChange(e);
        }
        // isSearch가 true인 경우에만 필터링 로직 실행
        if (isSearch) {
            // 사용자가 입력한 텍스트를 포함하는 항목을 찾고, 최대 5개까지만 잘라서 저장
            const results = searchData
                .filter(item => item.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 5);

            setFilteredResults(results);
        } else {
            // 검색 모드가 아니라면, 필더링 초기화 
            setFilteredResults([]);
        }
    };

  return (
    <div className="input-group">
        <i className={iconClassName}></i>
        <input
            type={type}
            placeholder={placeholder}
            value={keyword}
            onChange={handleChange}
            {...rest}
        />

        {/* isSearch가 true이고, 검색어가 존재할 때만 결과 목록 표시 */}
        {isSearch && keyword && filteredResults.length > 0 && (
            <ul className="search-results">
                {filteredResults.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default SfInput;
