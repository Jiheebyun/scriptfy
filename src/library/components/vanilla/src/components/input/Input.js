// TODO:
// jsDoc 작성
// 필요한 옵션 react라이브러랑 같게 구현
//

/**
 * @typedef {Object} SfInputOptions
 * @property {string}  [type="text"]                - <input>의 type (예: "text", "password")
 * @property {string}  [placeholder=""]            - placeholder 텍스트
 * @property {boolean} [isSearch=false]            - true면 검색 모드 활성 (자동완성 목록 표시)
 * @property {string[]} [searchData=[]]            - 검색 대상 데이터 (문자열 배열)
 * @property {string}  [iconClassName="bx bxs-user"] - 아이콘 클래스 (예: "bx bxs-search")
 * @property {(e: InputEvent) => void} [onChange]  - input 값 변경 시 호출될 콜백
 */
export class SfInput {
    /**
     * @param {SfInputOptions} [options={}]
     */
    constructor({
        type = 'text',
        placeholder = '',
        isSearch = false,
        searchData = [],
        maxSearchResults = 5,
        iconClassName = 'bx bxs-user',
        onChange,
        ...rest
    } = {}) {
        this.type = type;
        this.placeholder = placeholder;
        this.isSearch = isSearch;
        this.searchData = searchData;
        this.maxSearchResults = maxSearchResults
        this.iconClassName = iconClassName;
        this.onChange = onChange;
        this.rest = rest;   // 필요시 추가 속성 저장
    
        /* 내부 상태 (React useState 대체) */
        this.keyword = '';
        this.filteredResults = [];
    
        /* DOM 참조 */
        this.element         = null; // 최상위 래퍼 div
        this.searchResultsEl = null; // <ul> 자동완성 목록
    }
  
    /** 내부 DOM을 구성하고 최상위 div를 반환 */
    createElement() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('input-group');
    
        const iconEl = document.createElement('i');
        iconEl.className = this.iconClassName;
        wrapper.appendChild(iconEl);
    
        const inputEl = document.createElement('input');
        inputEl.type        = this.type;
        inputEl.placeholder = this.placeholder;
        inputEl.addEventListener('input', (e) => this.handleInput(e));
        wrapper.appendChild(inputEl);
    
        const ulEl = document.createElement('ul');
        ulEl.classList.add('search-results');
        wrapper.appendChild(ulEl);
    
        this.searchResultsEl = ulEl;
        this.element         = wrapper;
        return wrapper;
    }
  
    /** input 이벤트 핸들러 */
    handleInput(e) {
        const value  = e.target.value;
        this.keyword = value;
    
        if (typeof this.onChange === 'function') this.onChange(e);
    
        if (this.isSearch) {
            this.filteredResults = this.searchData
            .filter((s) => s.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 5);
        } else {
            this.filteredResults = [];
        }
        this.updateSearchResults();
    }
  
    /** <ul> 자동완성 목록 갱신 */
    updateSearchResults() {
        if (!this.searchResultsEl) return;
        const ul = this.searchResultsEl;
    
        if (!this.keyword || this.filteredResults.length === 0) {
            ul.innerHTML = '';
            return;
        }
    
        ul.innerHTML = '';
        this.filteredResults.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
            console.log('Clicked item:', item); // 필요 시 로직 대체
            });
            ul.appendChild(li);
        });
    }
  
    /** 최상위 DOM 반환 (없으면 최초 생성) */
    render() {
        return this.element ?? this.createElement();
    }
  
    /**
     * 원하는 부모 요소에 컴포넌트를 부착
     * @param {HTMLElement|string} target - 요소 또는 querySelector 문자열
     */
    mount(target) {
        const parent =
            typeof target === 'string' ? document.querySelector(target) : target;
        if (!parent) throw new Error('Invalid mount target');
        parent.appendChild(this.render());
    }
  }
  
  // consideration :
  // UMD/IIFE 형태로 번들하여 전역 객체 제공 ?  ES Modules(현대 스펙) 형태로 배포??
  // 둘중에 어떤 방식으로 제공될건지 고려해야함
  /**
   * 바닐라 JS로 만든 SfInput 컴포넌트 (검색 기능 포함)
   * index.html 등에서 <script type="module" src="SfInput.js"></script>로 로드 후
   * import { SfInput } from './SfInput.js' 형태로 사용하거나,
   * 번들 단계에서 별도 IIFE 출력 파일을 만들어 window.SfInput 으로 노출할 수 있다.
   */
  