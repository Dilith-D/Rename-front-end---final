// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import Home from "./pages/home";
// import Upl from "./pages/Upl";
// // import nestLayout from "./Layout/nestLayout";
// // import nestPage from "./pages/nestPage";
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/upload" element = {<Upl />}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App />);

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home";
import Upl from "./pages/Upl";
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<Upl />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-006fyqkon6m7rf4w.us.auth0.com"
    clientId="ZNg7BnproP8f3ubMkpbOp7RZAUpGJlqM"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/upload",
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
