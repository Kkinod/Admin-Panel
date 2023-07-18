import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import configureMockStore from "redux-mock-store";
import { mappedTheme } from "./testUtils";

export const renderWithProviders = (component: React.ReactNode) => {
  const initialState = {
    global: {
      darkLightMode: "light",
      userId: "644d2c50e7b49752f4a34c6b",
    },
  };

  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <ThemeProvider theme={mappedTheme}>{component}</ThemeProvider>
    </Provider>
  );
};
