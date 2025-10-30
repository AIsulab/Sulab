import type { NextApiRequest, NextApiResponse } from "next";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

type ContactResponse = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed"
    });
  }

  const { name, email, message } = (req.body ?? {}) as ContactRequestBody;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "모든 필드를 입력해주세요."
    });
  }

  // This is where an integration with a CRM or email service would go.
  // For now, we just respond with success to simulate handling the request.
  return res.status(200).json({
    success: true,
    message: "문의가 성공적으로 접수되었습니다."
  });
}
