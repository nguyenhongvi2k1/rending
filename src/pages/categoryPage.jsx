import React from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";

function CategoryPage() {
  return (
    <div>
      <Header />
      <div className="section pt-5 pb-0">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-9">
              <span className="fw-normal text-uppercase d-block mb-1">
                Categories
              </span>
              <h2 className="heading">'Business'</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="post-entry d-md-flex small-horizontal mb-5">
                <div className="me-md-5 thumbnail mb-3 mb-md-0">
                  <img
                    src="assets/img_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <div className="post-meta mb-3">
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
                  <h2 className="heading">
                    <a href="single.html">
                      Your most unhappy customers are your greatest source of
                      learning.
                    </a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="post-author d-flex align-items-center">
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
            <div className="col-lg-9">
              <div className="post-entry d-md-flex small-horizontal mb-5">
                <div className="me-md-5 thumbnail mb-3 mb-md-0">
                  <img
                    src="assets/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <div className="post-meta mb-3">
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
                  <h2 className="heading">
                    <a href="single.html">
                      Your most unhappy customers are your greatest source of
                      learning.
                    </a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="post-author d-flex align-items-center">
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
            <div className="col-lg-9">
              <div className="post-entry d-md-flex small-horizontal mb-5">
                <div className="me-md-5 thumbnail mb-3 mb-md-0">
                  <img
                    src="assets/img_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <div className="post-meta mb-3">
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
                  <h2 className="heading">
                    <a href="single.html">
                      Your most unhappy customers are your greatest source of
                      learning.
                    </a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="post-author d-flex align-items-center">
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
          <div className="row align-items-center justify-content-center py-5">
            <div className="col-lg-6 text-center">
              <div className="custom-pagination">
                <a href="#">1</a>
                <a href="#" className="active">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-light mx-md-3 sec-subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h4 fw-bold">Subscribe to newsletter</h2>
            </div>
          </div>
          <form action className="row">
            <div className="col-md-8">
              <div className="mb-3 mb-md-0">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-4 d-grid">
              <input
                type="submit"
                className="btn btn-primary"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
