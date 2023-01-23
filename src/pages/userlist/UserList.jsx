import "./UserList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import img from "../../assets/image1.png";

const UserList = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200, renderCell: (params) => {
        return (
            <div className="userlist_user">
                <img src={params.row.avatar} alt="img" />
                {params.row.username}
            </div>
        )
    } },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 90,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar: `${img}`,
      email: "johnsnow@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
