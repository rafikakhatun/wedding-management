import React from 'react';

const UserPage = () => {
    return (

        <>
            {/*User Table controler*/}
            <div className='p-4 bg-white shadow-lg rounded-xl min-h-[70vh]'>
                <h2 className='text-3xl font-bold text-slate-800 mb-6'>User Managment</h2>

                {/*action bar*/}
                <div className='flex flex-col md:flex-row justify-end items-center mb-6 space-y-4 md:space-y-0'>
                    <div className='flex space-x-3'> 
                        {/*pdf button */}
                        <button onClick={()=>handleExport('pdf')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition '>
                            <span>Export PDF</span>
                        </button>

                        {/*excel button*/}
                        <button onClick={()=>handleExport('excel')} className='flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-300 transition '>
                            <span>Export Excel</span>
                        </button>
                    </div>

                </div>


            </div>



        </>
    );
};

export default UserPage;