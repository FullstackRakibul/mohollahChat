import { Button, Card, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const ModuleCard = (props:any) => {
  const sendSubmit = () => {
    console.log(props.title);
  }
  return (
    <>
          <Card
            className=' text-cyan-200 '
            title={props.title}
          >
            <Form
              onFinish={sendSubmit}
            >
              <FormItem
                name="username"
              >
                <Input/>
              </FormItem>
              <FormItem
                name="chatroomName"
              >
                <Input/>
              </FormItem>
              <FormItem>
                <Button
                  htmlType="submit"
                >
                  join
                </Button>
              </FormItem>
            </Form>
          </Card>
    </>
  )
}

export default ModuleCard