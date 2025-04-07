"use client";

import React from 'react';

const Gallery = () => {
    
    return (
        <div className="gallery p-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-heading text-center mb-70">
                            <h2 className="section-title mt--8 mb-25">Gallery</h2>
                            <p className="heading-sub-txt mt--1 mb--8">
                                Organizing different events at different times increases the
                                capacity of teaching and learning manifold. <br />
                                We are the best in various activities happily!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="control-panel d-flex justify-content-center mb-50 mt--1">
                            <div className="controls d-inline-flex" id="controls">
                                <button
                                    className="gallery-filter-btn active color-4 mr-20 pb-17"
                                    data-filter="*"
                                >
                                    Show all
                                </button>
                                <button
                                    className="gallery-filter-btn color-4 mx-20 pb-17"
                                    data-filter=".gallery_880"
                                >
                                    Event
                                </button>
                                <button
                                    className="gallery-filter-btn color-4 mx-20 pb-17"
                                    data-filter=".gallery_882"
                                >
                                    Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 gallery-images">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_880">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="images/17121639101723466313660d8c464519a.jpg"
                               
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="images/17121639101723466313660d8c464519a.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">EduTune Annual program 1</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_880">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/1712163863175348515660d8c1714663.jpg"
                              
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/1712163863175348515660d8c1714663.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">EduTune Annual program 1</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_880">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/17121637982070127001660d8bd6d37bb.jpg"
                               
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/17121637982070127001660d8bd6d37bb.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">EduTune Annual program 1</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_880">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/17121636972013083812660d8b717c098.jpg"
                             
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/17121636972013083812660d8b717c098.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">EduTune Annual program 1</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_882">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/17121634892146582299660d8aa13e838.jpg"
                               
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/17121634892146582299660d8aa13e838.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">Your kid is a seed. Nourish it with enhancing skill.</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_882">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/1712163160903229267660d895876b8e.jpg"
                               
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/1712163160903229267660d895876b8e.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">It’s high time to pick up the right decision.</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_882">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/1712163018392958720660d88ca9781b.jpg"
                               
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/1712163018392958720660d88ca9781b.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">Math is now easy with Abacus. Prepare your child</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 gallery-image gallery_882">
                        <div className="img w_100">
                            <img
                                alt="Image"
                                src="/images/1712162923910850873660d886b394f0.jpg"
                                
                                className="w-100 lazyload courseBannerImage img-fluid"
                            />
                        </div>
                        <div className="gallery-txt p-absolute text-center d-flex flex-column align-items-center justify-content-center">
                            <a
                                className="gallery-popup mb-20"
                                href="/images/1712162923910850873660d886b394f0.jpg"
                            >
                                <img src="/images/expand.png" alt="View" />
                            </a>
                            <h3 className="gallery-title mt--3 mb-10">
                                <a href="#">Right word choice on the right spot</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="gallery-btn text-center mt-70" id="load-photos">
                            <button className="def-btn">View All Photos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gallery