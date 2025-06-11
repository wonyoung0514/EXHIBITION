import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchHeader({ query, setQuery }) {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();      // 폼 제출 막고
      navigate("/search");     // /search 경로로 이동
    }
  };

  return (
    <header style={style.header}>
      <h1 style={style.logo}>
        <Link to="/" style={style.logoLink}>
          EXHIBITION-ARCHIVE
        </Link>
      </h1>
      <input
        type="text"
        placeholder="전시 제목·장소·키워드로 검색"
        value={query}                       // props 로 내려받은 query
        onChange={(e) => setQuery(e.target.value)} // props 로 내려받은 setQuery
        onKeyDown={handleKeyDown}           // Enter 감지
        style={style.input}
      />
    </header>
  );
}

const style = {
  header: {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem 4rem",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  },
  logo: { margin: 0, fontSize: "1.75rem", fontWeight: "bold" },
  logoLink: { textDecoration: "none", color: "#333" },
  input: {
    flex: 1,
    maxWidth: 500,
    padding: "0.75rem 1rem",
    border: "1px solid #ccc",
    borderRadius: 8,
    fontSize: "1rem",
  },
};