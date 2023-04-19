import { Configuration, OpenAIApi } from "openai";

export default async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [
      { role: "system", content: "You are a expert mathematician" },
      { role: "user", content: "What is 10 to the power of 5?" },
      {
        role: "assistant",
        content: "10 to the power of 5 is equal to 100,000.",
      },
      { role: "user", content: "What is this the square root of this number?" },
    ],
  });

  console.log(`${completion.data.choices[0].message?.content}`);
};
