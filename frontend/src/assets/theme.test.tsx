import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { tokensDark, reverseTokens, tokensLight, themeSettings } from './theme';

describe('reverseTokens function', () => {
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

  describe('tokensLight', () => {
    it('should be the reversed version of tokensDark', () => {
      expect(tokensLight.primary).toEqual({
        100: tokensDark.primary[200],
        200: tokensDark.primary[100],
      });
      expect(tokensLight.secondary).toEqual({
        100: tokensDark.secondary[200],
        200: tokensDark.secondary[100],
      });
      expect(tokensLight.green).toEqual({
        100: tokensDark.green[100],
      });
    });
  });
