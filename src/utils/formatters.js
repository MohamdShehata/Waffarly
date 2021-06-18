const formatPrice = (price) => price.toLocaleString('ar-EG', { style: 'currency', currency: 'EGP' })

const formatReal = (amount) => {
    let value = amount+''
    value = value.replace(/([0-9]{2})$/g, " ")
    if( value.length > 6 )
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, "")
        return value
}

export {
  formatPrice,
  formatReal,
}