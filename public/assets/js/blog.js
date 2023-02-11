const blogPosts = [
  {
    title: "Metaverse Architecture",
    date: new Date(2023, 0, 20),
    slug: "metaverse-architecture.html",
    imageUrl: "https://preview.guisetech.com/assets/img/footer/metaverse-architecture-tile.jpg",
    author: "Selin Ozyurt",
  },
  {
    title: "Most Common Css Selectors",
    date: new Date(2023, 0, 07),
    slug: "most-common-css-selectors.html",
    imageUrl: "https://preview.guisetech.com/assets/img/footer/css-selectors-tile.jpeg",
    author: "Onur Rozet",
  },
];

const blogItemTemplate = (
  imageUrl,
  title,
  slug,
  date
) => `<a href="blog/${slug}">
<div class="bd-footer-widget__blog d-flex align-items-center mb-30">
<div class="bd-footer-widget__blog-thum mr-30 box-shadow-4px border-radius">
  <img class="border-radius"
    src="${imageUrl}"
    alt="${title}" />
</div>
<div class="bd-footer-widget__blog-content">
  <h3 class="bd-footer-widget__blog-title">
    <span>${title}</span>
  </h3>
  <span>${date?.toDateString()}</span>
</div>
</div>
</a>`;

const blogPostContainerDiv = document.getElementById("recentBlogPosts");

if (blogPostContainerDiv && blogPosts?.length > 0) {
  blogPostContainerDiv.innerHTML = "";

  for (const blogItem of blogPosts) {
    blogPostContainerDiv.innerHTML += blogItemTemplate(
      blogItem.imageUrl,
      blogItem.title,
      blogItem.slug,
      blogItem.date
    )
  }
}
