import { axios } from "../../services";

export async function getConfig(params) {
  return axios.get("/api/job", { params });
}

export async function postSave(data) {
  return axios.post("/api/job/save", data);
}

export async function postUpdate(data) {
  return axios.post("/api/job/update", data);
}

export async function postDelete(data) {
  return axios.post("/api/job/remove", data);
}
