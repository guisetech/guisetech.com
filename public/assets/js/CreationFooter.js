

const socialTemplate=()=>
`
 <div class="bd-footer-widget footer-col-1">
  <div class="bd-footer-widget__title">
    <a href="index.html">
      <img src="assets/img/logo/logo.png" alt="" />
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

const socialSectionDiv=document.getElementById("socialSection")

if (socialSectionDiv!=null) {
  
  socialTemplate()
  
}