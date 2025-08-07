-- Create tables

CREATE TABLE completedTasks (
  id SERIAL PRIMARY KEY,
  taskitem TEXT NOT NULL,
  completion DATE NULL,
);

-- Drop/Delete Tables

DROP TABLE tasks;

-- TaskList Dummy Data
INSERT INTO tasklist (taskItem, dueDate, priority, status) VALUES
('Design homepage layout', '2025-07-20', 'High', 'In Progress'),
('Fix login bug', '2025-07-15', 'Urgent', 'Backlog'),
('Write unit tests for API', '2025-07-25', 'Medium', 'Backlog'),
('Update user documentation', NULL, 'Low', 'Backlog'),
('Deploy new version to production', '2025-07-18', 'High', 'Completed');

INSERT INTO tasklist (taskItem, dueDate, priority, status) VALUES
('Design homepage layout', '2025-07-20', 'High', 'started');


-- VIEW TABLES
SELECT * FROM tasklist;
SELECT * FROM generatedtasks;

-- ADD A COLUMN
ALTER TABLE generatedtasks
ADD COLUMN testconnect TEXT NULL;

ALTER TABLE generatedtasks
ALTER COLUMN status SET DEFAULT 'pending';

DROP TABLE generatedtasks;
DROP TABLE IF EXISTS generatedtasks;
