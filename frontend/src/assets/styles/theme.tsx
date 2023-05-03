// export const theme = {
//   colors: {
//     white: '#ffffff',
//     black: '#14121e',
//     whiteShade: '#f3f4fD',
//     greenpPrimary: '#b7fe2b',
//   },
// };

export const tokensDark = {
  green: {
    100: '#b7fe2b',
  },
  primary: {
    100: '#ffffff',
    200: '#14121e',
  },
  secondary: {
    100: '#f3f4fD',
    200: '#14121e',
  },
};

// function that reverses the color palette
export function reverseTokens(tokensDark: {
  [key: string]: { [key: string]: string };
}) {
  const reversedTokens: { [key: string]: { [key: string]: string } } = {};

  Object.entries(tokensDark).forEach(
    ([key, val]: [string, (typeof tokensDark)[keyof typeof tokensDark]]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj: { [key: string]: string } = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    }
  );
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode: 'dark' | 'light') => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for light mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[100],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensDark.green,
              main: tokensDark.green[100],
            },
            background: {
              default: tokensDark.primary[100],
              alt: tokensDark.primary[200],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[200],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.primary[200],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.green[100],
            },
            background: {
              default: tokensDark.primary[200],
              alt: tokensDark.primary[100],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
