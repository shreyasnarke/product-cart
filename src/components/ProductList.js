function ProductList(props) {
  const tableHeader = [
    "Product-Id",
    "Product-Title",
    "Product-Description",
    "Product-Price",
  ];
  const { ProductData, headerText } = props;
  return (
    <div className="product-table">
      <div className="table-data">
        {tableHeader.map((index, label) => {
          return (
            <div className="header-text" key={`${headerText}${label}`}>
              {`${index}`}
            </div>
          );
        })}
        ;
      </div>
      <div className="table">
        {ProductData?.map((data, label) => {
          return (
            <div key={`${headerText}${label}`} className="table-container">
              <div className="id">{`${data.id}`}</div>
              <div className="title">{`${data.title}`}</div>
              <div className="description">{`${data.description}`}</div>
              <div className="price">{`${data.price}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
