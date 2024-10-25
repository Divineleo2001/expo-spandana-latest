import type { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { DepartmentResponse, DoctorsResponse, IndividualDepartmentVariables } from "~/types";
import { getAllDepartments, getAllDoctors, getIndividualDepartment, getIndividualDoctor } from "../server";

type Variables = {
  tenantId: string;
};

export const useGetAllDoctors = createQuery<
  DoctorsResponse,
  Variables,
  AxiosError
>({
  queryKey: ["doctors"],
  fetcher: async (variables) => {
    const data = await getAllDoctors(variables.tenantId);
    return data;
  },
});

export const useGetIndividualDoctor = createQuery<
  DoctorsResponse,
  { id: string; tenantId: string },
  AxiosError
>({
  queryKey: ["doctor"],
  fetcher: async ({ id, tenantId }) => {
    const data = await getIndividualDoctor(id, tenantId);
    return data;
  },
});

export const useGetAllDepartments = createQuery<
  DepartmentResponse,
  Variables,
  AxiosError
>({
  queryKey: ["departments"],
  fetcher: async (variables) => {
    const data = await getAllDepartments(variables.tenantId);
    return data;
  },
});

export const useGetIndividualDepartment = createQuery<
DepartmentResponse,
  IndividualDepartmentVariables,
  AxiosError
>({
  queryKey: ["department"],
  fetcher: async (variables) => {
    const data = await getIndividualDepartment(variables);
    return data;
  },
});
