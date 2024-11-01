import React, { useState } from "react";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSwipeable } from "react-swipeable";
import "./liste.css";

export default function Liste() {
  const [currentDay, setCurrentDay] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mealData = [
    {
      date: "27 Eylül 2024",
      breakfast: ["Peynir", "Zeytin", "Domates", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Mercimek Çorbası",
        "Tavuk Sote",
        "Pirinç Pilavı",
        "Yoğurt",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "28 Eylül 2024",
      breakfast: ["Yumurta", "Zeytin", "Salatalık", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Tarhana Çorbası",
        "Karnıyarık",
        "Bulgur Pilavı",
        "Ayran",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "29 Eylül 2024",
      breakfast: ["Peynir", "Zeytin", "Domates", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Şehriye / Yayla Çorbası",
        "Orman Kebabı / Taze Fasülye",
        "Arpa Şehriye Pilavı",
        "Yoğurt",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "30 Eylül 2024",
      breakfast: ["Kaşar Peyniri", "Zeytin", "Domates", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Domates Çorbası",
        "Köfte",
        "Pirinç Pilavı",
        "Yoğurt",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "1 Ekim 2024",
      breakfast: ["Peynir", "Zeytin", "Salatalık", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Yayla Çorbası",
        "Etli Nohut",
        "Bulgur Pilavı",
        "Ayran",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "2 Ekim 2024",
      breakfast: ["Peynir", "Zeytin", "Salatalık", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Yayla Çorbası",
        "Etli Nohut",
        "Bulgur Pilavı",
        "Ayran",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "3 Ekim 2024",
      breakfast: ["Peynir", "Zeytin", "Salatalık", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Yayla Çorbası",
        "Etli Nohut",
        "Bulgur Pilavı",
        "Ayran",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
    {
      date: "4 Ekim 2024",
      breakfast: ["Peynir", "Zeytin", "Salatalık", "Bal", "Ekmek", "Çay"],
      dinner: [
        "Yayla Çorbası",
        "Etli Nohut",
        "Bulgur Pilavı",
        "Ayran",
        "Çeyrek Ekmek",
        "500 ml Su",
      ],
    },
  ];
  const handlePrevDay = () => {
    if (currentDay > 0) {
      setCurrentDay((prevDay) => prevDay - 1);
    }
  };

  const handleNextDay = () => {
    if (currentDay < mealData.length - 1) {
      setCurrentDay((prevDay) => prevDay + 1);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { date, breakfast, dinner } = mealData[currentDay];

  const handlers = useSwipeable({
    onSwipedLeft: handleNextDay,
    onSwipedRight: handlePrevDay,
  });

  return (
    <div className={`list ${isDarkMode ? "dark" : "light"}`} {...handlers}>
      <div className="mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
      <div className="card">
        <div className="listH1">
          <h1>{date}</h1>
        </div>
        <div className="meal-section">
          <h2>
            <FreeBreakfastIcon />
            Kahvaltı
          </h2>
          <ul className="meal-list">
            {breakfast.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="meal-section">
          <h2>
            <RestaurantIcon />
            Akşam Yemeği
          </h2>
          <ul className="meal-list">
            {dinner.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navigation-buttons">
        <button
          onClick={handlePrevDay}
          className="nav-button left"
          disabled={currentDay === 0}
        >
          ◀
        </button>
        <button
          onClick={handleNextDay}
          className="nav-button right"
          disabled={currentDay === mealData.length - 1}
        >
          ▶
        </button>
      </div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/ahmetcaliskann/"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          Geliştirici: Ahmet ÇALIŞKAN
        </a>
      </p>
    </div>
  );
}
