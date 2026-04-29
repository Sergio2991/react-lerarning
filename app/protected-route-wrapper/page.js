import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
export default function ProtectedRouteBasic({ isAuthenticated, fallback, children }) {
  if (!isAuthenticated) return fallback || null;
  return children;
}
  
USAGE
`,
  `INTERMEDIATE PROTECTED ROUTE WRAPPER WITH REDIRECT LOGIC, LOADING STATE, CLEANER FALLBACK UI
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRouteIntermediate({
  isAuthenticated,
  loading,
  redirectTo = "/signin",
  children,
}) {
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [loading, isAuthenticated, router, redirectTo]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return children;
}
  
USAGE
<ProtectedRouteIntermediate
  isAuthenticated={!!user}
  loading={authLoading}
  redirectTo="/signin"
>
  <Dashboard />
</ProtectedRouteIntermediate>`,
  `ADVANCED PROTECTED ROUTE 
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProtectedRouteAdvanced({
  isAuthenticated,
  loading,
  allowedRoles,
  userRole,
  redirectTo = "/signin",
  loadingComponent,
  unauthorizedComponent,
  children,
}) {
  const router = useRouter();

  const isAuthorized =
    allowedRoles && userRole ? allowedRoles.includes(userRole) : true;

  useEffect(() => {
    if (!loading && (!isAuthenticated || !isAuthorized)) {
      setTimeout(() => {
        router.push(redirectTo);
      }, 300);
    }
  }, [loading, isAuthenticated, isAuthorized, router, redirectTo]);

  if (loading) {
    return (
      loadingComponent || (
        <div className="w-full h-screen flex items-center justify-center text-gray-600">
          Checking access…
        </div>
      )
    );
  }

  if (!isAuthenticated) return null;
  if (!isAuthorized)
    return (
      unauthorizedComponent || (
        <div className="w-full h-screen flex items-center justify-center text-red-600">
          Access denied
        </div>
      )
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
  
USAGE
<ProtectedRouteAdvanced
  isAuthenticated={!!user}
  loading={authLoading}
  userRole={user?.role}
  allowedRoles={["admin", "editor"]}
  redirectTo="/signin"
>
  <AdminDashboard />
</ProtectedRouteAdvanced>`,
];

const ProtectedRouteWrapper = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
};

export default ProtectedRouteWrapper;
