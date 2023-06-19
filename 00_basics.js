import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chat(input) {
  const messages = [{ role: "user", content: input }];

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0,
  });

  return response.data.choices[0].message.content;
}

const question = "What is the capital of France";

chat(question)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const promptTemplate = `
  Be very funny when answering questions
  Question: {question}
  `;

const prompt = promptTemplate.replace("{question}", question);

chat(prompt)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
