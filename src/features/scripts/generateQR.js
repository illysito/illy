import QRCode from 'qrcode'

function generateQR() {
  const input = document.getElementById('qrCodeURL')
  const button = document.getElementById('grCodeButton')
  const img = document.getElementById('qrCodeImage')

  button.addEventListener('click', async () => {
    const options = {
      errorCorrectionLevel: 'H',
      width: 1200,
    }

    const dataUrl = await QRCode.toDataURL(input.value, options)
    img.src = dataUrl
  })
}

export default generateQR
