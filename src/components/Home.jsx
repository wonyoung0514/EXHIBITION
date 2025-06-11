import React from "react";
import exhibitionData from "../data/exhibitions";
import ExhibitionPoster from "./ExhibitionPoster";
import {Link} from 'react-router-dom';

function Home() {
    const bestExhibition = exhibitionData[0]; // 첫 번째 전시를 '베스트'로 지정

    return (
        <div style={style.container}>

            {/* 홈 메인에 나오는 포스터 */}
            <section style={style.homeposter}></section>

            {/* 당신을 위한 전시 */}
            <section>
                <h2 style={style.sectionTitle}>당신을 위한 전시</h2>
                <div style={style.grid}>
                    {
                        exhibitionData
                            .slice(1, 5)
                            .map((item) => (<ExhibitionPoster key={item.id} exhibition={item}/>))
                    }
                </div>
            </section>

            {/* 오늘의 베스트 */}
            <section>
                <h2 style={style.sectionTitle}>오늘의 베스트</h2>
                <Link to={`/exhibition/${bestExhibition.id}`} style={style.link}>
                    <div style={style.bestBox}>
                        <img
                            src={bestExhibition.image}
                            alt={bestExhibition.title}
                            style={style.bestImage}/>
                        <div>
                            <h3>{bestExhibition.title}</h3>
                            <p>{bestExhibition.description}</p>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    );
}

const style = {
    container: {
        padding: "0 2rem 2rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto"
    },
    homeposter: {
        backgroundImage: "url('https://ddp.or.kr/var/filemanager/userfiles/250414_05_02.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",

        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw"
    },
    sectionTitle: {
        fontSize: "1.5rem",
        margin: "1.5rem 0"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
    },
    bestBox: {
        display: "flex",
        gap: "1.5rem",
        padding: "1rem",
        border: "2px solid #333",
        borderRadius: "10px",
        backgroundColor: "#fafafa"
    },
    bestImage: {
        width: "180px",
        height: "auto",
        borderRadius: "6px"
    },
    //link에 밑줄이랑 색상변경 바꾸기
    link: {
        textDecoration: "none",
        color: "inherit"
    }
};

export default Home;
