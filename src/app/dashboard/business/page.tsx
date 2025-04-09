"use client";

import Header from "@/components/Header/header";
import { DataTable } from "@/components/Table/table";
import { api } from "@/lib/api/endpoints";
import { Business } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { capitalizeFirstLetter } from "@/lib/helpers/helpers";
import { useRouter } from "next/navigation";
import { IoIosAdd } from "react-icons/io";

const columns: ColumnDef<Business>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "location", header: "Location" },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span>{capitalizeFirstLetter(row.original.type ?? "")}</span>
    ),
  },
];

const titleHeader = "Business";
const backLink = "/dashboard";

export default function BusinessDashboard() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const router = useRouter();

  const { data: businessData } = useQuery({
    queryKey: [],
    refetchOnMount: "always",
    queryFn: () => api.business.getBusinesses().then((res) => res.data),
  });

  useEffect(() => {
    if (businessData) setBusinesses(businessData);
  }, [businessData]);

  return (
    <>
      <Header title={titleHeader} backLink={backLink} />
      <div className={styles.businessContainer}>
        <DataTable<Business>
          data={businesses}
          columns={columns}
          pageSize={7}
          onRowClick={(business) =>
            router.push(`/dashboard/business/${business.id}`)
          }
          addButton={
            <button
              className="buttonElement"
              onClick={() => router.push("/dashboard/business/new")}
            >
              <IoIosAdd />
              Add business
            </button>
          }
        />
      </div>
    </>
  );
}
