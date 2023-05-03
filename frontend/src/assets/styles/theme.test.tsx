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

describe('themeSettings function', () => {
  it('should return the correct theme settings for dark mode', () => {
    const darkModeSettings = themeSettings('dark');
    expect(darkModeSettings.palette.mode).toBe('dark');
    expect(darkModeSettings.palette.primary.main).toBe(tokensDark.primary[100]);
    expect(darkModeSettings.palette.secondary.main).toBe(
      tokensDark.secondary[100]
    );
    expect(darkModeSettings.palette.neutral.main).toBe(tokensDark.green[100]);
    expect(darkModeSettings.palette.background.default).toBe(
      tokensDark.primary[100]
    );
    expect(darkModeSettings.palette.background.alt).toBe(
      tokensDark.primary[200]
    );
  });

  it('should return the correct theme settings for light mode', () => {
    const lightModeSettings = themeSettings('light');
    expect(lightModeSettings.palette.mode).toBe('light');
    expect(lightModeSettings.palette.primary.main).toBe(
      tokensDark.primary[200]
    );
    expect(lightModeSettings.palette.secondary.main).toBe(
      tokensDark.primary[200]
    );
    expect(lightModeSettings.palette.neutral.main).toBe(tokensDark.green[100]);
    expect(lightModeSettings.palette.background.default).toBe(
      tokensDark.primary[200]
    );
    expect(lightModeSettings.palette.background.alt).toBe(
      tokensDark.primary[100]
    );
  });
});
