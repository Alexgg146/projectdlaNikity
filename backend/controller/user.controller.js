const userSchema = require('../shema');
function CreateApplication(req, res, next) {
    const {
        name,email,age,phone,location,opros
    } = req.body;
    bcrypt.hash(password, 10)
      .then(() => userSchema.create({
        name,
        email,
        age,
        phone,
        location,
        opros,
      }).then((user) => res.send({
        name: user.name, email: user.email, age: user.age, phone: user.phone, location: user.location, opros: user.opros
      })))
    console.log(Error)
  }
  function DeleteApplicarion(req, res, next) {
    return user.findById(req.params.id)
      .orFail(() => new console.message('Карточка по данному id не найдена'))
      .then((user) => {
        if (user.owner._id.toString() === req.user.payload) {
          return user.deleteOne();
        }
      })
      .catch(next);
    console.log(Error)
  }
  function getInfo(_req, res, next) {
    return userSchema.find({})
      .then((users) => res.send(users))
      .catch(() => {
        next(new console.message('Ошибка'));
      });
    console.log(Error)
  }
  module.exports = {
    getInfo,
    DeleteApplicarion,
    CreateApplication,
  };