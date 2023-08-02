"use client";

import useSWR from "swr";

const Client = () => {
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Sign in to see this page");
    }
    return res.text();
  };
  const { isLoading, data, error } = useSWR("/api/secret", fetcher);
  return (
    <div>
      <p>{error ? error : isLoading ? "loading" : data}</p>
    </div>
  );
};

export default Client;
