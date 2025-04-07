"use client";
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [students, setStudents] = useState(0);
  const [awards, setAwards] = useState(0);
  const [classes, setClasses] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    setStudents(2000);
    setAwards(212);
    setClasses(370);
    setCourses(18);
  }, []);

  return (
    <div className="counter pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-heading text-center mb-70">
              <h2 className="section-title text-white mt--8 mb-25">
                Unique learning Environment
              </h2>
              <p className="heading-sub-txt text-white mt--1 mb--8">
                This is the educational platform where you get the opportunity to
                get the desired up-to-date education for yourself and future
                generations. This is the ladder to guaranteed success.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-3 col-6">
            <div className="counter-box d-flex flex-column align-items-center">
              <div className="counter-img mb--60">
                <img
                  src="/images/counter-icon-1.png"
                  className="filter-shadow-1"
                  alt="Icon"
                />
              </div>
              <div className="counter-part-txt text-center p-relative">
                <h2 className="counter-txt mb-20">{students}</h2>
                <p className="counter-sub-txt mt--1 mb--8">Students Enrolled</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div className="counter-box d-flex flex-column align-items-center pt-120">
              <div className="counter-img mb--60">
                <img
                  src="/images/counter-icon-2.png"
                  className="filter-shadow-3"
                  alt="Icon"
                />
              </div>
              <div className="counter-part-txt text-center p-relative">
                <h2 className="counter-txt mb-20">{awards}</h2>
                <p className="counter-sub-txt mt--1 mb--8">Awards Won</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div className="counter-box d-flex flex-column align-items-center">
              <div className="counter-img mb--60">
                <img
                  src="/images/counter-icon-3.png"
                  className="filter-shadow-2"
                  alt="Icon"
                />
              </div>
              <div className="counter-part-txt text-center p-relative">
                <h2 className="counter-txt mb-20">{classes}</h2>
                <p className="counter-sub-txt mt--1 mb--8">Classes Completed</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div className="counter-box d-flex flex-column align-items-center pt-120">
              <div className="counter-img mb--60">
                <img
                  src="/images/counter-icon-4.png"
                  className="filter-shadow-4"
                  alt="Icon"
                />
              </div>
              <div className="counter-part-txt text-center p-relative">
                <h2 className="counter-txt mb-20">{courses}</h2>
                <p className="counter-sub-txt mt--1 mb--8">Our Total Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
