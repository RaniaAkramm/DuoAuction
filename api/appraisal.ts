import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { domain } = req.query;

    const response = await fetch(
      `https://www.atom.com/api/marketplace/domain-appraisal?domain=${domain}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ATOM_APPRAISAL_API_KEY}`
        }
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({
      error: err.message
    });
  }
}
