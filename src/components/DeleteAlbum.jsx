import React from 'react'
import Navbar from './Navbar'

const DeleteAlbum = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">UserID</label>
                    <input type="text" className="input form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteAlbum