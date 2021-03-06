import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';


export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider" style={{color: 'white'}}>|</span>
          <Link href="/about">About</Link>
        </div>
        <p style={{color: '#7289DA'}}>Made with ❤️ by <a href="https://toxicdev.me">Toxic Dev</a></p>
      </footer>
    </Router>
  );
}
