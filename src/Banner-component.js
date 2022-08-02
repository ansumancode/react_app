import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';



const BannerComponent = (props) => {

    return (
        <>
            <section className="pt-4 pt-md-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2">

                            <img src={props.img} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init vert-move" alt="..." data-aos="fade-up" data-aos-delay="100" />

                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

                            <h1 className="display-3 text-center text-md-start">
                                {props.children}
                            </h1>

                            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                                {props.des}
                            </p>

                            <div className="text-center text-md-start">
                                <NavLink to={props.ctaHref} className="btn btn-primary shadow lift me-1">
                                    {props.ctaName} <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                                </NavLink>
                                <a href="docs/index.html" className="btn btn-primary-soft lift">
                                    Watch
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


BannerComponent.propTypes = {
    children: PropTypes.element.isRequired
};


export default BannerComponent;