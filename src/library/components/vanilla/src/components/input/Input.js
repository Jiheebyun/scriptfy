

// TODO:
// jsDoc 작성
// 필요한 옵션 react라이브러랑 같게 구현
// 

export class SfInput {
    constructor(
        type = "text",
        placeholder = "",
        isSearch = false,
        searchData = [],
        iconClassName = "input",
        onChange,
        ...rest
    ) {
        this.type = type,
        this.placeholder = placeholder
        this.isSearch = isSearch,
        this.searchData = searchData,
        this.iconClassName = iconClassName,
        this.onChange,
        this.rest = rest
    }

    createElement() {

    }

    render() {

    }

    mount() {

    }
}

