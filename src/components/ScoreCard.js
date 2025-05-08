
function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(questions.map(q => q.multiple ? [] : null));
    const [showScore, setShowScore] = useState(false);
    const [showQuestionNumbers, setShowQuestionNumbers] = useState(false);
  
    const handleOptionChange = (index) => {
      const updated = [...answers];
      if (questions[currentQuestion].multiple) {
        const sel = updated[currentQuestion];
        updated[currentQuestion] = sel.includes(index)
          ? sel.filter(i => i !== index)
          : [...sel, index];
      } else {
        updated[currentQuestion] = index;
      }
      setAnswers(updated);
    };
  
    const calculateScore = () =>
      questions.reduce((score, q, idx) => {
        const sel = answers[idx];
        if (q.multiple) {
          const correct = q.answerOptions
            .map((opt, i) => opt.isCorrect ? i : null)
            .filter(i => i !== null)
            .sort()
            .toString();
          return score + ([...sel].sort().toString() === correct ? 1 : 0);
        } else {
          return score + (sel !== null && q.answerOptions[sel].isCorrect ? 1 : 0);
        }
      }, 0);
  
    // support both absolute URLs and local PUBLIC_URL paths
    const imgSrc = (path) =>
      path.startsWith('http://') || path.startsWith('https://')
        ? path
        : `${process.env.PUBLIC_URL}${path}`;
  
    const handleQuestionSelect = (n) => {
      setCurrentQuestion(n - 1);
      setShowQuestionNumbers(false);
    };
  
    // handle Enter key to move forward or submit
    useEffect(() => {
      const onKey = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (!showScore) {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(q => q + 1);
            } else {
              setShowScore(true);
            }
          }
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [currentQuestion, showScore]);
  
    return (
      <div className="app-container">
        {!showScore ? (
          <div className="quiz-container">
  
            {/* Top Navigation / Progress */}
            <div className="question-navigation">
              <div className="progress-indicator">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <button
                onClick={() => setShowQuestionNumbers(v => !v)}
                className="btn toggle-numbers-btn"
              >
                {showQuestionNumbers ? 'Hide Questions' : 'Show Questions'}
              </button>
              {showQuestionNumbers && (
                <div className="question-jump">
                  {questions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuestionSelect(idx + 1)}
                      className={[
                        "btn question-btn",
                        currentQuestion === idx && "active",
                        answers[idx] !== null && (questions[idx].multiple ? answers[idx].length > 0 : true) && "answered"
                      ].filter(Boolean).join(' ')}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
  
            {/* Question Card */}
            <div className="question-card">
              <div className="question-text">
                <h3>{questions[currentQuestion].week}</h3>
                {questions[currentQuestion].questionText.split('\n').map((l,i) => <p key={i}>{l}</p>)}
                {questions[currentQuestion].img && (
                  <div className="question-image">
                    <img
                      src={imgSrc(questions[currentQuestion].img)}
                      alt="Question Illustration"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
  
              <form className="options-form">
                {questions[currentQuestion].answerOptions.map((opt, idx) => (
                  <div key={idx} className="option-item">
                    <label className={`option-label ${questions[currentQuestion].multiple ? 'checkbox' : 'radio'}`}>
                      <input
                        type={questions[currentQuestion].multiple ? 'checkbox' : 'radio'}
                        name="answer"
                        value={idx}
                        checked={questions[currentQuestion].multiple
                          ? answers[currentQuestion].includes(idx)
                          : answers[currentQuestion] === idx}
                        onChange={() => handleOptionChange(idx)}
                      />
                      <span className="custom-control"></span>
                      <span className="option-text">{opt.answerText}</span>
                    </label>
                  </div>
                ))}
              </form>
            </div>
  
            {/* Prev / Next / Submit Buttons */}
            <div className="navigation-buttons">
              <button
                onClick={() => setCurrentQuestion(q => q - 1)}
                disabled={currentQuestion === 0}
                className="btn nav-btn prev-btn"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQuestion(q => q + 1)}
                disabled={currentQuestion === questions.length - 1}
                className="btn nav-btn next-btn"
              >
                Next
              </button>
              <button
                onClick={() => setShowScore(true)}
                className="btn submit-btn"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        ) : (
          /* Score view */
          <div className="score-container">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {calculateScore()} / {questions.length}</p>
            {questions.map((q, idx) => (
              <div key={idx} className="review-question">
                <div className="review-text">
                  <strong>{idx + 1}.</strong> {q.questionText}
                  {q.img && (
                    <div className="question-image">
                      <img
                        src={imgSrc(q.img)}
                        alt="Question Illustration"
                        loading="lazy"
                        style={{ maxWidth: '100%', maxHeight: '300px' }}
                      />
                    </div>
                  )}
                </div>
                <ul>
                  {q.answerOptions.map((opt, i) => {
                    const selected = q.multiple
                      ? answers[idx].includes(i)
                      : answers[idx] === i;
                    return (
                      <li
                        key={i}
                        style={{
                          color: opt.isCorrect
                            ? 'green'
                            : selected
                              ? 'red'
                              : 'black'
                        }}
                      >
                        {selected && !opt.isCorrect ? '✗ ' : ''}
                        {opt.answerText}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default App;