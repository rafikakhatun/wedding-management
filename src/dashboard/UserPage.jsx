import { FileText, Loader2, Sheet } from "lucide-react";

import React, { useState } from 'react';

const UserPage = () => {

    const [user,setUser] = useState(0)
    const [isLoading,setIsLoading] = useState(false)

    // pdf and excel logic
     const handleExport = (name)=>{
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
                        <button onClick={()=>handleExport('PDF')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition'>
                            <FileText className="w-5 h-5" />

                            <span>Export PDF</span>
                        </button>

                        {/*excel button*/}
                        <button onClick={()=>handleExport('Excel')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition'>
                            <Sheet className="w-5 h-5" />
                            <span>Export Excel</span>
                        </button>
                    </div>

                    {/*loading*/}
                    {
                        isLoading && user.length > 0 && (
                            <div className="flex justify-center items-center mb-4 text-slate-500">
                                <Loader2 className="w-4 h-4 animate-spin" ></Loader2>
                                processing....
                            </div>
                        )

                    }

                </div>


            </div>



        </>
    );
};

export default UserPage;