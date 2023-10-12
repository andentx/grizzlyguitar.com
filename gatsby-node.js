const path = require(`path`);

exports.createPages = async (gatsbyUtilities) => {
  const posts = await getPosts(gatsbyUtilities);
  if (posts.length) {
    await createIndividualBlogPostPages({ posts, gatsbyUtilities });
  }
};

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
