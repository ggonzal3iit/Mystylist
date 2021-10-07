# Mystylist
Webapp to connect customers with stylist

Project notes:

Technologies used:

  Backend:
  Java 8,
  MariaDB,
  Spring Boot,
  Spring Security,
  Spring Web,
  Spring Data JPA,
  jjwt,
  Maven
  
  Front-end:
  React,
  React-router-dom,
  Bootstrap,
  Axios,
  react-validation,
  validator

Tools:
Eclipse IDE for Back-end,
VS Code for front-end,
Postman for API testing

Using Eclipse created an MVC springboot project. Separately I generated a react project and imported it into the maven project. The attempt to get a simple hello world page to display when running the spring boot project. The challenge is getting the file structure correct. First attempt is to place the react project in src/main/webapp directory. Once in that folder the project had to be cleaned of the standard build generated when using npx create-react-app command. After cleaning all files and trying to display a simple hello world on the main page, I was not able to get the project to show anything when initializing the maven project and going to port 8080.

After a few failed attempts I did some research and asked a few college friends regarding their experience with full stack webapps. The feedback was that their normal method was to develop separately. With the new approach I was able to get the back-end going for a login and signup both with authentication. The tomcat server started up properly, the database connection was created. The springboot app generated tables in the database. I manually checked the database using terminal, then added a few roles to the roles table. Then I tried the signup url using the browser on port 8080. After receiving a 405 error I decided to try postman to test the signup api after some research. Definitely took the time to learn more on postman and API testing.

Setting up a front-end to try out GET and POST. This will be login page, signup page, I will also add a few pages to show that I am connected and showing the correct user info on the nav bar or the body of the page. After understanding the flow of creating components in React, I was able to get a simple navigation bar and input fields. Used Axios for HTTP request. Authentication is jwt token based, this is good because it allows the webapp to scale if it ever needs to account for more users.

Next Step:
Add a section in the stylist user page to allow the stylist to add their skills. Display the added skills on a table, allow stylist to add new skills, update existing skills, and delete unwanted skills.

Add button to allow users with account to see previous appointments, displayed in table.

Add a search bar to allow all users to search for stylist by name, zipcode, or specific skill. Display results in a table. This search bar will be visible to public.

