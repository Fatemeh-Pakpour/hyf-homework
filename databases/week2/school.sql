-- CREATE DATABASE `class19`;
USE class19;
SET NAMES utf8mb4;

-- class table => with the columns: id, name, begins (date), ends (date)
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- student table => Columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) unsigned DEFAULT NULL,

  PRIMARY KEY (`id`),
 CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create an index on the name column of the student table
ALTER TABLE student ADD INDEX index_name (name);
-- SHOW INDEX FROM student;

-- add a new column to the class table named status_id 
ALTER TABLE class ADD COLUMN status  Enum('notstarted', 'ongoing', 'finished');

INSERT INTO class VALUES (NULL , "HTML-CSS", "2019-03-21" , "2019-04-26", 'ongoing');
INSERT INTO class VALUES (NULL, "Javascript1", "2019-04-03" , "2019-05-10", 'finished' );
INSERT INTO class VALUES (NULL, "Javascript2", "2019-5-17" , "2019-06-19", 'notstarted');
INSERT INTO class VALUES (NULL, "Javascript3", "2019-04-03" , "2019-05-10" , 'ongoing');
INSERT INTO class VALUES (NULL , "Database", "2019-08-11" , "2019-08-25" , 'ongoing');
INSERT INTO class VALUES (NULL , "React", "2019-09-1" , "2019-09-30" , 'notstarted');

INSERT INTO student VALUES(NULL, "Fatemeh Pakpour" , "fapak@gmial.com" , "917-779-91" , 5);
INSERT INTO student VALUES(NULL,"Pren Goldsworthy", "pgoldsworthy1@spotify.com", "635-572-8467" , 5);
INSERT INTO student VALUES(NULL, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683', 3);
INSERT INTO student VALUES(NULL, 'Azin Kamran', 'azi2@ya.com', '450-962-8683', 4);
INSERT INTO student VALUES(NULL, 'Ida Naderian', 'ida@yahoo.com', '598-962-8233', 2);
INSERT INTO student VALUES(NULL, 'Richa Hemant', 'rich@lulu.com', '790-762-9683', 1);


SELECT * FROM class;
SELECT * FROM student;






     



