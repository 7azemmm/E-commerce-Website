import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, forgetPassword, loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { createReview, deleteReviewOnProduct, updateReviewOnProduct } from './../../redux/actions/reviewAction';

// Custom React hook for editing a review
const EditRateHook = (review) => {
  const dispatch = useDispatch();

  // State variables
  const [loading, setLoading] = useState(true);
  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);
  const [showEdit, setShowEdit] = useState(false);

  // Function to close the edit form
  const handleCloseEdit = () => setShowEdit(false);
  
  // Function to show the edit form
  const handleShowEdit = () => setShowEdit(true);

  // Function to handle changes in the review text
  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };

  // Function to handle changes in the review rating
  const OnChangeRateValue = (val) => {
    setNewRateValue(val);
  };

  // Function to handle the edit action
  const handelEdit = async () => {
    setLoading(true);
    await dispatch(updateReviewOnProduct(review._id, {
      review: newRateText,
      rating: newRateValue
    }));
    setLoading(false);
    handleCloseEdit();
  };

  // Redux state
  const res = useSelector(state => state.reviewReducer.updateReview);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية التعديل", "error");
      }
    }
  }, [loading]);

  // Return values
  return [showEdit, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue];
};

export default EditRateHook;
