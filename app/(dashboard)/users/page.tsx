import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>Users
        <ul>
            <li>
                <Link href='/dashboard/users/1'> User 1 </Link> 
                <Link href='/dashboard/users/2'> User 2 </Link> 
                <Link href='/dashboard/users/3'> User 3 </Link> 
                <Link href='/dashboard/users/4'> User 4 </Link> 
                <Link href='/dashboard/users/5'> User 5 </Link> 
                <Link href='/dashboard/users/6'> User 6 </Link> 
                <Link href='/dashboard/users/7'> User 7 </Link> 
            </li>
        </ul>

    </div>
  )
}

export default page