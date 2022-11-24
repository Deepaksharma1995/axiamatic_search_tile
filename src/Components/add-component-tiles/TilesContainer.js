import React from "react";

import Tiles from "./Tiles";

import "./tiles-container.css";

const TilesContainer = (props) => {
  const { products, handleProductSelect } = props;

  const totalSelected = products?.selectedProduct?.filter(
    (data) => data.id !== null
  ).length;
  return (
    <div className="tiles-container add-container column-tiles">
      <div className="flex-container tiles-container-wrap">
        {products?.selectedProduct?.map((data, id) => (
          <Tiles
            key={`${id}_tiles`}
            tileData={data}
            handleProductSelect={handleProductSelect}
            products={products}
          />
        ))}
      </div>
      <div>
        <p className="tiles-container--total">
          {totalSelected ? totalSelected : 0} Product selected
        </p>
      </div>
    </div>
  );
};

export default TilesContainer;
