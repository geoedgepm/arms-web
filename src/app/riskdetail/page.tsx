'use client'
import React,{useState} from "react";
import {
    Button, 
    Table,
    ConfigProvider,
    Select,
    Drawer,
} from "@/components";
import { MenuOutlined, EyeOutlined } from '@/components/icons';
import type { ColumnsType } from 'antd/es/table';
import './style.css';

interface DataType {
  key: string;
  action: string;
  risk_id: string;
  fy: string;
  quarter: string;
  department: string;
  directorate: string;
  division: string;
  objective: string;
  risk_event: string;
  inherent_risk_score: string;
  inherent_risk_score_description: string;
  residual_risk_score: string;
  residual_risk_score_description: string;

}

const columns: ColumnsType<DataType> = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text) => <div className="circle-icon"><EyeOutlined /></div>,
  },
  {
    title: 'Risk ID',
    dataIndex: 'risk_id',
    key: 'risk_id',
  },
  {
    title: 'FY',
    dataIndex: 'fy',
    key: 'fy',
  },
  {
    title: 'Quarter',
    dataIndex: 'quarter',
    key: 'quarter',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Diractorate',
    dataIndex: 'directorate',
    key: 'directorate',
  },
  {
    title: 'Division',
    dataIndex: 'division',
    key: 'division',
  },
  {
    title: 'Objective',
    dataIndex: 'objective',
    key: 'objective',
  },
  {
    title: 'Risk Event',
    dataIndex: 'risk_event',
    key: 'risk_event',
  },
  {
    title: 'Inherent Risk Score',
    dataIndex: 'inherent_risk_score',
    key: 'inherent_risk_score',
  },
  {
    title: 'Inherent Risk Score Description',
    dataIndex: 'inherent_risk_score_description',
    key: 'inherent_risk_score_description',
  },
  {
    title: 'Residual Risk Score',
    dataIndex: 'residual_risk_score',
    key: 'residual_risk_score',
  },
  {
    title: 'Residual Risk Score Description',
    dataIndex: 'residual_risk_score_description',
    key: 'residual_risk_score_description',
  },
];

const data: DataType[] = [
  {
    key: '1',
    action: '',
    risk_id: 'RSK_HS_57_3',
    fy: '2023',
    quarter: 'Cycle 1',
    department: 'Community & Corporate Affaire Department(CCA Department)',
    directorate: 'Corporate Affaire Department',
    division: 'Finance & Budget Division',
    objective: 'Lead the ASEAN Secretariat to implement sound financail management practices which are acceptable to the ASEAN Member States and the interational communities.',
    risk_event: 'Insufficient quality contrl over the implement and post-implemention of project and/or program',
    inherent_risk_score: '12',
    inherent_risk_score_description: 'Significant',
    residual_risk_score: '12',
    residual_risk_score_description: 'Significant',
  },
];

export default function RiskDetail() {
  const [openTreatmentCategory, setOpenTreatmentCategory] = useState(false);


  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const showDrawerTreatmentCategory = () => {
    setOpenTreatmentCategory(true);
  };

  const onCloseTreatmentCategory = () => {
    setOpenTreatmentCategory(false);
  };
  
  return(<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    
    <div className="risk-detail-content">
      <div className="filter-header">
        <h3 className="title">Risk Details</h3>
        <div className="filter-select">
          <Select
            defaultValue="Risk ID"
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
          />
          <Select
            defaultValue=" Selct Department"
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
          />
          <Select
            defaultValue="Select Directorate"
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
          />
          <Select
            defaultValue="Select Division"
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
          />

          <Button className="btn-right-filter btn-bar-filter" onClick={showDrawerTreatmentCategory}>
            <MenuOutlined /> More Filters
          </Button>

          <Drawer title="Risk Detail" placement="right" onClose={onCloseTreatmentCategory} open={openTreatmentCategory}>
            <div className="filter-select">
              <Select
                defaultValue="Select Period"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
              <Select
                defaultValue="Risk Event "
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
              <Select
                defaultValue="Inherent Risk Score"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
              <Select
                defaultValue="Residual Risk Score"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
              <Select
                defaultValue="Aggregation Flag"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
            </div>
          </Drawer>
        </div>
      </div>
      <div className="table-content">
        <Table 
          columns={columns} 
          dataSource={data} 
          scroll={{
            x: 240,
          }}
          pagination={false}
          className="striped-table"
          />
      </div>
    </div>
  </ConfigProvider>)
}
