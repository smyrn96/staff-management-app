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

export default function BusinessDashboard() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const router = useRouter();

  const { data: businessData } = useQuery({
    queryKey: [],
    queryFn: () => api.business.getBusinesses(),
  });

  useEffect(() => {
    if (businessData?.data) setBusinesses(businessData.data);
  }, [businessData]);

  console.log(businesses);

  return (
    <>
      <Header title={titleHeader} />
      <div className={styles.businessContainer}>
        <DataTable<Business>
          data={businesses}
          columns={columns}
          pageSize={5}
          onRowClick={(business) =>
            router.push(`/dashboard/business/${business.id}`)
          }
        />
      </div>
    </>
  );
}
