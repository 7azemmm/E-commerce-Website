import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteicon from '../../images/delete.png'
import editicon from '../../images/edit.png'
import { ToastContainer } from 'react-toastify';


import DeleteRateHook from '../../hook/review/delete-rate-hook'
import EditRateHook from '../../hook/review/edit-rate-hook'
import ReactStars from 'react-rating-stars-component'
const RateItem = ({ review }) => {



    const [isUser, handelDelete, handleShow, handleClose, showDelete] = DeleteRateHook(review);
    const [showEdit, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue] = EditRateHook(review)

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            OnChangeRateValue(newValue);
        }
    };
}


export default RateItem