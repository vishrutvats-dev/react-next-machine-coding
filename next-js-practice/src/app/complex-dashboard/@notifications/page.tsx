"use client";
import React from 'react'
import Link from 'next/link';

function Notifications() {
  return (
    <>
        <div>Notifications</div>
        <Link href="/complex-dashboard/archived">Goto Archived</Link>
    </>
  )
}

export default Notifications