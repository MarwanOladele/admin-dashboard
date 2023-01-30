import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const deleteData = (id) => {
    const newData = data.filter((item) => item.id != id);
    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlist_user">
            <img src={params.row.img} alt="img" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 230,
    },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        // console.log(userRows.id);
        return (
          <>
            <Link to={`product/${params.row.id}`}>
              <button className="productedit">Edit</button>
            </Link>
            <DeleteIcon
              className="productdelete"
              onClick={() => deleteData(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
