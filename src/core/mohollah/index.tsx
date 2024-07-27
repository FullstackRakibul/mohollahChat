import { Card, Col, Row } from 'antd'
import ModuleCard from '../../components/ui/card/ModuleCard'

const Mohollah = () => {
  return (
    <>
      <Row
        gutter={16}
        justify="center"
      >
        <Col
          lg={7}
          md={10}
          sm={24} 
        >
          <ModuleCard title="JoinRoom"/>
        </Col>
         <Col
          lg={7}
          md={10}
          sm={24}
        >
          <ModuleCard title="Chat"/>
        </Col>
         <Col
          lg={7}
          md={10}
          sm={24}
        >
          <ModuleCard title="JoinTong"/>
        </Col>
      </Row>
    </>
  )
}

export default Mohollah