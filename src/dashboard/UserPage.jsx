import { FileText, Loader2, Sheet, Smile, Trash2 } from "lucide-react";

import React, { useEffect, useState } from 'react';
import ConfirmationModal from "./ConfirmationModal";

const UserPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUser] = useState([]) // user state
    const [isLoading, setIsLoading] = useState(false) // loader state
    const [error, setError] = useState(null) // error msg state
    const [userToDelete,setUserToDelete] = useState(null) // State to store which user is to be deleted



    // all user get api call
    const fetchUser = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5001/api/users/all')
            if (!response.ok) {
                throw new Error('Failed to fetch users data')
            }

            const data = await response.json();
            setUser(data)

        } catch (error) {
            setError(error.message);
            setUser([])

        } finally {
            setIsLoading(false);
        }
    }

    console.log(users)

    useEffect(() => {
        fetchUser()

    }, [])

    // Handles delete action when the delete button is clicked

    const handleDeleteClick = (user) => {
        setIsOpen(true)
        setUserToDelete(user)

    }

    // This function is called when the user confirms deletion in the modal.
    const confirnDelete = () => {
     setIsOpen(false);
     console.log(userToDelete)
        
    }




    // pdf and excel logic
    const handleExport = (name) => {
        alert(name)
        console.log(name)

    }




    return (





        <>
            {/*User Table controler*/}
            <div className='p-4 bg-white shadow-lg rounded-xl min-h-[70vh]'>
                <h2 className='text-3xl font-bold text-slate-800 mb-6'>User Managment</h2>

                {/*action bar*/}
                <div className='flex flex-col md:flex-row justify-end items-center mb-6 space-y-4 md:space-y-0'>
                    <div className='flex space-x-3'>
                        {/*pdf button */}
                        <button onClick={() => handleExport('PDF')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition'>
                            <FileText className="w-5 h-5" />

                            <span>Export PDF</span>
                        </button>

                        {/*excel button*/}
                        <button onClick={() => handleExport('Excel')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition'>
                            <Sheet className="w-5 h-5" />
                            <span>Export Excel</span>
                        </button>
                    </div>

                    {/*for Loading*/}
                    {
                        isLoading && users.length > 0 && (
                            <div className="flex justify-center items-center mb-4 text-slate-500">
                                <Loader2 className="w-4 h-4 animate-spin" ></Loader2>
                                processing....
                            </div>
                        )

                    }

                    {/*end Loading*/}

                </div>

                {/*start user table */}
                <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-full divide-y divide-slate-200">
                        {/*table header */}
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Image</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">email</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">age</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">gender</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">status</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>




                            </tr>
                        </thead>

                        {/*Table body */}
                        <tbody className="bg-white divide-y divide-slate-200">
                            {
                                users.map((user) => (
                                    <tr key={user._id} className="hover:bg-slate-100">
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">
                                            <img src={user.profileImage} alt="" className="w-10 h-10 rounded-full object-cover" />
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{user.name}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{user.email}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{user.age}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{user.gender}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{user.status}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">
                                            <button onClick={() => handleDeleteClick(user)} className="p-1 text-red-500 hover:text-red-700 rounded-full transition-colors"><Trash2 className="rounded-full w-5 h-5"></Trash2></button>

                                        </td>


                                    </tr>
                                ))
                            }
                        </tbody>


                    </table>

                </div>



            </div>

            {/*Renders a confirmation modal when isOpen is true. */}
            <ConfirmationModal
                isOpen={isOpen}
                onConfirm={confirnDelete}
                onCancel={() => setIsOpen(false)}
                title="Confirm Delete"
                description={`Are you sure you want to delete user:${userToDelete?.name}?`}
                icon={Smile}
                variant="danger"
            ></ConfirmationModal>



        </>
    );
};

export default UserPage;

// name email password age gender profileimage 