use `todoList`;
-- -- Add a task with the these attributes title, description, created, updated, dueDate, statusID, userID
-- INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
-- VALUES ('do yoga','in the joga studio',now(),'2019-08-22',now(),2,3);

-- -- change the title of a task with these attributes: taskID, newTitle
-- UPDATE task SET title = 'newTitle' WHERE id = 36;

-- -- Change the task due date with these attributes taskID, newDueDate
-- UPDATE task SET due_date = '2017-12-23 12:00:00' WHERE id = 36;

-- -- change the task status with these attributes: taskID, newStatus
-- UPDATE task SET status_id = 1 WHERE id = 36;

-- -- Mark a task as complete with this attribute taskID
-- UPDATE task SET status_id = 3 WHERE id = 36;

-- -- Delete task with this attribute: taskID
-- DELETE FROM task WHERE id = 36;

 -- select * from task ;
