import { Configuration, OpenAIApi } from "openai";

export default async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "user",
        content:
          "Write a description of a picture with two birds dancing in a tree to the beat of gangnam style:",
      },
    ],
  });

  console.log(`${completion.data.choices[0].message?.content}`);
};
