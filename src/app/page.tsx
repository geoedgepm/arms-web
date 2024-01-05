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
    CalendarOutlined,
    CheckOutlined,
    FieldTimeOutlined,
    LoadingOutlined,
    OrderedListOutlined,
    RollbackOutlined
} from '@/components/icons'
import { 
    faArrowDown, 
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDashboardData, getSelectOptions, getRiskCount } from '@/services/dashboard';
// import DoughnutChart from "./doughnutChart";
import DoughnutChart from '@/components/chart/doughnut-chart';
import './style.css';
import Helper from '@/helper';
import Link from 'next/link';

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
    const [state, setState] = useState<any>({
        option: {},
        riskCount: {},
        riskSummaries: [],
        riskTreatmentDetails: []
    });
    const [openTreatmentCategory, setOpenTreatmentCategory] = useState(false);
    const [openDrawerTreatmentDetail, setOpenDrawerTreatmentDetail] = useState(false);

    React.useEffect(() => {
        featchDashboardData();
    }, []);

    const featchDashboardData = () => {
        getDashboardData()
        .then((response: any) => {
            if (response && response?.data) {
                const data = response.data;

                setState((prevState: any) => ({
                    ...prevState,
                    option: data.options,
                    riskCount: Helper.getInstance().transformArrayToObject(data.riskCount),
                    riskSummaries: data.riskSummaries,
                    riskTreatmentDetails: data.riskTreatmentDetails
                }));
            }
        });
    }

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

    const handleStatus = (value: string) => {

    }

    const riskSummaryColumns = [
        {
          title: 'Risk ID',
          dataIndex: 'riskId',
          width: 150,
          render: (riskId: string) => <Link href={'/riskId' + riskId}>{riskId}</Link>
        },
        {
          title: 'Risk Event',
          dataIndex: 'riskEvent',
        },
        {
          title: 'Impact Count',
          dataIndex: 'impRiskTreatment',
          width: 150,
        },
        {
            title: 'Likelihood Count',
            dataIndex: 'likRiskTreatment',
            width: 150,
          },
    ];

    const data = [];
    for (let i = 0; i < 3; i++) {
        data.push({
          key: `${i}`,
          risk_id: `RSK_GA_3_10 ${i}`,
          risk_event: 'Faults related to maintaining impartiality of ASEC - As a secretariat, ASEC should remain neutral (cannot take sides and interpret issues against a certain party).',
          impact_count: `${i}`,
          likelihood_count: `${i}`,
        });
    }

    const riskTreatmentDetailColumns = [
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
            dataIndex: 'description',
            key: 'description',
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
            dataIndex: 'pic',
            key: 'pic',
        },
          {
            title:     (
                <span>
                    Cost (USD) <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'cost',
            key: 'cost',
          },
          {
            title:     (
                <span>
                    Due Date <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'dueDate',
            key: 'dueDate',
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

    const { option, riskCount, riskSummaries, riskTreatmentDetails } = state;

  return (<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    <div className="main-home">
        <section className="risk-treatment-status">
            <div className="header">
                <span className="title">Impact Risk Treatment Status</span>
                <div className="btn-right-select">
                    <Select
                        className="btn-right-filter"
                        placeholder="Select category"
                        onChange={handleChange}
                        options={option?.categories ? option.categories : []}
                    />

                    <Select
                        className="btn-right-filter"
                        placeholder="Select devision"
                        onChange={handleChange}
                        options={option?.divisions ? option.divisions : []}
                    />

                    <Select
                        className="btn-right-filter"
                        placeholder="Select status"
                        onChange={handleStatus}
                        options={option?.statuses ? option.statuses : []}
                    />

                    <Select
                        className="btn-right-filter"
                        defaultValue="Impact Risk Treatment"
                        onChange={handleChange}
                        options={option?.riskTreatmentFors ? option.riskTreatmentFors : []}
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
                    <Col span={4} sm={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                            title="Done"
                            value={riskCount?.Done}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<CheckOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} sm={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                                title="Cancelled"
                                value={riskCount['Cancelled']}
                                precision={0}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<RollbackOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} sm={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                                title="Not Started"
                                value={riskCount['Not Started']}
                                prefix={<OrderedListOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} sm={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                                title="In Progress"
                                value={riskCount['In Progress']}
                                valueStyle={{ color: '#1677ff' }}
                                prefix={<LoadingOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} sm={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                                title="Near Due Date"
                                value={riskCount['Near Due Date']}
                                valueStyle={{ color: '#faad14' }}
                                prefix={<CalendarOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} xs={24} md={12} xl={4}>
                        <Card bordered={false}>
                            <Statistic
                                title="Overdue"
                                value={riskCount['Overdue']}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<FieldTimeOutlined />}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
        <section className="risk-summary">
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={24} xl={18} lg={18}>
                    <div className="header">
                        <h2 className="title">Risk Summary</h2>
                    </div>
                    <div className="table-content">
                        <Table
                            columns={riskSummaryColumns}
                            dataSource={riskSummaries}
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
                <Col xs={24} sm={24} md={24} xl={6} lg={6}>
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
            <div className="main-table">
                <div className="header">
                    <h2 className="title">Impact Risk Treatment Details</h2>
                </div>
                <div className="table-detail">
                    <Table
                        dataSource={riskTreatmentDetails}
                        columns={riskTreatmentDetailColumns}
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
