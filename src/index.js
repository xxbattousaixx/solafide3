
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import { HelmetProvider } from 'react-helmet-async';
// presentation pages
import Index from "views/Index.js";
import Home from "views/Home.js";

// example pages
import AboutUs from "views/examples/AboutUs.js";
import Commercial from "views/examples/BlogPost.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Blog from "views/examples/Blog.tsx";
import BlogPost from "views/examples/BlogPost.tsx";
import Privacy from "views/examples/Privacy.js";
import Residential from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Gallery from "views/examples/LandingPage.js";
const root = document.getElementById("root");

const root1 = ReactDOM.createRoot(document.getElementById("root"));

console.log = function() {} 
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(
  <HelmetProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/residential" element={<Residential />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/privacy-policy" element={<Privacy />} />

      <Route path="/clean-seal" element={<Ecommerce />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogPost />} />



      <Route path="/" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter></HelmetProvider>, root1)} else {root1.render( <HelmetProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/residential" element={<Residential />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/privacy-policy" element={<Privacy />} />

      <Route path="/clean-seal" element={<Ecommerce />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogPost />} />



      <Route path="/" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter></HelmetProvider>
);}
