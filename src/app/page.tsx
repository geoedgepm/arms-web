import { ConfigProvider, Button, Table } from '@/components';

export default function Home() {
  return (<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    <Button type="primary">Button</Button>
    <Table dataSource={dataSource} columns={columns} />;
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
