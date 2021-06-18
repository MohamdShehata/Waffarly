import React, { Component } from 'react'
import { Tabs, Icon } from 'antd'
import BoletoForm from './BoletoForm'
import CreditCardForm from './CreditCardForm'

const { TabPane } = Tabs

class Checkout extends Component {
  render () {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="credit-card" />
                Credit Card
              </span>
            }
            key="1"
          >
           <CreditCardForm
            onSubmitCreditCard={this.props.onSubmitCreditCard}
            loadingCreditCard={this.props.loadingCreditCard}
          />
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="barcode" />
                Ticket              </span>
            }
            key="2"
          >
           <BoletoForm
            onSubmitBoleto={this.props.onSubmitBoleto}
            loadingBoleto={this.props.loadingBoleto}
           />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Checkout