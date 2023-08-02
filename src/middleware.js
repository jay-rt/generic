import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const authMiddleware = async (req) => {
  const res = NextResponse.next();
  const token = await getToken({ req });
  // const token = await getToken({ req, raw: true });
  console.log(token);
  if (!token) {
    return new NextResponse("Please sign in to view this page!", {
      status: 401,
    });
  }
  return res;
};

export const config = {
  matcher: ["/api/secret/:path*", "/", "/secret/:path*"],
};

export default authMiddleware;

// export { default } from "next-auth/middleware";
