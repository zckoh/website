import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";
import Emoji from '../../components/Emoji.js';
import WebsiteScreenShot from "../../assets/img/website-screenshot.jpg";
import SceneClassifierScreenshot from "../../assets/img/scene-classifier-screenshot.jpg";
import AnnotatedTransformer from "../../assets/img/the-annotated-transformer_14_0.png";
import EcommerceProjectScreenshot from "../../assets/img/tfnglun-project.jpg";
import "../../assets/css/projectpage.css";

const ProjectsPage = () => {
    document.title = "Projects | zckoh.github.io"

    return (
        <main className="text padding-top">
            <MDBContainer fluid className="px-5 pb-5 z-depth-0 font-weight-normal">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    My Recent Projects <Emoji symbol="📚" />
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                    Below are a list of my recent projects that I've been working on. Please check them out!
                </p>
                <MDBRow>
                    <MDBCol lg="7">
                        <h6 className="font-weight-bold mb-3 yellow-text">
                            <MDBIcon fab icon="js-square" className="pr-2" />
                            Web Development
                        </h6>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Semi E-Commerce website for stationary shop</strong>
                        </h3>
                        <p>
                            Full-stack web development for stationary shop website, with home page, product page,
                            contact page and an admin site for content management.<br />
                            <br />
                            Website: <a className="amber-text" href="https://tfnglun.com" target="_blank" rel="noopener noreferrer">https://tfnglun.com</a><br />
                            <br />
                            • Deployed full-stack project to Cloud<br />
                            • Integrated Django with AlgoliaSearch<br />
                            • Implemented searchable product catalogue with individual product page for each product<br />
                            • Implemented contact form that send form data as email to admin (via Mailjet REST API)<br />
                            • Setup admin site which allows admin to add products ( with products images stored in public buckets )<br />
                            • Setup SEO (via sitemap.xml, robots.txt, meta tags, Google Search Console)<br />
                            <br />
                        </p>
                        <p>
                            Technologies Used: Django, AlgoliaSearch / Algolia InstantSearch,js, MongoDB Atlas, Google App Engine,
                            Google Cloud Storage, Google Maps API, Mailjet REST API
                        </p>
                        <p>
                            Date: Jun 2020 - Jul 2020
                        </p>
                        <MDBBtn
                            color="primary" size="md" className="waves-light button-rounded"
                            href="https://github.com/zckoh/ecommerce-fullstack" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            GitHub Link (zckoh/ecommerce-fullstack)
                        </MDBBtn>
                        <MDBBtn
                            color="dark-green" size="md" className="waves-light button-rounded"
                            href="https://tfnglun.com" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            tfnglun.com
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg="5">
                        <MDBView className="white-background rounded z-depth-2 mb-lg-0 mb-4" hover>
                            <a href="https://tfnglun.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="img-fluid center-photo"
                                    src={EcommerceProjectScreenshot}
                                    alt=""
                                />
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <a href="https://github.com/zckoh/website" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="img-fluid"
                                    src={WebsiteScreenShot}
                                    alt=""
                                />
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7">
                        <h6 className="font-weight-bold mb-3 yellow-text">
                            <MDBIcon fab icon="js-square" className="pr-2" />
                            Web Development
                        </h6>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>My personal website and web app</strong>
                        </h3>
                        <p>
                            This is my first web development project which uses React. <br />
                            My website contains a landing page, a projects page which displays my recent projects and a web app page.
                            <br /><br />
                            My first web app (What To Eat!) helps the user to choose what to eat by randomly selecting a dish or a restaurant.
                        </p>
                        <p>
                            Technologies Used: React, Google Maps JavaScript API, Material Design for BootStrap (mdbootstrap)
                        </p>
                        <p>
                            Date: Nov 2019 - Present
                        </p>
                        <MDBBtn
                            color="primary" size="md" className="waves-light button-rounded"
                            href="https://github.com/zckoh/website" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            GitHub Link (zckoh/website)
                        </MDBBtn>
                        <MDBBtn
                            color="dark-green" size="md" className="waves-light button-rounded"
                            href="what-to-eat" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            What To Eat!
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                    <MDBCol lg="7">
                        <h6 className="font-weight-bold mb-3 pink-text">
                            <MDBIcon icon="project-diagram" className="pr-2" />
                            Deep Learning
                        </h6>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Re-implementation of Music Transformer</strong>
                        </h3>
                        <p>
                            This is a group coursework for my deep learning module at university
                            where we re-implemented the Music Transformer paper that is published in ICLR 2019 conference.<br />
                            <br />
                            The re-implementation was attempted using PyTorch instead of TensorFlow. Unfortunately, we were unable
                            to re-implement the paper successfully, mainly due to insufficient details provided
                            for the JSB dataset and how the data was processed for the transformer model.
                            <br /><br />
                            Nonetheless, it was a great learning experience developing this model.
                        </p>
                        <p>
                            Technologies Used: PyTorch, TensorFlow, Magenta, Jupyter Notebook, Python
                        </p>
                        <p>
                            Date: March 2019 - May 2019
                        </p>
                        <MDBBtn
                            color="primary" size="md" className="waves-light button-rounded"
                            href="https://github.com/COMP6248-Reproducability-Challenge/music-transformer-comp6248" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            GitHub Link (music-transformer-comp6248)
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <a href="https://github.com/COMP6248-Reproducability-Challenge/music-transformer-comp6248" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="img-fluid center-photo"
                                    src={AnnotatedTransformer}
                                    alt=""
                                />
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <a href="https://github.com/zckoh/image-classifier" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="img-fluid"
                                    src={SceneClassifierScreenshot}
                                    alt=""
                                />
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="7">

                        <h6 className="font-weight-bold mb-3 teal-text">
                            <MDBIcon icon="images" className="pr-2" />
                            Computer Vision
                        </h6>
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Scene Classifier</strong>
                        </h3>
                        <p>
                            Classifies scene images into one of 15 categories.<br />
                            <br />
                            Three models have been implemented, with increasing complexity.<br />
                            An additional model using transfer learning has also been implemented,
                            providing the best accuracy.
                        </p>
                        <ul>
                            <li>Run 1 - K-Nearest Neighbour classifier with “tiny image” feature.</li>
                            <li>Run 2 - 15 one-vs-all linear classifier with Bags-of-Visual-Words feature.</li>
                            <li>Run 3 - Dense SIFT with spatial pyramid matching using SVM classifier.</li>
                            <li>Run 4 - Transfer Learning with inception V3 model with additional pooling and softmax output layer as the top layers.</li>
                        </ul>
                        <p>
                            Technologies Used: Keras, OpenCV, scikit-learn, TensorFlow, Python
                        </p>
                        <p>
                            Date: Nov 2018 - Jan 2019
                        </p>
                        <MDBBtn
                            color="primary" size="md" className="waves-light button-rounded"
                            href="https://github.com/zckoh/image-classifier" target="_blank"
                            rel="noopener noreferrer"
                            style={{ "textTransform": "none" }}>
                            GitHub Link (image-classifier)
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </main>
    );
}

export default ProjectsPage;