USE survey_results;

CREATE TABLE survey_results (
	id INT (6) AUTO_INCREMENT PRIMARY KEY,
    attempt INT (255),
    Question INT (40),
    Data_Type VARCHAR (40),
    Chart_Type varchar (40),
    Correct INT (10),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

DROP TABLE survey_results;

