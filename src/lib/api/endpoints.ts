import { Business, Staff, User } from "@/types";
import { apiClient } from "./client";

export const api = {
  users: {
    getUsers: () => apiClient.get<User[]>("/users"),
    getUser: (id: string) => apiClient.get<User>(`/users/${id}`),
  },
  business: {
    getBusinesses: () => apiClient.get<Business[]>("/business"),
    getBusiness: (id: string) => apiClient.get<Business>(`/business/${id}`),
    addBussiness: (data: Business) => apiClient.post("/business", data),
    editBusiness: (id: string, data: Business) =>
      apiClient.put(`/business/${id}`, data),
  },
  staff: {
    getStaffMembers: () => apiClient.get<Staff[]>("/staff"),
    getStaffMember: (id: string) => apiClient.get<Staff>(`/staff/${id}`),
    addStaffeMember: (data: Staff) => apiClient.post("/staff", data),
    editStaffMember: (id: string, data: Staff) =>
      apiClient.put(`/staff/${id}`, data),
  },
};
