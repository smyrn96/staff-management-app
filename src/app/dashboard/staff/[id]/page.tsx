"use client";
import StaffForm from "@/components/Forms/StaffForm/staff";
import Header from "@/components/Header/header";
import { api } from "@/lib/api/endpoints";
import { getLastSegmentURLPath } from "@/lib/helpers/helpers";
import { Staff } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SingleStaff() {
  const [staffMember, setStaffMember] = useState<Staff>();
  const titleHeader = staffMember
    ? `${staffMember.firstName} ${staffMember.lastName}`
    : "Add staff member";
  const backLink = "/dashboard/staff";
  const pathname = usePathname();
  const lastSegment = getLastSegmentURLPath(pathname);
  const isEdit = lastSegment !== "new";

  const { data: staffData } = useQuery({
    enabled: isEdit,
    queryKey: ["staff", lastSegment],
    queryFn: async () => {
      const response = await api.staff.getStaffMember(lastSegment);

      if (Array.isArray(response.data)) {
        const foundItem = response.data.find((item) => item.id === lastSegment);

        if (!foundItem) {
          throw new Error("Staff member not found");
        }
        return foundItem;
      }

      return response.data;
    },
  });

  useEffect(() => {
    if (staffData) setStaffMember(staffData);
  }, [staffData]);

  const handleSubmit = async (
    values: Staff,
    { setSubmitting }: FormikHelpers<Staff>
  ) => {
    try {
      delete values.id;

      if (isEdit) {
        await api.staff.editStaffMember(lastSegment, values);
      } else {
        await api.staff.addStaffeMember(values);
      }

      toast.success(
        `Staff member - ${values.firstName} ${
          values.lastName
        } was successfully ${isEdit ? "updated" : "created"}!`
      );
    } catch (error) {
      console.error("Update/creation error: ", error);
      toast.error(`Failed: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header title={titleHeader} backLink={backLink} />
      <div className="w-full h-[85%] flex flex-column justify-center items-center">
        <StaffForm initialValues={staffMember} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
