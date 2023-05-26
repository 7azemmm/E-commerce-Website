import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction'

const HomeBrandHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {    // useEffect hook to dispatch the getAllBrand action when the component mounts
        dispatch(getAllBrand());
    }, [])
    //get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand)
    //get last loading state from redux
    const loading = useSelector(state => state.allBrand.loading)//useSelector hook to get the last loading state from the redux store
    console.log(loading)

    return [brand, loading]
};

export default HomeBrandHook;