// secret - pode ser qualquer palavra que é utilizada para gerar um token
// tempo de expiração - 1 dia (nesse caso)

module.exports = {
  jwt: {
    secret: "default",
    expiresIn: "1d"
  }
}

