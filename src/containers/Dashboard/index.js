import React, { Component } from "react";
import Product from "../../components/Product";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import style from "./style.module.css";
import SearchBox from "./SearchBox";
import { message } from "antd";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      states: [],
      searchField: "",
    };
  }
  render() {
    const { stats, searchField } = this.state;

    const { showModal, closeModal, visible, onAddToCart, items } = this.props;

    const cartItems = items.cart.map((item) => item.quantity);

    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <h1 className={style.logo}>
            <Link className={style.link} to="/">
              {" "}
              WAFFARLY{" "}
            </Link>
          </h1>
          <div
            className={style.wrapperCartIcon}
            onClick={this.props.onCartDetails}
          >
            <Icon type="shopping-cart" style={{ fontSize: "30px" }} />
            {cartItems.reduce((acc, cur) => acc + cur, 0)}
          </div>
        </header>

        <SearchBox
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <section className={style.containerBg}>
          <div className={style.containerProducts}>
            {this.props.products
              .filter((product) => {
                if (searchField == "") {
                  return product;
                } else if (
                  product.productName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => {
                return (
                  <Product
                    key={product.productId}
                    data={product}
                    name={product.productName}
                    photo={product.photo}
                    price={product.price}
                    showModal={showModal}
                    closeModal={closeModal}
                    visible={visible}
                    onAddToCart={onAddToCart}
                  />
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}
