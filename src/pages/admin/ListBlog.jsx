import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTable from '../../components/admin/BlogTable';

const ListBlog = () => {

    const [blogs,setBlogs] = useState([]);
    
    const fetchBlogs = async() => {
        setBlogs(blog_data)
    }

    useEffect(() => {
        fetchBlogs();
    },[]);

  return (
    <div className='flex-1 pt-5 sm:pt-12 sm:pl-16 bg-blue-50'>
        <h1>All Blogs</h1>

        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>

                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-600 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-2 py-4'> # </th>
                            <th scope='col' className='px-2 py-4'> Blog Title </th>
                            <th scope='col' className='px-2 py-4'> Date </th>
                            <th scope='col' className='px-2 py-4'> Status </th>
                            <th scope='col' className='px-2 py-4'> Actions </th>
                        </tr>
                    </thead>

                    <tbody>
                        {blogs.map((blog,index) => {
                            return <BlogTable key={blog._id} blog={blog} fetchBlog={fetchBlogs} index={index+1} />
                        })}
                    </tbody>
                </table>

            </div>
      
    </div>
  )
}

export default ListBlog
