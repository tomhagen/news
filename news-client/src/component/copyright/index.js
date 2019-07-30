import "./index.scss";

import React, { Component , Fragment} from 'react'

class Copyright extends Component {
    render() {
        return (
           <Fragment>
               <section className="copyright">
                    <div className="container">
                        <p>© Copyright 2019 by Tuyen Tran - Theme by ThemeForest</p>
                    </div>
               </section>
           </Fragment>
        )
    }
}
export default Copyright