import axios from "axios";

export const getAllDoctors = async (tenantId: string) => {
  const envUrl = process.env.EXPO_PUBLIC_BACKEND_URL;
  const getUrl =envUrl + "/api/doctors/all";
  try {
    const { data } = await axios.get(getUrl, {
      headers: {
        // if tenantheader is there use it but if not use tenantId
        "X-PrivateTenant": tenantId,
        // Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(envUrl)
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    } else {
      throw new Error("Unexpected error");
    }
  }
};

export const getIndividualDoctor = async (id: string, tenantId: string) => {
  // /api/doctors/byId/{id}

  const getUrl = process.env.EXPO_PUBLIC_BACKEND_URL + `/api/doctors/byId/${id}`;
  try {
    const { data } = await axios.get(getUrl, {
      headers: {
        // if tenantheader is there use it but if not use tenantId
        "X-PrivateTenant": tenantId,
        // Authorization: `Bearer ${authToken}`,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    } else {
      throw new Error("Unexpected error");
    }
  }
};


export const getAllDepartments = async (tenantId: string) => {
  const getUrl = process.env.EXPO_PUBLIC_BACKEND_URL + "/api/departments/all";

  try {
    const { data } = await axios.get(getUrl, {
      headers: {
        "X-PrivateTenant": tenantId,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    } else {
      throw new Error("Unexpected error");
    }
  }
}

export const getIndividualDepartment = async ({
  tenantId,
  id,
}: {
  tenantId: string;
  id: string;
}) => {
  const getUrl = process.env.EXPO_PUBLIC_BACKEND_URL + "/api/departments/byId/" + id;

  try {
    const { data } = await axios.get(getUrl, {
      headers: {
        "X-PrivateTenant": tenantId,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    } else {
      throw new Error("Unexpected error");
    }
  }
}