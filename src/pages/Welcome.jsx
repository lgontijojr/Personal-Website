import React, { useState, useEffect } from "react";
import Article from "../components/Article";

import { welcomeText, welcomeStrings, waveEmoji } from "../static/data/welcome";

const getRandomArrayItem = (array, currentState) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const next = array[randomIndex];

  return next === currentState ? getRandomArrayItem(array, currentState) : next;
};

const WelcomePage = () => {
  const [welcomeInDifferentLanguage, setDifferentLanguages] = useState(
    welcomeStrings[0]
  );

  const [waveEmojiInDifferentSkinTone, setEmojiDifferentSkinTone] = useState(
    waveEmoji[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDifferentLanguages(
        getRandomArrayItem(welcomeStrings, welcomeInDifferentLanguage)
      );
      setEmojiDifferentSkinTone(
        getRandomArrayItem(waveEmoji, waveEmojiInDifferentSkinTone)
      );
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <Article
      headerTitle={`${waveEmojiInDifferentSkinTone} ${welcomeInDifferentLanguage}`}
      content={welcomeText}
    ></Article>
  );
};

export default WelcomePage;
