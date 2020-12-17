import React from "react";

//import css
import "./CoverBorder.scss"


const CoverBorder = (props) => {
    return <section className="cover-border"> { props.children } </section>
}

export default CoverBorder;