



import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
const ManagePatients = () => {
    const [users, setUsers] = useState([]);
    // console.log(users)
    // Fetch users from backend
    useEffect(() => {
        fetch("http://localhost:5000/users") // Update with your backend URL
            .then((res) => res.json())
            .then((data) => {
                const doctorUsers = data.filter((user) => user.role?.toLowerCase() === "patient");
                setUsers(doctorUsers);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);


    const handleDelete = async (email) => {
        // Show SweetAlert confirmation dialog before deleting
        const confirmDelete = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this user?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (!confirmDelete.isConfirmed) return;

        try {
            // Send a DELETE request to the backend to delete the user
            const res = await fetch(`http://localhost:5000/users/${email}`, {
                method: "DELETE",
            });

            const result = await res.json();  // Parse the JSON response

            if (res.ok) {
                // Successfully deleted the user
                setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));

                // Show success SweetAlert
                Swal.fire({
                    title: 'Deleted!',
                    text: result.message || 'The user has been deleted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                // Log and display the error message from the backend
                console.error("Failed to delete user:", result.message);

                // Show error SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: result.message || 'There was a problem deleting the user.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error("Error:", error);

            // Show error SweetAlert if there's a network or fetch error
            Swal.fire({
                title: 'Error!',
                text: 'There was an error while deleting the user. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };


    return (
        <div className="w-full">
            <div className="text-gray-900  h-screen w-full">
                <div className="px-4 py-1">
                    <h1 className="text-2xl font-semibold">Patient Profile</h1>
                    <p>A list of all the doctors in your platform including their photo, name, title, email and role.</p>
                </div>
                <div className="px-3 py-2 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead className="rounded-lg">
                            <tr className="border-b bg-[#FFEDD4] text-lg">
                                <th className="text-left p-3 px-5">User Photo</th>
                                <th className="text-left p-3 px-5">Name</th>
                                <th className="text-left p-3 px-5">Email</th>
                                <th className="text-left p-3 px-5">Role</th>
                                <th className="text-right p-3 px-12">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-orange-100 text-[16px]">
                                    <td className="p-3 px-5 w-16">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={
                                                    user?.photo
                                                        ? user?.photo
                                                        : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                                                }
                                                alt="user"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-3 px-5">{user.name}</td>
                                    <td className="p-3 px-5">{user.email}</td>
                                    <td className="p-3 px-5">{user.role}</td>
                                    <td className="p-3 px-5 text-right space-x-2">
                                        <button
                                            type="button"
                                            className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(user.email)}
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagePatients;






