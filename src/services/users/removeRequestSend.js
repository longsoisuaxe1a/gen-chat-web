import axios from "axios";
import host from "../../GlobalVariable";
const removeRequestSend = async (phoneNumberUserSend, phoneNumberUserGet) => {
  try {
    const userData = {
      phoneNumber: phoneNumberUserSend,
      phoneRemove: phoneNumberUserGet,
    };
    const response = await axios.post(
      host.api_host + "/users/remove-request-send",
      userData
    );
    if (response.status === 200) {
      // console.log("Found successful:", response.data);

      return response.data;
    } else {
      console.error("Found failed:", response.data);
      throw new Error("Found failed");
    }
  } catch (error) {
    console.error("Found error:", error);
    throw new Error(error);
  }
};
export default removeRequestSend;
