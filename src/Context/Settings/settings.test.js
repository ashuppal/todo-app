'use strict';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context', () => {
  test('initial state loads as expected', () => {
    render(
      //add boundry to test
      <SettingsProvider>
        <SettingsContext.Consumer>
          {(context) => {
            expect(context.showCompleted).toBe(false);
            expect(context.pageItems).toBe(3);
            expect(context.sort).toBe('difficulty');
          }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
  });
});

  

