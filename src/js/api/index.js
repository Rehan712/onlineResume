import axios from "axios";

export async function submitRegisterApi(data) {
  const res = await axios.post("/api/user/register", data);
  return res;
}

export async function submitLoginApi(data) {
  const res = await axios.post("/api/user/login", data);
  console.log("this is response", res.data);
  return res.data;
}

export async function getRegisterDataApi() {
  const res = await axios.get("/api/user/all");
  return res;
}

export async function getCurrentProfileApi() {
  const token = localStorage.getItem("token");
  const res = await axios.get("/api/profile", {
    headers: {
      Authorization: token
    }
  });
  return res;
}

export async function submitProfileApi(data) {
  console.log("this is data from Api", data);
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile", data, {
    headers: {
      Authorization: token
    }
  });
  console.log("this is response", res.data);
  return res.data;
}

export async function submitExperienceApi(data) {
  console.log("this is data from Api", data);
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile/experience", data, {
    headers: {
      Authorization: token
    }
  });
  console.log("this is response", res.data);
  return res.data;
}

export async function submitEducationApi(data) {
  console.log("this is data from Api", data);
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile/education", data, {
    headers: {
      Authorization: token
    }
  });
  console.log("this is response", res.data);
  return res.data;
}

export async function deleteProfileApi() {
  const token = localStorage.getItem("token");
  const res = await axios.delete("/api/profile", {
    headers: {
      Authorization: token
    }
  });
  console.log("this is response", res.data);
  return res.data;
}

export async function deleteExperienceApi(id) {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`/api/profile/experience/${id}`, {
    headers: {
      Authorization: token
    }
  });
  console.log("this is response", res.data);
  return res.data;
}
