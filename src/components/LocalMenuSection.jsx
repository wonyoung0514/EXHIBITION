// 내가 찜한 전시, 나의 전시 기록 남기기는 localStorage을 사용 해야 해서 따로 jsx 파일

import React from "react";
import { Link } from "react-router-dom";
import exhibitionData from "../data/exhibitions";
import ExhibitionPoster from "./ExhibitionPoster";


// 실제 페이지 컴포넌트
function LocalMenuSection() {
  // 찜한 전시 리스트
  const likedIds = JSON.parse(localStorage.getItem("likedIds") || "[]");
  const likedList = exhibitionData.filter((item) => likedIds.includes(String(item.id)));

  // 나의 기록 리스트 (localStorage에서 가져오기, 예시)
  const myRecords = JSON.parse(localStorage.getItem("myRecords") || "[]");

  return (
    <div style={style.container}>
      {/* 버튼 그룹: 좌측 정렬, 아이콘 포함 */}
      <div style={style.buttonGroup}>
        <Link to="/liked" style={style.btn}>
          <img src="/assets/img/heart.png" alt="찜한 전시" style={style.icon} />
          내가 찜한 전시
        </Link>
        <Link to="/write" style={style.btn}>
          <img src="/assets/img/pencil.png" alt="기록 남기기" style={style.icon} />
          나의 전시 기록 남기기
        </Link>
      </div>

      {/* 내가 찜한 전시 리스트 */}
      <div style={style.section}>
        <div style={style.title}>
          <img src="/assets/img/heart.png" alt="찜한 전시" style={style.icon} />
          내가 찜한 전시
        </div>
        <div style={style.grid}>
          {likedList.length === 0 ? (
            <p style={style.empty}>아직 찜한 전시가 없습니다.</p>
          ) : (
            likedList.map((item) => (
              <ExhibitionPoster key={item.id} exhibition={item} />
            ))
          )}
        </div>
      </div>

      {/* 나의 전시 기록 남기기 리스트 */}
      <div style={style.section}>
        <div style={style.title}>
          <img src="/assets/img/pencil.png" alt="기록 남기기" style={style.icon} />
          나의 전시 기록 남기기
        </div>
        <div style={style.grid}>
          {myRecords.length === 0 ? (
            <p style={style.empty}>아직 작성한 기록이 없습니다.</p>
          ) : (
            myRecords.map((record, index) => (
              <div key={index} style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fafafa",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "300px",
              }}>
                <img
                  src={record.image}
                  alt={record.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "0.5rem",
                  }}
                />
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", margin: 0, marginBottom: "0.5rem" }}>
                  {record.title}
                </h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}         

const style = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",          // 버튼(제목) 사이 간격
    marginBottom: "2rem",
     justifyContent: "flex-start", 
  },
  btn: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#222",
    padding: "0.8rem 1.2rem",
    background: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    cursor: "pointer",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  section: {
    marginBottom: "2.5rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
    justifyContent: "start",
  },
  empty: {
    fontSize: "1rem",
    color: "#888",
    padding: "2rem 0",
    textAlign: "center",
    gridColumn: "1 / -1",
  },
};

export default LocalMenuSection;