import React from 'react';

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  console.log(product.media[0].image.src);
  return (
    <>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <img src={product.media[0].image.src} style={{ width: '250px' }}></img>
    </>
  );
};

export default ProductTemplate;
