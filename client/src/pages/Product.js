import React from 'react';

import ProductDb from '../api';
import ViewProduct from '../components/ViewProduct';

const Product = (props) => {

    const getProdId = () => (parseInt(props.match.params.id, 10));
    const getProd = () => (ProductDb.get(getProdId()));
    const getTravelPath = () => (getProd().travelPath)

    return(
        <ViewProduct 
            prodId={getProdId()}
            product={getProd()}
            travelPath={getTravelPath()}
        />
    );

}

export default Product;