const slugify = require('slugify');

const toSlug = source => slugify(source, { lower: true });

const addSlugToNode = (node, createNodeField) => {
  // Create a slug using the fronmatter of the doc
  const { frontmatter } = node;
  const fragment = frontmatter.slug || frontmatter.title;
  const slug = `articles/${toSlug(fragment)}`;
  // Add a slug field to the MarkdownRemark node.
  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
  // Create metadata fields
  const metadata = {
    keywords: frontmatter.keywords || '',
    description: frontmatter.description || '',
    title: frontmatter.title || '',
  };
  createNodeField({
    node,
    name: 'metadata',
    value: metadata,
  });
};

module.exports = addSlugToNode;
