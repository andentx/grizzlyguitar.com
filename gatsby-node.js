const path = require(`path`);

exports.createPages = async (gatsbyUtilities) => {
  // Handle blog posts
  const posts = await getPosts(gatsbyUtilities);
  if (posts.length) {
    await createIndividualBlogPostPages({ posts, gatsbyUtilities });
  }

  // Handle Shopify products
  const products = await getShopifyProducts(gatsbyUtilities);
  if (products.length) {
    await createIndividualProductPages({ products, gatsbyUtilities });
  }
};

// Create blog post pages
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) => {
  return Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: post.id,
          title: post.title,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  );
};

// Create Shopify product pages
const createIndividualProductPages = async ({ products, gatsbyUtilities }) => {
  products.forEach(({ node }) => {
    gatsbyUtilities.actions.createPage({
      path: `/shop/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    });
  });
};

// Fetch blog posts
const getPosts = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query WpPosts {
      allWpPost(sort: { date: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            title
            uri
          }
          next {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return [];
  }

  return graphqlResult.data.allWpPost.edges;
};

// Fetch Shopify products
const getShopifyProducts = async ({ graphql, reporter }) => {
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
            handle
            id
            descriptionHtml
            shopifyId
            priceRangeV2 {
              minVariantPrice {
                amount
              }
              maxVariantPrice {
                amount
              }
            }
            media {
              ... on ShopifyMediaImage {
                image {
                  src
                  altText
                }
                id
              }
            }
            tags
            totalInventory
            metafieldCategory: metafield(namespace: "custom", key: "category") {
              key
              value
            }
            metafieldBrand: metafield(namespace: "custom", key: "brand") {
              key
              value
            }
            metafieldMaterial: metafield(namespace: "custom", key: "material") {
              key
              value
            }
            metafieldStringCoating: metafield(
              namespace: "custom"
              key: "string_coating_2"
            ) {
              key
              value
            }
            metafieldWindings: metafield(namespace: "custom", key: "windings") {
              key
              value
            }
            metafieldGaugesTable: metafield(
              namespace: "custom"
              key: "test_gauge_table_01"
            ) {
              key
              value
            }
            variants {
              title
              media {
                ... on ShopifyMediaImage {
                  id
                  image {
                    src
                    altText
                    gatsbyImageData(width: 1200)
                  }
                }
              }
              id
              shopifyId
              price
              inventoryQuantity
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Shopify products`,
      result.errors
    );
    return [];
  }

  return result.data.allShopifyProduct.edges;
};
