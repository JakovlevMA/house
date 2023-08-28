import React from 'react';

const Products = (props) => {
    return (
        <div className='items_box'>
            {props.items.map((item) => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="Product Imagess" className='img_product'/>
                    <h3 className='author'>{item.name}</h3>
                    <h1 className='name_picture'>{item.title}</h1>
                    <h2 className='materials'>{item.description}</h2>
                    <p className='price'>{item.price}</p>
                    <button className='btn_item'>В корзину</button>
                </div>
            ))}
        </div>
    );
};

export default Products;