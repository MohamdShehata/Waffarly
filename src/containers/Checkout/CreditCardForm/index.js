import React, { Component } from 'react'
import { Form, Input, Row, Col, Select, Button, message } from 'antd'
import CustomInput from '../../../components/CustomInput'
import getAddressByZipCode from '../../../service/searchAddress'
import * as cpf from "@fnando/cpf"

const installments = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const { Option } = Select
class CreditCard extends Component {

    handleSubmit = (e) => {
    e.preventDefault()
     this.props.form.validateFields((err, values) => {
      if (!err) {
        const formattedValues = {
          ...values,
          zipCode: values.zipCode.replace(/\.|-/g, ''),
          cpf: values.cpf.replace(/\.|-/g, ''),
          card_number: values.card_number.replace(/\.|-/g, ''),
          card_expiration_date: values.card_expiration_date.replace(/\.|-/g, ''),
        }
        this.props.onSubmitCreditCard(formattedValues)
      }
    })
  }

  handleOnBlurSearchCep = async (zipCode) => {
    try {
      const address = await getAddressByZipCode(zipCode)
      if (address.erro) {
        message.error('Address not found!')
      } else {
        this.setFormAddress(address)
      }
    } catch (address) {
      message.error('Failed To Fetch Address!')
    }
  }

  setFormAddress = (address) => {
    const addressForm = {
      neighborhood: address.District,
      city: address.localidade,
      street: address.logradouro,
      state: address.uf,
    }
    this.props.form.setFieldsValue(addressForm)
  }

    validateCPF = (rule, value, callback) => {
    const cpfValue = value.replace(/\.|\-/g, '')
    const validateCPF = cpf.isValid(cpfValue)

    if (cpfValue.length === 11 && !validateCPF) {
      callback('CPF invalid')
    } else {
      callback()
    }
  }

  render () {
  const { getFieldDecorator } = this.props.form

    return (
      <div>
       <Form>
        <p>Personal Data
</p>
         <Row>
           <Col sm={24} md={14}>
            <Form.Item label="Full Name" >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Fill in the Name field' }],
              })(
                <Input
                  size="large"
                />
              )}
            </Form.Item>
           </Col>

          <Col md={1} sm={0} />

          <Col sm={24} md={9}>
            <Form.Item label="CPF" >
              {getFieldDecorator('cpf', {
                rules: [{ required: true, message: 'Fill in the CPF field!' },{
                  validator: this.validateCPF
                }],
              })(
                <CustomInput
                  size="large"
                  mask="999.999.999-99"
                />
              )}
            </Form.Item>
           </Col>
         </Row>

        <p>Card Data </p>

         <Row>
           <Col sm={24} md={14}>
            <Form.Item label="Credit Card Number" >
                {getFieldDecorator('card_number', {
                  rules: [{ required: true, message: 'Fill in the Credit Card field!' }],
                })(
                  <CustomInput
                    mask="9999.9999.9999.9999"
                    size="large"
                    placeholder="0000 0000 0000 0000"
                  />
                )}
            </Form.Item>
           </Col>

          <Col md={1} sm={0} />

           <Col sm={24} md={4}>
            <Form.Item label="Date" >
                {getFieldDecorator('card_expiration_date', {
                  rules: [{ required: true, message: 'Mandatory!' }],
                })(
                  <CustomInput
                    mask="99/99"
                    size="large"
                    placeholder="00/00"
                  />
                )}
            </Form.Item>
           </Col>

          <Col md={1} sm={0} />

          <Col sm={24} md={4}>
            <Form.Item label="CVV" >
                {getFieldDecorator('card_cvv', {
                  rules: [{ required: true, message: 'Mandatory!' }],
                })(
                  <CustomInput
                    mask="999"
                    size="large"
                    placeholder="000"
                  />
                )}
            </Form.Item>
           </Col>
         </Row>

         <Row>
          <Col sm={24} md={14}>
            <Form.Item label="Holder" >
                {getFieldDecorator('card_holder_name', {
                  rules: [{ required: true, message: 'Fill in the Name field!' }],
                })(
                  <Input
                    size="large"
                  />
                )}
            </Form.Item>
          </Col>

          <Col md={1} sm={0} />

          <Col sm={24} md={9}>
            <Form.Item label="Quantity" >
                {getFieldDecorator('installments', {
                  initialValue: 1,
                  rules: [{ required: true, message: 'Mandatory!' }],
                })(
                  <Select
                    size="large"
                  >
                    {installments.map(i => {
                      return (
                        <Option
                          key={i}
                          value={i}
                        >
                          {i}x
                        </Option>
                      )
                    })}
                  </Select>
                )}
            </Form.Item>
           </Col>
         </Row>

        <p>Billing Address</p>

        <Row style={{ fontSize: 12 }}>
          <Col sm={24} md={9} style={{ marginBottom: 10 }}>
            <Form.Item label="Zip code">
              {getFieldDecorator('zipCode', {
                  rules: [{ required: true, message: 'Fill in the ZIP code field!' }],
                })(
                <CustomInput
                  mask="99999-999"
                  size="large"
                  onBlur={(e) => this.handleOnBlurSearchCep(e.target.value)}
                />
            )}
            </Form.Item>
          </Col>

          <Col sm={0} md={1} />

          <Col sm={24} md={14} style={{ marginBottom: 10 }}>
            <Form.Item label="Street">
              {getFieldDecorator('street', {
                  rules: [{ required: true, message: 'Fill in the Street field!' }],
                })(
                  <Input
                    size="large"
                  />
              )}
            </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col sm={24} md={14} >
              <Form.Item label="District">
                {getFieldDecorator('neighborhood', {
                    rules: [{ required: true, message: 'Fill in the District field!' }],
                  })(
                    <Input
                      size="large"
                    />
              )}
              </Form.Item>
            </Col>

            <Col sm={0} md={1} />

            <Col sm={24} md={9} style={{ marginBottom: 10 }}>
              <Form.Item label="Number">
                {getFieldDecorator('number', {
                    rules: [{ required: true, message: 'Mandatory!' }],
                  })(
                    <Input
                      size="large"
                    />
              )}
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ fontSize: 12 }}>
            <Col sm={24} md={14} style={{ marginBottom: 10 }} >
              <Form.Item label="City">
                {getFieldDecorator('city', {
                    rules: [{ required: true, message: 'Fill in the City field!' }],
                  })(
                    <Input
                      size="large"
                    />
              )}
              </Form.Item>
            </Col>

            <Col sm={0} md={1} />

            <Col sm={24} md={9} style={{ marginBottom: 10 }}>
              <Form.Item label="Country/State">
                {getFieldDecorator('state', {
                    rules: [{ required: true, message: 'Mandatory!' }],
                  })(
                    <Input
                      size="large"
                    />
              )}
              </Form.Item>
            </Col>
          </Row>
       </Form>
       <Button
        onClick={this.handleSubmit}
        loading={this.props.loadingCreditCard}
       >
        Checkout
       </Button>
      </div>
    )
  }
}

export default Form.create()(CreditCard)