import * as Components from '@scriptify_js/react';

// Components 객체 안의 모든 컴포넌트가 매핑에 포함
const componentsRegistry = Object.keys(Components).reduce((acc :any, key :any) => {
    // 키를 소문자로 변환하여 매핑
    acc[key.toLowerCase()] = Components[key];
    return acc;
  }, {});
  

export default componentsRegistry;