// 나의 기록 작성 폼 페이지
// React 6 컴포넌트 생명주기, React 7 이벤트핸들링 참고

import React from "react";
import { useNavigate } from "react-router-dom";

// 함수형 컴포넌트 안에 Hook 사용을 위해 HOC 처리
function WithNavigation(props) {
  const navigate = useNavigate();
  return <WritePage {...props} navigate={navigate} />;
}

class WritePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      imagePreview: null,
      imageFile: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 입력 필드 변경 핸들링
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // 이미지 업로드 핸들링
  handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ imagePreview: reader.result, imageFile: file });
      };
      reader.readAsDataURL(file);
    }
  }

  // 등록 버튼 클릭 시 저장
  handleSubmit(e) {
    e.preventDefault();

    const { title, content, imagePreview } = this.state;
    const record = {
      title,
      content,
      image: imagePreview || "", // 이미지 미첨부
      date: new Date().toLocaleDateString(),
    };

    const prev = JSON.parse(localStorage.getItem("myRecords") || "[]");
    const updated = [record, ...prev]; // 최신 기록이 위로
    localStorage.setItem("myRecords", JSON.stringify(updated));

    alert("기록이 저장되었습니다!");
    this.props.navigate("/write"); // 목록 페이지로 이동
  }

  render() {
    const { title, content, imagePreview } = this.state;

    return (
      <div style={style.container}>
        <h2 style={style.heading}>나의 기록 남기기</h2>
        <form onSubmit={this.handleSubmit} style={style.form}>
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={this.handleChange}
            style={style.input}
            required
          />
          <textarea
            name="content"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={this.handleChange}
            style={style.textarea}
            required
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={this.handleImageChange}
            style={style.file}
          />

          {imagePreview && (
            <img src={imagePreview} alt="미리보기" style={style.preview} />
          )}

          <button type="submit" style={style.button}>
            등록
          </button>
        </form>
      </div>
    );
  }
}

const style = {
  container: {
    padding: "2rem",
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    minHeight: "150px",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    resize: "vertical",
  },
  file: {
    marginTop: "1rem",
  },
  preview: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default WithNavigation;