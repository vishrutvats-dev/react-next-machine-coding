import Dashboard from "@/components/Dashboard";

export default function DashboardCheck() {
  function setRandomNumber() {
    return Math.random();
  }

  if (setRandomNumber() < 0.1) {
    throw new Error("98 error number");
  }

  return <Dashboard />;
}
