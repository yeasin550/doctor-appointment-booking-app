import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
// import { useForm } from "react-hook-form";
// import Modal from "react-modal";
// import Swal from 'sweetalert2';
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([]);
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const { register, handleSubmit, reset } = useForm();

    // const openModal = () => {
    //     reset({
    //         name: userData?.name,
    //         email: userData?.email,
    //         photo: userData?.photo,
    //         // role: userData?.role
    //     });
    //     setModalIsOpen(true);
    // };
    // const closeModal = () => {
    //     setModalIsOpen(false);
    // };
    // const onSubmit = async (data) => {
    //     console.log(data);
    //     const res = await fetch(`https://management-server-flame.vercel.app/users/${userData._id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });

    //     const result = await res.json();
    //     if (result.modifiedCount > 0) {
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Profile Updated',
    //             text: 'Your profile was updated successfully!',
    //             timer: 2000,
    //             showConfirmButton: false
    //         });
    //         setUserData({ ...userData, ...data }); // update UI without refetch
    //         closeModal();
    //     }
    // };

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    const foundUser = data.find((u) => u.email === user.email);
                    setUserData(foundUser);
                    // console.log(foundUser)
                })
                .catch((error) => console.error("Error fetching user data:", error));
        }
    }, [user?.email]);
    // console.log(userData)
    return (
        <div>
            <div className="bg-[var(--bg-color)] flex flex-col min-h-screen -mt-14 items-center justify-center">
                <h1 className="text-[30px] font-medium">
                    Hello{" "}
                    <span className="text-[#6c3e9e] font-semibold">
                        {userData.name ? userData.name : userData.email}
                    </span>
                    , Welcome to dashboard!
                </h1>

                <div className="w-full md:w-1/2 mt-12 md:mx-auto flex flex-col md:flex-row items-center justify-center text-center">
                    <img
                        className="inline-flex object-cover border hover:border-2 hover:shadow-xl border-indigo-600 rounded-full shadow-indigo-600/100 dark:shadow-indigo-700/100 bg-indigo-50 h-32 w-32 mb-4 md:mb-0 ml-0 md:mr-5"
                        src={
                            userData?.photo
                                ? userData?.photo
                                : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                        }
                        alt=""
                    />
                    <div className="flex flex-col">
                        <div className="md:text-justify mb-3">
                            <div className="flex flex-col mb-2">
                                <h1 className="text-indigo-900 mb-1 font-semibold text-xl">
                                    Role : {userData?.role}
                                </h1>
                                <p className="text-indigo-700 text-lg"><span className="font-semibold">Name : </span>{userData?.name}</p>
                                <p className="text-indigo-900 text-lg"><span className="font-semibold">Email : </span>{userData?.email}</p>
                                <ul className="mt-2 flex flex-row items-center justify-center md:justify-start ">
                                    <li className="mr-5">
                                        <a className="cursor-pointer">
                                            <svg
                                                className="h-6 text-indigo-700 hover:text-indigo-300"
                                                fill="currentColor"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>GitHub</title>
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer">
                                            <svg
                                                className="h-6 text-indigo-700 hover:text-indigo-300"
                                                fill="currentColor"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Twitter</title>
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-5">
                                        <a className="cursor-pointer">
                                            <svg
                                                className="h-6 text-indigo-700 hover:text-indigo-300"
                                                fill="currentColor"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>LinkedIn</title>
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                            </svg>{" "}
                                        </a>
                                    </li>
                                    <button
                                        // onClick={openModal}
                                        className="bg-blue-500 hover:bg-blue-600 text-white text-[15px] cursor-pointer px-3 py-1 rounded ml-5">
                                        ✏️ Edit
                                    </button>

                                    {/* <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-[90%] md:w-md mx-auto mt-10 z-50"
                                        overlayClassName="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-40"
                                    >
                                        <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Update Profile</h2>
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                            <input
                                                {...register("name")}
                                                placeholder="Name"
                                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded"
                                            />
                                            <input
                                                {...register("photo")}
                                                placeholder="Photo URL"
                                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded"
                                            />
                                            <input
                                                {...register("email")}
                                                placeholder="Email"
                                                type="email"
                                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded"
                                            />
                                            <div className="flex justify-end gap-4">
                                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Update</button>
                                                <button onClick={closeModal} type="button" className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-50 dark:hover:bg-gray-800 transition">Cancel</button>
                                            </div>
                                        </form>
                                    </Modal> */}

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;