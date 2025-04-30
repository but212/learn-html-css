// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  // DOM 요소 선택 (선택부 분리)
  const elements = {
    flipButton: document.querySelector('.flip-button'),
    card: document.querySelector('.card'),
  };

  // 주요 기능 구현 (함수 구현부 분리)
  const cardFlipper = {
    // 카드 뒤집기 토글 함수
    toggleFlip: () => {
      if (!elements.card || !elements.flipButton) return;

      elements.card.classList.toggle('is-flipped');
      const isFlipped = elements.card.classList.contains('is-flipped');

      // 접근성을 위한 aria 속성 업데이트
      elements.flipButton.setAttribute('aria-pressed', isFlipped);

      // 버튼 텍스트 업데이트
      elements.flipButton.textContent = isFlipped ? '카드 되돌리기' : '카드 뒤집기';
    },

    // 초기 상태 설정
    initialize: () => {
      if (!elements.flipButton) return;

      elements.flipButton.setAttribute('aria-pressed', 'false');
      elements.flipButton.textContent = '카드 뒤집기';
    },
  };

  // 이벤트 리스너 등록 (이벤트 바인딩부 분리)
  const bindEvents = () => {
    // 요소 존재 여부 확인
    if (!elements.flipButton || !elements.card) return;

    // 버튼 클릭 이벤트
    elements.flipButton.addEventListener('click', cardFlipper.toggleFlip);

    // 카드 클릭 이벤트
    elements.card.addEventListener('click', cardFlipper.toggleFlip);
  };

  // 초기화 및 이벤트 바인딩 실행
  cardFlipper.initialize();
  bindEvents();
});
