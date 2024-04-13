import { NextFunction, Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI();

const openAiTextGen = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Input message is required." });
  }

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query }],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  res.setHeader("Content-Type", "application/json");

  let full = "";

  for await (const part of completion) {
    let text = part.choices[0].delta.content;
    if (text) {
      full += text;
      console.clear();
      console.log(full);
      res.write(JSON.stringify({ response: text }));
      res.flushHeaders();
    }
  }
  res.end();
};
export default openAiTextGen;
