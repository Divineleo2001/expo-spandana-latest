import type { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { DoctorsResponse } from "~/types";
import { getAllDoctors, getIndividualDoctor } from "../server";

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