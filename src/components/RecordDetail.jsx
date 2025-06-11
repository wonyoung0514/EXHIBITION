// 나의 전시 기록 상세 페이지 글 하나 하나의 상세 페이지를 보여주고 삭제, 수정 가능 localStorage에 기록 저장

import React from "react";
import {useParams, useNavigate} from "react-router-dom";

function WithParamsAndNav(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    return <RecordDetail {...props} id={id} navigate={navigate}/>;
}

class RecordDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: null
        };
        this.handleDelete = this
            .handleDelete
            .bind(this);
    }

    componentDidMount() {
        const {id} = this.props;
        const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
        const record = records[parseInt(id, 10)];
        this.setState({record});
    }

    // 삭제 할 때 alert창
    handleDelete() {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            const {id} = this.props;
            const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
            records.splice(parseInt(id, 10), 1);
            localStorage.setItem("myRecords", JSON.stringify(records));
            alert("기록이 삭제되었습니다.");
            this
                .props
                .navigate("/write");
        }
    }

    render() {
        const {record} = this.state;

        if (!record) 
            return <p>기록을 불러오는 중입니다...!</p>;
        
        return (
            <div style={style.container}>
                <h2 style={style.title}>{record.title}</h2>
                <p style={style.date}>{record.date}</p>
                {record.image && <img src={record.image} alt="썸네일" style={style.image}/>}
                <p style={style.content}>{record.content}</p>

                <div style={style.buttonGroup}>
                    <button style={style.deleteButton} onClick={this.handleDelete}>
                        삭제
                    </button>
                    <button style={style.editButton}
                        // 수정 버튼 EditPage 연결
                        onClick={() => this.props.navigate(`/write/edit/${this.props.id}`)}>
                        수정
                    </button>
                </div>
            </div>

        );
    }

}

const style = {
    container: {
        padding: "2rem",
        maxWidth: "700px",
        margin: "0 auto"
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "0.5rem"
    },
    date: {
        fontSize: "0.85rem",
        color: "#777",
        marginBottom: "1rem"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    content: {
        fontSize: "1rem",
        lineHeight: "1.6"
    },
    buttonGroup: {
        marginTop: "2rem",
        display: "flex",
        gap: "1rem"
    },
    deleteButton: {
        padding: "0.5rem 1rem",
        backgroundColor: "#ff5c5c",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    },
    editButton: {
        padding: "0.5rem 1rem",
        backgroundColor: "#555",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    }
};

export default WithParamsAndNav;