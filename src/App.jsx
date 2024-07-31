import React, { useState } from 'react';
import chair from './assets/images/chair.png';
import havit from './assets/images/havit.png';
import keyboard from './assets/images/keyboard.png';
import logo from './assets/images/logo-apple.png';
import phone from './assets/images/phone.png';
import monitor from './assets/images/monitor.png';
import data from './data.json';
import './style.css';
import './App.css';
import './script.js';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <div className="header">
                    <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <u>Shop Now</u></div>
                    <div>English <i className="fa fa-chevron-down"></i></div>
                </div>
                <div className="menu">
                    <div className="exclusive">Exclusive</div>
                    <div className="gr-menu">
                        <div className="home">Home</div>
                        <div className="contact">Contact</div>
                        <div className="about">About</div>
                        <div className="signup">Sign Up</div>
                    </div>
                    <div className="search-cart">
                        <div className="search">
                            <input type="text" placeholder="What are you looking for?" className="inpSearch" />
                            <i className="fa-solid fa-magnifying-glass" style={{ marginLeft: "10px" }}></i>
                        </div>
                        <i className="fa-regular fa-heart" style={{ marginLeft: "10px" }}></i>
                        <i className="fa fa-cart-shopping" style={{ marginLeft: "10px" }}></i>
                    </div>
                </div>
                <hr />
                <div className="bo-catory">
                    <div className="category">
                        <div className="woman">Woman’s Fashion <i className="fa-solid fa-chevron-right" style={{ marginLeft: "40px" }}></i></div>
                        <div className="men">Men’s Fashion <i className="fa-solid fa-chevron-right" style={{ marginLeft: "70px" }}></i></div>
                        <div className="electronic">Electronics</div>
                        <div className="lifeStyle">Home & Lifestyle</div>
                        <div className="medicine">Medicine</div>
                        <div className="sport">Sports & Outdoor</div>
                        <div className="babyToy">Baby’s & Toys</div>
                        <div className="groceries">Groceries & Pets</div>
                        <div className="health">Health & Beauty</div>
                    </div>
                    <div className="bo-right">
                        <img src={phone} alt="Phone" className="img-phone" />
                        <div className="title-ip">
                            <img src={logo} alt="Logo" className="img-logo" />
                            <div className="title">iPhone 14 Series</div>
                        </div>
                        <div className="voucher-ip">Up to 10% off Voucher</div>
                        <div className="shopNow-ip">Shop Now <i className="fa-solid fa-arrow-right"></i></div>
                        <div className="gr-slide">
                            <div className="button" data-slide="0"></div>
                            <div className="button" data-slide="1"></div>
                            <div className="button" data-slide="2"></div>
                            <div className="button" data-slide="3"></div>
                        </div>
                    </div>
                </div>
                <div className="content-pro">
                    <div className="button-today">
                        <button className="btn btn-danger" style={{ width: "20px", height: "40px" }}></button>
                        <div className="today text-danger">Today’s</div>
                    </div>
                    <div className="flash-time">
                        <div className="flashSale">Flash Sales</div>
                        <div className="gr-time">
                            <div className="f-day">
                                <div className="day">Days</div>
                                <div className="num-day">03</div>
                            </div>
                            <div style={{ color: "#E07575", width: "4px", height: "4px", marginLeft: "10px" }}>:</div>
                            <div className="f-hour">
                                <div className="hour">Hour</div>
                                <div className="num-hour">23</div>
                            </div>
                            <div style={{ color: "#E07575", width: "4px", height: "4px", marginLeft: "10px" }}>:</div>
                            <div className="f-minute">
                                <div className="minute">Minute</div>
                                <div className="num-minute">19</div>
                            </div>
                            <div style={{ color: "#E07575", width: "4px", height: "4px", marginLeft: "10px" }}>:</div>
                            <div className="f-second">
                                <div className="second">Seconds</div>
                                <div className="num-second">56</div>
                            </div>
                        </div>
                        <div className="gr-next-back">
                            <button className="btn-back"><i className="fa fa-arrow-left"></i> </button>
                            <button className="btn-next"><i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>

                    <div className="bo-product">
                        {data.products.map(item => (
                            <div className="conten-product" key={item.id}>
                                <div className="nd-product" >
                                    <button className="icon-heart"><i className="fa-regular fa-heart" style={{ backgroundColor: "white" }}></i></button>
                                    <button className="icon-eye"><i className="fa fa-eye" style={{ backgroundColor: "white" }}></i></button>
                                    <div className="btn-saleHavit btn btn-danger">-40%</div>
                                    <img src={havit} alt="Product" className="img-havit" />
                                </div>
                                <div className="product-name">{item.name}</div>
                                <div className="gr-product-price">
                                    <div className="product-price">{item.cost}</div>
                                    <div className="product-priceSale">$400</div>
                                </div>
                                <div className="gr-rate-view">
                                    <div className="rate">
                                        <i className="fa-solid fa-star" style={{color: "#FFAD33"}}></i>
                                        <i className="fa-solid fa-star"style={{color: "#FFAD33"}}></i>
                                        <i className="fa-solid fa-star"style={{color: "#FFAD33"}}></i>
                                        <i className="fa-solid fa-star" style={{color: "#FFAD33"}}></i>
                                        <i className="fa-solid fa-star"style={{color: "#FFAD33"}}></i>
                                    </div>
                                    <div className="view">(99)</div>
                                </div>
                            </div>
                        ))}
                        {/* Additional content here */}

                    </div>
                    <button className="btn-allProduct btn btn-danger">View All Products</button>
                </div>
            </div>
        </>
    );
}

export default App;
