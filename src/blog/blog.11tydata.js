// Defaults for every post in src/blog/. Name files YYYY-MM-DD-slug.md;
// Eleventy takes the date from the prefix and the URL from the rest.
module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  compactHeader: true,
  permalink: "/blog/{{ page.fileSlug }}/",
  eleventyComputed: {
    docTitle: (data) => `${data.title} — Cameron Gorrie`,
  },
};
