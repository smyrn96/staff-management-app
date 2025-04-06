"use client";
import { useAuth } from "@/context/context";
import styles from "./page.module.css";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <>
      <div className="header flex flex-row justify-between items-center m-5">
        <h1 className={styles.headerTitle}>Welcome to the admin panel</h1>
        <div>
          <button className={styles.logoutButton} onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
