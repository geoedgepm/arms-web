'use client'
import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Link from 'next/link'
import './globals.css'
import StyledComponentsRegistry from '../../lib/AntdRegistry'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const inter = Inter({ subsets: ['latin'] })

function getItem(
  label: React.ReactNode,
  path: string,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link href={path}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '/', '1', <PieChartOutlined />),
  getItem('Risk Matrix', '/riskmatrix', '2', <DesktopOutlined />),
  getItem('Risk Details', '/riskmatrix', '2', <DesktopOutlined />),
  getItem('User', '/riskmatrix', 'sub1', <UserOutlined />, [
    getItem('Tom', '/riskmatrix', '3'),
    getItem('Bill', '/riskmatrix', '4'),
    getItem('Alex', '/riskmatrix', '5'),
  ]),
  getItem('Files', '/riskmatrix', '9', <FileOutlined />),
];

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={false} onCollapse={(value) => console.log('hello world')}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
              </Sider>
              <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>
                  {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
              </Layout>
            </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
