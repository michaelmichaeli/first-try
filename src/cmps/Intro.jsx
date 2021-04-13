import React from "react"
import patterndivide from "../assets/patterns/pattern-divide.svg"


export default function Intro() {


    return <section
        className="intro flex column container">
        <div className="intro1 flex">
            <img src="" />
            <div className="intro-text">
                <img src={patterndivide} width="71" height="7" className="devider" />

                <h2>Enjoyable place for all the family</h2>
                <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
            </div>
        </div>
        <div className="intro2 flex">
            <div className="intro-text">
                <img src={patterndivide} width="71" height="7" className="devider" />

                <h2>The most locally sourced food</h2>
                <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
            </div>
            <img src="" />
        </div>
    </section>
}