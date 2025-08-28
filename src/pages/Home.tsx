import { useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useTestsStore } from "@entities";

export default function Home() {
  const { tests, isLoading, setLoading } = useTestsStore();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {tests.map((test) => (
        <li key={test.id}>{test.name}</li>
      ))}
    </>
  );
}
