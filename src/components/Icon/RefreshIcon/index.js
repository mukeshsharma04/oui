import React from 'react';

/* eslint-disable max-len */
const RefreshIcon16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/refresh-16.svg');
const RefreshIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/refresh-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const RefreshIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = RefreshIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = RefreshIcon24;
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

RefreshIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default RefreshIcon;

