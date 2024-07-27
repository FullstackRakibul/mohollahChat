import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { useParams } from 'react-router-dom';
import { Row, Col, List, Input, Button } from 'antd';

const Chat: React.FC = () => {
  const { toUser } = useParams<{ toUser: string }>();
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [connection, setConnection] = useState<signalR.HubConnection>();

  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7076/chatHub')
      .withAutomaticReconnect()
      .build();

    connect.start()
      .then(() => {
        setConnection(connect);
        connect.on('ReceivePrivateMessage', (fromUser: string, message: string) => {
          setMessages(prevMessages => [...prevMessages, `${fromUser}: ${message}`]);
        });
      })
      .catch((error) => console.error('Connection failed: ', error));
  }, []);

  const sendMessage = async () => {
    if (connection && message) {
      await connection.invoke('SendPrivateMessage', toUser, message);
      setMessage('');
    }
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <h1 style={{ textAlign: 'center' }}>Private Chat with: {toUser}</h1>
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<span style={{ fontSize: 18 }}>{item.split(':')[0]}</span>}
                title={item}
              />
            </List.Item>
          )}
        />
        <Input.TextArea value={message} onChange={e => setMessage(e.target.value)} />
        <Button type="primary" onClick={sendMessage} style={{ marginTop: 10 }}>
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default Chat;
