/* eslint-disable react/jsx-key */
import React from 'react';
import Radio from '../index';

export default [
  {
    examples: [
      <Radio
        defaultChecked={ false }
        label="onChange Example"
        name="example-1"
        onChange={ function(event) {
          console.log('onChange', event.target.checked); // eslint-disable-line no-console
        } }
      />,
    ],
  },
  {
    examples: [
      <div>
        <Radio
          label="First Value"
          name="multi-example"
        />
        <Radio
          label="Second Value"
          name="multi-example"
        />
        <Radio
          label="Third Value"
          name="multi-example"
        />
      </div>,
    ],
  },
  {
    examples: [
      <Radio
        defaultChecked={ true }
        label="Checked by default"
        name="example-3"
      />,
    ],
  },
  {
    examples: [
      <Radio
        isDisabled={ true }
        defaultChecked={ true }
        label="Disabled checkbox"
        name="example-4"
      />,
    ],
  },
];
