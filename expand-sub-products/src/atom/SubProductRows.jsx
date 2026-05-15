import greaterSymbol from "@/assets/greater-than-symbol.png";
import "./SubProductRows.css";

function SubProductRows({ product }) {
  return (
    <>
      {product?.map((ele) => (
        <div key={ele.id}>
          <div className="section">
            <img src={greaterSymbol} alt="is expanded" />
            <div>{ele.name}</div>
          </div>
          {ele?.product?.length > 0 && <SubProductRows product={ele.product} />}
        </div>
      ))}
    </>
  );
}

export default SubProductRows;
