module.exports = {
  // 화살표 함수 식 매개변수 () 생략 여부
  arrowParens: "always",

  // HTML 태그 내부 공백 감도 설정 (CSS 스타일 기준)
  htmlWhitespaceSensitivity: "strict",

  // 닫는 괄호(>)을 다음 줄로 넘길지 여부
  bracketSameLine: false,

  // 객체 표기 시 괄호 사이 공백 유지 여부
  bracketSpacing: true,

  // 코드 행 길이 제한 (최적 가독성을 위한 적절한 값 설정)
  printWidth: 100,

  // Markdown 및 기타 서식 문서 래핑 설정
  proseWrap: "always",

  // 객체 속성 key 값에 인용 부호 사용 여부 ('as-needed'는 필수적인 경우만 사용)
  quoteProps: "consistent",

  // 세미콜론(;) 사용 여부 (세미콜론을 생략해도 문제없는 환경에서는 false 설정 가능)
  semi: true,

  // 싱글 인용 부호(') 사용 여부 (JS에서는 일반적으로 싱글 인용 부호가 선호됨)
  singleQuote: true,

  // 들여쓰기 크기 (2칸이 일반적이나, 팀 내 스타일에 따라 조정 가능)
  tabWidth: 2,

  // 객체 마지막 속성 선언 후 콤마 추가 여부 (es5 스타일을 유지)
  trailingComma: "all",

  // 탭 대신 스페이스 사용 여부
  useTabs: false,

  // JSON 파일을 자동 정렬할 때 key 순서 유지 여부 (유지보수를 위해 false 권장)
  jsonRecursiveSort: false,

  // JSX 속성 개수에 따라 자동 줄바꿈 활성화
  jsxSingleQuote: true,

  // TypeScript 타입 정리 시 공백 유지 여부
  tsTypeAnnotationSpacing: true,
};
