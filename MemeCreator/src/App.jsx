import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import MemeGenerator from './Components/MemeGenerator'

function App() {
  
  function addMeme() {
    console.log("Top", addMemeTop);
    console.log("Bottom", addMemeBottom);
  }

  return (
    <>
      <Header/>
      <h2>Create your Meme</h2>
      <MemeGenerator onAdd = {addMeme}/>
      <Footer/>
    </>
  )
}

export default App
