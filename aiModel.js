// LLM PROMPT TUNING
import dotenv from "dotenv"
dotenv.config();

import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function generateTasksFromText(text) {

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system",
          content: `You are a task list creator, from given text generate a list of tasks for the user and return response in json format, each task should include: 
          - the taskItem with column name = taskItem,
          - the due date (if explicitly mentioned) with column name dueDate,
          - the priority (if stated or can be inferred) with column name priority.
          - Strictly adhere to these constraints
          Use language and structure appropriate for software developers. Treat the content as coming from a project document or user input, and extract relevant development tasks. Include technical details where appropriate — such as functional requirements, specifications, UI/UX references, or coding tasks — to make the task list developer-aligned. LIMIT to only 3 TASKS MAXimum ans we're still in development`
      },
      { role:"user",
        content: text }
      ],
      temperature: 1, // Controls randomness and creativity of response - 1 is Balanced
      top_p: 1, 
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }
  const result = response.body.choices[0].message.content; 
  console.log("AI response: ", result );
  return result;
}
