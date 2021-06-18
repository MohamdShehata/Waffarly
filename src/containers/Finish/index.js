import React, { Component } from 'react'
import Barcode from 'react-barcode'
import moment from 'moment'
import { Link } from 'react-router-dom';
import { formatReal } from '../../utils/formatters'
import { Icon, Button } from 'antd'
import style from './style.module.css'

class Finish extends Component {

  renderInternalError = () => {
    return (
      <div className={style.containerError}>
        <Icon type="close-circle" style={{ fontSize: 42, color: 'red' }} />
        <h1 style={{ marginLeft: 5 }}>Erorr</h1>
      </div>
    )
  }

  render () {
    const { data: { response } } = this.props

    const total = formatReal(response.amount)
    const formattedTotal = total.replace(/,/gi, ".")
    const plotValue = formattedTotal / response.installments

    return (
      <div>
        <header className={style.header}>
        <Link className={style.link} to="/producthome"> WAFFARLY PAYMENT </Link>
        </header>
        {response.errors ? this.renderInternalError() :
        <div className={style.wrapper}>
          <div className={style.containerBg}>
            <div className={style.containerSucess}>
              <div className={style.wrapperIcon}>
                <h2>Successful Operation</h2>
                <Icon type="check-circle" style={{ fontSize: 32, color: '#008322' }} />
              </div>
            </div>
            <h3>Payment details</h3>
            <div className={style.containerInfo}>
              <p className={style.label}>Name</p>
              <span>{response.customer.name}</span>
            </div>

            <div className={style.containerInfo}>
              <p className={style.label}>CPF</p>
              {response.customer.documents.map(doc => <p key={doc.number}>{doc.number}</p> )}
            </div>
            <div className={style.containerInfo}>
              <p className={style.label}>{response.boleto_barcode ? 'Bardocode' : 'installments'}</p>
              <p>{response.boleto_barcode || `${response.installments}x`}</p>
            </div>

            {response.boleto_barcode ?
              <div className={style.containerInfo}>
                <p className={style.label}>Date</p>
                <p>{moment(response.boleto_expiration_date).format('DD/MM/YYYY')}</p>
              </div> :

              <div className={style.containerInfo}>
                <p className={style.label}>Installments amount</p>
                <p>{plotValue.toFixed(2)}</p>
              </div>
            }

            <div className={style.containerInfo}>
              <p className={style.label}>Amount</p>
              <p>{formatReal(response.amount)}</p>
            </div>

            <div className={style.containerBarcode}>
              {response.boleto_barcode ? <Barcode value={response.boleto_barcode} /> : null }
            </div>
          </div>
            <Button
              style={{ marginTop: 25 }}
              onClick={this.props.onGoToStore}
            >
             Back To Store
            </Button>
        </div>
        }
      </div>
    )
  }
}

export default Finish