import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

interface IUser {
    id: number;
    name: string;
    email: string;
}

function UserTable() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        setUsers(data)
    }

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