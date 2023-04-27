import requestUtil from "../Utils";

const signupRequest = async (payload) => {
  try {
    const { data } = await requestUtil.post("/signup", payload);
    return { data };
  } catch (error) {
    const errRes = error && error?.response && error?.response?.data;
    return { errRes };
  }
};

export { signupRequest };
