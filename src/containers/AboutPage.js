import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Rangle.io is a next-generation HTML5 design and development firm
        dedicated to modern, responsive web and mobile applications.
      </p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
