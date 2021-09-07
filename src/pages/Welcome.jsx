import React, { useState, useEffect } from "react";
import Article from "../components/Article";

const welcomeStrings = [
  "Bem vindo",
  "Welcome",
  "Bienvenue",
  "Welkom",
  "üdvözöljük",
  "benvenuto",
  "välkommen",
  "ようこそ",
];
const waveEmoji = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];

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

  const content = [
    {
      subTitle: [
        {
          title: "Welcome to my personal website!",
        },
        {
          title:
            "Feedback? Thoughts? Comments? Please send me an email or create a GitHub issue here",
        },
      ],
    },
  ];

  return (
    <Article
      headerTitle={`${waveEmojiInDifferentSkinTone} ${welcomeInDifferentLanguage}`}
      content={content}
    ></Article>
  );
};

export default WelcomePage;
