import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { writeClient } from "./sanity/lib/WriteClient";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) {
        console.error("Missing email or sub in user object.");
        return false;
      }

      try {
        const oauthId = user.email;
        const existingAuthor = await writeClient.fetch(
          `*[_type == "author" && oauthId == $oauthId][0]`,
          { oauthId }
        );
        if (!existingAuthor) {
          await writeClient.create({
            _type: "author",
            name: user.name,
            email: user.email,
            oauthId,
            image: user.image,
          });
        } else {
          console.log("ℹ️ Author already exists in Sanity.");
        }

        return true;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        return false;
      }
    },

    async session({ session }) {
      if (!session?.user?.email) {
        console.error("Missing email in session user object.");
        return session;
      }

      try {
        const sanityId = await writeClient.fetch(
          `*[_type == "author" && email == $email][0]._id`,
          { email: session.user.email }
        );
        session.user.sanityId = sanityId;
      } catch (error) {
        console.error("❌ Error fetching Sanity ID in session callback:", error);
      }

      return session;
    },
  },
});
