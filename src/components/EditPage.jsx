// 기록 수정 기능 WritePage.jsx 재활용

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function WithEditProps(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return <EditPage {...props} id={id} navigate={navigate} />;
}

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
    const item = records[parseInt(this.props.id, 10)];

    this.state = {
      title: item?.title || "",
      content: item?.content || "",
      imagePreview: item?.image || null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { id } = this.props;
    const { title, content, imagePreview } = this.state;
    const records = JSON.parse(localStorage.getItem("myRecords") || "[]");

    const updated = {
      title,
      content,
      image: imagePreview,
      date: new Date().toLocaleDateString(),
    };

    records[parseInt(id, 10)] = updated;
    localStorage.setItem("myRecords", JSON.stringify(records));

    alert("기록이 수정되었습니다!");
    this.props.navigate(`/write/${id}`);
  }

  render() {
    const { title, content, imagePreview } = this.state;

    return (
      <div style={style.container}>
        <h2 style={style.heading}>기록 수정</h2>
        <form onSubmit={this.handleSubmit} style={style.form}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            style={style.input}
            required
          />
          <textarea
            name="content"
            value={content}
            onChange={this.handleChange}
            style={style.textarea}
            required
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={this.handleImageChange}
          />
          {imagePreview && <img src={imagePreview} style={style.preview} alt="preview" />}
          <button type="submit" style={style.button}>수정 완료</button>
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
  preview: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default WithEditProps;
