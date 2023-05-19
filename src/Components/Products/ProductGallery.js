import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import product from '../../images/shorts1.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
const ProductGallery = () => {
    const images = [
        {
            original: `${product}`,
        },
        {
            original: `${product}`,
        },
        {
            original: `${product}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={product}
                showFullscreenButton={true}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
                autoPlay={true}
            />
        </div>
    )
}

export default ProductGallery
