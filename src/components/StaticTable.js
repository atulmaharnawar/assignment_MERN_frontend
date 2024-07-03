import React from 'react'
import Table from 'react-bootstrap/Table';

const StaticTable = () => {

    const staticUsers = [
        {
            id: 1,
            name: "Michael Holz",
            date: "04/10/2013",
            role: "Admin",
            status: "Active"
        },
        {
            id: 2,
            name: "Martin Sommer",
            date: "05/08/2014",
            role: "Publisher",
            status: "Inactive"
        },
        {
            id: 3,
            name: "Antonio Moreno",
            date: "05/08/2015",
            role: "Publisher",
            status: "Suspended"
        },
        {
            id: 4,
            name: "Mary Savelay",
            date: "06/09/2016",
            role: "Reviewer",
            status: "Active"
        },
        {
            id: 5,
            name: "Marceline Avila",
            date: "21/05/2016",
            role: "Reviewer",
            status: "Suspended"
        },
        {
            id: 6,
            name: "Paula Wilson ",
            date: "12/08/2017",
            role: "Moderator",
            status: "Inactive"
        },
        {
            id: 7,
            name: "Kylan Gentry",
            date: "17/04/2012",
            role: "Moderator",
            status: "Active"
        },
        {
            id: 8,
            name: "Franklin Sierra",
            date: "07/11/2011",
            role: "Admin",
            status: "Inactive"
        },
    ];

    return (

        <>

            <div className='container my-auto text-center table-responsive'>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date Created</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staticUsers.map((user) => {
                            return <tr>
                                <td className='py-3 text-muted'>{user.id}</td>
                                <td className="fw-bold py-3">

                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src={`https://mdbootstrap.com/img/new/avatars/${user.id}.jpg`}
                                            className="rounded-circle"
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1 text-muted">{user.name}</p>
                                        </div>
                                    </div>

                                </td>
                                <td className='py-3 text-muted'>{user.date}</td>
                                <td className='py-3 text-muted'>{user.role}</td>
                                <td className='py-3'>
                                    {user.status === "Active" && <span className='badge text-bg-success rounded-pill d-inline'>{user.status}</span>}
                                    {user.status === "Inactive" && <span className='badge text-bg-primary rounded-pill d-inline text'>{user.status}</span>}
                                    {user.status === "Suspended" && <span className='badge text-bg-danger rounded-pill d-inline'>{user.status}</span>}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-rounded btn-sm fw-bold"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>

            </div>



        </>


    )

}

export default StaticTable