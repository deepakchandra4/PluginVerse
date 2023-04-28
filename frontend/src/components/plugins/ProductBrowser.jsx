import React from "react";

const ProductBrowser = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 vh-100 bg-danger">
            <div>
              <h1>Filter</h1>
              <p>Categories</p>
            </div>
          </div>
          <div class="col-sm-7 vh-100">
            <section style={{ backgroundColor: "#eee" }}>
              <div className="container py-5">
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant trident shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>310</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For men</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$13.99</h4>
                              <span className="text-danger">
                                <s>$20.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant olap shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>289</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For men</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$14.99</h4>
                              <span className="text-danger">
                                <s>$21.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant ruybi shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>145</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For women</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$17.99</h4>
                              <span className="text-danger">
                                <s>$25.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant ruybi shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>145</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For women</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$17.99</h4>
                              <span className="text-danger">
                                <s>$25.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant ruybi shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>145</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For women</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$17.99</h4>
                              <span className="text-danger">
                                <s>$25.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                className="w-100"
                              />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(253, 253, 253, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Quant ruybi shirts</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <span>145</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For women</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">$17.99</h4>
                              <span className="text-danger">
                                <s>$25.99</s>
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Details
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrowser;
