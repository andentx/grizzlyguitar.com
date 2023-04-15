import React, { useState } from "react";

import styled from "styled-components";

const ProductFilterContainer = styled.header`
  background-color: darkred;

  width: 700px;

  border: 3px solid antiquewhite;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.h2`
  background-color: red;

  text-align: center;

  padding: 1rem;

  margin-bottom: 1rem;
`;

const Section = styled.div`
  padding-top: 1rem;

  background-color: grey;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;

  border: 3px solid black;

  margin-bottom: 1rem;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SortSection = styled.div`
  background-color: pink;

  width: 90%;

  display: flex;

  border: 3px solid black;

  justify-content: space-between;

  padding: 1rem;

  margin-bottom: 1rem;
`;

const FilterSection = styled.div`
  background-color: lightblue;

  border: 3px solid black;

  width: 90%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 1rem;

  margin-bottom: 1rem;
`;

const FilterTitle = styled.h2`
  color: darkblue;
  margin-bottom: 0.5rem;
`;

const FilterListSection = styled.div`
  /* background-color: olivedrab; */

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
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
    { name: "1-99", label: "$1-99", value: "1-99" },
    { name: "100-499", label: "$100-499", value: "100-499" },
    { name: "500-999", label: "$500-999", value: "500-999" },
    { name: "1000+", label: "$1000+", value: "1000+" },
  ];

  return (
    <ProductFilterContainer>
      <ContainerTitle>Filter and Sort</ContainerTitle>
      <Section>
        <SortSection>
          <h2>Sort products:</h2>
          <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </SortSection>
      </Section>
      <Section>
        <form onSubmit={handleSubmit}>
          <FilterSection>
            <FilterTitle>Categories</FilterTitle>
            <FilterListSection>
              {categoryOptions.map((option) => (
                <label key={option.name}>
                  <input type="checkbox" name={option.name} checked={categories[option.value]} onChange={handleCategoryChange} />
                  {option.label}
                </label>
              ))}
            </FilterListSection>
          </FilterSection>
          <FilterSection>
            <FilterTitle>Price Range</FilterTitle>
            <FilterListSection>
              {priceRangeOptions.map((option) => (
                <label key={option.name}>
                  <input type="checkbox" name={option.name} checked={priceRanges[option.value]} onChange={handlePriceRangeChange} />
                  {option.label}
                </label>
              ))}
            </FilterListSection>
          </FilterSection>
          <button type="submit">Apply Filters</button>
        </form>
      </Section>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
