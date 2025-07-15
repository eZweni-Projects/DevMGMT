-- Create tables

CREATE TABLE taskList (
  id SERIAL PRIMARY KEY,
  taskItem TEXT NOT NULL,
  dueDate DATE NULL,
  priority VARCHAR(20) DEFAULT NULL,
  status VARCHAR(20) DEFAULT 'Backlog'
);

-- Drop/Delete Tables

DROP TABLE tasks;

-- TaskList Dummy Data
INSERT INTO taskList (taskItem, dueDate, priority, status) VALUES
('Design homepage layout', '2025-07-20', 'High', 'In Progress'),
('Fix login bug', '2025-07-15', 'Urgent', 'Backlog'),
('Write unit tests for API', '2025-07-25', 'Medium', 'Backlog'),
('Update user documentation', NULL, 'Low', 'Backlog'),
('Deploy new version to production', '2025-07-18', 'High', 'Completed');


-- VIEW TABLES
SELECT * FROM taskList;