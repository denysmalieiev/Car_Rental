import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import HorizontalMenu from "./HorizontalMenu"
import VerticalMenu from "./VerticalMenu"

const NavigationContainer = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
  return (
    <>
      <div className='w-full h-auto bg-white shadow shadow-white-input-light float-start overflow-auto'>
        <div className='w-2/12 h-12 lg:h-20 float-left text-black flex items-center justify-center'>
          <p>Logo</p>
        </div>
        <div className='w-10/12 h-12 lg:h-20 float-left text-black'>
          {isBigScreen && <HorizontalMenu />}
          {!isBigScreen && <VerticalMenu />}
        </div>

      </div>
    </>
  )
}

export default NavigationContainer