import React, { useState } from "react";
import { Link } from "react-router-dom";

const leftCategories = [
  "오늘의 전시",
  "미디어",
  "현대미술",
  "사진",
  "아트",
];
const rightCategories = [
  "내가 찜한 전시",
  "나의 전시 기록 남기기",
];

// container 스타일 사용
const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={{ background: "#fff" }}>
      <div style={container}>
        <ul style={{
          display: "flex", listStyle: "none", gap: "2.5rem", margin: 0, padding: 0
        }}>
          {leftCategories.map((cat, idx) => (
            <li key={cat}>
              <Link
                to={`/TodayExhibitions/${cat}`}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "1rem",
                  paddingBottom: "0.25rem",
                  borderBottom: "2px solid transparent",
                  transition: "border-bottom-color 0.2s",
                  borderBottomColor: hovered === `L${idx}` ? "#000" : "transparent",
                }}
                onMouseEnter={() => setHovered(`L${idx}`)}
                onMouseLeave={() => setHovered(null)}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
        <ul style={{
          display: "flex", listStyle: "none", gap: "2.5rem", margin: 0, padding: 0
        }}>
          {rightCategories.map((cat, idx) => (
            <li key={cat}>
              <Link
                to={cat === "내가 찜한 전시" ? "/liked" : "/write"}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "1rem",
                  paddingBottom: "0.25rem",
                  borderBottom: "2px solid transparent",
                  transition: "border-bottom-color 0.2s",
                  borderBottomColor: hovered === `R${idx}` ? "#000" : "transparent",
                }}
                onMouseEnter={() => setHovered(`R${idx}`)}
                onMouseLeave={() => setHovered(null)}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
