import React from "react";

const Tiles = (props) => {
  const { tileData, handleProductSelect, products } = props;

  const productDetail = products?.productData?.filter(
    (data) => data?.id === tileData.id
  );

  const handleProductRemove = (data) => {
    const tempData = products?.selectedProduct?.filter(
      (prod) => prod.id !== data.id
    );
    tempData.unshift({ id: null });
    handleProductSelect({ type: "REMOVE_PRODUCT", data: tempData });
  };

  if (tileData.id) {
    return (
      <div className="tiles tiles--center">
        <button
          className="bottom-flt"
          onClick={() => handleProductRemove(tileData)}
        >
          &#9747; remove
        </button>
        <p>{productDetail[0]?.name}</p>
        <img
          src={productDetail[0]?.src}
          alt="thumbnail"
          className="tile-img mt20"
        />
      </div>
    );
  }

  return (
    <div className="tiles tiles--center">
      <div className="tiles--center tiles-without-check">+</div>
    </div>
  );
};

export default Tiles;
