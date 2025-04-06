import Dashboard from "@/components/Dashboard";

export default function DashboardCheck() {

    function setRandomNumber() {
        return Math.random()
    }

    if(setRandomNumber() < 1) {
        throw new Error("98 error number")
    }

    return <Dashboard/>
}