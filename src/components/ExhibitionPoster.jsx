import React from "react";
import { Link } from "react-router-dom";
import HeartButton from "./HeartButton"; // 하트버튼 추가

function ExhibitionPoster({ exhibition }) {
  return (
    <div style={style.card}>
      <Link to={`/exhibition/${exhibition.id}`} style={style.link}>
        <img src={exhibition.image} alt={exhibition.title} style={style.image} />
        <h3>{exhibition.title}</h3>
        <p>{exhibition.location}</p>
      </Link>
      <HeartButton id={exhibition.id} /> {/* 하트 토글 버튼 */}
    </div>
  );
}

const style = {
  card: {
    position: "relative", // 하트 위치
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "0.5rem",
  },
};

export default ExhibitionPoster;