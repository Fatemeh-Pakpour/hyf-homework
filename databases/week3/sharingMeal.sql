-- create database sharingMeal;
USE sharingMeal;
-- CREATE TABLE `Meal`(
-- `id` int(10) unsigned not null auto_increment,
-- `title` varchar(255) not null,
-- `description` text NULL DEFAULT NULL,
-- `location` varchar(255) not null ,
-- `when` DATETIME NOT NULL,
-- `max_reservations` int(10) unsigned NOT NULL,
-- `price` DECIMAL(19 , 4 ) NOT NULL ,
-- `created_date` DATETIME NOT NULL,

-- primary key (`id`)
-- )engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;

-- CREATE Table Reservation(
--  `id` int(10) unsigned not null auto_increment,
--  `number_of_guests` int(10) unsigned NOT NULL,
--  `meal_id` int(10) unsigned NOT NULL,
--  `created_date` DATETIME NOT NULL,
--  
--  PRIMARY KEY (`id`),
--  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
-- )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE Table Review(
--  `id` int(10) unsigned not null auto_increment,
--  `title` varchar(255) not null,
--  `description` text NULL DEFAULT NULL,
--  `meal_id` int(10) unsigned NOT NULL,
--  `stars` int(10) unsigned NOT NULL,
--  `created_date` DATETIME,
--  
--  PRIMARY KEY (`id`)
-- )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -- Meals
-- INSERT INTO Meal
-- VALUES (null , "FREE Vegeterian FOOD" , "Iranian vegeterian food" ,"Rektorparken 20" , "2019-08-20" , 10 , 100 , "2019-07-20");
--  INSERT INTO Meal
-- VALUES (null , "Brazilian Food" , "Delicious meal with an special drink " ,"Lyngby 21" , "2019-08-03" , 9 , 70 , "2019-07-10");
-- INSERT INTO Meal
-- VALUES (null , "DANISH PORK MEATBALLS " , "Traditional Nordic recipe for Meatballs also known as Frikadeller " ," Valbyparken" , "2019-09-10" , 18 , 85 , "2019-08-3");
-- INSERT INTO Meal
-- VALUES (null , "English clam chowder " , "Traditional English Clam Chowder " ," Kalampenborgvej 30" , "2019-08-12" , 15 , 85 , "2019-07-12");
-- INSERT INTO Meal
-- VALUES (null , "Sushi with drink" , "Deep Fried Sushi" ,"Nordhavn 10" , "2019-09-06" , 20 , 120 , "2019-08-12");

-- -- Get all Meals
-- SELECT * FROM Meal;
-- -- Add a new meal
-- INSERT INTO Meal
-- VALUES (null , "Turkish Food" , "Traditional turkish dolma with Raki" ," Triangle 10" , "2018-08-15" , 20 , 120 , "2019-07-12");
-- -- Get a meal with any id
-- SELECT * FROM Meal;
-- -- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE `Meal`
-- SET `location` = "Valby 30 10tv", `max_reservations` = 22
-- WHERE `id` = 3;
-- -- Delete a meal with any id
-- DELETE FROM `Meal` WHERE `id`= 2;


-- -- Reservation
-- INSERT INTO Reservation
-- VALUES (NULL, 2, 1 , "2019-07-26");
-- INSERT INTO Reservation
-- VALUES (NULL, 1, 1 , "2019-07-29");
-- INSERT INTO Reservation
-- VALUES (NULL, 3, 1 , "2019-07-30");
-- INSERT INTO Reservation
-- VALUES (NULL, 3, 1 , "2019-07-27");
-- INSERT INTO Reservation
-- VALUES (NULL, 2, 3 , "2019-08-10");
-- INSERT INTO Reservation
-- VALUES (NULL, 4, 3 , "2019-08-11");
-- -- Get all reservations
-- SELECT * FROM Reservation;
-- -- Add a new reservation
-- INSERT INTO Reservation 
-- VALUES (NULL , 4 , 4 , "2019-08-16");
-- -- Get a reservation with any id
-- SELECT * FROM Reservation 
-- WHERE id = 4;
-- -- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE Reservation 
-- SET number_of_guests = 4 , created_date = "2019-07-28"
-- WHERE id = 4;
-- -- Delete a reservation with any id
-- DELETE FROM Reservation 
--  WHERE id = 7;

-- -- Review
-- INSERT INTO Review 
-- VALUES (NULL, 
-- "English clam chowder", 
-- " The dinner was plenty and delicious. Apettizer, starter, dessert . Paulinho is not only a great chef, but also a great host. The atmosphere is warming - great people, talk, music, in a cozy house with yard, open kitchen and dance floor. It is also well-located.",
-- 4,
-- 5,
-- "2019-08-28");
-- INSERT INTO Review 
-- VALUES (NULL, 
-- "DANISH PORK MEATBALLS", 
-- "It was a great night. The food was plenty and delicious. Apettizer, starter, dessert and coffee with memorable vanilla cookies and mojito. The atmosphere is warming - great people, talk, music, in a cozy house with yard, open kitchen and dance floor. It is also well-located.",
-- 3,
-- 4,
-- "2019-09-20");
-- INSERT INTO Review 
-- VALUES (NULL, 
-- "FREE Vegeterian FOOD", 
-- "It was a wonderful night. The food was plenty and delicious. Apettizer, starter, dessert and coffee with Iranian cookies. The atmosphere is warming - great people, talk, music, in a cozy house with yard. It is also well-located.",
-- 1,
-- 5,
-- "2019-08-24");
-- INSERT INTO Review 
-- VALUES (NULL, 
-- "FREE Vegeterian FOOD", 
-- "terrible.",
-- 1,
-- 1,
-- "2019-08-22");
-- -- Get all reviews
-- SELECT * FROM Review;
-- -- Add a new review
-- INSERT INTO Review 
-- VALUES (NULL, 
-- "English clam chowder", 
-- "It was a wonderful night. The food was plenty and delicious. It was also well-located.",
-- 4,
-- 5,
-- "2019-08-25");
-- -- Get a review with any id
-- SELECT * FROM Review 
-- WHERE id = 3;
-- -- Update a review with any id
-- UPDATE Review 
-- SET stars = 4 ,
-- description = "It was a wonderful night. The food was plenty and delicious. But the drink tasted bad. It was also well-located."
-- WHERE id = 3;
-- -- Delete a review with any id
-- DELETE FROM Review 
-- WHERE id = 5;

-- -- Additional queries
-- -- Get meals that has a price smaller than a specific price fx 90
-- SELECT `title` , `price` FROM `Meal`
-- WHERE `price` < 90;
-- -- Get meals that still has available reservations
-- SELECT Meal.title , Meal.max_reservations AS "Max reservation" , SUM(Reservation.number_of_guests)  AS "Number of guests" FROM `Meal`
-- JOIN `Reservation`
-- ON Meal.id = Reservation.meal_id
-- GROUP BY Meal.title
-- HAVING Meal.max_reservations != SUM(Reservation.number_of_guests);
-- -- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- SELECT * FROM Meal 
-- WHERE title LIKE "FREE%";
-- -- Get meals that has been created between two dates
-- SELECT title , created_date FROM `Meal`
-- WHERE created_date BETWEEN "2019-07-1" AND "2019-08-01";
-- -- Get How many reservation received from every meal
-- SELECT Meal.title , COUNT(Reservation.meal_id) FROM `Meal` 
-- INNER JOIN Reservation ON 
-- Meal.id = Reservation.meal_id
-- GROUP BY Meal.title;
-- -- Get the meals that have good reviews
-- SELECT * FROM Review 
-- WHERE stars > 3;
-- -- Get reservations for a specific meal sorted by created_date
-- SELECT Meal.title , Reservation.created_date FROM `Meal`
-- JOIN `Reservation` 
-- ON Meal.id = Reservation.meal_id;
-- WHERE Reservation.created_date LIKE "%2019-08-10%";
-- -- Sort all meals by average number of stars in the reviews
-- SELECT Meal.title , AVG(Review.stars) AS Stars FROM `Meal`
-- JOIN `Review`
-- ON Meal.id = Review.meal_id
-- GROUP BY Meal.title
-- ORDER BY Stars DESC;










