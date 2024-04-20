# -Que-
trivia game

Server: Express
Database: MySQL2
Additonal Technologies Used: Sequelize
Front-end: React

Models: User, Category, Question, Stack(of Questions), Scoreboard

Routers:
- User
    - create new account
    - log in
    - log out
- Quiz
    Endpoints (router)
        - start quiz '/quiz/
            - select category /quiz/${category}
                - select topic /quiz/${cagetory}/${topic}
    Features (script)
        - select category
        - select topic
        - random button
        - favorite stacks
        - responds to user responses
    
    