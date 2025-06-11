import React from "react";
import {useParams} from "react-router-dom";
import exhibitions from "../data/exhibitions";
import ExhibitionPoster from "./ExhibitionPoster";
import HeartButton from "./HeartButton";

function ExhibitionDetail() {
    const {id} = useParams(); // /id 값 받아오기
    const exhibition = exhibitions.find((item) => item.id === id);

    //관련 전시 필터링
    const related = exhibitions.filter(
        (item) => item.id !== exhibition.id && item.keywords.some((k) => exhibition.keywords.includes(k))
    );

    return (
        <div style={style.container}>
            <div style={style.mainSection}>
                <div style={style.imageWrapper}>
                    <img src={exhibition.image} alt={exhibition.title} style={style.image}/>
                    <HeartButton id={exhibition.id}/>
                </div>

                <div style={style.info}>
                    <div style={style.tags}>
                        {
                            exhibition
                                .keywords
                                .map((tag, i) => (<span key={i} style={style.tag}>{tag}</span>))
                        }
                    </div>
                    <h2>{exhibition.title}</h2>
                    <p>
                        <strong>일정:
                        </strong>
                        {exhibition.Period}</p>
                    <p>
                        <strong>장소:
                        </strong>
                        {exhibition.location}</p>

                    <div style={style.mapBox}>
                        <iframe
                            title="지도"
                            src={exhibition.mapurl}
                            width="100%"
                            height="300"
                            style={{
                                border: 0,
                                borderRadius: "10px"
                            }}
                            allowFullScreen=""
                            loading="lazy"></iframe>
                    </div>
                    <p style={style.desc}>{exhibition.description}</p>
                </div>
            </div>

            <div style={style.detailposter}>
                <img
                    src={exhibition.detailposter}
                    alt="상세 이미지"
                    style={{
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "10px"
                    }}/>
            </div>

            <div style={style.relatedSection}>
                <h3>관련 전시</h3>
                <div style={style.grid}>
                    {
                        related
                            .slice(0, 4)
                            .map((item) => (<ExhibitionPoster key={item.id} exhibition={item}/>))
                    }
                </div>
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
    mainSection: {
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginBottom: "2rem"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    info: {
        flex: 1,
        minWidth: "280px"
    },
    mapBox: {
        marginTop: "1.5rem",
        width: "100%"
    },
    tags: {
        marginBottom: "1rem",
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap"
    },
    tag: {
        backgroundColor: "#ddd",
        borderRadius: "20px",
        padding: "0.3rem 1rem",
        fontSize: "0.85rem"
    },
    desc: {
        marginTop: "1rem",
        lineHeight: "1.6"
    },
    detailposter: {
        marginTop: "1.5rem",
        width: "100%"
    },
    relatedSection: {
        marginTop: "2rem"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem"
    },
    imageWrapper: {
        position: "relative", // 하트 위치 기준
        width: "360px",
        height: "530px"
    }
};

export default ExhibitionDetail;
