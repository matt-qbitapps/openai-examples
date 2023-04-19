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
        role: "system",
        content: `
        Answer the users question as concisely as possible.
        The output should be a json code snippet formatted in the following way:
        
        {
          "answer": string // concise answer to the user's question
          "source": string // website used to answer the user's question
        }`,
      },
      {
        role: "user",
        content: `What is the name of the tallest building in the world?`,
      },
    ],
  });

  console.log(
    JSON.parse(completion.data.choices[0].message?.content as string)
  );

  // {
  //   answer: 'Burj Khalifa',
  //   source: 'https://en.wikipedia.org/wiki/Burj_Khalifa'
  // }
};
