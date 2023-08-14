import GlobalStyle from "./components/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import ARViewerPage from "./components/utilities/ARViewer_MIND";
// import ARViewer_Markerless from "./components/utilities/ARViewer_Markerless";
// import ARviewer_Markerless_V2 from "./components/utilities/ARviewer_Markerless_V2";
import { Suspense, lazy } from "react";

const theme = {
  colors: {
    body: "#fff",
  },
  mobile: "768px",
};

const Homepage = lazy(() => import("./pages/Homepage"));
const ARViewerPage = lazy(() => import("./components/utilities/ARViewer_MIND"));
// const ARViewer_Markerless = lazy(() =>
//   import("./components/utilities/ARViewer_Markerless")
// );
// const ARviewer_Markerless_V2 = lazy(() =>
//   import("./components/utilities/ARviewer_Markerless_V2")
// );

const ARviewer_Markerless_V3 = lazy(() =>
  import("./components/utilities/ARviewer_Markerless_V3")
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Suspense fallback={null}>
            <Route path="/" exact component={Homepage}></Route>
            <Route
              path="/projects/arlib/marker/:projectname/:id"
              component={ARViewerPage}
            ></Route>
            {/* <Route
              path="/projects/arlib/markerless2/:projectname/:id"
              component={ARViewer_Markerless}
            ></Route>
            <Route
              path="/projects/arlib/markerless3/:projectname/:id"
              component={ARviewer_Markerless_V2}
            ></Route> */}
            <Route
              path="/projects/arlib/markerless/:projectname/:id"
              component={ARviewer_Markerless_V3}
            ></Route>
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
