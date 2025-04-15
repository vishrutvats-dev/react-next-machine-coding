import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owned Metadata",
  description: "This is created by Dev Team",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-row border border-solid border-gray-50 gap-2 rounded">
        <div className="flex-1 border border-solid border-green-100 rounded justify-center items-center">
          <p>This is the first line S1</p>
          <p>The env variable is {process.env.TSC}</p>
        </div>
        <div className="flex-1 border border-solid border-green-100 rounded justify-center items-center">
          <p>This is first line S2</p>
          <p>This is second line S2</p>
          <p>This is third line S2</p>
        </div>
        <div className="flex-1 border border-solid border-green-100 rounded justify-center items-center">
          <p>This is first line S3</p>
          <p>This is second line S3</p>
        </div>
      </div>
      <Link className="text-blue" href="/logout">
        Logout
      </Link>
    </>
  );
}
