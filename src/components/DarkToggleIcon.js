import React from 'react';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';

import {
  MoonIcon,
  SunIcon
} from '@heroicons/react/outline'

const ToggleStyles = styled.div`
  cursor: pointer;
`

const DarkToggleIcon = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <>
      <ToggleStyles
        onClick={() => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}
      >
        {
          colorMode === 'light' && <MoonIcon className="h-10 w-10 pr-4 text-gray-900 hover:text-blue-500" />
        }
        {
          colorMode === 'dark' && <SunIcon className="h-10 w-10 pr-4 text-gray-50 hover:text-blue-500" />
        }
      </ToggleStyles>
    </>

  );
};

export default DarkToggleIcon;