import {Link} from "react-router-dom";
import Search from "../../components/home/search/search";
import "./admin.css";
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import ReactDataTable from 'react-datatable-with-bootstrap'
import {useDispatch} from "react-redux";
import {getAllAdminRaw} from "../../redux/action/admin";
import {getAllArtist} from "../../redux/action/artists";

export default function Admin() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [response, setResponse] = useState("");
    const [adminLoader, setAdminLoader] = useState('');
    const [apiData, setApiData] = useState({
        'pageNate': [0, 10], 'totalTableData': 12, 'data': []
    });

    const dataTablesOptions = {
        'tableOptions': {
            'table_title': 'Hello', 'className': 'table table-hover'
        }, 'colums': [
            {
                'column_properties': {
                    'name': 'id', 'title': 'Id', 'allowSort': false
                }, 'text': [{
                    'name': 'id', 'show': true,
                }]
            },
            {
                'column_properties': {
                    'name': 'username', 'title': 'Username', 'allowSort': false
                }, 'text': [{
                    'name': 'username', 'show': true,
                }]
            },
            {
                'column_properties': {
                    'name': 'phone_no', 'title': 'Contact No', 'allowSort': false
                }, 'text': [{
                    'name': 'phone_no', 'show': true,
                }]
            },
            {
                'column_properties': {
                    'name': 'email', 'title': 'Email', 'allowSort': false
                }, 'text': [{
                    'name': 'email', 'show': true,
                }]
            },
            {
                'column_properties': {
                    'name': 'id', 'title': 'Role', 'allowSort': false
                }, 'text': [{
                    'name': 'id', 'show': true,
                }]
            },
            {
                'column_properties': {
                    'name': 'id', 'title': 'Status', 'allowSort': false
                },'fa_icon':
                    [
                        {
                            'show':  true,
                            'className':  'fa fa-free-code-camp'
                        },
                        {
                            'show':  true,
                            'className':  'fa fa-trash',
                            'extra':
                                {
                                    'depend_from_this_field':  'extra_icon',
                                    'conditional':  (1==3) ? false :true
                                }
                        }
            ]
            },
            {
                'column_properties': {
                    'name': 'id', 'title': 'Actions', 'allowSort': false
                }, 'button': [{
                    'actionType': 'preview',
                    'show': true,
                    'title': 'view more details',
                    'passValue': 'id',
                    'className': 'btn btn-outline-success btn-sm',
                },]
            },]
    }

    useEffect(() => {
        getAllAdmins();
    }, []);

    const handleModal = () => {
        setShow(!show);
    }

    const getAllAdmins = () => {
        dispatch(getAllAdminRaw()).then((res) => {
            setApiData({
                'pageNate': [0, 10], 'totalTableData': res.data.records.total, 'data': res.data.records.data
            })
        });
    }

    const dataTableBtnAction = (id, actionType, e) => {
        if (actionType === 'preview') {
            alert(id)
        }
    }

    const dataTableOnChange = (state) => {
        console.log('Change States from DataTable: ', state.apiData)
    }

    return (<div className="admin">
        <ReactDataTable dataTablesOptions={dataTablesOptions}
                        dataTableBtnAction={dataTableBtnAction}
                        dataTableOnChange={dataTableOnChange}
                        dataTableData={apiData}
        />
        <div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton><b>Add Admin</b></Modal.Header>
                <Modal.Body>
                    <div className="form-group dPadding">
                        <label style={{fontWeight: "bolder"}}>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"/>
                    </div>

                    <div className="form-group dPadding">
                        <label style={{fontWeight: "bolder"}}>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"/>
                    </div>

                    <div className="form-group dPadding">
                        <label style={{fontWeight: "bolder"}}>Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-model" onClick={handleModal}>Close</button>
                    <button className="btn btn-model" onClick={handleModal}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
        <Search/>
        <span style={{color: "#7A7A7A"}} className="pl-1">
        users/artists
      </span>
        {/* card */}
        <div className="card card-outline-secondary mt-2 ">
            {/* heading */}
            <div
                className="card-header"
                style={{
                    display: "flex", justifyContent: "space-between",
                }}
            >
                <h3 className=" mb-0 ">List Of Admins</h3>
                <button className="btn-add-artist" onClick={handleModal}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span>Add new Admin</span>
                </button>
            </div>
            {/* body */}
            <div className="artist-card-body pl-4">
                {/* admin table */}
                {/* table for artish detail*/}
                <table className="table table-striped">
                    <thead>
                    {/* table list */}
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* table body item1 start */}
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <div className="artist-img">
                                <img src="" alt=""/>
                                <span>Wade Warren</span>
                            </div>
                        </td>
                        <td>02552215</td>
                        <td>@gmail.com</td>
                        <td>Owner</td>
                        <td className="admin-status">
                            Active
                            <div className="admin-active"></div>
                        </td>
                        <td>
                            <Link to="/dashboard/admin/admin-profile">view Detail</Link>
                        </td>
                    </tr>
                    {/* table body item1 end */}
                    {/* table body item1 start */}
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <div className="artist-img">
                                <img src="" alt=""/>
                                <span>Wade Warren</span>
                            </div>
                        </td>
                        <td>02552215</td>
                        <td>@gmail.com</td>
                        <td>Admin</td>
                        <td className="admin-status">
                            Active
                            <div className="admin-offline"></div>
                        </td>
                        {" "}
                        <td>
                            <Link to="/dashboard/admin/admin-profile">view Detail</Link>
                        </td>
                    </tr>
                    {/* table body item1 end */}
                    {/* table body item1 start */}
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <div className="artist-img">
                                <img src="" alt=""/>
                                <span>Wade Warren</span>
                            </div>
                        </td>
                        <td>02552215</td>
                        <td>@gmail.com</td>
                        <td>Admin</td>
                        <td className="admin-status">
                            Active
                            <div className="admin-active"></div>
                        </td>
                        <td>
                            <Link to="/dashboard/admin/admin-profile">view Detail</Link>
                        </td>
                    </tr>
                    {/* table body item1 end */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}
