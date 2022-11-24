import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import "./add-component.css";
import { debouncedInput } from "../../common/util";

const AddComponent = (props) => {
  const { products, handleProductSelect } = props;
  const [visible, setVisible] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (products.productData.length) {
      setFilterProducts([...products?.productData]);
    }
  }, [products]);

  const handleFocusInput = () => {
    setVisible(!visible);
  };

  function handleInputChange(e) {
    setVisible(true);
    setFilterProducts([
      ...products.productData.filter((data) =>
        data.name.includes(e.target.value)
      ),
    ]);
  }

  //api was not there so just mocking the behavior
  const handleSubmitToApi = async () => {
    setVisible(false);
    if (!products?.selectedProduct?.some((data) => data.id !== null)) {
      alert("please slect atleast one Item");
      return;
    } else {
      setTimeout(() => {
        alert("Query successfully submitted");
      }, 1000);
    }
  };

  const debouncedInputHandler = debouncedInput(handleInputChange, 1000);

  const handleOnClickProduct = (data) => {
    if (!products.selectedProduct.some((prod) => prod.id === null)) {
      alert("max items selected");
      return;
    }
    if (products.selectedProduct.filter((prod) => prod.id === data.id).length) {
      return;
    }

    let tempData = [...products?.selectedProduct];
    tempData.shift();
    tempData.push({ id: data.id });
    handleProductSelect({ type: "SELECT_PRODUCT", data: tempData });
  };

  return (
    <div className="add-container">
      <div className="step">
        <p className="steps-number">1 of 3</p>
      </div>
      <h2 className="header-sub">Let's add your internal tools</h2>
      <p>
        Search to quickly add products your team uses today. You'll be able to
        add as many as you need later but now lets add four.
      </p>
      <Form.Group
        className="form-width"
        onFocus={handleFocusInput}
        // onBlur={() => setVisible(false)}
        onChange={(e) => debouncedInputHandler(e)}
      >
        <Form.Control
          type="text"
          id="search-bar"
          aria-describedby="passwordHelpBlock"
          placeholder="Search for any software..."
          className="input-bar"
        />
        {visible && (
          <ul className="ul-no-label">
            {products?.productData.length &&
              filterProducts?.map((data, index) => (
                <li
                  key={`${index}_${data?.id}`}
                  className={
                    products?.selectedProduct?.some(
                      (prod) => prod.id === data.id
                    )
                      ? "li-selected"
                      : "li-hover"
                  }
                  onClick={() => handleOnClickProduct(data)}
                >
                  <img src={data?.src} alt="thumbnail" className="thumbnail" />
                  {data?.name}
                </li>
              ))}
          </ul>
        )}
        <Button
          variant="primary"
          className="form-width mt20"
          onClick={handleSubmitToApi}
        >
          Next
        </Button>
      </Form.Group>
    </div>
  );
};

export default AddComponent;
