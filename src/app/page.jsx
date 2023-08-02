import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="buttons">
        <Link href="/secret/client">
          <button type="button">Secret - Client Component</button>
        </Link>
        <Link href="/secret/server">
          <button type="button">Secret - Server Component</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
