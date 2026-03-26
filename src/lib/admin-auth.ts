export async function generateToken(): Promise<string> {
  const password = process.env.ADMIN_PASSWORD || "SmartMoments-Admin-2026!";
  const secret = process.env.JWT_SECRET || "smartmoments-jwt-secret-2026";
  const data = new TextEncoder().encode(password + secret);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function verifyAdmin(request: Request): Promise<boolean> {
  try {
    const cookieHeader = request.headers.get("cookie");
    if (!cookieHeader) return false;

    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => {
        const [key, ...val] = c.trim().split("=");
        return [key, val.join("=")];
      })
    );

    const token = cookies["admin_token"];
    if (!token) return false;

    const expected = await generateToken();
    return token === expected;
  } catch {
    return false;
  }
}
