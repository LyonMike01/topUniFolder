
// get all results
app.get("/users", (req, res) => {
    res.json(users);
  });
   
  // get paginated results
  app.get("/users/paginate", paginatedResults(users), (req, res) => {
    res.json(res.paginatedResults);
  });
   
  function paginatedResults(model) {
    // middleware function
    return (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
   
      // calculating the starting and ending index
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
   
      const results = {};
      if (endIndex < model.length) {
        results.next = {
          page: page + 1,
          limit: limit
        };
//get users (pagination)
// HTTP GET
// http://localhost:3005/users/paginate?page=1&limit=15
      }
   
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        };
      }
   
      results.results = model.slice(startIndex, endIndex);
   
      res.paginatedResults = results;
      next();
    };
    
  }

  
//get users (pagination)
// HTTP GET
// http://localhost:3005/users/paginate?page=1&limit=15