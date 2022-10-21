import React from 'react';


export default function Card(props)
{
    return <div>
        <div className="cd">
            <img className="cd-image" src={props.product.image} alt="product"/>
            <div className="cd-info-container">
                <div className="cd-info d-flex justify-content-between px-2">
                    <h6>{props.children}</h6>
                    <h6>{props.product.price}</h6>
                </div>
            </div>
        </div>
    </div>
}