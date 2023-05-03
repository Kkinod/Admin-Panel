import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { tokensDark, reverseTokens, tokensLight, themeSettings } from './theme';

describe('reverseTokens', () => {
    it('should reverse the given token object', () => {
      const reversedTokens = reverseTokens(tokensDark);
      
      expect(reversedTokens.primary).toEqual({
        100: tokensDark.primary[200],
        200: tokensDark.primary[100],
      });
      expect(reversedTokens.secondary).toEqual({
        100: tokensDark.secondary[200],
        200: tokensDark.secondary[100],
      });
      expect(reversedTokens.green).toEqual({
        100: tokensDark.green[100],
      });
    });
  });

  