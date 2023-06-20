import { config } from "dotenv";
config();

import { SequentialChain, LLMChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAI({ temperature: 0 });

let template =
  "You ordered {dish_name} and your experience was {experience}. Write a review: ";
let promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["dish_name", "experience"],
});
const reviewChain = new LLMChain({
  llm,
  prompt: promptTemplate,
  outputKey: "review",
});

template = "Given the restaurant review: {review}, write a follow-up comment: ";
promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["review"],
});
const commentChain = new LLMChain({
  llm,
  prompt: promptTemplate,
  outputKey: "comment",
});

template = "Summarise the review in one short sentence: \n\n {review}";
promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["review"],
});
const summaryChain = new LLMChain({
  llm,
  prompt: promptTemplate,
  outputKey: "summary",
});

template = "Translate the summary to german: \n\n {summary}";
promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["summary"],
});
const translationChain = new LLMChain({
  llm,
  prompt: promptTemplate,
  outputKey: "german_translation",
});

const overallChain = new SequentialChain({
  chains: [reviewChain, commentChain, summaryChain, translationChain],
  inputVariables: ["dish_name", "experience"],
  outputVariables: ["review", "comment", "summary", "german_translation"],
});

const result = await overallChain.call({
  dish_name: "Pizza Salami",
  experience: "It was awful!",
});
console.log(result);
