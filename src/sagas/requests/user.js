import axios from "axios";
export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://6051c21efb49dc00175b6b27.mockapi.io/userData",
  });
}
export function requestDeleteUser(id) {
  console.log(id);
  return axios.request({
    method: "delete",
    url: `https://6051c21efb49dc00175b6b27.mockapi.io/userData/${id}`,
  });
}
export async function requestUpdateUser(id, formData) {
  console.log(formData);
  return await axios.put(
    `https://6051c21efb49dc00175b6b27.mockapi.io/userData/${id}`,
    formData
  );
}
