import React from 'react';

/* eslint-disable max-len */
const CreateMvtIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/create-mvt-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CreateMvtIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = CreateMvtIcon24;
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

CreateMvtIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CreateMvtIcon;
