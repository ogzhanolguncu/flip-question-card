import { decodeString } from '../utils/decodeString';

const Card = ({ card, options, correctAnswer, currentCard, setData, data }) => {
  const removeCard = () => {
    setTimeout(() => {
      setData(data.filter((card) => card.correct_answer !== correctAnswer));
    }, [1000]);
  };

  const checkAnswer = (e) => {
    if (
      Number(e?.target?.parentNode?.id) === currentCard &&
      e?.target?.textContent === correctAnswer
    ) {
      e.target.style.backgroundColor = 'green';
      removeCard();
    } else {
      e.target.style.backgroundColor = 'red';
    }
  };

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <p className="cardQuestion">{decodeString(card?.question)}</p>
          <div className="optionContainer" id={currentCard}>
            {options?.map((x, index) => {
              return (
                <button
                  onClick={checkAnswer}
                  className={`options`}
                  key={`${index}${x}`}
                  id={`${index}${x}`}
                >
                  {decodeString(x)}
                </button>
              );
            })}
          </div>
        </div>
        <div className="front">
          <i className="far fa-question-circle fa-6x"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
