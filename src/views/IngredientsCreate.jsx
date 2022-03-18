import React from "react";
const IngredientsCreate = (props) => {
  return props.ingredientsDetails.map((val, idx) => {
    let item = `item-${idx}`,
      quantity = `quantity-${idx}`,
      unit = `unit-${idx}`;
    return (
      <>
        <div className=" form-row pl-3 mb-2" key={val.index}>
          <div className="col">
            <input
              type="text"
              className="form-control required"
              placeholder="Items"
              name="name"
              id={item}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control required"
              placeholder="Quantity"
              name="author"
              id={quantity}
            />
          </div>
          <div className="col">
            <select className="form-control" name="type" id={unit}>
              <option>Unit</option>
              <option>kg</option>
              <option>gm</option>
              <option>ml</option>
              <option>glass</option>
              <option>Table spoon</option>
            </select>
          </div>

          <div className="col ">
            {idx === 0 ? (
              <button
                onClick={() => props.add()}
                type="button"
                className="btn btn-light text-center"
                style={{ width: "55px", height: "37px" }}
              >
                <i className="fa fa-plus-circle" aria-hidden="true" />
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => props.delete(val)}
                style={{ width: "55px", height: "37px" }}
              >
                <i className="fa fa-minus" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </>
    );
  });
};
export default IngredientsCreate;
