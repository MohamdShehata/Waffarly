import React, { Component } from "react";
import { formatPrice } from "../../utils/formatters";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import style from "./style.module.css";
import ProductDetails from "./ProductDetails";
class Product extends Component {
  state = {
    visible: false,
  };
  showModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });
  render() {
    return (
      <div className={style.container}>
        <div className={style.wrapper} onClick={this.showModal}>
          <div className={style.containerBg}>
            <img src={this.props.photo} alt="product" className={style.image} />
            <div className={style.middle}>
              <div className={style.text}> Quick View </div>
            </div>
            <p className={style.name}>{this.props.name}</p>
            <p className={style.price}>{formatPrice(this.props.price)}</p>
          </div>
        </div>
        <ProductDetails
          onCloseModal={this.closeModal}
          visible={this.state.visible}
          product={this.props.data}
          onAddToCart={this.props.onAddToCart}
        />
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.any.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
