function ProductList(props){
    const tableHeader=[
        "Product-Id",
        "Product-Title",
        "Product-Description",
        "Product-Price",
    ];
    const {filterData,headerText}=props;
    return(
        <div className="product-table">
            <div className="table-data">
                {tableHeader.map((index,label)=>{
                    return( 
                        <div className='header-text' key={'${headerText}${label}'}>
                        {'{$index}'}
                        </div>
                    )

                })};
            </div>
        <div className="table">
        {filterData?.map((data, index) => {
          return (
            <div key={`${headerText}${index}`} className="table-container">
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