import './gameboard.css';

const GameBoard = () => {
    return (
        <section className="quiz__container">
          <div className="question__container">
            <p className="question__text" id="question__text"></p>
          </div>
          <div className="answers__container">
            <ul className="answers__list">
              <li className="answers__option" id="a">
                <button className="answer__select"></button>
                <p className="answer__text"></p>
              </li>
              <li className="answers__option" id="b">
                <button className="answer__select"></button>
                <p className="answer__text"></p>
              </li>
              <li className="answers__option" id="c">
                <button className="answer__select"></button>
                <p className="answer__text"></p>
              </li>
              <li className="answers__option" id="d">
                <button className="answer__select"></button>
                <p className="answer__text"></p>
              </li>
            </ul>
          </div>
        </section>
    )
}

export default GameBoard;



// + Question stacks will be fetched from db and saved in state
// + 
//  
// 
// 
// 
// 
// 
// 
// 
// 
// 
