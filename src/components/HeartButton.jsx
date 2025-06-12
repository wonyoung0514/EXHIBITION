// 하트 토글 버튼  React 8 이벤트 핸들링 참고
import React from "react";

class HeartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };

        this.toggleLike = this
            .toggleLike
            .bind(this); // 이벤트 핸들러 바인딩
    }

    componentDidMount() {
        const likedIds = JSON.parse(localStorage.getItem("likedIds") || "[]");
        if (likedIds.includes(this.props.id)) {
            this.setState({liked: true});
        }
    }

    toggleLike() {
        const {id} = this.props;
        const likedIds = JSON.parse(localStorage.getItem("likedIds") || "[]");
        const stringId = String(id);

        let updated;
        if (this.state.liked) {
            updated = likedIds.filter((item) => item !== stringId);
        } else {
            updated = [
                ...likedIds,
                stringId
            ];
        }

        localStorage.setItem("likedIds", JSON.stringify(updated));
        this.setState((prev) => ({
            liked: !prev.liked
        }));
    }

    render() {
        const {liked} = this.state;

        return (
            <button onClick={this.toggleLike} style={style.button}>
                <img
                    src={liked
                        ? process.env.PUBLIC_URL + "/assets/img/likedheart.png"
                        : process.env.PUBLIC_URL + "/assets/img/heart.png"
}
                    alt={liked
                        ? "좋아요 취소"
                        : "좋아요"}
                    style={style.icon}/>
            </button>
        );
    }
}

const style = {
    button: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        position: "absolute",
        bottom: "10px",
        right: "10px"
    },
    icon: {
        width: "24px",
        height: "24px"
    }
};

export default HeartButton;