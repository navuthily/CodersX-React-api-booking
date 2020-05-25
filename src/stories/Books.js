import React from 'react';
import App from '../App';
import {
  withInfo
} from '@storybook/addon-info'
import {
  storiesOf
} from '@storybook/react'
//export default { title: 'App' };

storiesOf('App', module)
  .add(
    'default',
    () => ( <App/> )
  )