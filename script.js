const SUBJECTS = {
  korean: {
    label: '국어', icon: '가', description: '낱말과 문장을 살펴봐요',
    questions: [
      { id: 1, question: '다음 중 받침이 있는 낱말은 무엇일까요?', options: ['바다', '하늘', '나무', '오이'], answer: 1, explanation: '‘하늘’의 ‘늘’에는 받침 ㄹ이 있습니다.' },
      { id: 2, question: '‘기쁘다’와 뜻이 비슷한 말은 무엇일까요?', options: ['즐겁다', '슬프다', '무섭다', '조용하다'], answer: 0, explanation: '기쁘다는 즐겁고 마음이 좋은 상태를 나타냅니다.' },
      { id: 3, question: '문장 끝에 물음표를 써야 하는 것은 무엇일까요?', options: ['오늘 날씨가 좋다', '너는 몇 학년이니', '나는 학교에 간다', '와 정말 멋지다'], answer: 1, explanation: '‘너는 몇 학년이니?’는 대답을 묻는 문장이므로 물음표를 씁니다.' },
      { id: 4, question: '‘동생이 사과를 먹었다’에서 행동을 나타내는 말은?', options: ['동생이', '사과를', '먹었다', '없다'], answer: 2, explanation: '‘먹었다’는 동생이 한 행동을 나타내는 말입니다.' },
      { id: 5, question: '다음 중 띄어쓰기가 바른 문장은 무엇일까요?', options: ['나는 학교에 간다.', '나는학교에 간다.', '나는 학교에간다.', '나는학교에간다.'], answer: 0, explanation: '‘나는 학교에 간다.’처럼 각 낱말을 알맞게 띄어 씁니다.' }
    ]
  },
  math: {
    label: '수학', icon: '+', description: '계산과 단위를 생각해 봐요',
    questions: [
      { id: 1, question: '48 + 27은 얼마일까요?', options: ['65', '75', '85', '95'], answer: 1, explanation: '48 + 20 = 68, 여기에 7을 더하면 75입니다.' },
      { id: 2, question: '6 × 7은 얼마일까요?', options: ['36', '40', '42', '48'], answer: 2, explanation: '6을 7번 더한 값은 42입니다.' },
      { id: 3, question: '1/2 + 1/4의 값은 무엇일까요?', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2, explanation: '1/2은 2/4와 같으므로 2/4 + 1/4 = 3/4입니다.' },
      { id: 4, question: '1m는 몇 cm일까요?', options: ['10cm', '50cm', '100cm', '1000cm'], answer: 2, explanation: '1m는 100cm입니다.' },
      { id: 5, question: '오후 3시 20분에서 40분이 지나면 몇 시일까요?', options: ['오후 3시 40분', '오후 4시', '오후 4시 20분', '오후 5시'], answer: 1, explanation: '3시 20분에 40분을 더하면 4시가 됩니다.' }
    ]
  },
  social: {
    label: '사회', icon: '地', description: '우리 생활과 사회를 알아봐요',
    questions: [
      { id: 1, question: '우리나라의 수도는 어디일까요?', options: ['부산', '대전', '서울', '광주'], answer: 2, explanation: '대한민국의 수도는 서울입니다.' },
      { id: 2, question: '일반적인 지도에서 위쪽은 어느 방향일까요?', options: ['동쪽', '서쪽', '남쪽', '북쪽'], answer: 3, explanation: '특별한 표시가 없다면 지도의 위쪽은 북쪽을 나타냅니다.' },
      { id: 3, question: '사람들이 투표로 대표를 뽑는 일을 무엇이라고 할까요?', options: ['선거', '회의', '축제', '조사'], answer: 0, explanation: '투표로 대표를 뽑는 일을 선거라고 합니다.' },
      { id: 4, question: '우리나라의 국기 이름은 무엇일까요?', options: ['태극기', '무궁화', '한글', '아리랑'], answer: 0, explanation: '대한민국의 국기는 태극기입니다.' },
      { id: 5, question: '여러 사람이 책을 빌리고 읽을 수 있는 공공시설은?', options: ['도서관', '주차장', '우체통', '횡단보도'], answer: 0, explanation: '도서관에서는 누구나 책을 읽거나 빌릴 수 있습니다.' }
    ]
  },
  science: {
    label: '과학', icon: '✳', description: '자연 현상을 관찰해 봐요',
    questions: [
      { id: 1, question: '지구에 낮과 밤이 생기는 주된 이유는 무엇일까요?', options: ['지구의 자전', '지구의 공전', '달의 공전', '계절의 변화'], answer: 0, explanation: '지구가 자기 축을 중심으로 회전하면서 태양을 향하는 쪽이 바뀝니다.' },
      { id: 2, question: '빛은 한 가지 물질 안에서 보통 어떻게 나아갈까요?', options: ['구불구불', '직선으로', '원을 그리며', '멈춰서'], answer: 1, explanation: '빛은 같은 물질 안에서 직선으로 나아갑니다.' },
      { id: 3, question: '식물이 자라는 데 필요한 빛을 주는 것은?', options: ['태양', '바람', '흙', '자석'], answer: 0, explanation: '식물은 햇빛을 받아 광합성을 합니다.' },
      { id: 4, question: '물이 얼어 얼음이 되면 어떤 상태가 될까요?', options: ['기체', '액체', '고체', '안개'], answer: 2, explanation: '얼음은 모양이 일정한 고체입니다.' },
      { id: 5, question: '자석의 같은 극끼리 가까이 가져가면?', options: ['서로 밀어낸다', '서로 끌어당긴다', '색이 바뀐다', '열이 난다'], answer: 0, explanation: '자석은 같은 극끼리 밀어내고 다른 극끼리 끌어당깁니다.' }
    ]
  },
  english: {
    label: '영어', icon: 'A', description: '기초 단어와 표현을 익혀요',
    questions: [
      { id: 1, question: '“apple”의 뜻은 무엇일까요?', options: ['사과', '바나나', '포도', '수박'], answer: 0, explanation: 'apple은 사과라는 뜻입니다.' },
      { id: 2, question: '“I ___ a student.”의 빈칸에 알맞은 말은?', options: ['is', 'are', 'am', 'be'], answer: 2, explanation: '주어가 I일 때는 am을 씁니다.' },
      { id: 3, question: '“dog”의 뜻은 무엇일까요?', options: ['고양이', '개', '새', '물고기'], answer: 1, explanation: 'dog는 개라는 뜻입니다.' },
      { id: 4, question: '“Good morning!”은 언제 주로 쓰는 인사일까요?', options: ['아침', '점심', '저녁', '잠자기 전'], answer: 0, explanation: 'Good morning은 아침에 하는 인사입니다.' },
      { id: 5, question: '“How many?”는 무엇을 물을 때 쓸까요?', options: ['색깔', '장소', '개수', '이름'], answer: 2, explanation: 'How many는 몇 개인지 개수를 물을 때 씁니다.' }
    ]
  }
};

const STORAGE_KEY = 'calibrate-demo-v2';
const CATEGORY = {
  stable: { label: '높은 확신의 정답', note: '알고 있고, 알고 있다고 판단했어요.' },
  under: { label: '낮은 확신의 정답', note: '맞혔지만 스스로는 확신하지 못했어요.' },
  aware: { label: '낮은 확신의 오답', note: '잘 모르고 있다는 점을 인식했어요.' },
  over: { label: '높은 확신의 오답', note: '맞다고 믿었지만 다시 확인이 필요해요.' }
};

const app = document.querySelector('#app');
let savedSessions = {};
let state = loadState();
let QUESTIONS = state.subject ? SUBJECTS[state.subject].questions : [];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version === 2 && saved.sessions && typeof saved.sessions === 'object') {
      for (const [key, session] of Object.entries(saved.sessions)) {
        const questions = SUBJECTS[key]?.questions;
        if (!questions || !Array.isArray(session.records) || session.records.length > questions.length) continue;
        const valid = session.records.every((record, index) =>
          record.questionId === questions[index].id &&
          Number.isInteger(record.choice) &&
          record.choice >= 0 && record.choice < questions[index].options.length &&
          Number.isInteger(record.confidence) &&
          record.confidence >= 0 && record.confidence <= 100
        );
        if (valid) savedSessions[key] = session;
      }
      const subject = SUBJECTS[saved.subject] ? saved.subject : null;
      const session = subject ? savedSessions[subject] : null;
      if (session) {
        const view = session.view === 'start' ? 'start'
          : session.records.length === SUBJECTS[subject].questions.length
            ? (session.view === 'result' ? 'result' : 'report')
            : (session.view === 'result' && session.records.length > 0 ? 'result' : 'question');
        return { subject, view, records: session.records, selection: null, confidence: 50 };
      }
      return { subject, view: 'start', records: [], selection: null, confidence: 50 };
    }
  } catch (_) {
    // Storage might be unavailable; the quiz still works for this visit.
  }
  return { subject: null, view: 'start', records: [], selection: null, confidence: 50 };
}

function saveState() {
  try {
    if (state.subject) savedSessions[state.subject] = { view: state.view, records: state.records };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, subject: state.subject, sessions: savedSessions }));
  } catch (_) {
    // Continue without persistence if the browser blocks storage.
  }
}

function selectSubject(key) {
  if (!SUBJECTS[key]) return;
  if (state.subject) savedSessions[state.subject] = { view: state.view, records: state.records };
  const session = savedSessions[key];
  state = { subject: key, view: 'start', records: session?.records || [], selection: null, confidence: 50 };
  QUESTIONS = SUBJECTS[key].questions;
  saveState();
  render();
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
    <div class="topline"><span>${SUBJECTS[state.subject].label} · 문항 ${number} / ${QUESTIONS.length}</span><button class="text-button" id="change-subject" type="button">과목 바꾸기</button></div>
    <div class="progress-track" aria-label="진행률"><span style="width:${(number / QUESTIONS.length) * 100}%"></span></div>
  `;
}

function renderStart() {
  const hasProgress = state.records.length > 0;
  const isComplete = state.subject && state.records.length === QUESTIONS.length;
  const buttonLabel = !state.subject ? '과목을 선택해 주세요' : isComplete ? '이 과목 다시 풀기' : hasProgress ? '이어서 풀기' : '학습 시작하기';
  app.innerHTML = `
    <section class="hero screen">
      <div class="hero-copy">
        <span class="eyebrow">Learn what you know</span>
        <h1>내가 안다고 믿는 것,<br>정말 알고 있을까?</h1>
        <p class="muted">문제를 풀 때마다 정답이라고 생각하는 확신도를 기록해 보세요. 맞힌 개수 너머에 있는 나의 판단 패턴을 발견할 수 있습니다.</p>
        <div class="flow"><span>답 선택</span><b>→</b><span>확신도 입력</span><b>→</b><span>나의 패턴 확인</span></div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-card top"><div class="visual-label">나의 확신도</div><div class="visual-big">90%</div><div class="visual-bar"><span style="width:90%"></span></div></div>
        <div class="visual-card bottom"><div class="visual-label">실제 결과</div><div class="visual-big">오답</div><div class="visual-badge">확신했던 오답부터 다시 보기</div></div>
      </div>
    </section>
    <section class="subject-section screen" aria-labelledby="subject-heading">
      <span class="eyebrow">Choose a subject</span>
      <h2 id="subject-heading">어떤 과목을 풀어볼까요?</h2>
      <p class="muted">초등학교 수준의 예시 문제를 과목마다 5개씩 준비했어요.</p>
      <div class="subject-grid" role="group" aria-label="과목 선택">
        ${Object.entries(SUBJECTS).map(([key, subject]) => {
          const completed = savedSessions[key]?.records?.length || 0;
          return `<button class="subject-card ${state.subject === key ? 'selected' : ''}" data-subject="${key}" type="button" aria-pressed="${state.subject === key}">
            <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
            <span class="subject-name">${subject.label}</span>
            <span class="subject-description">${subject.description}</span>
            <span class="subject-progress">${completed > 0 ? `${completed} / ${subject.questions.length}문제 풀이` : `${subject.questions.length}문제 · 예시 퀴즈`}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="subject-actions">
        <span class="small-note">로그인 없이 이용 · 과목별 결과는 이 브라우저에 저장</span>
        <div class="subject-buttons">
          ${hasProgress && !isComplete ? '<button class="button button-secondary" id="reset-subject">처음부터 풀기</button>' : ''}
          <button class="button button-primary" id="start-button" ${state.subject ? '' : 'disabled'}>${buttonLabel} <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  `;
  document.querySelectorAll('[data-subject]').forEach(button => button.addEventListener('click', () => selectSubject(button.dataset.subject)));
  document.querySelector('#start-button').addEventListener('click', () => {
    if (!state.subject) return;
    state = { ...state, view: 'question', records: isComplete ? [] : state.records, selection: null, confidence: 50 };
    saveState(); render();
  });
  document.querySelector('#reset-subject')?.addEventListener('click', () => {
    state = { ...state, view: 'question', records: [], selection: null, confidence: 50 };
    saveState(); render();
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
      <div class="report-head"><span class="eyebrow">${SUBJECTS[state.subject].label} · My calibration report</span><h2>${SUBJECTS[state.subject].label} 학습 리포트</h2><p class="muted report-lead">${reflection}</p></div>
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
      <div class="report-actions"><button class="button button-secondary" id="another-subject">다른 과목 선택</button><button class="button button-primary" id="restart-quiz">${SUBJECTS[state.subject].label} 다시 풀기 <span aria-hidden="true">↻</span></button></div>
    </section>
  `;
  document.querySelector('#restart-quiz').addEventListener('click', () => {
    state = { ...state, view: 'question', records: [], selection: null, confidence: 50 };
    saveState(); render();
  });
  document.querySelector('#another-subject').addEventListener('click', showSubjectPicker);
}

function showSubjectPicker() {
  state.view = 'start';
  saveState();
  state = { subject: null, view: 'start', records: [], selection: null, confidence: 50 };
  QUESTIONS = [];
  saveState(); render();
}

function render() {
  if (state.view === 'question' && state.records.length === QUESTIONS.length) state.view = 'report';
  const renderView = { start: renderStart, question: renderQuestion, confidence: renderConfidence, result: renderResult, report: renderReport }[state.view];
  (renderView || renderStart)();
  document.querySelector('#change-subject')?.addEventListener('click', showSubjectPicker);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

render();
