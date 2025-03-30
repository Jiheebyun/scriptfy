

// TODO:
// jsDoc 작성
// 필요한 옵션 react라이브러랑 같게 구현
// 

(function (global) {
    /**
     * @typedef {Object} SfInputOptions
     * @property {string} [type="text"]  - <input>의 type (예: "text", "password")
     * @property {string} [placeholder=""] - placeholder 텍스트
     * @property {boolean} [isSearch=false] - true면 검색 모드 활성 (자동완성 목록 표시)
     * @property {string[]} [searchData=[]] - 검색 대상 데이터 (문자열 배열)
     * @property {string} [iconClassName="bx bxs-user"] - 아이콘에 적용할 클래스 (예: "bx bxs-search")
     * @property {(e: InputEvent) => void} [onChange] - input 값 변경 시 호출될 콜백
     */
  
    class SfInput {
      /**
       * @param {SfInputOptions} options
       */
        constructor({
            type = "text",
            placeholder = "",
            isSearch = false,
            searchData = [],
            iconClassName = "bx bxs-user",
            onChange,
            ...rest
        } = {}) {
            this.type = type;
            this.placeholder = placeholder;
            this.isSearch = isSearch;
            this.searchData = searchData;
            this.iconClassName = iconClassName;
            this.onChange = onChange;
            this.rest = rest; // 필요시 추가 속성들 저장
    
            // 내부 상태 (React의 useState 대체)
            this.keyword = "";
            this.filteredResults = [];
    
            // DOM 참조
            this.element = null;         // 최상위 래퍼 div
            this.searchResultsEl = null; // 검색 결과 목록 <ul>
        }
    
        createElement() {
            // <div class="input-group">
            const wrapper = document.createElement("div");
            wrapper.classList.add("input-group");
    
            // <i class="아이콘클래스"></i>
            const iconEl = document.createElement("i");
            iconEl.className = this.iconClassName;
            wrapper.appendChild(iconEl);
    
            // <input type="text" placeholder="..." />
            const inputEl = document.createElement("input");
            inputEl.type = this.type;
            inputEl.placeholder = this.placeholder;
    
            // 입력시 이벤트
            inputEl.addEventListener("input", (e) => {
            const value = e.target.value;
            this.keyword = value;
    
            // 외부에서 받은 onChange 콜백이 있다면 호출
            if (typeof this.onChange === "function") {
                this.onChange(e);
            }
    
            // isSearch가 true면 필터링
            if (this.isSearch) {
                this.filteredResults = this.searchData
                .filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
                .slice(0, 5);
            } else {
                // 검색모드가 아니면 목록 비움
                this.filteredResults = [];
            }
    
            // 목록 업데이트
            this.updateSearchResults();
            });
    
            wrapper.appendChild(inputEl);
    
            // <ul class="search-results"></ul>
            const ulEl = document.createElement("ul");
            ulEl.classList.add("search-results");
            wrapper.appendChild(ulEl);
            this.searchResultsEl = ulEl;
    
            // 최상위 DOM 요소 기록
            this.element = wrapper;
            return wrapper;
        }
    
        updateSearchResults() {
            if (!this.searchResultsEl) return;
    
            // 검색어가 없거나 결과가 없으면 목록 비움
            if (!this.keyword || this.filteredResults.length === 0) {
            this.searchResultsEl.innerHTML = "";
            return;
            }
    
            // 결과가 있다면 <li>로 표시
            this.searchResultsEl.innerHTML = "";
            this.filteredResults.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("click", () => {
                // 필요시 아이템 클릭 로직 추가
                console.log("Clicked item:", item);
            });
            this.searchResultsEl.appendChild(li);
            });
        }

        render() {
            if (!this.element) {
            return this.createElement();
            }
            return this.element;
        }
    
        mount(target) {
            const parent =
            typeof target === "string"
                ? document.querySelector(target)
                : target;
    
            if (!parent) {
            throw new Error("Invalid mount target");
            }
    
            const el = this.render();
            parent.appendChild(el);
        }
    }
  
    // window.SfInput 로 전역에 노출
    global.SfInput = SfInput;
  })(window);
  


// consideration : 
// UMD/IIFE 형태로 번들하여 전역 객체 제공 ?  ES Modules(현대 스펙) 형태로 배포??
// 둘중에 어떤 방식으로 제공될건지 고려해야함
/**
 * 바닐라 JS로 만든 SfInput 컴포넌트 (검색 기능 포함)
 * index.html 등에서 <script src="SfInput.js"></script>로 로드 후 window.SfInput으로 사용.
 */