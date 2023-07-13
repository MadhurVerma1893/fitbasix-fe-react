import { Button, Card, Form, Input, Select, Typography } from "antd";
import React from "react";
import { postDialog } from "../../api/services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormBooking = () => {
  const navigate = useNavigate();
  //Search Params String
  const [searchParams, setSearchParams] = useState(window.location.search);
  const onFinish = async (data) => {
    console.log("Success:", data);
    data.formType = "FreeTrial";

    const response = await postDialog(data, searchParams);
    if (response?.resStr == "success") {
      navigate("/thankyou");
    } else {
      navigate("/error");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card className="w-full z-[999]">
      <Typography>
        <span className="text-[24px] font-bold">
          Book Your &nbsp;
          <span style={{ color: "#49AD50" }}>First Session!</span>
        </span>
      </Typography>
      <Form
        name="form"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        className="w-full"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={(error) => console.log(error)}
        size={"large"}
      >
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input placeholder="First Name" className="bg-[#F0F0F0]" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input placeholder="Last Name" className="bg-[#F0F0F0]" />
        </Form.Item>
        <Form.Item
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input placeholder="Mobile number" className="bg-[#F0F0F0]" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email id!",
            },
          ]}
        >
          <Input placeholder="Email id" className="bg-[#F0F0F0]" />
        </Form.Item>
        <Form.Item name="timeSlot">
          <Select placeholder="Preferred time to call back">
            <Select.Option value="Morning">Morning</Select.Option>
            <Select.Option value="Afternoon">AfterNoon</Select.Option>
            <Select.Option value="Evening">Evening</Select.Option>
            <Select.Option value="Night">Night</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // onClick={() => console.log("console")}
            className="w-full bg-[#49AD50] !important"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormBooking;
