import React from "react";
import './Logo.sass'

class Logo extends React.Component {
  render() {
    return <h1 className='Logo'>
      <span className='first'>Robert</span>
      <span className='last'>Nichols</span>
    </h1>;
  }
}

export default Logo;