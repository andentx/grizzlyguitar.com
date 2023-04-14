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
    "1-99": false,
    "100-499": false,
    "500-999": false,
    "1000-2000": false,
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

  const categoryOptions = [
    { name: "Guitar Amp", label: "Guitar Amps", value: "amps" },
    { name: "Guitar Pedal", label: "Guitar Pedals", value: "guitarPedals" },
    { name: "Electric Guitar", label: "Electric Guitars", value: "electricGuitars" },
  ];

  const priceRangeOptions = [
    { name: "1-99", label: "$99", value: "1-99" },
    { name: "100-499", label: "$100-499", value: "100-499" },
    { name: "500-999", label: "$500-999", value: "500-999" },
    { name: "1000+", label: "$1000+", value: "1000+" },
  ];

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
            {categoryOptions.map((option) => (
              <label key={option.name}>
                <input type="checkbox" name={option.name} checked={categories[option.value]} onChange={handleCategoryChange} />
                {option.label}
              </label>
            ))}
          </div>
          <div>
            <h3>Price Range</h3>
            {priceRangeOptions.map((option) => (
              <label key={option.name}>
                <input type="checkbox" name={option.name} checked={priceRanges[option.value]} onChange={handlePriceRangeChange} />
                {option.label}
              </label>
            ))}
          </div>
          <button type="submit">Apply Filters</button>
        </form>
      </FilterSection>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
