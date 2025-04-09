"use client";

import Header from "@/components/Header/header";
import { DataTable } from "@/components/Table/table";
import { api } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { capitalizeFirstLetter } from "@/lib/helpers/helpers";
import { useRouter } from "next/navigation";
import { IoIosAdd } from "react-icons/io";
import { Staff } from "@/types";

const columns: ColumnDef<Staff>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <span>{capitalizeFirstLetter(row.original.position ?? "")}</span>
    ),
  },
  { accessorKey: "phoneNumber", header: "Phone Number" },
];

const titleHeader = "Staff";
const backLink = "/dashboard";

export default function StaffDashboard() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const router = useRouter();

  const { data: staffData } = useQuery({
    queryKey: [],
    refetchOnMount: "always",
    queryFn: () => api.staff.getStaffMembers().then((res) => res.data),
  });

  useEffect(() => {
    if (staffData) setStaff(staffData);
  }, [staffData]);

  return (
    <>
      <Header title={titleHeader} backLink={backLink} />
      <div className={styles.businessContainer}>
        <DataTable<Staff>
          data={staff}
          columns={columns}
          pageSize={7}
          onRowClick={(staff) => router.push(`/dashboard/staff/${staff.id}`)}
          addButton={
            <button
              className="buttonElement"
              onClick={() => router.push("/dashboard/staff/new")}
            >
              <IoIosAdd />
              Add staff member
            </button>
          }
        />
      </div>
    </>
  );
}
