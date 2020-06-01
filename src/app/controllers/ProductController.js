const Category = require('../models/Category')

module.exports = {
  create(req, res) {

    Category.all()
      .then(function (results) {

        const categories = results.rows

        return res.render('products/create.njk', { categories })
      })
      .catch(function (err) {
        throw new Error(err)
      })
  },
  post(req, res) {

  }
}