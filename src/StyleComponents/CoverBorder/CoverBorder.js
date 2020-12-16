import React from "react";

//import css
import "./CoverBorder.css"


const CoverBorder = (props) => {
    return <section className="cover-border"> { props.children } </section>
}

export default CoverBorder;