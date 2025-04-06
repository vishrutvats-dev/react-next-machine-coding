import Link from 'next/link'
import React from 'react'

function FileMain() {
  return (
    <>
    <div>FileMain</div>
    <Link href="/file/file2">Goto File 2</Link>
    <Link href="/file/dashboard">Goto Dashboard</Link>
    </>
  )
}

export default FileMain