import React, { useState } from "react";

import styled from "styled-components";

const ProductFilterContainer = styled.header`
  background-color: #333;

  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SortSection = styled.div`
  background-color: grey;
  display: flex;

  padding: 1rem;

  h2 {
    margin-right: 1rem;
  }
`;

const FilterSection = styled.div`
  background-color: grey;
  display: flex;

  padding: 1rem;

  h2 {
    margin-right: 1rem;
  }
`;

const ProductFilter = ({ sort, onSortChange, onFilterChange }) => {
  const [categories, setCategories] = useState({
    "Guitar Amp": false,
    "Guitar Pedal": false,
    "Electric Guitar": false,
  });

  const [priceRanges, setPriceRanges] = useState({
    "1-25": false,
    "26-50": false,
    "51-100": false,
    "101-200": false,
  });

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategories((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    setPriceRanges((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedCategories = Object.keys(categories).filter((key) => categories[key]);
    const selectedPriceRanges = Object.keys(priceRanges).filter((key) => priceRanges[key]);
    onFilterChange(selectedCategories, selectedPriceRanges);
  };

  return (
    <ProductFilterContainer>
      <SortSection>
        <h2>Sort products:</h2>
        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </select>
      </SortSection>
      <FilterSection>
        <h2>Filter products:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Categories</h3>
            <label>
              <input type="checkbox" name="Guitar Amp" checked={categories.amps} onChange={handleCategoryChange} />
              Guitar Amps
            </label>
            <label>
              <input type="checkbox" name="Guitar Pedal" checked={categories.guitarPedals} onChange={handleCategoryChange} />
              Guitar Pedals
            </label>
            <label>
              <input type="checkbox" name="Electric Guitar" checked={categories.electricGuitars} onChange={handleCategoryChange} />
              Electric Guitars
            </label>
          </div>
          <div>
            <h3>Price Range</h3>
            <label>
              <input type="checkbox" name="1-25" checked={priceRanges["1-25"]} onChange={handlePriceRangeChange} />
              $1-25
            </label>
            <label>
              <input type="checkbox" name="26-50" checked={priceRanges["26-50"]} onChange={handlePriceRangeChange} />
              $26-50
            </label>
            <label>
              <input type="checkbox" name="51-100" checked={priceRanges["51-100"]} onChange={handlePriceRangeChange} />
              $51-100
            </label>
            <label>
              <input type="checkbox" name="101+" checked={priceRanges["100+"]} onChange={handlePriceRangeChange} />
              $100+
            </label>
          </div>
          <button type="submit">Apply Filters</button>
        </form>
      </FilterSection>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
