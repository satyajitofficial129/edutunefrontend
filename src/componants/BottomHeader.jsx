import Image from 'next/image'
import React from 'react'

const BottomHeader = () => {
    const blurDataUrl =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgYJCAkLCwoLDAwM...";
    return (
        <div className="bottom-header">
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-xl-2 col-lg-2">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-6">
                                <div className="logo">
                                    <a href="index.html">
                                    <Image
                                        src="/images/logo.png"
                                        alt="EduTune"
                                        width={500}
                                        height={300}
                                        placeholder="blur"
                                        blurDataURL={blurDataUrl}
                                        style={{ width: '160px', height: 'auto' }}
                                    />

                                    </a>
                                </div>
                            </div>
                            <div className="d-lg-none d-flex justify-content-end col-6">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="icofont-navigation-menu" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <nav className="navbar navbar-expand-lg p-0">
                            <div className="container-fluid p-0">
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav m-auto p-30">
                                        <li className="nav-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a aria-expanded="false" href="buy-courses.html">
                                                Buy Courses  <i className="fa-solid fa-chevron-down" />
                                            </a>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <li>
                                                    <a href="category/champs/abacus-math.html">
                                                        Abacus Math
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="category/champs/english-learning.html">
                                                        English Learning
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="category/crash-course/crash-course.html">
                                                        Crash Course
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index.html">Help</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="student/login.html">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-xl-2 col-lg-3 d-lg-block d-none">
                        <div className="nav-btn d-flex justify-content-end">
                            <a href="student/registration.html" className="def-btn">
                                Trial Class
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BottomHeader