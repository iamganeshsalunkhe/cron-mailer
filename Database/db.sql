-- User table:contains information of users like name, email, hashed password, default email address 


CREATE TABLE users(
    userId INT primary key AUTO_INCREMENT,
    username varchar(255),
    email varchar(100),
    password varchar(255),
    defaultEmail varchar(100)
);


CREATE TABLE email (
    emailId INT AUTO_INCREMENT PRIMARY KEY,
    sender_email VARCHAR(255),
    recipient_email VARCHAR(255),
    cc_email VARCHAR(255),
    subject VARCHAR(255),
    body TEXT,
    scheduled_time TIMESTAMP,
    status ENUM("Scheduled","Sent","Failed"),
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE recipient (
    recipientId INT AUTO_INCREMENT PRIMARY KEY,
    recipient VARCHAR(255),
    emailId INT,
    FOREIGN KEY (emailId) REFERENCES email(emailId)
);

CREATE TABLE carboncopy (
    carboncopyId INT AUTO_INCREMENT PRIMARY KEY,
    cc_email VARCHAR(255),
    emailId INT,
    FOREIGN KEY (emailId) REFERENCES email(emailId)
);
