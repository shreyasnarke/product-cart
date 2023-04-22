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
                {tableHeader.map(index,label)=>{
                    return( 
                        <div className='header-text' key={'${headerText}${label}'}
                        >{'{$index}'}</div>
                    )

                }};
            </div>
        </div>
    )
}
export default ProductList;