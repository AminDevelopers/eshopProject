"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/NavBar";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <Info />
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
}
