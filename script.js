const categoryPicker = document.getElementById("categoryPicker");
const shuffleBtn = document.getElementById("shuffleBtn");
const flipBtn = document.getElementById("flipBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const knowBtn = document.getElementById("knowBtn");
const maybeBtn = document.getElementById("maybeBtn");
const repeatBtn = document.getElementById("repeatBtn");

const flashcard = document.getElementById("flashcard");
const cardMotion = document.getElementById("cardMotion");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const correctStamp = document.getElementById("correctStamp");
const wrongStamp = document.getElementById("wrongStamp");
const totalCount = document.getElementById("totalCount");
const knownCount = document.getElementById("knownCount");
const currentIndex = document.getElementById("currentIndex");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");
const questionList = document.getElementById("questionList");
const startScreen = document.getElementById("startScreen");
const appShell = document.getElementById("appShell");
const quizPicker = document.getElementById("quizPicker");
const enterQuizBtn = document.getElementById("enterQuizBtn");
const backToMenuBtn = document.getElementById("backToMenuBtn");
const appTitle = document.getElementById("appTitle");
const appSubtitle = document.getElementById("appSubtitle");

const rawFlashcardData = window.FLASHCARD_DATA || null;
const BASE_STORAGE_KEY = "flashcardsProgressV1";
const quizDefinitions = [];

function stripParentheses(text) {
  return String(text || "")
    .replace(/[()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeQuestion(question) {
  const originalLong = typeof question.long_answer === "string"
    ? question.long_answer
    : question.answer;
  const longAnswer = stripParentheses(originalLong);

  return {
    ...question,
    answer: longAnswer,
    long_answer: longAnswer,
  };
}

function buildUnifiedQuizSource(source) {
  if (!source || !Array.isArray(source.categories)) {
    return null;
  }

  const categories = source.categories.map((category) => {
    const questions = Array.isArray(category.questions)
      ? category.questions.map((question) => normalizeQuestion(question))
      : [];

    return {
      ...category,
      count: questions.length,
      questions,
    };
  });

  return {
    ...source,
    total_questions: categories.reduce((sum, category) => sum + category.count, 0),
    categories,
  };
}

if (rawFlashcardData) {
  const unifiedSource = buildUnifiedQuizSource(rawFlashcardData);

  if (unifiedSource) {
    quizDefinitions.push({
      id: "riso-2026",
      title: "RISO kartice 2026",
      source: unifiedSource,
    });
  }
}

let selectedQuizId = quizDefinitions[0]?.id ?? "";
let currentQuiz = null;
let data = [];
let STORAGE_KEY = BASE_STORAGE_KEY;
const KNOW_SOUND_FILE = "Duolingo Correct - QuickSounds.com.mp3";
const ERROR_SOUND_FILE = "error.mp3";
const CARD_CHANGE_SOUND_FILE = "card-change.mp3";
const CORRECT_STAMP_DURATION_MS = 220;

let activeQuestions = [];
let activeCategory = null;
let index = 0;
let knownIds = new Set();
let maybeIds = new Set();
let unknownIds = new Set();
let categoryProgressByName = {};
let selectedCategoryName = "";
let feedbackAudioContext = null;
let knowSound = null;
let errorSound = null;
let cardChangeSound = null;
let isCardAnimating = false;

function getQuizQuestionCount(quiz) {
  if (!quiz?.source) return 0;

  if (Number.isInteger(quiz.source.total_questions)) {
    return quiz.source.total_questions;
  }

  const categories = Array.isArray(quiz.source.categories) ? quiz.source.categories : [];
  return categories.reduce((sum, cat) => sum + (Array.isArray(cat.questions) ? cat.questions.length : 0), 0);
}

function getQuizCategoryCount(quiz) {
  return Array.isArray(quiz?.source?.categories) ? quiz.source.categories.length : 0;
}

function renderQuizPicker() {
  if (!quizPicker) return;

  if (!Array.isArray(quizDefinitions) || quizDefinitions.length === 0) {
    quizPicker.innerHTML = '<p class="status">Trenutno nema dostupnih kvizova.</p>';
    if (enterQuizBtn) {
      enterQuizBtn.disabled = true;
    }
    return;
  }

  quizPicker.innerHTML = quizDefinitions
    .map((quiz) => {
      const questionCount = getQuizQuestionCount(quiz);
      const categoryCount = getQuizCategoryCount(quiz);
      const isActive = quiz.id === selectedQuizId ? " is-active" : "";

      return `
        <button class="quiz-card${isActive}" type="button" data-quiz-id="${quiz.id}">
          <span class="quiz-card-title">${quiz.title}</span>
          <span class="quiz-card-meta">${questionCount} pitanja · ${categoryCount} kategorija</span>
        </button>
      `;
    })
    .join("");

  if (enterQuizBtn) {
    enterQuizBtn.disabled = !selectedQuizId;
  }
}

function selectQuiz(quizId) {
  if (!quizDefinitions.some((quiz) => quiz.id === quizId)) {
    return;
  }

  selectedQuizId = quizId;
  renderQuizPicker();
}

function resetPracticeState() {
  activeQuestions = [];
  activeCategory = null;
  index = 0;
  knownIds = new Set();
  maybeIds = new Set();
  unknownIds = new Set();
  categoryProgressByName = {};
  selectedCategoryName = "";
  isCardAnimating = false;
}

function enterSelectedQuiz() {
  const quiz = quizDefinitions.find((item) => item.id === selectedQuizId) || null;
  if (!quiz) return;

  currentQuiz = quiz;
  data = Array.isArray(quiz.source?.categories) ? quiz.source.categories : [];
  STORAGE_KEY = `${BASE_STORAGE_KEY}_${quiz.id}`;

  if (appTitle) {
    appTitle.textContent = quiz.title;
  }
  if (appSubtitle) {
    appSubtitle.textContent = "Izaberi kategoriju i vezbaj pitanja kroz kartice.";
  }

  resetPracticeState();
  setButtonsEnabled(false);

  if (startScreen) {
    startScreen.classList.add("is-hidden");
  }
  if (appShell) {
    appShell.classList.remove("is-hidden");
  }

  initCategoryPicker();
  const restored = restoreProgress();

  if ((!restored || activeQuestions.length === 0) && data.length > 0) {
    loadCategoryByName(selectedCategoryName || data[0].name, false);
  }

  updateStats();

  if (statusText) {
    statusText.textContent = `Kviz: ${quiz.title}. Izaberi kategoriju za pocetak.`;
  }
}

function goBackToMenu() {
  saveProgress();
  setButtonsEnabled(false);
  flashcard.classList.remove("is-flipped");

  if (appShell) {
    appShell.classList.add("is-hidden");
  }
  if (startScreen) {
    startScreen.classList.remove("is-hidden");
  }

  renderQuizPicker();
}

function playKnowSound() {
  try {
    if (!knowSound) {
      knowSound = new Audio(encodeURI(KNOW_SOUND_FILE));
      knowSound.preload = "auto";
      knowSound.volume = 0.9;
    }

    knowSound.currentTime = 0;
    const playPromise = knowSound.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        playKnowSynthFallback();
      });
    }
    return;
  } catch {
    // Fall through to synthesized fallback.
  }

  playKnowSynthFallback();
}

function playKnowSynthFallback() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return;

  try {
    if (!feedbackAudioContext) {
      feedbackAudioContext = new AudioContextCtor();
    }

    if (feedbackAudioContext.state === "suspended") {
      feedbackAudioContext.resume();
    }

    const ctx = feedbackAudioContext;
    const now = ctx.currentTime;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.23, now + 0.018);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);

    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 280;

    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 6400;

    const delay = ctx.createDelay();
    delay.delayTime.value = 0.11;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.16;
    const wet = ctx.createGain();
    wet.gain.value = 0.11;

    master.connect(hp);
    hp.connect(lp);
    lp.connect(ctx.destination);
    lp.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(ctx.destination);

    const addBellNote = (start, freq, gainPeak, duration = 0.18) => {
      const carrier = ctx.createOscillator();
      const harmonic = ctx.createOscillator();
      const noteGain = ctx.createGain();

      carrier.type = "triangle";
      harmonic.type = "sine";

      carrier.frequency.setValueAtTime(freq, start);
      harmonic.frequency.setValueAtTime(freq * 2.01, start);

      noteGain.gain.setValueAtTime(0.0001, start);
      noteGain.gain.exponentialRampToValueAtTime(gainPeak, start + 0.012);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      carrier.connect(noteGain);
      harmonic.connect(noteGain);
      noteGain.connect(master);

      carrier.start(start);
      harmonic.start(start);
      carrier.stop(start + duration + 0.01);
      harmonic.stop(start + duration + 0.01);
    };

    const attackNoiseDuration = 0.022;
    const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * attackNoiseDuration), ctx.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length);
    }

    const click = ctx.createBufferSource();
    const clickFilter = ctx.createBiquadFilter();
    const clickGain = ctx.createGain();
    clickFilter.type = "bandpass";
    clickFilter.frequency.value = 2400;
    clickFilter.Q.value = 1.1;

    click.buffer = noiseBuffer;
    clickGain.gain.setValueAtTime(0.0001, now);
    clickGain.gain.exponentialRampToValueAtTime(0.2, now + 0.004);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + attackNoiseDuration);
    click.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(master);
    click.start(now);
    click.stop(now + attackNoiseDuration + 0.01);

    // Arpeggio: bright game-like "cha-ching".
    addBellNote(now + 0.000, 987.77, 0.13, 0.14); // B5
    addBellNote(now + 0.050, 1244.51, 0.16, 0.16); // D#6
    addBellNote(now + 0.105, 1567.98, 0.20, 0.20); // G6
    addBellNote(now + 0.175, 2093.00, 0.22, 0.23); // C7

    // Tiny sparkle tail.
    addBellNote(now + 0.205, 3136.00, 0.07, 0.11);
  } catch {
    // Ignore audio errors so UX remains functional in restricted browsers.
  }
}

function playErrorSound() {
  try {
    if (!errorSound) {
      errorSound = new Audio(encodeURI(ERROR_SOUND_FILE));
      errorSound.preload = "auto";
      errorSound.volume = 0.6;
    }

    errorSound.currentTime = 0;
    const playPromise = errorSound.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        playErrorSynthFallback();
      });
    }
    return;
  } catch {
    // Fall through to synthesized fallback.
  }

  playErrorSynthFallback();
}

function playErrorSynthFallback() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return;

  try {
    if (!feedbackAudioContext) {
      feedbackAudioContext = new AudioContextCtor();
    }

    if (feedbackAudioContext.state === "suspended") {
      feedbackAudioContext.resume();
    }

    const ctx = feedbackAudioContext;
    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    gain.connect(ctx.destination);

    const oscA = ctx.createOscillator();
    oscA.type = "square";
    oscA.frequency.setValueAtTime(340, now);
    oscA.frequency.exponentialRampToValueAtTime(250, now + 0.12);
    oscA.connect(gain);
    oscA.start(now);
    oscA.stop(now + 0.13);

    const oscB = ctx.createOscillator();
    oscB.type = "triangle";
    oscB.frequency.setValueAtTime(230, now + 0.085);
    oscB.frequency.exponentialRampToValueAtTime(180, now + 0.19);
    oscB.connect(gain);
    oscB.start(now + 0.085);
    oscB.stop(now + 0.2);
  } catch {
    // Ignore audio errors to keep the app usable.
  }
}

function playCardChangeSound() {
  try {
    if (!cardChangeSound) {
      cardChangeSound = new Audio(encodeURI(CARD_CHANGE_SOUND_FILE));
      cardChangeSound.preload = "auto";
      cardChangeSound.volume = 1;
    }

    cardChangeSound.currentTime = 0;
    cardChangeSound.play();
  } catch {
    // Ignore playback issues and continue navigation.
  }
}

function renderCategoryPicker() {
  if (!categoryPicker) return;

  if (!Array.isArray(data) || data.length === 0) {
    categoryPicker.innerHTML = '<p class="status">Nema ucitanih kategorija.</p>';
    return;
  }

  categoryPicker.innerHTML = data
    .map((cat) => {
      const activeClass = cat.name === selectedCategoryName ? " active" : "";
      return `
        <button class="category-chip${activeClass}" type="button" data-category="${cat.name}">
          <span class="category-chip-title">${cat.name}</span>
          <span class="category-chip-count">${cat.count}</span>
        </button>
      `;
    })
    .join("");
}

function initializeCategoryState(category) {
  activeQuestions = [...category.questions];
  index = 0;
  knownIds = new Set();
  maybeIds = new Set();
  unknownIds = new Set();
}

function applyCategoryState(category, savedState) {
  const byId = new Map(category.questions.map((q) => [q.id, q]));
  const ordered = [];
  const seenIds = new Set();

  if (Array.isArray(savedState?.questionOrder)) {
    savedState.questionOrder.forEach((id) => {
      const question = byId.get(id);
      if (!question || seenIds.has(id)) {
        return;
      }

      seenIds.add(id);
      ordered.push(question);
    });
  }

  const missing = category.questions.filter((q) => !seenIds.has(q.id));
  activeQuestions = [...ordered, ...missing];

  if (activeQuestions.length === 0) {
    index = 0;
    knownIds = new Set();
    maybeIds = new Set();
    unknownIds = new Set();
    return;
  }

  const maxIndex = activeQuestions.length - 1;
  index = Number.isInteger(savedState?.index)
    ? Math.max(0, Math.min(savedState.index, maxIndex))
    : 0;

  const validIds = new Set(activeQuestions.map((q) => q.id));
  const restoredKnown = Array.isArray(savedState?.knownIds)
    ? savedState.knownIds.filter((id) => validIds.has(id))
    : [];
  knownIds = new Set(restoredKnown);

  const restoredUnknown = Array.isArray(savedState?.unknownIds)
    ? savedState.unknownIds.filter((id) => validIds.has(id) && !knownIds.has(id))
    : [];
  unknownIds = new Set(restoredUnknown);

  const restoredMaybe = Array.isArray(savedState?.maybeIds)
    ? savedState.maybeIds.filter((id) => validIds.has(id) && !knownIds.has(id) && !unknownIds.has(id))
    : [];
  maybeIds = new Set(restoredMaybe);
}

function saveProgress() {
  if (activeCategory?.name) {
    categoryProgressByName[activeCategory.name] = {
      questionOrder: activeQuestions.map((q) => q.id),
      index,
      knownIds: [...knownIds],
      maybeIds: [...maybeIds],
      unknownIds: [...unknownIds],
    };
  }

  const snapshot = {
    selectedCategory: selectedCategoryName || null,
    activeCategory: activeCategory?.name ?? null,
    categoryProgress: categoryProgressByName,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage errors (private mode, full quota, disabled storage).
  }
}

function restoreProgress() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    saved = null;
  }

  if (!saved) {
    return false;
  }

  categoryProgressByName = typeof saved.categoryProgress === "object" && saved.categoryProgress !== null
    ? saved.categoryProgress
    : {};

  if (
    Object.keys(categoryProgressByName).length === 0
    && typeof saved.activeCategory === "string"
    && saved.activeCategory.length > 0
    && (
      Array.isArray(saved.questionOrder)
      || Number.isInteger(saved.index)
      || Array.isArray(saved.knownIds)
      || Array.isArray(saved.maybeIds)
      || Array.isArray(saved.unknownIds)
    )
  ) {
    categoryProgressByName[saved.activeCategory] = {
      questionOrder: Array.isArray(saved.questionOrder) ? saved.questionOrder : [],
      index: Number.isInteger(saved.index) ? saved.index : 0,
      knownIds: Array.isArray(saved.knownIds) ? saved.knownIds : [],
      maybeIds: Array.isArray(saved.maybeIds) ? saved.maybeIds : [],
      unknownIds: Array.isArray(saved.unknownIds) ? saved.unknownIds : [],
    };
  }

  if (saved.selectedCategory && data.some((cat) => cat.name === saved.selectedCategory)) {
    selectedCategoryName = saved.selectedCategory;
  }

  renderCategoryPicker();

  const preferredCategory = saved.activeCategory && data.some((cat) => cat.name === saved.activeCategory)
    ? saved.activeCategory
    : selectedCategoryName;

  if (preferredCategory) {
    loadCategoryByName(preferredCategory, false);
    if (activeCategory) {
      statusText.textContent = `Kategorija: ${activeCategory.name} (napredak ucitan)`;
    }
  }

  return true;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setButtonsEnabled(enabled) {
  [flipBtn, prevBtn, nextBtn, knowBtn, maybeBtn, repeatBtn].forEach((btn) => {
    btn.disabled = !enabled;
  });
  shuffleBtn.disabled = !enabled;
}

function getAnswerText(questionObj) {
  const longAnswer = stripParentheses(questionObj.long_answer || questionObj.answer || "");

  if (longAnswer) {
    return longAnswer;
  }

  return "Odgovor nije unet u bazi za ovo pitanje. Vezbaj usmeno: definisi pojam, navedi prednosti/mane i primer iz prakse.";
}

function updateStats() {
  const total = activeQuestions.length;
  totalCount.textContent = String(total);
  knownCount.textContent = String(knownIds.size);
  currentIndex.textContent = total > 0 ? `${index + 1}/${total}` : "0/0";
  const progress = total > 0 ? (knownIds.size / total) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function renderQuestionList() {
  if (!questionList) return;

  if (activeQuestions.length === 0) {
    questionList.innerHTML = "";
    return;
  }

  questionList.innerHTML = activeQuestions
    .map((q, listIndex) => {
      const isCurrent = listIndex === index ? " is-current" : "";
      let statusClass = "";
      let statusText = "-";

      if (knownIds.has(q.id)) {
        statusClass = " known";
        statusText = "✓";
      } else if (maybeIds.has(q.id)) {
        statusClass = " maybe";
        statusText = "?";
      } else if (unknownIds.has(q.id)) {
        statusClass = " unknown";
        statusText = "✕";
      }

      return `
        <li>
          <button class="question-item${isCurrent}" data-index="${listIndex}" type="button">
            <span class="question-item-text">${q.id}. ${q.question}</span>
            <span class="question-status${statusClass}">${statusText}</span>
          </button>
        </li>
      `;
    })
    .join("");
}

function renderCard() {
  if (activeQuestions.length === 0) {
    questionText.textContent = "Nema pitanja u ovoj kategoriji.";
    answerText.textContent = "Izaberi drugu kategoriju.";
    flashcard.classList.remove("is-flipped");
    setButtonsEnabled(false);
    updateStats();
    renderQuestionList();
    return;
  }

  const q = activeQuestions[index];
  questionText.textContent = `${q.id}. ${q.question}`;
  answerText.textContent = getAnswerText(q);
  flashcard.classList.remove("is-flipped");
  statusText.textContent = `Kategorija: ${activeCategory.name}`;
  updateStats();
  renderQuestionList();
}

function playCorrectStampSlam() {
  const motion = cardMotion;
  if (!motion || !correctStamp) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      correctStamp.removeEventListener("animationend", onAnimationEnd);
      clearTimeout(fallbackTimer);
      resolve();
    };

    const onAnimationEnd = (event) => {
      if (event.target !== correctStamp || event.animationName !== "correct-stamp-hit") {
        return;
      }
      finish();
    };

    const fallbackTimer = window.setTimeout(finish, CORRECT_STAMP_DURATION_MS + 140);

    motion.classList.remove("show-correct-stamp");
    void motion.offsetWidth;
    correctStamp.addEventListener("animationend", onAnimationEnd);
    motion.classList.add("show-correct-stamp");
  });
}

function playWrongStampSlam() {
  const motion = cardMotion;
  if (!motion || !wrongStamp) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      wrongStamp.removeEventListener("animationend", onAnimationEnd);
      clearTimeout(fallbackTimer);
      resolve();
    };

    const onAnimationEnd = (event) => {
      if (event.target !== wrongStamp || event.animationName !== "wrong-stamp-hit") {
        return;
      }
      finish();
    };

    const fallbackTimer = window.setTimeout(finish, CORRECT_STAMP_DURATION_MS + 140);

    motion.classList.remove("show-wrong-stamp");
    void motion.offsetWidth;
    wrongStamp.addEventListener("animationend", onAnimationEnd);
    motion.classList.add("show-wrong-stamp");
  });
}

function animateCardTransition(direction, onSwitch, options = {}) {
  const motion = cardMotion;
  const showCorrectStamp = options.showCorrectStamp === true;
  const showWrongStamp = options.showWrongStamp === true;
  const prefersReducedMotion = window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!motion || prefersReducedMotion || typeof motion.animate !== "function") {
    onSwitch();
    return;
  }

  if (isCardAnimating) {
    return;
  }

  isCardAnimating = true;
  const sign = direction >= 0 ? 1 : -1;
  const outDistance = `${-16 * sign}px`;
  const inDistance = `${18 * sign}px`;

  const startOutgoingTransition = () => {
    const outgoing = motion.animate(
      [
        { transform: "translateX(0) scale(1)", opacity: 1 },
        { transform: `translateX(${outDistance}) scale(0.988)`, opacity: 0 },
      ],
      {
        duration: 145,
        easing: "cubic-bezier(0.35, 0.01, 0.65, 0.99)",
        fill: "forwards",
      }
    );

    outgoing.onfinish = () => {
      onSwitch();
      motion.classList.remove("show-correct-stamp");
      motion.classList.remove("show-wrong-stamp");

      const incoming = motion.animate(
        [
          { transform: `translateX(${inDistance}) scale(0.988)`, opacity: 0 },
          { transform: "translateX(0) scale(1)", opacity: 1 },
        ],
        {
          duration: 180,
          easing: "cubic-bezier(0.22, 0.88, 0.2, 1)",
          fill: "forwards",
        }
      );

      incoming.onfinish = () => {
        motion.style.transform = "";
        motion.style.opacity = "";
        isCardAnimating = false;
      };

      incoming.oncancel = () => {
        motion.classList.remove("show-correct-stamp");
        motion.classList.remove("show-wrong-stamp");
        isCardAnimating = false;
      };
    };

    outgoing.oncancel = () => {
      motion.classList.remove("show-correct-stamp");
      motion.classList.remove("show-wrong-stamp");
      isCardAnimating = false;
    };
  };

  if (showCorrectStamp) {
    playCorrectStampSlam().then(startOutgoingTransition);
    return;
  }

  if (showWrongStamp) {
    playWrongStampSlam().then(startOutgoingTransition);
    return;
  }

  startOutgoingTransition();
}

function goToIndex(nextIndex, direction = 1, options = {}) {
  if (activeQuestions.length === 0) return;
  if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= activeQuestions.length) return;
  if (nextIndex === index) return;

  animateCardTransition(direction, () => {
    index = nextIndex;
    renderCard();
    saveProgress();
  }, options);
}

function loadCategoryByName(categoryName, resetProgress = true) {
  selectedCategoryName = categoryName;
  activeCategory = data.find((cat) => cat.name === categoryName) || null;
  renderCategoryPicker();

  if (!activeCategory) {
    activeQuestions = [];
    index = 0;
    knownIds = new Set();
    maybeIds = new Set();
    unknownIds = new Set();
    renderCard();
    saveProgress();
    return;
  }

  if (resetProgress) {
    initializeCategoryState(activeCategory);
    categoryProgressByName[activeCategory.name] = {
      questionOrder: activeQuestions.map((q) => q.id),
      index,
      knownIds: [...knownIds],
      maybeIds: [...maybeIds],
      unknownIds: [...unknownIds],
    };
  } else {
    const savedState = categoryProgressByName[activeCategory.name];
    if (savedState) {
      applyCategoryState(activeCategory, savedState);
    } else {
      initializeCategoryState(activeCategory);
    }
  }

  setButtonsEnabled(true);
  renderCard();
  saveProgress();
}

function move(delta, options = {}) {
  if (activeQuestions.length === 0) return;
  if (isCardAnimating) return;

  const nextIndex = (index + delta + activeQuestions.length) % activeQuestions.length;
  const direction = delta >= 0 ? 1 : -1;
  goToIndex(nextIndex, direction, options);
}

function moveCategory(delta) {
  if (!Array.isArray(data) || data.length === 0) return;

  const currentCategoryIndex = data.findIndex((cat) => cat.name === selectedCategoryName);
  const baseIndex = currentCategoryIndex >= 0 ? currentCategoryIndex : 0;
  const nextCategoryIndex = (baseIndex + delta + data.length) % data.length;
  const nextCategoryName = data[nextCategoryIndex]?.name;

  if (!nextCategoryName) return;
  loadCategoryByName(nextCategoryName, false);
  statusText.textContent = `Kategorija: ${nextCategoryName} (promenjeno tastaturom)`;
}

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName;
  return target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
}

function handleKeyboardShortcuts(event) {
  const isStartScreenVisible = Boolean(startScreen && !startScreen.classList.contains("is-hidden"));
  if (isStartScreenVisible) {
    if (event.key === "Enter" && !enterQuizBtn?.disabled && !isTypingTarget(event.target)) {
      event.preventDefault();
      enterSelectedQuiz();
    }
    return;
  }

  if (isTypingTarget(event.target)) return;

  if (event.key === "Escape") {
    event.preventDefault();
    goBackToMenu();
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    if (activeQuestions.length === 0 || isCardAnimating) return;
    playCardChangeSound();
    move(1);
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    if (activeQuestions.length === 0 || isCardAnimating) return;
    playCardChangeSound();
    move(-1);
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveCategory(-1);
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveCategory(1);
    return;
  }

  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    toggleFlip();
    return;
  }

  const lowerKey = event.key.toLowerCase();
  if (lowerKey === "b") {
    event.preventDefault();
    markKnown(true);
    return;
  }

  if (lowerKey === "n") {
    event.preventDefault();
    markMaybe();
    return;
  }

  if (lowerKey === "m") {
    event.preventDefault();
    markKnown(false);
  }
}

function toggleFlip() {
  if (activeQuestions.length === 0) return;

  const isShowingAnswer = flashcard.classList.contains("is-flipped");
  if (!isShowingAnswer) {
    playCardChangeSound();
  }

  flashcard.classList.toggle("is-flipped");
}

function markKnown(isKnown) {
  if (activeQuestions.length === 0) return;
  const id = activeQuestions[index].id;

  if (isKnown) {
    playKnowSound();
    knownIds.add(id);
    maybeIds.delete(id);
    unknownIds.delete(id);
  } else {
    playErrorSound();
    knownIds.delete(id);
    maybeIds.delete(id);
    unknownIds.add(id);
  }

  updateStats();
  renderQuestionList();
  saveProgress();
  move(1, isKnown ? { showCorrectStamp: true } : { showWrongStamp: true });
}

function markMaybe() {
  if (activeQuestions.length === 0) return;
  const id = activeQuestions[index].id;

  knownIds.delete(id);
  maybeIds.add(id);
  unknownIds.delete(id);

  updateStats();
  renderQuestionList();
  saveProgress();
  playCardChangeSound();
  move(1);
}

function initCategoryPicker() {
  if (!Array.isArray(data) || data.length === 0) {
    renderCategoryPicker();
    statusText.textContent = "Podaci nisu dostupni. Proveri data.js.";
    return;
  }

  if (!selectedCategoryName || !data.some((cat) => cat.name === selectedCategoryName)) {
    selectedCategoryName = data[0].name;
  }

  renderCategoryPicker();
  statusText.textContent = "Podaci ucitani. Klikni kategoriju za vezbanje.";
}

quizPicker?.addEventListener("click", (event) => {
  const target = event.target.closest(".quiz-card");
  if (!target) return;

  const quizId = target.dataset.quizId;
  if (!quizId) return;

  selectQuiz(quizId);
});

enterQuizBtn?.addEventListener("click", () => {
  enterSelectedQuiz();
});

backToMenuBtn?.addEventListener("click", () => {
  goBackToMenu();
});

categoryPicker?.addEventListener("click", (event) => {
  const target = event.target.closest(".category-chip");
  if (!target) return;

  const categoryName = target.dataset.category;
  if (!categoryName) return;

  loadCategoryByName(categoryName, false);
});

shuffleBtn.addEventListener("click", () => {
  if (activeQuestions.length === 0) return;
  activeQuestions = shuffle(activeQuestions);
  index = 0;
  renderCard();
  statusText.textContent = `Kategorija: ${activeCategory.name} (redosled promesan)`;
  saveProgress();
});

prevBtn.addEventListener("click", () => {
  if (activeQuestions.length === 0 || isCardAnimating) return;
  playCardChangeSound();
  move(-1);
});

nextBtn.addEventListener("click", () => {
  if (activeQuestions.length === 0 || isCardAnimating) return;
  playCardChangeSound();
  move(1);
});
flipBtn.addEventListener("click", toggleFlip);
knowBtn.addEventListener("click", () => markKnown(true));
maybeBtn.addEventListener("click", markMaybe);
repeatBtn.addEventListener("click", () => markKnown(false));
questionList?.addEventListener("click", (event) => {
  const target = event.target.closest(".question-item");
  if (!target) return;

  const nextIndex = Number(target.dataset.index);
  if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= activeQuestions.length) {
    return;
  }

  const direction = nextIndex > index ? 1 : -1;
  goToIndex(nextIndex, direction);
});

document.addEventListener("keydown", handleKeyboardShortcuts);

renderQuizPicker();

if (quizDefinitions.length > 0) {
  selectQuiz(selectedQuizId || quizDefinitions[0].id);
} else if (statusText) {
  statusText.textContent = "Nema dostupnih kvizova.";
}
