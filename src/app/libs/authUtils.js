import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/app/models/UserInfo";

export async function isAdmin() {
    try {
        const session = await getServerSession(authOptions);
        const userEmail = session?.user?.email;

        if (!userEmail) {
            return false;
        }

        const userInfo = await UserInfo.findOne({ email: userEmail });

        return userInfo?.admin || false;
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
}
