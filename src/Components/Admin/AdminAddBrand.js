import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import avatar from '../../images/avatar.png' // Importing the avatar image
import AddBrandHook from './../../hook/brand/add-brand-hook'; // Importing the custom hook AddBrandHook

const AdminAddBrand = () => {

    const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] = AddBrandHook(); // Using the AddBrandHook custom hook to handle form submission and state

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div> {/* Displaying a text for adding a new brand */}
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div> 
                    <div>
                        <label htmlFor="upload-photo"> {/* Label for the file input */}
                            <img
                                src={img} // Displaying the brand image
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange} // Handling the image change event
                            id="upload-photo"
                        />
                    </div>
                    <input
                        type="text"
                        value={name} // Displaying the brand name
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                        onChange={onChangeName} // Handling the brand name change event
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button> {/* Button to save the changes */}
                </Col>
            </Row>

            {/* Conditional rendering based on isPress and loading state */}
            {isPress ? (loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4>) : null}

            <ToastContainer /> {/* ToastContainer component for displaying notifications */}
        </div>
    )
}

export default AdminAddBrand 

