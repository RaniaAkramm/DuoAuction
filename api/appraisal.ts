import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const domain = req.query.domain as string;

    const response = await fetch(
      `https://www.atom.com/api/marketplace/domain-appraisal?domain=${encodeURIComponent(domain)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ATOM_APPRAISAL_API_KEY}`
        }
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Unable to fetch appraisal"
    });
  }
}
