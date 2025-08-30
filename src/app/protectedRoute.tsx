// app/components/ProtectedRoute.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface ProtectedRouteProps {
    children: React.ReactNode;
    fallback?: string;
}

export default async function ProtectedRoute({
    children,
    fallback = "/login",
}: ProtectedRouteProps) {
    const session = await getServerSession(authOptions);
    if (!session) redirect(fallback);

    return <>{children}</>;
}
