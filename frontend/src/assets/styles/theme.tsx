export type MyTheme = ReturnType<typeof themeSettings>;

export interface ITheme {
  theme?: ReturnType<typeof themeSettings>;
}

export const colors = {
  secondary: "#b58b5b",
  primary: "#c5a47e",
  new: "#ffe3a3",
  new2: "#cca752",
};

export const tokensDark = {
  brown: {
    100: "#cca752",
    200: "#c5a47e",
  },
  brownDarkLight: {
    100: "#997d3d",
    200: "#ffe3a3",
  },
  green: {
    100: "#b7fe2b",
  },
  grey: {
    100: "#808080",
  },
  primary: {
    100: "#f3f4fD",
    200: "#14121e",
  },
  secondary: {
    100: "#ffffff",
    200: "#000000",
  },
};

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

export const themeSettings = (mode: "dark" | "light") => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for light mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[100],
            },
            secondary: {
              // ...tokensDark.secondary,
              100: tokensDark.secondary[100],
              main: tokensDark.secondary[200],
            },
            brown: {
              ...tokensDark.brown,
              main: tokensDark.brown[100],
              second: tokensLight.brown[200],
            },
            brownDarkLight: {
              ...tokensLight.brownDarkLight,
              main: tokensLight.brownDarkLight[100],
              second: tokensLight.brownDarkLight[200],
            },
            green: {
              ...tokensDark.green,
              main: tokensDark.green[100],
            },
            grey: {
              ...tokensLight.grey,
              main: tokensDark.grey[100],
            },
            background: {
              default: tokensDark.primary[200],
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
              main: tokensDark.secondary[100],
            },
            brown: {
              ...tokensLight.brown,
              main: tokensLight.brown[200],
              second: tokensLight.brown[100],
            },
            brownDarkLight: {
              ...tokensLight.brownDarkLight,
              main: tokensLight.brownDarkLight[200],
              second: tokensLight.brownDarkLight[100],
            },
            green: {
              ...tokensLight.green,
              main: tokensDark.green[100],
            },
            grey: {
              ...tokensLight.grey,
              main: tokensDark.grey[100],
            },
            background: {
              default: tokensDark.primary[100],
              alt: tokensDark.primary[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
