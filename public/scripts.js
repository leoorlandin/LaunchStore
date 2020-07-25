const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value)
    }, 1)
  },
  formatBRL(value) {

    value = value.replace(/\D/g, "")

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)
  }
}

const PhotosUpload = {
  uploadLimit: 6,
  handleFileInput(event) {
    const { files: fileList } = event.target
    const { uploadLimit } = PhotosUpload

    if(fileList.length > uploadLimit) {
      alert(`Por favor, envie no máximo ${uploadLimit} fotos do produto`)
      event.preventDefault()
      return
    }

    Array.from(fileList).forEach(file => {
      const reader = new FileReader()

      reader.onload = () => {
        const image = new Image()
        image.src = String(reader.result)

        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick = () => alert('excluir imagem')

        div.appendChild(image)

        document.querySelector('#photos-preview').appendChild(div)
      }

      reader.readAsDataURL(file)
    })

  }
}