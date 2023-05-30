import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-hot-toast";


import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import app_config from "../../../config";

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
    { field: "_id", headerName: "ID", width: 150 },

    {
      field: "created_at",
      headerName: "Date",
      width: 150,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    { field: "title", headerName: "Title", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 200 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          console.log(thisRow._id);
          return deleteItem(thisRow._id);
          // return alert(JSON.stringify(thisRow, null, 4));
        };
        return (
          <button className="btn btn-danger" onClick={onClick}>
            Delete
          </button>
        );
        // return <Button onClick={() => deleteUser(thisRow._id)}>Delete</Button>;
      },
    },
    {
      field: "action2",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          console.log(thisRow);
          // return updateUser(thisRow._id);
          // return deleteUser(thisRow._id);
          // setselBlog(thisRow);
          // setSelImage(thisRow.image);
          // setOpen(true);
        };

        return (
          <button className="btn btn-primary" onClick={onClick}>
            <i class="fas fa-edit "></i>
          </button>
        );
      },
    },
  ];

  const deleteItem = async (id) => {
    const res = await fetch(`${apiUrl}/store/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 200) {
      fetchItems();
      toast.success("Item Deleted Successfully");
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
          // {...userList}
          rows={itemList}
          columns={columns}
          pagination
          getRowId={(obj) => obj._id}
          slots={{
            toolbar: CustomToolbar,
          }}
          checkboxSelection
          // onRowSelected={handleRowSelection}
        />
      );
    }
  };

  return (
    <div>
      <h1>Manage Items</h1>
      <div className="container">{displayItems()}</div>
    </div>
  );
};

export default ManageProduct;
