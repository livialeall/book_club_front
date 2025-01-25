import { User } from "../interfaces/user";

export const create_user = (newUser:User) => {
  try {
    const response = fetch(`http://127.0.0.1:8800/create_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    return response;
  } catch (err) {
    return err;
  }
};
