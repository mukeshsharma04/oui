import React from 'react';

/* eslint-disable max-len */
const PaperclipIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/paperclip-16.svg');
const PaperclipIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/paperclip-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PaperclipIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = PaperclipIcon16;
      break;
    case 24:
      Svg = PaperclipIcon24;
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

PaperclipIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PaperclipIcon;
