"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Hoş Geldin</h1>
                <p className="text-gray-500 mb-6">
                    Auth0 hesabınla giriş yaparak devam et.
                </p>
                <button
                    onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
                    className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                    Auth0 ile Giriş Yap
                </button>
            </div>
        </div>
    );
}
