import greaterSymbol from "@/assets/greater-than-symbol.png";
import "./SubProductRows.css";

function SubProductRows({ product, expandIDs, setExpandIDs }) {
  const toggleCheckbox = (id) => {
    const newValue = {
      ...expandIDs,
      [id]: !expandIDs[id],
    };
    setExpandIDs(newValue);
  };

  return (
    <>
      {product &&
        product?.map((ele) => (
          <div className="container">
            <div
              key={ele.id}
              className={
                ele?.product?.length > 0 ? "section" : "section-without-image"
              }
            >
              {ele?.product?.length > 0 && (
                <img
                  src={greaterSymbol}
                  alt="is expanded"
                  className={`${expandIDs[ele.id] ? "icon-expanded" : "icon-normal"}`}
                  onClick={() => toggleCheckbox(ele.id)}
                />
              )}
              <div>{ele.name}</div>
            </div>
            {ele?.product?.length > 0 && expandIDs[ele?.id] && (
              <SubProductRows
                product={ele.product}
                expandIDs={expandIDs}
                setExpandIDs={setExpandIDs}
              />
            )}
          </div>
        ))}
    </>
  );
}

export default SubProductRows;
