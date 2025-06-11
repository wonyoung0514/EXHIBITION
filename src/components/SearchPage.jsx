import React, { useEffect, useState } from "react";
import ExhibitionPoster from "./ExhibitionPoster";
import exhibitionData from "../data/exhibitions";

export default function SearchPage({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q === "") {
      setResults([]);
      return;
    }
    const filtered = exhibitionData.filter((item) => {
      // 제목, 장소, 키워드 중 하나라도 포함하는지 검사
      return (
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });
    setResults(filtered);
  }, [query]);

  return (
    <div style={style.container}>
      <h2 style={style.title}>
        {query ? `"${query}" 검색결과` : "검색어를 입력해주세요"}
      </h2>
      <div style={style.grid}>
        {results.length > 0 ? (
          results.map((item) => (
            <ExhibitionPoster key={item.id} exhibition={item} />
          ))
        ) : (
          <p style={style.empty}>
            {query ? "검색 결과가 없습니다." : "검색어를 입력하고 Enter를 눌러주세요."}
          </p>
        )}
      </div>
    </div>
  );
}


const style = {
  container: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 4rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 한 행에 4개!
    gap: "1.5rem",
    minHeight: "320px",
    alignItems: "flex-start",
  },
  empty: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#888",
    padding: "2rem 0",
  },
};