import * as React from "react";

import "./styles.css";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: this.props.width }}>
        {this.props.children}
      </div>
    );
  }
}
