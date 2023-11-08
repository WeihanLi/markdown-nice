import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Modal, Button} from "antd";

@inject("dialog")
@observer
class AboutDialog extends Component {
  handleOk = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setAboutOpen(false);
  };

  render() {
    return (
      <Modal
        title="关于"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isAboutOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>,
        ]}
        bodyStyle={{
          paddingTop: "5px",
        }}
      >
        <h3 style={style.headerMargin}>
          Markdown Nice
          <a
            id="nice-about-dialog-star"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mdnice/markdown-nice"
            style={style.noBorder}
          >
            <img alt="" style={style.img} src="https://badgen.net/github/stars/mdnice/markdown-nice" />
          </a>
        </h3>

        <p style={style.lineHeight}>支持自定义样式的 Markdown 编辑器；</p>
        <p style={style.lineHeight}>支持微信公众号、知乎和稀土掘金；</p>
        <h3 style={style.headerMargin}>我们</h3>
        <p style={style.lineHeight}>
          如果你喜欢我们的工具，欢迎关注
          <a
            id="nice-about-dialog-github"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mdnice/markdown-nice"
          >
            &nbsp;GitHub&nbsp;
          </a>
          、
          <a
            id="nice-about-dialog-gitee"
            rel="noopener noreferrer"
            target="_blank"
            href="https://gitee.com/zhning12/markdown-nice"
          >
            &nbsp;Gitee&nbsp;
          </a>
        </p>
      </Modal>
    );
  }
}

const style = {
  leftImgWidth: {
    width: "40%",
    height: "100%",
  },
  rightImgWidth: {
    width: "60%",
    height: "100%",
  },
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black",
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0,
  },
  img: {
    width: "70px",
    marginLeft: "10px",
    display: "inline-block",
  },
  noBorder: {
    border: "none",
  },
};

export default AboutDialog;
