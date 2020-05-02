import React, { Component } from "react";
export default class Store extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, name, img, detail } = this.props.shop;
    const { removeShop } = this.props;
    return (
      <div className="shop">
        <div className="img-container">
          <img src={img} />
          <span className="close-btn" onClick={() => removeShop(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="shop-info">
          <h3>{name}</h3>
          <h6>
            Detail{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h6>
                {this.state.showInfo && <p>{detail}</p>}
        </div>
      </div>
    );
  }
}
