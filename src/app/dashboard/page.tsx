"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Loading from "@/components/loading";

export default function DashboardClient() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.replace("/login");
    };

    if (status === "loading" || !session) {
        return (
            <Loading />
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                className="bg-white p-10 rounded-3xl shadow-xl text-center"
            >
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Hoş geldin, {session?.user?.name || "Kullanıcı"}!
                </h1>
                <p className="text-gray-500 text-lg mb-6">Giriş Başarılı ✅</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition-colors"
                >
                    Çıkış Yap
                </motion.button>
            </motion.div>
        </div>
    );
}
