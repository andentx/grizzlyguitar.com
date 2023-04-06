import React, { useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const ProductGridContainer = styled.header`
  background-color: var(--page-header-background-color);

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background-color: darkgoldenrod;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem;

  margin: 1rem;

  * {
    margin-bottom: 1rem;
  }

  img {
    width: 250px;
    height: 250px;
  }
`;

const ProductGrid = ({ sortedProducts }) => {
  return (
    <ProductGridContainer>
      {sortedProducts.map((product) => (
        <ProductCard key={product.shopifyId}>
          <Link to={`/shop/${product.handle}`}>
            <img src={product.media[0].image.src} />
            <h3>
              {product.title}
              {" - "}${product.priceRangeV2.minVariantPrice.amount}
            </h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </Link>
        </ProductCard>
      ))}
    </ProductGridContainer>
  );
};

export default ProductGrid;
