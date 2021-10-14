import React, { Component } from 'react';

class Froms extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <div className="row">
          <div className="col-6 col-sm-3">{this.props.stt}</div>
          <div className="col-6 col-sm-3">{this.props.ten}</div>
          <div className="col-6 col-sm-3">{this.props.tuoi}</div>
          <button type="button" onClick={this.props.nguoi1}  class="btn btn-primary">xoa</button>

          <button type="button"  onClick={this.props.dt} class="btn btn-primary">sua</button>
        </div>
      </div>
            </div>
        );
    }
}

export default Froms;