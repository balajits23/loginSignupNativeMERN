import requestUtil from "../Utils";

const loginRequest = async (payload) => {
  try {
    const { data } = await requestUtil.post("/signin", payload);
    return { data };
  } catch (error) {
    const errRes = error && error?.response && error?.response?.data;
    return { errRes };
  }
};

export { loginRequest };
