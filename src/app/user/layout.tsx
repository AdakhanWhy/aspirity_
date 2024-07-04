import HomeLink from "@/components/backButton/HomeLink";
import UserInfo from "@/components/userInfo/UserInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "user info",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-auto w-4/5">
            <UserInfo />
            {children}
        </div>
    );
}
