import React from 'react';

import SomeApp from '@repro/some-app'
import { Button, ButtonVariants } from '@repro/shared';

import './index.css'

function View() {
  return (
  <div className='p-4'>
    <div>View</div>
    <Button type={ButtonVariants.Solid}>Repro</Button>
    <SomeApp />
  </div>
  )
}

export default View;
