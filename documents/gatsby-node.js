const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/pageTemplate.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const mdRelativePath = node.parent.relativePath;
    const {dir, name} = path.parse(mdRelativePath);
    const mdPath = `/${name === 'index' ? dir : path.join(dir, name)}`;

    createPage({
      path: mdPath,
      component: pageTemplate,
      context: {
        id: node.id
      },
    })
  })
}
