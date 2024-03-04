import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppContextProvider } from "./store/AppContextProvider";
import { RecoilRoot } from "recoil";
import { router } from "./components/Router/Router";
import { useContext } from "react";

import i18n from "./i18next/i18n";

import React from "react";
import ResizeDetector from "react-resize-detector";
import ThemeColorModeContext from "./store/theme-colormode-context";
import Home from "./components/Home/Home";
import DataHub from "./components/DataHub";
import ErrorPage from "./components/Error/ErrorPage";

function App() {
  const themeColorMode = useContext(ThemeColorModeContext);

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeColorMode.theme}>
        <CssBaseline enableColorScheme />
        <I18nextProvider i18n={i18n}>
          <ResizeDetector handleWidth>
            <AppContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<DataHub />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>
            </AppContextProvider>
          </ResizeDetector>
        </I18nextProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
