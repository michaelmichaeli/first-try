import React from "react"
import menuitem1 from "../assets/homepage/menu-items/menu-item1.jpg"
import menuitem2 from "../assets/homepage/menu-items/menu-item2.jpg"
import menuitem3 from "../assets/homepage/menu-items/menu-item3.jpg"
import patterndivide from "../assets/patterns/pattern-divide.svg"

export default function HighlightsPixelPerfect() {

    const items = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: menuitem1
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: menuitem2
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: menuitem3
        },

    ]

    return <section
        className="highlights flex flex-wrap container"
    >
        <div className="highlight-text">
            <img src={patterndivide} width="71" height="7" className="devider" />
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
        <div className="highlight-list">
            <ul className="clean-list">
                {items.map((item) => {
                    return (
                        <li className="flex">
                            <img src={item.imgUrl} />
                            <div className="item-text">
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </section>

}