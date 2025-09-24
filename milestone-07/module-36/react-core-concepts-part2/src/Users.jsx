import { use } from "react"

export default function Users({ fetchUsers }) {

    const users = use(fetchUsers);
    console.log(users);

    return (
        <div className="border-card">
            <h3>No. of Users: {users.length}</h3>
        </div>
    )
}