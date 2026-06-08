import { lazy, Suspense } from "react";
import "./App.css";
const HostButton = lazy(() => import("remoteApp/HostButton"));

function App() {
  return (
    <>
      <div>hello</div>
      <Suspense fallback={<div>Loading remote app...</div>}>
        <HostButton text="remote button" />
      </Suspense>
    </>
  );
}

export default App;
