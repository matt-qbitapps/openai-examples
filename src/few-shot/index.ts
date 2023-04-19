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
        content: `
          Input: dirty
          Output: clean

          Input: tall
          Output: small
          
          Input: trendy
          Output:
          `,
      },
    ],
  });

  console.log(`${completion.data.choices[0].message?.content}`);
};
