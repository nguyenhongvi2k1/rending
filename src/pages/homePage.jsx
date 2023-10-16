import React from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../containers/header";
import Footer from "../containers/footer";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    container: ".most-popular-center",
    dots: true,
    infinite: true,
    mode: "carousel",
    slideBy: "page",
    nav: true,
    controls: true,
    gutter: 50,
    edgePadding: 0,
    center: true,
    controlsContainer: ".most-popular-nav",
    loop: false,
    swipeAngle: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="section pt-5 pb-0">
          <div className="container mx-auto">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                <h2 className="heading font-bold text-5xl ">Trending</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="posts-slide-wrap">
                  <div className="posts-slide" id="posts-slide">
                    <Slider {...settings}>
                      <div className="item">
                        <div className="post-entry d-lg-flex">
                          <div className="me-lg-5 thumbnail mb-4 mb-lg-0">
                            <a href="">
                              <img
                                src="assets/post_lg_1.jpg"
                                alt="Image"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="content align-self-center">
                            <div className="post-meta mb-3">
                              <a href="#" className="category">
                                Business
                              </a>
                              ,{" "}
                              <a href="#" className="category">
                                Travel
                              </a>{" "}
                              &mdash;
                              <span className="date">July 2, 2020</span>
                            </div>
                            <h2 className="heading">
                              <a href="#">
                                Your most unhappy customers are your greatest
                                source of learning.
                              </a>
                            </h2>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                            <a
                              href="#"
                              className="post-author d-flex align-items-center"
                            >
                              <div className="author-pic">
                                <img src="assets/person_1.jpg" alt="Image" />
                              </div>
                              <div className="text">
                                <strong>Sergy Campbell</strong>
                                <span>CEO and Founder</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="post-entry d-lg-flex">
                          <div className="me-lg-5 thumbnail mb-4 mb-lg-0">
                            <a href="#">
                              <img
                                src="assets/post_lg_2.jpg"
                                alt="Image"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="content align-self-center">
                            <div className="post-meta mb-3">
                              <a href="#" className="category">
                                Business
                              </a>
                              ,{" "}
                              <a href="#" className="category">
                                Travel
                              </a>{" "}
                              &mdash;
                              <span className="date">July 2, 2020</span>
                            </div>
                            <h2 className="heading">
                              <a href="#">
                                Your most unhappy customers are your greatest
                                source of learning.
                              </a>
                            </h2>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                            <a
                              href="#"
                              className="post-author d-flex align-items-center"
                            >
                              <div className="author-pic">
                                <img src="assets/person_1.jpg" alt="Image" />
                              </div>
                              <div className="text">
                                <strong>Sergy Campbell</strong>
                                <span>CEO and Founder</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="post-entry d-lg-flex">
                          <div className="me-lg-5 thumbnail mb-4 mb-lg-0">
                            <a href="#">
                              <img
                                src="assets/post_lg_3.jpg"
                                alt="Image"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="content align-self-center">
                            <div className="post-meta mb-3">
                              <a href="#" className="category">
                                Business
                              </a>
                              ,{" "}
                              <a href="#" className="category">
                                Travel
                              </a>{" "}
                              &mdash;
                              <span className="date">July 2, 2020</span>
                            </div>
                            <h2 className="heading">
                              <a href="#">
                                Your most unhappy customers are your greatest
                                source of learning.
                              </a>
                            </h2>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                            <a
                              href="#"
                              className="post-author d-flex align-items-center"
                            >
                              <div className="author-pic">
                                <img src="assets/person_1.jpg" alt="Image" />
                              </div>
                              <div className="text">
                                <strong>Sergy Campbell</strong>
                                <span>CEO and Founder</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="post-entry d-lg-flex">
                          <div className="me-lg-5 thumbnail mb-4 mb-lg-0">
                            <a href="#">
                              <img
                                src="assets/post_lg_4.jpg"
                                alt="Image"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="content align-self-center">
                            <div className="post-meta mb-3">
                              <a href="#" className="category">
                                Business
                              </a>
                              ,{" "}
                              <a href="#" className="category">
                                Travel
                              </a>{" "}
                              &mdash;
                              <span className="date">July 2, 2020</span>
                            </div>
                            <h2 className="heading">
                              <a href="#">
                                Your most unhappy customers are your greatest
                                source of learning.
                              </a>
                            </h2>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                            <a
                              href="#"
                              className="post-author d-flex align-items-center"
                            >
                              <div className="author-pic">
                                <img src="assets/person_1.jpg" alt="Image" />
                              </div>
                              <div className="text">
                                <strong>Sergy Campbell</strong>
                                <span>CEO and Founder</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_5.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-entry d-block small-post-entry-v">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src="assets/img_6.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-meta mb-1">
                      <a href="#" className="category">
                        Business
                      </a>
                      ,{" "}
                      <a href="#" className="category">
                        Travel
                      </a>
                      &mdash;
                      <span className="date">July 2, 2020</span>
                    </div>
                    <h2 className="heading mb-3">
                      <a href="#">
                        Your most unhappy customers are your greatest source of
                        learning.
                      </a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <a
                      href="#"
                      className="post-author d-flex align-items-center"
                    >
                      <div className="author-pic">
                        <img src="assets/person_1.jpg" alt="Image/" />
                      </div>
                      <div className="text">
                        <strong>Sergy Campbell</strong>
                        <span>CEO and Founder</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container mx-auto">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                <h2 className="heading">Most Popular Posts</h2>
              </div>
            </div>
          </div>
          <div className="container mx-auto most-popular-slider-wrap px-3 px-md-0">
            <div className="most-popular-nav">
              <span className="prev" data-controls="prev">
                Prev
              </span>
              <span className="next" data-controls="next">
                Next
              </span>
            </div>
            <div className="most-popular-slider" id="most-popular-center">
              <Slider {...settings2}>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_7.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_4.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_5.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-entry d-block small-post-entry-v">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="assets/img_6.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <div className="post-meta mb-1">
                        <a href="#" className="category">
                          Business
                        </a>
                        ,{" "}
                        <a href="#" className="category">
                          Travel
                        </a>
                        &mdash;
                        <span className="date">July 2, 2020</span>
                      </div>
                      <h2 className="heading mb-3">
                        <a href="#">
                          Your most unhappy customers are your greatest source
                          of learning.
                        </a>
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a
                        href="#"
                        className="post-author d-flex align-items-center"
                      >
                        <div className="author-pic">
                          <img src="assets/person_1.jpg" alt="Image" />
                        </div>
                        <div className="text">
                          <strong>Sergy Campbell</strong>
                          <span>CEO and Founder</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container mx-auto">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="row mb-4">
                  <div className="col-12">
                    <h2 className="h4 fw-bold">Sports</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_4.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row mb-4">
                  <div className="col-12">
                    <h2 className="h4 fw-bold">Business</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="post-entry d-md-flex xsmall-horizontal mb-5">
                      <div className="me-md-3 thumbnail mb-3 mb-md-0">
                        <img
                          src="assets/img_4.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <div className="post-meta mb-1">
                          <a href="#" className="category">
                            Business
                          </a>
                          ,{" "}
                          <a href="#" className="category">
                            Travel
                          </a>{" "}
                          &mdash;
                          <span className="date">July 2, 2020</span>
                        </div>
                        <h2 className="heading">
                          <a href="#">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </a>
                        </h2>
                        <a
                          href="#"
                          className="post-author d-flex align-items-center"
                        >
                          <div className="author-pic">
                            <img src="assets/person_1.jpg" alt="Image" />
                          </div>
                          <div className="text">
                            <strong>Sergy Campbell</strong>
                            <span>Author, 26 published post</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
