import React from "react";
import { useParams } from "react-router-dom";
import exhibitions from "../data/exhibitions";
import ExhibitionPoster from "./ExhibitionPoster";

function TodayExhibitions() {
  const { name } = useParams();

  // 키워드 전시 필터링
  const filtered =
  name === "오늘의 전시"
    ? exhibitions.filter((ex) => ex.keywords.includes("오늘의 전시"))
    : exhibitions.filter((ex) => ex.keywords.includes(name));

  return (
    <div style={style.container}>
      <h2 style={style.title}>{`${name}`}</h2>
      <div style={style.grid}>
        {filtered.map((ex) => (
          <ExhibitionPoster key={ex.id} exhibition={ex} />
        ))}
      </div>
    </div>
  );
}

const style = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem"
  },
    grid: {
      display: "grid",
      // 반응형으로 수정 
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "1.5rem",
      marginBottom: "3rem"
    }
  };

export default TodayExhibitions;