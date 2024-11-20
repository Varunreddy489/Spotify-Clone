import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import ChatPage from "@/pages/chat/ChatPage.tsx";
import MainLayout from "@/layout/MainLayout.tsx";
import HomePage from "@/pages/home/HomePage.tsx";
import AlbumPage from "@/pages/album/AlbumPage.tsx";
import AdminPage from "@/pages/admin/AdminPage.tsx";
import NotFoundPage from "./pages/404/NotFoundPage";
import AuthCallbackPage from "@/pages/auth-callback/AuthCallbackPage.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
