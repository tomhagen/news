import "./index.scss";
import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EditorChoiceItem from "./editor-choice-item";
import Axios from "axios";

class EditorChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorChoiceList: []
    };
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/posts/category?type=energy&limit=10"
    })
      .then(res => {
        this.setState({ editorChoiceList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
      // console.log("editor didmount")
  }
  renderEditorChoiceList = () => {
    // console.log(this.state.editorChoiceList)
    return this.state.editorChoiceList.map((news, index) => {
      return <EditorChoiceItem key={index} news={news} />;
    });
  };
  render() {
    // console.log(this.state.editorChoiceList)
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 782,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <section className="editor-choice">
          <div className="container">
            <h3 className="editor-choice-title">EDITOR'S CHOICES</h3>

            <div className="editor-choice-item">
              <Slider {...settings}>{this.renderEditorChoiceList()}</Slider>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default EditorChoice;
