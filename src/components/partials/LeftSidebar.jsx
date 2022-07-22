import React, { Component } from "react";

class LeftSidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <div className="widget">
            <h6 className="upper">Search Shop</h6>
            <form>
              <input
                value=""
                type="text"
                placeholder="Search.."
                className="form-control"
              />
            </form>
          </div>

          <div className="widget">
            <h6 className="upper">Categories</h6>
            <ul className="nav">
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h6 className="upper">Popular Tags</h6>
            <div className="tags clearfix">
              <a href="">TAg</a>
            </div>
          </div>

          <div className="widget">
            <h6 className="upper">Trending Products</h6>
            <ul className="nav product-list">
              <li>
                <div className="product-thumbnail">
                  <img src="/src/_assets/images/shop/6.jpg" alt="" />
                </div>
                <div className="product-summary">
                  <a href="#">Premium Suit Blazer</a>
                  <span>$199.99</span>
                </div>
              </li>
              <li>
                <div className="product-thumbnail">
                  <img src="/src/_assets/images/shop/6.jpg" alt="" />
                </div>
                <div className="product-summary">
                  <a href="#">Vintage Sweatshirt</a>
                  <span>$199.99</span>
                </div>
              </li>
              <li>
                <div className="product-thumbnail">
                  <img src="/src/_assets/images/shop/6.jpg" alt="" />
                </div>
                <div className="product-summary">
                  <a href="#">Reiss Vara Blazer</a>
                  <span>$199.99</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default LeftSidebar;
