// 나의 전시 기록 카드 리스트 페이지 React 6 컴포넌트 생명주기, React 7 이벤트핸들링 참고

import React from "react";
import {Link} from "react-router-dom";

class MyRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [], // localStorage에서 불러온 기록 저장
        };
    }

    // 생명주기 활용 페이지가 처음 로딩될 때 localStorage에서 데이터 불러오기
    componentDidMount() {
        const savedRecords = JSON.parse(localStorage.getItem("myRecords") || "[]");
        this.setState({records: savedRecords});

    }

    render() {
        const {records} = this.state;

        return (
            <div style={style.container}>
                {/* 상단 제목 및 글쓰기 버튼 */}
                <div style={style.header}>
                    <h2 style={style.title}>나의 전시 기록</h2>
                    <Link to="/write/new" style={style.writeButton}>나의 기록 남기기</Link>
                </div>
                <div style={style.grid}></div>

                {/* 기록이 없을 경우 */}
                {
                    records.length === 0
                        ? (<p style={style.empty}>아직 작성한 전시 기록이 없습니다.</p>)
                        : (
                            <div style={style.grid}>
                                {
                                    records.map((item, index) => (
                                        <Link
                                            to={`/write/${index}`}
                                            key={index}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit"
                                            }}>
                                            <div style={style.card}>
                                                <img src={item.image} alt={item.title} style={style.image}/>
                                                <h3 style={style.cardTitle}>{item.title}</h3>
                                            </div>
                                        </Link>
                                    ))
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
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem"
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold"
    },
    writeButton: {
        textDecoration: "none",
        backgroundColor: "#fff",
        border: "2px solid #000",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        fontSize: "0.9rem",
        color: "#000",
        cursor: "pointer"
    },
    empty: {
        color: "#888",
        fontSize: "1rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 한 행에 4개 고정
        gap: "1.5rem",
        justifyItems: "center",
        marginTop: "1rem"
    },
    card: {
        width: "220px",
        minHeight: "300px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "6px",
        marginBottom: "0.5rem"
    },
    cardTitle: {
        fontSize: "1rem",
        fontWeight: "bold"
    }
};

export default MyRecords;
