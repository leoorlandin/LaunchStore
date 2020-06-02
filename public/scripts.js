const inputPrice = document.querySelector('input[name="price"]')
inputPrice.addEventListener("keydown", function (event) {
  setTimeout(function () {

    let { value } = event.target

    value = value.replace(/\D/g, "")

    value = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)

    event.target.value = value

  }, 1)
})