# simple-task-tracker
simple task tracker application build with node react and mysql.
you can organize your tasks using drag and drop to set its status using react-beautiful-dnd and also contains authentication for the tasks users.
you can find the frontend code in (https://github.com/belal-azzam/task-tracker-react-frontend)
steps to use this project:
1. clone this repo
2. run ```npm install```
3. set your database config in config/database.js and config/config.json
4. run ```npx sequelize-cli db:migrate:undo```
5. run ```npx sequelize-cli db:seed:all```
