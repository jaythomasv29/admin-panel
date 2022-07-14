export const userColumns = [
  { field: "id", headerName: "ID", width: 85 },
  {
    field: "user",
    headerName: "User",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 190},
  { field: "age", headerName: "Age", type: "number", width: 110},
  { field: "status", headerName: "Status", width: 80,
    renderCell: (params) => {
      return (
        <span className={`cellWithStatus ${params.row.status}`}>{params.row.status}</span>
      )
    }
  }
];

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Snow",
    firstName: "Jon",
    status: "active",

    username: "snowjon35",
    email: "snowjon35@email.com",
    age: 35,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Lannister",
    firstName: "Cersei",
    status: "active",
    username: "cerseilannister42",
    email: "cerseilannister42@email.com",
    age: 42,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Lannister",
    firstName: "Jaime",
    status: "passive",
    email: "jaimelannister45@email.com",
    username: "jaimelannister45",
    age: 45,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Stark",
    firstName: "Arya",
    status: "passive",
    email: "starkarya16@email.com",
    username: "starkarya16",
    age: 16,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Targaryen",
    firstName: "Daenerys",
    status: "active",
    email: "tdaenery69@email.com",
    username: "tdaenery69",
    age: 69,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Melisandre",
    firstName: "Marco",
    status: "passive",
    email: "marcomilisandre150@email.com",
    username: "marcomilisandre150",
    age: 150,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Clifford",
    firstName: "Ferrara",
    status: "passive",
    username: "ferraraclifford44",
    email: "ferraraclifford44@email.com",
    age: 44,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Frances",
    firstName: "Rossini",
    status: "passive",
    email: "francesrossini36@gmail.com",
    username: "francesrossini36",
    age: 36,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Roxie",
    firstName: "Harvey",
    status: "active",
    email: "harveyroxie@email.com",
    username: "harveyroxie",
    age: 65,
  },
];
