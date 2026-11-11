const QUESTIONS = [
  {
    id: 1,
    question: '다음 중 지구에 낮과 밤이 생기는 주된 이유는 무엇일까요?',
    options: ['지구의 자전', '지구의 공전', '달의 공전', '계절의 변화'],
    answer: 0,
    explanation: '지구가 자기 축을 중심으로 하루에 한 번 회전하면서 태양을 향하는 쪽이 바뀝니다.'
  },
  {
    id: 2,
    question: '3/4을 백분율로 나타내면 얼마일까요?',
    options: ['25%', '50%', '75%', '80%'],
    answer: 2,
    explanation: '3을 4로 나누면 0.75이므로, 백분율로는 75%입니다.'
  },
  {
    id: 3,
    question: '같은 장소에서 솜 1kg과 철 1kg의 무게를 비교하면?',
    options: ['솜이 더 무겁다', '철이 더 무겁다', '무게가 같다', '부피를 알아야 한다'],
    answer: 2,
    explanation: '둘 다 1kg으로 질량이 같습니다. 같은 장소라면 무게도 같습니다.'
  },
  {
    id: 4,
    question: '다음 중 소수(素數)는 무엇일까요?',
    options: ['1', '9', '15', '17'],
    answer: 3,
    explanation: '17은 1과 자기 자신으로만 나누어지는 소수입니다. 1은 소수가 아닙니다.'
  },
  {
    id: 5,
    question: '식물이 광합성에 사용하는 기체는 무엇일까요?',
    options: ['산소', '이산화탄소', '질소', '수소'],
    answer: 1,
    explanation: '식물은 광합성 과정에서 이산화탄소를 흡수하고 산소를 내보냅니다.'
  },
  {
    id: 6,
    question: '5 + 7 × 2의 값은 얼마일까요?',
    options: ['19', '24', '17', '14'],
    answer: 0,
    explanation: '곱셈을 덧셈보다 먼저 계산하므로 5 + 14 = 19입니다.'
  },
  {
    id: 7,
    question: '일정한 속력으로 120km를 2시간에 이동했다면 속력은?',
    options: ['30km/h', '60km/h', '120km/h', '240km/h'],
    answer: 1,
    explanation: '속력은 이동한 거리 ÷ 걸린 시간이므로 120 ÷ 2 = 60km/h입니다.'
  },
  {
    id: 8,
    question: '북반구에서 계절이 바뀌는 주된 이유는 무엇일까요?',
    options: ['지구와 태양 사이의 거리가 크게 바뀌어서', '달의 모양이 바뀌어서', '기울어진 지구가 태양 주위를 공전해서', '지구의 자전 속도가 바뀌어서'],
    answer: 2,
    explanation: '기울어진 지구가 태양 주위를 공전하면서 햇빛을 받는 각도와 낮의 길이가 달라집니다.'
  }
];

const STORAGE_KEY = 'calibrate-demo-v1';
const CATEGORY = {
  stable: { label: '높은 확신의 정답', note: '알고 있고, 알고 있다고 판단했어요.' },
  under: { label: '낮은 확신의 정답', note: '맞혔지만 스스로는 확신하지 못했어요.' },
  aware: { label: '낮은 확신의 오답', note: '잘 모르고 있다는 점을 인식했어요.' },
  over: { label: '높은 확신의 오답', note: '맞다고 믿었지만 다시 확인이 필요해요.' }
};

const app = document.querySelector('#app');
let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version === 1 && Array.isArray(saved.records) && saved.records.length <= QUESTIONS.length) {
      const valid = saved.records.every((record, index) =>
        record.questionId === QUESTIONS[index].id &&
        Number.isInteger(record.choice) &&
        record.choice >= 0 && record.choice < QUESTIONS[index].options.length &&
        Number.isInteger(record.confidence) &&
        record.confidence >= 0 && record.confidence <= 100
      );
      if (valid) {
        const view = saved.records.length === 0 && saved.view === 'start'
          ? 'start'
          : saved.records.length === QUESTIONS.length
          ? (saved.view === 'result' ? 'result' : 'report')
          : (saved.view === 'result' && saved.records.length > 0 ? 'result' : 'question');
        return { view, records: saved.records, selection: null, confidence: 50 };
      }
    }
  } catch (_) {
    // Storage might be unavailable; the quiz still works for this visit.
  }
  return { view: 'start', records: [], selection: null, confidence: 50 };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, view: state.view, records: state.records }));
  } catch (_) {
    // Continue without persistence if the browser blocks storage.
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function getCategory(correct, confidence) {
  if (correct) return confidence >= 50 ? 'stable' : 'under';
  return confidence >= 50 ? 'over' : 'aware';
}

function questionProgress() {
  const number = state.view === 'result' ? state.records.length : state.records.length + 1;
  return `
    <div class="topline"><span>문항 ${number} / ${QUESTIONS.length}</span><span>정답을 보기 전, 확신도까지 기록해요</span></div>
    <div class="progress-track" aria-label="진행률"><span style="width:${(number / QUESTIONS.length) * 100}%"></span></div>
  `;
}

function renderStart() {
  const hasProgress = state.records.length > 0;
  app.innerHTML = `
    <section class="hero screen">
      <div class="hero-copy">
        <span class="eyebrow">Learn what you know</span>
        <h1>내가 안다고 믿는 것,<br>정말 알고 있을까?</h1>
        <p class="muted">문제를 풀 때마다 정답이라고 생각하는 확신도를 기록해 보세요. 맞힌 개수 너머에 있는 나의 판단 패턴을 발견할 수 있습니다.</p>
        <div class="hero-actions">
          <button class="button button-primary" id="start-button">${hasProgress ? '처음부터 다시 풀기' : '학습 시작하기'} <span aria-hidden="true">→</span></button>
          ${hasProgress ? '<button class="button button-secondary" id="resume-button">이어서 풀기</button>' : ''}
        </div>
        <p class="small-note">시연용 문제 ${QUESTIONS.length}개 · 로그인 없이 이용 · 결과는 이 브라우저에 저장</p>
        <div class="flow"><span>답 선택</span><b>→</b><span>확신도 입력</span><b>→</b><span>나의 패턴 확인</span></div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-card top"><div class="visual-label">나의 확신도</div><div class="visual-big">90%</div><div class="visual-bar"><span style="width:90%"></span></div></div>
        <div class="visual-card bottom"><div class="visual-label">실제 결과</div><div class="visual-big">오답</div><div class="visual-badge">확신했던 오답부터 다시 보기</div></div>
      </div>
    </section>
  `;
  document.querySelector('#start-button').addEventListener('click', () => {
    state = { view: 'question', records: [], selection: null, confidence: 50 };
    saveState(); render();
  });
  document.querySelector('#resume-button')?.addEventListener('click', () => {
    state.view = state.records.length === QUESTIONS.length ? 'report' : 'question';
    render();
  });
}

function renderQuestion() {
  const question = QUESTIONS[state.records.length];
  app.innerHTML = `
    <section class="work-area screen">
      ${questionProgress()}
      <div class="panel">
        <span class="eyebrow">Question ${state.records.length + 1}</span>
        <h2 class="question-title">${escapeHtml(question.question)}</h2>
        <div class="option-list" role="group" aria-label="답안 선택">
          ${question.options.map((option, index) => `
            <button class="option ${state.selection === index ? 'selected' : ''}" type="button" data-choice="${index}" aria-pressed="${state.selection === index}">
              <span class="option-marker">${index + 1}</span><span>${escapeHtml(option)}</span>
            </button>`).join('')}
        </div>
        <div class="panel-actions"><button class="button button-primary" id="to-confidence" ${state.selection === null ? 'disabled' : ''}>확신도 입력하기 <span aria-hidden="true">→</span></button></div>
      </div>
    </section>
  `;
  document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
    state.selection = Number(button.dataset.choice);
    document.querySelectorAll('[data-choice]').forEach(option => {
      const chosen = Number(option.dataset.choice) === state.selection;
      option.classList.toggle('selected', chosen);
      option.setAttribute('aria-pressed', String(chosen));
    });
    document.querySelector('#to-confidence').disabled = false;
  }));
  document.querySelector('#to-confidence').addEventListener('click', () => {
    if (state.selection === null) return;
    state.view = 'confidence'; render();
  });
}

function renderConfidence() {
  const question = QUESTIONS[state.records.length];
  app.innerHTML = `
    <section class="work-area screen">
      ${questionProgress()}
      <div class="panel">
        <span class="eyebrow">Check your confidence</span>
        <h2>이 답이 맞다고<br>얼마나 확신하나요?</h2>
        <p class="muted confidence-intro">정답을 확인하기 전, 지금의 생각을 기록해 보세요. 0%는 전혀 확신하지 않음, 100%는 완전히 확신함을 뜻합니다.</p>
        <div class="selected-answer">선택한 답 · ${escapeHtml(question.options[state.selection])}</div>
        <div class="confidence-number" id="confidence-value">${state.confidence}<small>%</small></div>
        <div class="slider-wrap">
          <input id="confidence-slider" type="range" min="0" max="100" step="1" value="${state.confidence}" aria-label="확신도" />
          <div class="slider-labels"><span>0% · 전혀 확신하지 않음</span><span>100% · 완전히 확신함</span></div>
        </div>
        <div class="panel-actions">
          <button class="button button-secondary" id="back-to-question">답 다시 선택</button>
          <button class="button button-primary" id="submit-answer">답변 제출하기 <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('#confidence-slider').addEventListener('input', event => {
    state.confidence = Number(event.target.value);
    document.querySelector('#confidence-value').innerHTML = `${state.confidence}<small>%</small>`;
  });
  document.querySelector('#back-to-question').addEventListener('click', () => { state.view = 'question'; render(); });
  document.querySelector('#submit-answer').addEventListener('click', () => {
    const correct = state.selection === question.answer;
    state.records.push({ questionId: question.id, choice: state.selection, confidence: state.confidence, correct, category: getCategory(correct, state.confidence) });
    state.view = 'result';
    state.selection = null;
    state.confidence = 50;
    saveState(); render();
  });
}

function renderResult() {
  const record = state.records.at(-1);
  const question = QUESTIONS[state.records.length - 1];
  const category = CATEGORY[record.category];
  app.innerHTML = `
    <section class="work-area screen">
      ${questionProgress()}
      <div class="panel">
        <div class="result-icon ${record.correct ? 'correct' : 'incorrect'}" aria-hidden="true">${record.correct ? '✓' : '×'}</div>
        <span class="eyebrow">Your result</span>
        <h2>${record.correct ? '정답입니다!' : '정답이 아닙니다.'}</h2>
        <span class="pill ${record.category}">${category.label}</span>
        <p class="muted" style="margin:17px 0 0">${category.note}</p>
        <div class="result-grid">
          <div class="stat-tile"><span>내 확신도</span><strong>${record.confidence}%</strong></div>
          <div class="stat-tile"><span>정답</span><strong>${escapeHtml(question.options[question.answer])}</strong></div>
        </div>
        <div class="explanation"><strong>이렇게 생각해 볼까요?</strong><br>${escapeHtml(question.explanation)}</div>
        <div class="panel-actions"><button class="button button-primary" id="next-question">${state.records.length === QUESTIONS.length ? '최종 리포트 보기' : '다음 문제'} <span aria-hidden="true">→</span></button></div>
      </div>
    </section>
  `;
  document.querySelector('#next-question').addEventListener('click', () => {
    state.view = state.records.length === QUESTIONS.length ? 'report' : 'question';
    saveState(); render();
  });
}

function renderReport() {
  const correctCount = state.records.filter(record => record.correct).length;
  const accuracy = Math.round((correctCount / QUESTIONS.length) * 100);
  const averageConfidence = Math.round(state.records.reduce((sum, record) => sum + record.confidence, 0) / QUESTIONS.length);
  const counts = Object.fromEntries(Object.keys(CATEGORY).map(key => [key, state.records.filter(record => record.category === key).length]));
  const reviewRecords = state.records.filter(record => record.category === 'over');
  const difference = averageConfidence - accuracy;
  const reflection = difference > 0
    ? '평균 확신도가 정답률보다 높아요. 확신했던 오답을 먼저 살펴보세요.'
    : difference < 0
      ? '정답률이 평균 확신도보다 높아요. 맞혔지만 확신하지 못한 문제도 살펴보세요.'
      : '정답률과 평균 확신도가 같아요. 문항별 결과를 살펴보면 더 자세한 패턴을 볼 수 있어요.';
  app.innerHTML = `
    <section class="report-area screen">
      <div class="report-head"><span class="eyebrow">My calibration report</span><h2>나의 학습 리포트</h2><p class="muted report-lead">${reflection}</p></div>
      <div class="report-stats">
        <div class="report-stat"><span>실제 정답률</span><strong>${accuracy}%</strong><span>${QUESTIONS.length}문제 중 ${correctCount}문제 정답</span></div>
        <div class="report-stat accent"><span>평균 확신도</span><strong>${averageConfidence}%</strong><span>문제를 풀 때 기록한 확신의 평균</span></div>
      </div>
      <div class="section-card"><h3>나의 판단 패턴</h3><p class="muted">확신도 0~49%는 낮은 확신, 50~100%는 높은 확신으로 분류했어요.</p>
        <div class="category-grid">
          ${Object.entries(CATEGORY).map(([key, value]) => `<div class="category"><span class="pill ${key}">${value.label}</span><strong>${counts[key]}</strong></div>`).join('')}
        </div>
      </div>
      <div class="section-card"><h3>먼저 다시 볼 문제</h3><p class="muted">높은 확신을 가지고 답했지만 틀린 문제예요.</p>
        ${reviewRecords.length
          ? `<div class="review-list">${reviewRecords.map(record => {
              const question = QUESTIONS.find(item => item.id === record.questionId);
              return `<div class="review-item"><span>문항 ${record.questionId} · 확신도 ${record.confidence}%</span><strong>${escapeHtml(question.question)}</strong><p class="muted" style="margin:8px 0 0">정답: ${escapeHtml(question.options[question.answer])}</p></div>`;
            }).join('')}</div>`
          : '<div class="empty-note">이번에는 높은 확신의 오답이 없어요.</div>'}
      </div>
      <div class="report-actions"><button class="button button-primary" id="restart-quiz">다시 풀기 <span aria-hidden="true">↻</span></button></div>
    </section>
  `;
  document.querySelector('#restart-quiz').addEventListener('click', () => {
    state = { view: 'start', records: [], selection: null, confidence: 50 };
    saveState(); render();
  });
}

function render() {
  if (state.view === 'question' && state.records.length === QUESTIONS.length) state.view = 'report';
  const renderView = { start: renderStart, question: renderQuestion, confidence: renderConfidence, result: renderResult, report: renderReport }[state.view];
  (renderView || renderStart)();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

render();
