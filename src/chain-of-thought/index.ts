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
        content: `The cost to ride on a ferry is $5.00 per vehicle and driver with an additional cost of 50 cents per passenger. If the charge to get on the ferry is $6.50, how many people were in the vehicle?

          steps: 
          - create a plan for answering the math problem.
          - what additional steps are needed to follow the plan?
          - follow those steps one by one and show your work
          - Answer the question and prefix your answer with <response>. 
          
          State each step and then show your work for performing that step.`,
      },
    ],
  });

  console.log(`${completion.data.choices[0].message?.content}`);

  //   Plan:
  // 1. Let x be the number of passengers in the vehicle.
  // 2. The cost for the driver and the vehicle is $5.00.
  // 3. The cost for each passenger is $0.50.
  // 4. The total cost is $6.50.

  // Steps:
  // 1. Let x be the number of passengers in the vehicle.
  // 2. The cost for the driver and the vehicle is $5.00, so the cost for just the passengers is $6.50 - $5.00 = $1.50.
  // 3. The cost for each passenger is $0.50, so the number of passengers in the vehicle is x = $1.50 / $0.50 = 3.

  // Answer: <response>There were 3 people in the vehicle.</response>
};
