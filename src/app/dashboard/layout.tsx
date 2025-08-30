import ProtectedRoute from "../protectedRoute";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <ProtectedRoute>{children}</ProtectedRoute>;
}
