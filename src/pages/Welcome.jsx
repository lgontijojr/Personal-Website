import React, { useState, useEffect } from "react";
import Article from "../components/Article";

const welcomeStrings = ["Bem vindo", "Welcome", "Bienvenue", "Welkom"];
const waveEmoji = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];

const WelcomePage = () => {
  const [welcomeInDifferentLanguages, setDifferentLanguages] = useState(
    welcomeStrings[0]
  );
  const [waveEmojiInDifferentSkinTones, setEmojiDifferentSkinTone] = useState(
    waveEmoji[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDifferentLanguages(
        welcomeStrings[Math.floor(Math.random() * welcomeStrings.length)]
      );
      setEmojiDifferentSkinTone(
        waveEmoji[Math.floor(Math.random() * waveEmoji.length)]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      headerTitle={`${waveEmojiInDifferentSkinTones} ${welcomeInDifferentLanguages}`}
      content={content}
    ></Article>
  );
};

export default WelcomePage;
