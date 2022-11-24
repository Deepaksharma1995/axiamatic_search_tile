import React, { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { productList } from "./json/productJson";
// import axios from "axios";

import "./App.css";
import {
  productListReducer,
  initialState,
} from "./reducers/ProductListReducers";

const TilesContainer = React.lazy(() =>
  import("./Components/add-component-tiles/TilesContainer")
);

const AddComponent = React.lazy(() =>
  import("./Components/add-components-page/AddComponent")
);

const Header = React.lazy(() => import("./Components/header/Header"));

function App() {
  const [state, dispatch] = useReducer(productListReducer, initialState);

  useEffect(() => {
    async function getproductData() {
      Promise.resolve(productList).then((res) =>
        dispatch({ type: "FETCH_PRODUCTS", data: res })
      );
    }

    setTimeout(getproductData, 500);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex-container main">
        <TilesContainer products={state} handleProductSelect={dispatch} />
        <AddComponent products={state} handleProductSelect={dispatch} />
      </div>
    </div>
  );
}

export default App;
