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

  const categoryOptions = [
    { name: "Guitar Amp", label: "Guitar Amps", value: "amps" },
    { name: "Guitar Pedal", label: "Guitar Pedals", value: "guitarPedals" },
    { name: "Electric Guitar", label: "Electric Guitars", value: "electricGuitars" },
  ];

  const priceRangeOptions = [
    { name: "1-25", label: "$1-25", value: "1-25" },
    { name: "26-50", label: "$26-50", value: "26-50" },
    { name: "51-100", label: "$51-100", value: "51-100" },
    { name: "101+", label: "$100+", value: "100+" },
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
