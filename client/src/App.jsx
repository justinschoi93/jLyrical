import Header from './components/Header/Header';
import GameBoard from './components/GameBoard/GameBoard';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <main className="main__container">
        <GameBoard></GameBoard>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
