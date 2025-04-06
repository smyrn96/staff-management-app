"use client";
import Header from "@/components/Header/header";
import styles from "./page.module.css";
import Card from "@/components/Card/card";
import business from "../../components/Card/assets/business.jpg";
import staff from "../../components/Card/assets/staff.jpg";

export default function Dashboard() {
  const titleHeader = "Welcome to the admin panel!";
  return (
    <>
      <Header title={titleHeader} />
      <div className={styles.dashboardContainer}>
        <Card
          title="Business"
          redirectLink="/dashboard/business"
          image={business}
        />
        <Card title="Staff" redirectLink="/dashboard/staff" image={staff} />
      </div>
    </>
  );
}
