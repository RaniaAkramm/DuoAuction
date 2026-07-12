import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { domain } = req.body;

    const response = await fetch(
      "PUT_YOUR_ATOM_APPRAISAL_ENDPOINT_HERE",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.ATOM_APPRAISAL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          domain
        })
      }
    );

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: "Unable to appraise domain"
    });
  }
}
