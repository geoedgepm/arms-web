'use client'
import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BarChartOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import {
  Layout,
  Menu,
  theme,
  Dropdown,
  Space
} from 'antd'
import Link from 'next/link'
import './globals.css'
import StyledComponentsRegistry from '../../lib/AntdRegistry'
import { DashboardOutlined, LineChartOutlined } from '@/components/icons';

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
  getItem('Dashboard', '/', '1', <DashboardOutlined />),
  getItem('Risk Matrix', '/riskmatrix', '2', <BarChartOutlined />),
  getItem('Risk Details', '/riskdetail', '3', <LineChartOutlined />),
  getItem('User', '/riskmatrix', 'sub1', <UserOutlined />, [
    getItem('Tom', '/riskmatrix', '4'),
    getItem('Bill', '/riskmatrix', '5'),
    getItem('Alex', '/riskmatrix', '6'),
  ]),
  getItem('Files', '/riskmatrix', '9', <FileOutlined />),
];

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function getMenuItem(
  label: React.ReactNode,
  key: React.Key,
): MenuItem {
  return {
    key,
    label,
  } as MenuItem;
}

const menuItems: MenuItem[] = [
  getMenuItem(
    <Link href={'#'}> <SettingOutlined className='icon-menu' />Change Role</Link>,
    "0",
  ),
  getMenuItem(
    <Link href={'#'}> <SettingOutlined className='icon-menu' />Change Password</Link>,
    "1",
  ),
  getMenuItem(
    <Link href={'#'}> <LogoutOutlined className='icon-menu' />Logout</Link>,
    "2",
  )
];


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
      <body className={inter.className} style={{ margin: 0, overflow: 'hidden' }}>
        <StyledComponentsRegistry>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={false} onCollapse={(value) => console.log('hello world')}>
              <div className="demo-logo-vertical" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
              <Header className='header-bar' style={{ padding: 0, background: colorBgContainer }}>
                  <div className='profile'>
                    <Dropdown menu={{items: menuItems}} trigger={['click']}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          ARMS Admin
                          <div className='icon-profile'>
                            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745' alt='profile'/>
                          </div>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                </Header>
              <Content style={{ padding: '0 16px', overflowY: 'scroll' }}>
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
