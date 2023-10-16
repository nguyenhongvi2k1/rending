import React, {useEffect} from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaHeart } from 'react-icons/fa';


function Footer() {
  useEffect(() => {
    var preloader = function() {

        var loader = document.querySelector('.loader');
        var overlay = document.getElementById('overlayer');

        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };

        setTimeout(function() {
            fadeOut(loader);
            fadeOut(overlay);
        }, 200);
    };
    preloader();
}, []);

  return (
    <div className="site-footer">
      <div className="container mx-auto">
        <div className="row justify-content-center copyright">
          <div className="col-lg-7 text-center">
            <div className="widget">
              <ul className="social list-unstyled">
                <li><a href="#"><span><FaFacebookF/></span></a></li>
                <li><a href="#"><span><FaTwitter/></span></a></li>
                <li><a href="#"><span><FaLinkedinIn/></span></a></li>
                <li><a href="#"><span><FaYoutube/></span></a></li>
              </ul>
            </div>
            <div className="widget">
              <p className="flex justify-center items-center">Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                template is made with<i className="icon-heart text-danger flex" ><FaHeart/></i>  by <a
                  href="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a>
              </p>
              <div className="d-block">
                <a href="#" className="m-2">Terms &amp; Conditions</a>/
                <a href="#" className="m-2">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
