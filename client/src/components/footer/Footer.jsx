import React from 'react';
import footerCss from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={footerCss.footerContainer}>
      <div className={footerCss.footerContainerLeft}>
        <h4>Left</h4>
      </div>
      <div className={footerCss.footerContainerMid}>
        <h4>Mid</h4>
      </div>
      <div className={footerCss.footerContainerRight}>
        <h4>Right</h4>
      </div>
    </div>
  )
}

export default Footer