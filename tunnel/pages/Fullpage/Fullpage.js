// Code from: https://github.com/alvarotrigo/react-fullpage

// Install in terminal: npm install @fullpage/react-fullpage
import React from 'react'
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
// const pluginWrapper = () => {
//   require('./statics/fullpage.scrollHorizontally.min');
// };

const Fullpage = () => (
  <ReactFullpage
    // pluginWrapper = {pluginWrapper}

    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));