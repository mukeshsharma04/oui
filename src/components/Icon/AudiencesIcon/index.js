import React from 'react';

/* eslint-disable max-len */
const AudiencesIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/audiences-16.svg');
const AudiencesIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/audiences-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AudiencesIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AudiencesIcon16;
      break;
    case 24:
      Svg = AudiencesIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

AudiencesIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AudiencesIcon;
