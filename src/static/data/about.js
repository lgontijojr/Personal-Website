const getCurrentAge = () => {
  const newDate = new Date();
  const birthdayYear = 1995;
  const currentTime = newDate.getTime();
  const currentYear = newDate.getFullYear();
  const currentYearsBirthday = new Date(`June 19, ${currentYear} 00:00:00`);

  const currentAge =
    currentTime < currentYearsBirthday
      ? currentYear - birthdayYear + 1
      : currentYear - birthdayYear;

  return currentAge;
};

export const aboutText = [
  {
    section_title: "My Life Story",
    items: [
      {
        item_title: "",
        item_description: [
          "I was born and raised in Goiânia, Brazil, and in 2012, I immigrated to the United States with little more than hope and determination. I barely spoke English, but I threw myself into learning, consuming American media and practicing with anyone who would talk to me. My first job in the U.S. was as a janitor at Buffalo Wild Wings. I used that role as an opportunity—not just to work but to grow. Step by step, I improved my English, earning a promotion to server and eventually to manager.",
          "At Apple, as a Specialist, I learned Spanish to better connect with a diverse customer base. My passion for learning and technology led me to the Year Up program in 2017, where I earned an internship at Slack. There, I grew from a Quality Engineering Intern to Senior Software Engineer, developing and maintaining robust, user-focused solutions.",
          "I later joined Airtable, where I built automation systems and led quality initiatives, and Tango Technologies, where I focused on testing strategies, automation, and tool development to improve software quality. These experiences deepened my expertise in delivering efficient, reliable, and impactful products.",
          "Today, as a Senior Test Engineer at Netflix, I channel my technical skills and passion for innovation to help create exceptional product experiences.",
        ],
        item_list: [],
      },
    ],
  },
  {
    section_title: "Facts About Me",
    items: [
      {
        item_title: "",
        item_description: [],
        item_list: [
          "🇧🇷 I Speak Portuguese",
          "🌎 I Have visited 10 countries",
          `♊️ I'm ${getCurrentAge()}, and a Gemini`,
          "🌁 Currently Living in the Bay Area",
        ],
      },
    ],
  },
];
