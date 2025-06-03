export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: "RELEVANCE" | "CREATED_AT" | "PRICE" | "TITLE";
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Price: Low to High",
  slug: "price-asc",
  sortKey: "PRICE",
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Price: High to Low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
  {
    title: "Alphabetical: A to Z",
    slug: "title-asc",
    sortKey: "TITLE",
    reverse: false,
  },
  {
    title: "Relevance",
    slug: "relevance",
    sortKey: "RELEVANCE",
    reverse: true,
  },
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
];

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";
