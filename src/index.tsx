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
// import Layout2 from "./Layout/Layout2";
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<Upl />} />
        </Route>
{/* 
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Upl />} />
          <Route path="/upload" element={<Upl />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-2jn0binpdgp7d2ic.us.auth0.com"
    clientId="7RmP2x3MF0EpZifve4vG96gkkMmsUX1u"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/upload",
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
