// const { signIn, signOut, getSession } = require("next-auth/client");
// import axios from "axios";
export {};
// export default async function auth(req: any, res: any) {
//   const { method, query } = req;
//   const { provider } = query;

//   switch (method) {
//     case "GET":
//       // Check if user is already authenticated
//       const session: any = await getSession({ req });
//       if (session) {
//         return res.redirect("/");
//       }

//       // Render sign-in page
//       return signIn(provider);

//     case "POST":
//       // Authenticate user using .NET API
//       const { email, password } = req.body;
//       const { data } = await axios.post("https://your-api.com/auth/login", {
//         email,
//         password,
//       });

//       if (!data.token) {
//         return res.status(401).json({ error: "Invalid credentials" });
//       }

//       // Create session with JWT token
//       const session2 = {
//         jwt: data.token,
//         user: {
//           id: data.user.id,
//           email: data.user.email,
//         },
//       };

//       return signIn(provider, { session2 });

//     case "DELETE":
//       // Sign out user
//       return signOut({ callbackUrl: "/" });

//     default:
//       return res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
