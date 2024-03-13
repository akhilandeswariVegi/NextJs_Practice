// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") return res.status(200).json("name updated");
  if (req.method === "DELETED") return res.status(200).json("name deleted");
  if (req.method === "GET") return res.status(200).json({ name: "John Doe" });
}
