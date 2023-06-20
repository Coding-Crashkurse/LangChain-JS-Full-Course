import { config } from "dotenv";
config();

import { SimpleSequentialChain, LLMChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAI({ temperature: 0 });
const responseTemplate = `
You are a helpful bot that creates a 'thank you' response text.
If customers are unsatisfied, offer them a real world assistant to talk to.
You will get a sentiment and subject as input and evaluate.

text: {input}
`;

const reviewPromptTemplate = new PromptTemplate({
  template: responseTemplate,
  inputVariables: ["input"],
});
const reviewChain = new LLMChain({ llm, prompt: reviewPromptTemplate });

const overallChain = new SimpleSequentialChain({
  chains: [reviewChain],
  verbose: true,
});

const result = await overallChain.run({
  input: "I ordered Pizza Salami and was awful!",
});
console.log(result);
