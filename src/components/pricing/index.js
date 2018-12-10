import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../utils/MyButton";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Start"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, qui, eum, reprehenderit ",
      " corrupti deserunt alias distinctio minima voluptas dolorum perferendis nobis omnis labore consequuntur delectus!",
      " Vero officia quae assumenda dolore?"
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="princing_description">{this.state.desc[i]}</div>
            <div className="princing_buttons">
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
