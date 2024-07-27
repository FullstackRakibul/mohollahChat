import { Card ,Avatar, Row, Col ,  Button, Checkbox, Form, Input  } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import type { FormProps } from 'antd';
//assets load 
import loginImage from "../../assets/login-image.png"

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const Login = () => {
   const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', '123456');
    navigate('/core/room');
  };


  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  handleLogin();
  };

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };


  return (
    <>
      <div className="flex justify-center items-center align-middle ">
        <Row 
          gutter={10}
          align="middle"
        >
          <Col>
              <Card>
                <Meta 
                title="Enter your login credentials"
                avatar={<Avatar src={loginImage} />}
                >
                </Meta>
                  <Form
                      name="basic"
                      labelCol={{ span: 10 }}
                      wrapperCol={{ span: 18 }}
                      style={{ maxWidth:800 , minWidth:350}}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        
                        rules={[{ required: true, message: 'Please input your username!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 4, span: 16 }}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                          Log in
                        </Button>
                      </Form.Item>
                    </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login