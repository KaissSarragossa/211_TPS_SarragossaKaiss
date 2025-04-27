import '../assets/MemeGenerator.css'
import { useState, useEffect } from "react";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function handleClick() {
    if (allMemes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMemes.length);
      const randomMeme = allMemes[randomIndex];
      setImageUrl(randomMeme.url);
    }
  }

  return (
    <div className="meme-generator">
      <div className="input-section">
        <input
          type="text"
          placeholder="Texte du haut"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        />
        <input
          type="text"
          placeholder="Texte du bas"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        />
        <button onClick={handleClick}>Generer un meme</button>
      </div>

      {imageUrl && (
        <div className="meme">
          <div className="meme-image-container">
            <img src={imageUrl} alt="Meme généré" />
            <h2 className="meme-text top">{topText}</h2>
            <h2 className="meme-text bottom">{bottomText}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemeGenerator;
