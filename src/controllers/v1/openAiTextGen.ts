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
  });

  //   console.log(completion.choices[0].message.content);
  res.json({ response: completion.choices[0].message.content });
};
export default openAiTextGen;
