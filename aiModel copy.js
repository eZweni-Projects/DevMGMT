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
          - Keep tasks short/singular and S.M.A.R.T
          - Dont clumb tasks in one sentence, 1 task one entry
          - If design is mentioned infur tasks around colour schemes, brand colours etc
          - If Overall project deadline is specified, use that as default deadline for tasks
          - Use language and structure appropriate for software developers.
          - Treat the content as coming from a project document or user input, and extract relevant development tasks.
          - Include technical details where appropriate — such as functional requirements, specifications, UI/UX references, or coding tasks — to make the task list developer-aligned. 
          - Strictly adhere to these constraints
          - LIMIT to only 5 TASKS Maximum as we're still in development`
      },
      { role:"user",
        content: text }
      ],
      temperature: 0.5, // Controls randomness and creativity of response - 1 is Balanced
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
