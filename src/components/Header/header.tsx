"use client";
import { useAuth } from "@/context/context";
import styles from "./header.module.css";

interface HeaderType {
  title: string;
}

export default function Header({ title }: HeaderType) {
  const { logout } = useAuth();
  return (
    <div className={styles.headerWrapper}>
      <div className="header flex flex-row justify-between items-center p-5">
        <h1 className={styles.headerTitle}>{title}</h1>
        <button className={styles.logoutButton} onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
