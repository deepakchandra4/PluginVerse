import { useFormik } from 'formik';
import React from 'react'

const ManageStorePlugin = () => {

    const storePluginForm = useFormik({
        initialValues: {
            siteName: '',
            
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const getPluginCode = () => {
        return ``
    }

  return (
    <div>
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h3>Manage Store Plugin</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Website Name</label>
                            <input className='form-control' id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageStorePlugin;