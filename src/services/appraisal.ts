import axios from "axios";

export async function appraiseDomain(domain: string) {
  const response = await axios.post("/api/appraisal", {
    domain
  });

  return response.data;
}
