import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchListUsers } from '../redux/user/user.slice';

function UserTable() {
    const users = useAppSelector(state => state.user.listUsers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchListUsers())
    })

    return (
        <Table className='p-5' striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>@{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default UserTable;