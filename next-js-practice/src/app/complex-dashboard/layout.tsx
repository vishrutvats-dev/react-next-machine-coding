import React from "react";

function ComplexDashboardLayout({children, userAnalytics, notifications, revenue}: {children: React.ReactNode, 
    userAnalytics: React.ReactNode, notifications: React.ReactNode, revenue: React.ReactNode
}) {

    const isLoggedIn = true;
    return( isLoggedIn ?
    <>
    <h1>Complex Dashboard Layout!</h1>
    <div>{children}</div>
    <div>{revenue}</div>
    <div>{notifications}</div>
    <div>{userAnalytics}</div>
    </>: <div>Please login to continue</div>)
}

export default ComplexDashboardLayout;