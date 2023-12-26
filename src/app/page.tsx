'use client'

import { 
    ConfigProvider, 
    Card,
    Button, 
    Col, 
    Row, 
    Select, 
    Table,
    Statistic
} from '@/components';
import {
    ArrowDownOutlined,
    ArrowUpOutlined
} from '@/components/icons'
import './style.css';

const data: any = [];
for (let i = 0; i < 3; i++) {
    data.push({
        key: i,
        risk_id: `RSK_GA_3_10 ${i}`,
        risk_event: 'Faults related to maintaining impartiality of ASEC - As a secretariat, ASEC should remain neutral (cannot take sides and interpret issues against a certain party).',
        impact_count: `${i}`,
        likelihood_count: `${i}`,
    });
}

export default function Page() {
  const handleChange = (value: any) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  return (<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    <Row gutter={16}>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                title="Done"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
                />
            </Card>
        </Col>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                    title="Cancelled"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                    title="Not Started"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                    title="In Progress"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                    title="Near Due Date"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={4}>
            <Card bordered={false}>
                <Statistic
                    title="Overdue"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
    {/* <Table dataSource={dataSource} columns={columns} /> */}
  </ConfigProvider>
  )
}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
