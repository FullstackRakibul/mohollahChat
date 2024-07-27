import React, { ReactNode } from 'react';
import { Layout } from 'antd';
const {  Content } = Layout;

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
        <Layout style={{ padding: '5px 5px' }}>
          <Content >
            {children}
          </Content>
        </Layout>
    </Layout>
    </>
  )
}

export default MainLayout