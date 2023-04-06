import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

import ProductFilter from "../../components/ProductFilter";
import ProductGrid from "../../components/ProductGrid";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Shop</title>
    <meta name="description" content="Description for Grizzly Guitar." />
    <meta name="author" content="Andrew" />

    <meta name="theme-color" content="hsl(0, 0%, 0%)" />
  </>
);

const sortByPriceAsc = (a, b) => a.priceRangeV2.minVariantPrice.amount - b.priceRangeV2.minVariantPrice.amount;
const sortByPriceDesc = (a, b) => b.priceRangeV2.minVariantPrice.amount - a.priceRangeV2.minVariantPrice.amount;
const sortByNameAsc = (a, b) => a.title.localeCompare(b.title);
const sortByNameDesc = (a, b) => b.title.localeCompare(a.title);
const sortByCategoryAsc = (a, b) => a.category.localeCompare(b.category);
const sortByCategoryDesc = (a, b) => b.category.localeCompare(a.category);
const sortByPriceRangeAsc = (a, b) => a.priceRange.localeCompare(b.priceRange);
const sortByPriceRangeDesc = (a, b) => b.priceRange.localeCompare(a.priceRange);

const ShopPage = ({ data }) => {
  const allProducts = data.allShopifyProduct.edges.map((edge) => {
    const { node } = edge;
    const price = node.priceRangeV2.minVariantPrice.amount;
    const category = node.tags.filter((tag) => ["Guitar Amp", "Electric Guitar", "Guitar Pedal"].includes(tag))[0] || "other";
    let priceRange;

    if (price <= 25) {
      priceRange = "1-25";
    } else if (price <= 50) {
      priceRange = "26-50";
    } else if (price <= 100) {
      priceRange = "51-100";
    } else {
      priceRange = "101+";
    }

    return {
      ...node,
      category,
      priceRange,
    };
  });

  const [sortedProducts, setSortedProducts] = useState(allProducts);
  const [sort, setSort] = useState("price_asc");

  const sortFunctions = {
    price_asc: sortByPriceAsc,
    price_desc: sortByPriceDesc,
    name_asc: sortByNameAsc,
    name_desc: sortByNameDesc,
    category_asc: sortByCategoryAsc,
    category_desc: sortByCategoryDesc,
    price_range_asc: sortByPriceRangeAsc,
    price_range_desc: sortByPriceRangeDesc,
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handleSortChange = (value) => {
    setSort(value);
    setSortedProducts(
      [...allProducts].sort(sortFunctions[value]).filter((product) => {
        const hasSelectedCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const hasSelectedPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.includes(product.priceRange);

        return hasSelectedCategory && hasSelectedPriceRange;
      })
    );
  };

  const handleFilterChange = (categories, priceRanges) => {
    setSelectedCategories(categories);
    setSelectedPriceRanges(priceRanges);
    setSortedProducts(
      [...allProducts].filter((product) => {
        const hasSelectedCategory = categories.length === 0 || categories.includes(product.category);
        const hasSelectedPriceRange = priceRanges.length === 0 || priceRanges.includes(product.priceRange);

        return hasSelectedCategory && hasSelectedPriceRange;
      })
    );
  };

  return (
    <>
      <Layout>
        <h1>Shop</h1>
        <ProductFilter sort={sort} onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
        <ProductGrid sortedProducts={sortedProducts} />
      </Layout>
    </>
  );
};

export default ShopPage;

export const query = graphql`
  {
    allShopifyProduct(sort: { title: ASC }) {
      edges {
        node {
          title
          shopifyId
          description
          media {
            ... on ShopifyMediaImage {
              id
              image {
                src
              }
            }
          }
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
          tags
        }
      }
    }
  }
`;
