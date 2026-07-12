import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch(
      "https://www.atom.com/api/marketplace/domain-appraisal",
      {
        headers: {
          Authorization: `Bearer ${process.env.ATOM_APPRAISAL_API_KEY}`
        }
      }
    );

    const text = await response.text();

    return res.status(response.status).send(text);
  } catch (err: any) {
    return res.status(500).json({
      error: err.message
    });
  }
}
