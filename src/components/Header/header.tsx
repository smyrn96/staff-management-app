"use client";
import { useAuth } from "@/context/context";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { getLastSegmentURLPath } from "@/lib/helpers/helpers";
import { HiArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";

interface HeaderType {
  title: string;
  backLink?: string;
}

export default function Header({ title, backLink = "/" }: HeaderType) {
  const pathname = usePathname();
  const router = useRouter();
  const lastSegment = getLastSegmentURLPath(pathname);
  const isDashboardPage = lastSegment === "dashboard";

  const handleBackArrow = (): void => {
    router.replace(backLink);
    router.refresh();
  };

  const { logout } = useAuth();
  return (
    <div className={styles.headerWrapper}>
      <div className="header flex flex-row justify-between items-center p-5">
        <div className={styles.arrowHeaderWrapper}>
          {!isDashboardPage && (
            <div className={styles.backArrow} onClick={handleBackArrow}>
              <HiArrowLeft />
            </div>
          )}
          <h1 className={styles.headerTitle}>{title}</h1>
        </div>
        <button className="buttonElement" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
