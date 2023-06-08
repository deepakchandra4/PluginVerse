import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-hot-toast';

import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import app_config from '../../../../config';
import Swal from 'sweetalert2';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const ManageProduct = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = app_config;

  const [selItem, setSelItem] = useState(null);

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },

    {
      field: 'created_at',
      headerName: 'Date',
      width: 100,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString()
    },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'price', headerName: 'Price', width: 80 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row._id);
          return deleteItem(params.row._id);
        };
        return (
          <button className="btn btn-danger" onClick={onClick}>
            Delete
          </button>
        );
      }
    },
    {
      field: 'action2',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          setSelItem(params.row);
        };

        return (
          <button className="btn btn-primary" onClick={onClick}>
            <i class="fas fa-edit "></i>
          </button>
        );
      }
    }
  ];

  const deleteItem = async (id) => {
    const res = await fetch(`${apiUrl}/store/delete/${id}`, {
      method: 'DELETE'
    });
    console.log(res.json);
    if (res.status === 200) {
      fetchItems();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Deleted Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const updateItem = async (id, data) => {
    const res = await fetch(`${apiUrl}/store/update/${id}`, {
      method: 'PUT'
    });
    console.log(res.json);
    if (res.status === 200) {
      fetchItems();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Deleted Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch(`${apiUrl}/store/getall`);
    const data = await res.json();
    console.log(data);
    setItemList(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const displayItems = () => {
    if (!loading) {
      return (
        <DataGrid
          style={{ backgroundColor: 'white' }}
          rows={itemList}
          columns={columns}
          pagination
          getRowId={(obj) => obj._id}
          slots={{
            toolbar: CustomToolbar
          }}
          checkboxSelection
          onRowSelectionModelChange={(e) => {
            console.log(e);
          }}
        />
      );
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.slidesdocs.com/responsive-images/background/blue-white-line-e-commerce-banner-simple-powerpoint-background_bceaf9c18d__960_540.jpg')`
      }}
    >
      <header className="bg-dark">
        <div className="container py-5">
          <h1 className="text-white fw-bold">Manage Store</h1>
        </div>
      </header>
      <div className="container">
        {displayItems()}
        {selItem && (
          <div className="card mt-5 ">
            <div className="card-header">
              <h4>Product Details ({selItem._id})</h4>
            </div>
            <div className="card-body">
              <div className="card-body">
                <div className="row">
                  {selItem.images.map((img) => (
                    <div className="col-3">
                      <img src={apiUrl + '/' + img} alt="" className="img-fluid" />
                    </div>
                  ))}
                </div>
                {[
                  { name: 'Product Name', key: 'title' },
                  { name: 'Description', key: 'description' },
                  { name: 'Features', key: 'features' },
                  { name: 'Price', key: 'price' },
                  { name: 'Quantity', key: 'quantity' },
                  { name: 'Category', key: 'category' },
                  { name: 'Brand', key: 'brand' }
                ].map((property) => (
                  <p className="h5 mt-3">
                    {' '}
                    {property.name} : {selItem[property.key]}{' '}
                  </p>
                ))}
              </div>

              <div className="card-footer">
                <button className="btn btn-warning" onClick={() => setSelItem(null)}>
                  Close
                </button>
                <button className="btn btn-danger ms-3" onClick={() => deleteItem(selItem._id)}>
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
