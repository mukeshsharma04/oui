import React from 'react';

/* eslint-disable max-len */
const DuplicateIcon16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/duplicate-16.svg');
const DuplicateIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/duplicate-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const DuplicateIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = DuplicateIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = DuplicateIcon24;
      SizeClass = 'oui-icon--24';
      break;
    default:
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + SizeClass }
      data-test-section={ props.testSection }
    />
  );
};

DuplicateIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default DuplicateIcon;

