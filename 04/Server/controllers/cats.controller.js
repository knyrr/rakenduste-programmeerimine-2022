//CRUD

let cats = ["Fluffy"]

exports.create = (req, res) => {
  const { name } = req.params

  cats.push(name)
  res.send(cats)
}

exports.read = (req, res) => {
  console.log(req.body)
  console.log(req.user)
  res.send(cats)
}

exports.update = (req, res) => {
  const { name } = req.params

  //muudab ainult esimest, kui eksisteerib
  let index = cats.indexOf(name)
  if (index !== -1) {
    cats[index] = cats[index] + "_muudetud"
  }

  // see käib kõik samanimelised läbi
  /*   cats = cats.map((cat) => {
    if (cat === name) {
      return cat + "_updated"
    }
    return cat
  })
 */

  res.send(cats)
}

exports.delete = (req, res) => {
  const { name } = req.params

  // Kustutab esimese
  /*   let index = cats.indexOf(name)
  if (index !== -1) {
    cats.splice(index, 1)
  }
 */
  // see käib kõik samanimelised läbi
  cats = cats.filter(function (value, index, arr) {
    return value != name
  })

  res.send(cats)
}
