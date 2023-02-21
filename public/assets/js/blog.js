const blogPosts = [
  {
    title: "Metaverse Architecture",
    date: new Date(2023, 0, 20),
    slug: "metaverse-architecture.html",
    imageUrl: "https://www.guisetech.com/assets/img/footer/metaverse-architecture-tile.jpg",
    author: "Selin Ozyurt",
  },
  {
    title: "Most Common Css Selectors",
    date: new Date(2023, 0, 07),
    slug: "most-common-css-selectors.html",
    imageUrl: "https://www.guisetech.com/assets/img/footer/css-selectors-tile.jpeg",
    author: "Onur Rozet",
  },
];

const linkSectionDiv=document.getElementById("linkSection");
const quickLinksSection=document.getElementById("quickLinks");
const copyrightDiv=document.getElementById("copyright");
const footerDiv=document.getElementById("footer");



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


const linkSectionTemplate=()=>`
<div class="bd-footer-widget footer-col-1">
<div class="bd-footer-widget__title">
  <a href="../../public/index.html">
    <img src="assets/img/logo/logo.png" alt="" />
    <img src="../assets/img/logo/logo.png" alt="" />
  </a>
</div>
<div>
  <p>
    Perfecting the Art of Software and Modern Architecture,
    Bringing Your Vision to Life
  </p>
  <p>
    <i class="fa fa-map-marker-alt"></i> Türkiye / United
    Kingdom
  </p>
  <br />
  <div class="bd-footer-widget__social">
    <span
      ><a
        href="https://www.facebook.com/guisetech"
        target="_blank"
        ><i class="fab fa-facebook-f"></i></a
    ></span>
    <span
      ><a href="https://twitter.com/guisetech" target="_blank"
        ><i class="fab fa-twitter"></i></a
    ></span>
    <span
      ><a href="https://github.com/guisetech/" target="_blank"
        ><i class="fab fa-github"></i></a
    ></span>
    <span
      ><a
        href="https://www.linkedin.com/in/guisetech/"
        target="_blank"
        ><i class="fab fa-linkedin"></i></a
    ></span>
    <span
      ><a
        href="https://www.instagram.com/guisetechsocial/"
        target="_blank"
        ><i class="fab fa-instagram"></i></a
    ></span>
  </div>
</div>
</div>
`




const quickLinksTemplate=()=>`
<div class="bd-footer-widget footer-col-4">
                  <h3 class="bd-footer-widget__title">Quick Links</h3>
                  <div class="row">
                    <div class="bd-footer-widget__content col-md-6">
                      <div class="bd-footer-widget__menu">
                        <ul>
                          <li><a href="../../public/index.html">Home</a></li>
                          <li><a href="../../public/about.html">About Us</a></li>
                          <li><a href="../../public/about.html#team">Meet the Team</a></li>
                          <li><a href="../../public/career.html">Career</a></li>
                          <li><a href="../../public/contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="bd-footer-widget__content col-md-6">
                      <div class="bd-footer-widget__menu">
                        <ul>
                          <li>
                            <a href="../../public/software-portfolio.html"
                              >Software Projects</a 
                            > 
                           
                          </li>
                          <li>
                            <a href="../../public/architecture-portfolio.html"
                              >Architectural Projects</a
                            >
                          </li>
                          <li>
                            <a href="../../public/software-services.html"
                              >Software Services</a
                            >
                          </li>
                          <li>
                            <a href="../../public/architecture-services.html"
                              >Architectural Services</a
                            >
                          </li>
                          <li>
                            <a href="../../public/blog/index.html">Blog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
`




const copyrightTemplate=()=>`
<div class="bd-footer__copyright bd-border-top pt-40 pb-40">
<span>
  <a href="https://www.guisetech.com/" target="_blank">
    <span id="date">2023</span> © Guisetech Limited</a
  >
  , Registered in Turkiye. Registration Number (VKN): 4111087362.
  All Right Reserved.
</span>
</div>
`

const notResultTemplate=()=>`
<a href="#">
                  <div
                    class="bd-footer-widget__blog d-flex align-items-center mb-30"
                  >
                    <div
                      class="bd-footer-widget__blog-thum mr-30 box-shadow-4px"
                    >
                      <img
                        src="assets/img/footer/no_result_tile.jpg"
                        alt="oops"
                      />
                    </div>
                    <div class="bd-footer-widget__blog-content">
                      <h3 class="bd-footer-widget__blog-title">
                        <span> Nothing to show here...</span>
                      </h3>
                      <span>Yet...</span>
                    </div>
                  </div>
                 </a>
`


const footerTemplate=()=>
`
<div class="bd-footer__section theme-bg-2 pt-120">
        <div class="container">
          <div class="bd-footer__main pb-50">
            <div class="row">
              <div class="col-lg-4">
               <div id="linkSection">
                 ${linkSectionTemplate()}
               </div>
              </div>
              <div class="col-lg-5">
                <div id="quickLinks">
                 ${quickLinksTemplate()}
                </div>
              </div>
              <div class="col-lg-3">
                <div class="bd-footer-widget footer-col-3">
                  <h3 class="bd-footer-widget__title">Recent Posts</h3>
                  <div id="recentBlogPosts">
                  
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div id="copyright">
           ${copyrightTemplate()}
         </div>
        </div>
      </div> 
`

footerDiv.innerHTML=footerTemplate()
const blogPostContainerDiv = document.getElementById("recentBlogPosts");
if (blogPostContainerDiv&&blogPosts?.length) {
  
  
  for (const blogPostItem of blogPosts) {
        
   const result= blogPostContainerDiv.innerHTML+=blogItemTemplate(
     blogPostItem.imageUrl,
     blogPostItem.title,
     blogPostItem.slug,
     blogPostItem.date
    )
    
 }
     
  
}else{
  blogPostContainerDiv.innerHTML=notResultTemplate()
}



  
  
  

