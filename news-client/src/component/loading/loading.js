import React, { Component } from 'react'
import "./index.scss";

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <i className="fa fa-spinner fa-spin" /> Loading...
            </div>
        )
    }
}
export default Loading