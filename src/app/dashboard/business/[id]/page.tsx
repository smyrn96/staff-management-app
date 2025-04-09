"use client";
import BusinessForm from "@/components/Forms/BusinessForm/business";
import Header from "@/components/Header/header";
import { api } from "@/lib/api/endpoints";
import { getLastSegmentURLPath } from "@/lib/helpers/helpers";
import { Business } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SingleBusiness() {
  const [business, setBusiness] = useState<Business>();
  const titleHeader = business ? business.name : "Add business";
  const backLink = "/dashboard/business";
  const pathname = usePathname();
  const lastSegment = getLastSegmentURLPath(pathname);
  const isEdit = lastSegment !== "new";

  const { data: businessData } = useQuery({
    enabled: isEdit,
    queryKey: ["business", lastSegment],
    queryFn: async () => {
      const response = await api.business.getBusiness(lastSegment);

      if (Array.isArray(response.data)) {
        const foundItem = response.data.find((item) => item.id === lastSegment);

        if (!foundItem) {
          throw new Error("Business not found");
        }
        return foundItem;
      }

      return response.data;
    },
  });

  useEffect(() => {
    if (businessData) setBusiness(businessData);
  }, [businessData]);

  console.log(businessData, isEdit);

  const handleSubmit = async (
    values: Business,
    { setSubmitting }: FormikHelpers<Business>
  ) => {
    try {
      delete values.id;

      if (isEdit) {
        await api.business.editBusiness(lastSegment, values);
      } else {
        await api.business.addBussiness(values);
      }

      toast.success(
        `Business - ${values.name} was successfully ${
          isEdit ? "updated" : "created"
        }!`
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
        <BusinessForm initialValues={business} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
