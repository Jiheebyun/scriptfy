// src/components/SfButton.js
import './SfButton.scss';

/**
 * @typedef {object} SfButtonProps
 * @property {string} [label] - 버튼에 표시할 텍스트
 * @property {boolean} [disabled=false] - 버튼 비활성화 여부
 * @property {string} [className] - 추가로 적용할 클래스명
 * @property {(e: MouseEvent) => void} [onClick] - 클릭 시 실행될 콜백
 */

export class SfButton {
  /**
   * @param {SfButtonProps} props
   */
  constructor(props = {}) {
    this.props = {
      ...props,
      label: props.label ?? 'Default Button',
      disabled: props.disabled ?? false,
      className: props.className ?? 'sf-button',
    };
    this.element = this.createElement();
  }

  /** 내부적으로 <button> 요소를 생성하고 필요한 속성 적용 */
  createElement() {
    const btn = document.createElement('button');
    btn.textContent = this.props.label;
    btn.disabled = this.props.disabled;

    // className 적용 (기본값 'sf-button' 또는 사용자 지정)
    if (this.props.className) {
      btn.classList.add(this.props.className);
    }

    // onClick이 함수면 클릭 이벤트 바인딩
    if (typeof this.props.onClick === 'function') {
      btn.addEventListener('click', this.props.onClick);
    }

    return btn;
  }

  /** 최종적으로 <button> DOM 요소를 반환 */
  render() {
    return this.element;
  }

  /**
   * 특정 부모 요소에 자신의 <button>을 append하는 메서드
   * @param {HTMLElement | string} target - 직접 요소나, querySelector용 문자열
   */
  mount(target) {
    const parent = typeof target === 'string'
      ? document.querySelector(target)
      : target;
    if (!parent) {
      throw new Error('Invalid mount target');
    }
    parent.appendChild(this.element);
  }
}
