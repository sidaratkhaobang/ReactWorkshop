import React, { Component } from "react";
import Store from "../Store";
import { data } from "../../data.js";

export default class ShopList extends Component {
  state = {
    shops: data,
  };
  removeShop = (id) => {
    const { shops } = this.state;

    const sortshop = shops.filter((shop) => shop.id !== id);
    this.setState({
      shops: sortshop,
    });
  };
  render() {
    const { shops } = this.state;
    return (
      <div>
        <div className="ShopList">
          {shops.map((shop) => (
            <Store key={shop.id} shop={shop} removeShop={this.removeShop} />
          ))}
        </div>
      </div>
    );
  }
}
