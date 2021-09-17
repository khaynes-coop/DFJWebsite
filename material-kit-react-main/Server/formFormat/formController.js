/* Dependencies */
import Form from "./formModel";
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update football clubs.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the football club as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  or
  https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
 */

/* Create a User */
export const create = async (req, res) => {
  /* get the user data from req.body */
  /* Then save the User to the database */
  const form = req.body;
  if (!form) {
    return res.status(200).send({
      error: "Form not found",
    });
  }
  await new Form(form)
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};
