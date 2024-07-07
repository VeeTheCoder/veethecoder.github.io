import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="Footer" className="p-1 bg-dark-override text-white route">
        <div className="container">
        <div className="row">
           <p className="text-center w-100">© Copyright function {(new Date().getFullYear())} Vee.</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;