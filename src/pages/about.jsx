import * as React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="title">About this site</h1>
      <p style={{color: 'white'}}>
       This is a Simple, Hackable and Minimalistic static site made to be used as a Starter/Introduction to React.
      </p>
      <p style={{color: 'white'}}>
       This site is extremely customizable, open-source and free ❤️ and a few of the current features are:
      </p>
      <ul>
        <li style={{color: 'white'}}>
          🎉 Eays to Set-Up, Configure and Self Host
        </li>
        <li style={{color: 'white'}}>
          💥 Basic React Router to allow use of Multiple Pages
        </li>
        <li style={{color: 'white'}}>
          🗣 Community Made with a Friendly Support Team{" "}
          <a href="https://github.com/TheRealToxicDev/Hackable-React-Starter">GitHub Repo</a>
          .)
        </li>
      </ul>

      <p style={{color: 'white'}}>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a>, Deployed on{" "}
        <a href="https://netlify.com//">Netlify</a>.
      </p>
    </div>
  );
}
