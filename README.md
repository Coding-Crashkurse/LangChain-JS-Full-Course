# LangChain-JS-Crash-course

This repository contains a series of example scripts showcasing the usage of Langchain, a JavaScript library for creating conversational AI applications.

- `00_basics.js`: Introduces the basic concepts and components of Langchain.
- `01_first_chain.js`: Demonstrates how to create your first conversation chain in Langchain.
- `02_parsers.js`: Shows how to use parsers to process input and output in a conversation chain.
- `03_indexes.js`: Explains how to create and use indexes in Langchain for efficient retrieval of information.
- `04_usestore.js`: Guides on how to utilize the Vector Databases in Langchain for maintaining and retrieving information which was not trained into the model.
- `05_chat.js`: Showcases how to create a chat bot in Langchain, which forms the basis of a conversational AI application.
- `06_agents.js`: Illustrates how to create and use agents in Langchain, which are autonomous entities that can interact within a conversation chain.

To run these examples, clone the git repository and run `npm install` to install die dependencies.
You need to create a `.env` file and add your API Key for OpenAI like this: `OPENAI_API_KEY=sk-...`

This codes utilizes ES6 modules, to allow `import` statements and `async/await` within NodeJS.
