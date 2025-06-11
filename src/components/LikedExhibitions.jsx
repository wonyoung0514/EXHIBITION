// 내가 찜한 전시회만 모아보는 창 React 8장 이벤트핸들링 참고

import React from "react";
import exhibitions from "../data/exhibitions";
import ExhibitionPoster from "./ExhibitionPoster";

class LikedExhibitions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedExhibitions: [], // 찜한 전시 목록 상태
        };
    }

    // 컴포넌트가 마운트되었을 때 localStorage에서 좋아요 ID를 불러와 전시 필터링
componentDidMount() {
  const likedIds = JSON.parse(localStorage.getItem("likedIds") || "[]");
  const filtered = exhibitions.filter((ex) =>
    likedIds.includes(String(ex.id)) // String일 때만
  );
  this.setState({ likedExhibitions: filtered });
}

    render() {
        const {likedExhibitions} = this.state;

        return (
            <div style={style.container}>
                <h2 style={style.heading}>내가 찜한 전시</h2>
                {
                    likedExhibitions.length === 0
                        ? (<p style={style.empty}>아직 찜한 전시가 없습니다.</p>)
                        : ( 
                            <div style={style.grid}>
                                {
                                    likedExhibitions.map(
                                        (ex) => (<ExhibitionPoster key={ex.id} exhibition={ex}/>)
                                    )
                                }
                            </div>
                        )
                }
            </div>
        );
    }
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

export default LikedExhibitions;
