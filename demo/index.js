import React from 'react'
import {
  storiesOf
  // action
} from '@kadira/storybook'
import Input from '../src/'
/*
import Button from 'fe-button'

const theme = {

}*/

// console.log(Button)

storiesOf('Alert', module)
  .add('with text', () => (
    <div>
      <Input label='test'/>
    </div>
  ))
