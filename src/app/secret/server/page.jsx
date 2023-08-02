import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const getData = async (token) => {
  const res = await fetch("http://localhost:3000/api/secret", {
    cache: "no-store",
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.text();
};

const Server = async () => {
  const session = await getServerSession(authOptions);
  const accessToken = session && session.accessToken;
  const data = await getData(accessToken);
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default Server;
