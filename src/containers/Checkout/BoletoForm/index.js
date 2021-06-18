import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import CustomInput from "../../../components/CustomInput";
import * as cpf from "@fnando/cpf";
class Boleto extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const formattedValues = {
          ...values,
          cpf: values.cpf.replace(/\.|-/g, ""),
        };
        this.props.onSubmitBoleto(formattedValues);
      }
    });
  };

  validateCPF = (rule, value, callback) => {
    const cpfValue = value.replace(/\.|\-/g, "");
    const validateCPF = cpf.isValid(cpfValue);

    if (cpfValue.length === 11 && !validateCPF) {
      callback("CPF invalid");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ padding: 24 }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Fill in the Name field!" }],
            })(<Input size="large" />)}
          </Form.Item>

          <Form.Item label="CPF">
            {getFieldDecorator("cpf", {
              rules: [
                { required: true, message: "Fill in the CPF field!" },
                { validator: this.validateCPF },
              ],
            })(<CustomInput mask="999.999.999-99" size="large" />)}
          </Form.Item>
          <Form.Item>
            <Button
              onClick={this.handleSubmit}
              loading={this.props.loadingBoleto}
            >
              Generate Ticket{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Boleto);
