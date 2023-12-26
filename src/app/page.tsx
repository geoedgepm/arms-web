'use client'
import React, { useState } from 'react';
import { 
    ConfigProvider, 
    Card,
    Button, 
    Col, 
    Row, 
    Select, 
    Table,
    Statistic,
    Drawer 
} from '@/components';
import {
    ArrowDownOutlined,
    ArrowUpOutlined
} from '@/components/icons'
import { 
    faArrowDown, 
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import DoughnutChart from "./doughnutChart";
import DoughnutChart from '@/components/chart/doughnut-chart';
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
    const [openTreatmentCategory, setOpenTreatmentCategory] = useState(false);
    const [openDrawerTreatmentDetail, setOpenDrawerTreatmentDetail] = useState(false);

    const showDrawerTreatmentCategory = () => {
        setOpenTreatmentCategory(true);
    };

    const onCloseTreatmentCategory = () => {
        setOpenTreatmentCategory(false);
    };

    const showDrawerTreatmentDetail = () => {
        setOpenDrawerTreatmentDetail(true);
    };

    const onCloseTreatmentDetail = () => {
        setOpenDrawerTreatmentDetail(false);
    };

    const handleChange = (value:string) => {
        console.log(value); 
    };

    const columns = [
        {
          title: 'Risk ID',
          dataIndex: 'risk_id',
          width: 150,
        },
        {
          title: 'Risk Event',
          dataIndex: 'risk_event',
        },
        {
          title: 'Impact Count',
          dataIndex: 'impact_count',
          width: 150,
        },
        {
            title: 'Likelihood Count',
            dataIndex: 'likelihood_count',
            width: 150,
          },
      ];

    const data = [];
        for (let i = 0; i < 3; i++) {
        data.push({
          key: i,
          risk_id: `RSK_GA_3_10 ${i}`,
          risk_event: 'Faults related to maintaining impartiality of ASEC - As a secretariat, ASEC should remain neutral (cannot take sides and interpret issues against a certain party).',
          impact_count: `${i}`,
          likelihood_count: `${i}`,
        });
    }

    const columnsDetail = [
        {
            title:     (
                <span> 
                    Category <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'category',
            key: 'category',
        },
        {
            title:     (
                <span>
                    Information <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'information',
            key: 'information',
        },
        {
            title:     (
              <span>
                    Remarks <FontAwesomeIcon icon={faArrowDown} />
              </span>
            ),
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title:     (
              <span>
                  Focal Point <FontAwesomeIcon icon={faArrowDown} />
              </span>
            ),
            dataIndex: 'focal_point',
            key: 'focal_point',
        },
          {
            title:     (
                <span>
                    Cost (USD) <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'cost_usd',
            key: 'cost_usd',
          },
          {
            title:     (
                <span>
                    Due Date <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'due_date',
            key: 'due_date',
          },
          {
            title:     (
                <span>
                    Status <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'status',
            key: 'status',
          },
    ];
    
    const dataDetail = [
        {
            key: '1',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
        },
        {
            key: '2',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
        },
        {
            key: '3',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
        },
        {
        key: '4',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
        },
    
    ];

    

  return (<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    
    <div className="main-home">
        <section className="risk-treatment-status">
            <div className="header">
                <span className="title">Impact Risk Treatment Category</span>
                <div className="btn-right-select">
                    <Select
                        className="btn-right-filter"
                        placeholder="Select category"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Impact1',
                                label: 'Impact Risk Treatment',
                            },
                            {
                                value: 'Impact2',
                                label: 'Impact Risk Treatment',
                            },
                        ]}
                    />

                    <Select
                        className="btn-right-filter"
                        placeholder="Select devision"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Impact1',
                                label: 'Impact Risk Treatment',
                            },
                            {
                                value: 'Impact2',
                                label: 'Impact Risk Treatment',
                            },
                        ]}
                    />

                    <Select
                        className="btn-right-filter"
                        placeholder="Select status"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Impact1',
                                label: 'Impact Risk Treatment',
                            },
                            {
                                value: 'Impact2',
                                label: 'Impact Risk Treatment',
                            },
                        ]}
                    />

                    <Select
                        className="btn-right-filter"
                        labelInValue
                        defaultValue="Impact Risk Treatment"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Impact1',
                                label: 'Impact Risk Treatment',
                            },
                            {
                                value: 'Impact2',
                                label: 'Impact Risk Treatment',
                            },
                        ]}
                    />

                    <Button className="btn-right-filter btn-bar-filter" onClick={showDrawerTreatmentCategory}>
                        <FontAwesomeIcon className='icon-bars-filter' icon={faBars} /> More Filters
                    </Button>

                    <Drawer title="Treatment Category" placement="right" onClose={onCloseTreatmentCategory} open={openTreatmentCategory}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                    
                </div>
                
            </div>
            <div className="box">

                <Row gutter={[16,16]}>
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
            </div>
        </section>
        <section className="risk-summary">
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={24} lg={18}>
                    <div className="header">
                        <h2 className="title">Risk Summary</h2>
                    </div>
                    <div className="table-content">
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            scroll={{
                                y: 240,
                            }}
                            footer={() => (
                                <div className="main-footer">
                                    <Button className="btn-pre">Previous</Button>
                                    <div className="pagination-footer">
                                        <ul className="pagination">
                                            <li>Page</li>
                                            <li><a href="/#">1</a></li>
                                            <li>of</li>
                                            <li><a href="/#">10</a></li>
                                        </ul>
                                    </div>
                                    <Button className="btn-next">Next</Button>
                                </div>
                            )}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <div className="main-risk-treatment-category">
                        <div className="header">
                            <h2 className="title">Impact Risk Treatment Category</h2>
                        </div>
                        <div className="chat-content">
                            <DoughnutChart />
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
        <section className="risk-treatment-detail">
            <div className="main-table-detail">
                <div className="header">
                    <h2 className="title">Impact Risk Treatment Details</h2>
                    <div className="btn-right">
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select category"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select divisions"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select status"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Button className="btn-bar-filter" onClick={showDrawerTreatmentDetail}>
                            <FontAwesomeIcon className='icon-bars-filter' icon={faBars} /> More Filters
                        </Button>

                        <Drawer title="Treatment Detail" placement="right" onClose={onCloseTreatmentDetail} open={openDrawerTreatmentDetail}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
                <div className="table-detail">
                    <Table
                    dataSource={dataDetail}
                    columns={columnsDetail}
                    rowKey="key"
                    className="striped-table" 
                    pagination={false}
                    />
                </div>
            </div>
        </section>
    </div>
  </ConfigProvider>
  )
}

