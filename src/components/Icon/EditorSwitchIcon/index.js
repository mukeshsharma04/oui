import React from 'react';

/* eslint-disable max-len */
const EditorSwitchIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/editor-switch-16.svg');
const EditorSwitchIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/editor-switch-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EditorSwitchIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = EditorSwitchIcon16;
      break;
    case 24:
      Svg = EditorSwitchIcon24;
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

EditorSwitchIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EditorSwitchIcon;
