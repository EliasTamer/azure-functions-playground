const { app } = require('@azure/functions');

app.http("RemoveData", {
    methods: ["DELETE"],
    authLevel: "anonymous",
    handler: async (request, context) => {
      const personId = request.query.get("id");
  
      if (!personId) {
        return {
          body: {
            message: "please provide an id!",
          },
        };
      }
  
      return { body: `Data deleted successfuly!` };
    },
  });
