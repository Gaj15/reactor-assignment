import React from 'react';

const ColorBox = ({ colors }) => {
    return colors.map(color =>{
        const style = {background: color, borderRadius: "50%"};
        return <div className="color-box" style={style} key={color}></div>
    });
}

export default ({ product, availability }) => {
    return <tr>
                <td >{product.id}</td>
                <td>{product.name}</td>
                <td>€{product.price}</td>
                <td >{product.manufacturer}</td>
                <td><ColorBox colors={product.color}/></td>
                <td >{product.type}</td>
                <td>{availability ? availability : 'Not known'}</td>
              </tr>
}

