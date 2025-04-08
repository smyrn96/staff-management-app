import { Business, Staff, User } from "@/types";
import { apiClient } from "./client";

export const api = {
  users: {
    getUsers: () => apiClient.get<User[]>("/users"),
    getUser: (id: string) => apiClient.get<User>(`/users/${id}`),
  },
  business: {
    getBusinesses: () => apiClient.get<Business[]>("/business"),
    getBusiness: (id: number) => apiClient.get<Business>(`/business/${id}`),
    addBussiness: (data: Business) => apiClient.post("/business", data),
    editBusiness: (id: number, data: Business) =>
      apiClient.post(`/business/${id}`, data),
  },
  staff: {
    getStaffMembers: () => apiClient.get<Staff[]>("/staff"),
    getStaffMember: (id: number) => apiClient.get<Staff>(`/staff/${id}`),
    addStaffeMember: (data: Staff) => apiClient.post("/staff", data),
    editStaffMember: (id: number, data: Staff) =>
      apiClient.post(`/staff/${id}`, data),
  },
};
