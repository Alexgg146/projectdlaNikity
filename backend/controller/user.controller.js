const user = require("../shema.js");
function CreateApplication(req, res) {
  const { name, email, age, phone, location, opros } = req.body;
  user
    .create({
      name,
      email,
      age,
      phone,
      location,
      opros,
    })
    .then((user) =>
      res.send({
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone,
        location: user.location,
        opros: user.opros,
      })
    );
}
function DeleteApplicarion(req, res, next) {
  const { id } = req.params;
  user
    .findById(id)
    .then((data) => {
      data
        .deleteOne()
        .then((deletedUser) => {
          res.status(200).send({ data: deletedUser });
        })
        .catch((err) => console.log(err));
    })

    .catch((er) => console.log(er));
}
function getInfo(_req, res) {
  return user
    .find({})
    .then((users) => res.send(users))
    .catch((er) => {
      console.log(er);
    });
}
module.exports = {
  getInfo,
  DeleteApplicarion,
  CreateApplication,
};
