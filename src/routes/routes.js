const ToDoController = require('../controllers/todo_controller');

const routes = app => {
 
  app.get('/v1/to-do', ToDoController.get);

  app.get('/v1/to-do/:id', ToDoController.getById);
  
  app.post('/v1/to-do', ToDoController.create);
  
  app.put('/v1/to-do/:id', ToDoController.edit);

  app.delete('/v1/to-do/:id', ToDoController.deleteToDo);
};

module.exports = routes;
