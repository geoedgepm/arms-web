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
    Drawer,
    Spin
} from '@/components';
import {
    CalendarOutlined,
    CheckOutlined,
    FieldTimeOutlined,
    LoadingOutlined,
    OrderedListOutlined,
    RollbackOutlined
} from '@icons';
import { useRouter, useSearchParams } from '@router';
import {
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDashboardData } from '@/services/dashboard';
import DoughnutChart from '@/components/chart/doughnut-chart';
import './style.css';
import Helper from '@/helper';
import Link from 'next/link';
import { DashboardFilter } from '@/types/dashboard';

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
        riskTreatmentByCategories: [],
        riskTreatmentDetails: []
    });

    const [openTreatmentCategory, setOpenTreatmentCategory] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams()

    React.useEffect(() => {
        featchDashboardData();
    }, []);

    const featchDashboardData = (option?: DashboardFilter) => {
        setLoading(true);
        getDashboardData(option)
        .then((response: any) => {
            if (response && response?.data) {
                const data = response.data;

                setState((prevState: any) => ({
                    ...prevState,
                    option: data.options,
                    riskCount: Helper.getInstance().transformArrayToObject(data.riskCount),
                    riskSummaries: data.riskSummaries,
                    riskTreatmentByCategories: data.riskTreatmentByCategories,
                    riskTreatmentDetails: data.riskTreatmentDetails
                }));
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const showDrawerTreatmentCategory = () => {
        setOpenTreatmentCategory(true);
    };

    const onCloseTreatmentCategory = () => {
        setOpenTreatmentCategory(false);
    };

    const onChangeCategory = (category: string) => {
        featchDashboardData({ category });

        let queryParams = `category=${category}`;

        const division = searchParams.get('division');
        if (division) {
            queryParams += `&division=${division}`;
        }

        router.push(`?${queryParams}`);
    };

    const onChangeDivision = (division:string) => {
        featchDashboardData({ division });

        let queryParams = `division=${division}`;

        const category = searchParams.get('category');
        if (category) {
            queryParams += `&category=${category}`
        };

        router.push(`?${queryParams}`);
    };

    const onChangeStatus = (status: string) => {
        featchDashboardData({ status });

        let queryParams = `status=${status}`;

        const category = searchParams.get('category');
        if (category) {
            queryParams += `&category=${category}`
        };

        router.push(`?${queryParams}`);
    }

    const onChangeRiskTreatment = (rmType: string) => {
        featchDashboardData({ rmType });

        let queryParams = `rmType=${rmType}`;

        const category = searchParams.get('category');
        if (category) {
            queryParams += `&category=${category}`
        };

        router.push(`?${queryParams}`);
    }

    const riskSummaryColumns = [
        {
            title: 'Risk ID',
            dataIndex: 'riskId',
            width: 200,
            sorter: (a: any, b: any) => a.riskId.length - b.riskId.length,
            render: (riskId: string) => <div>
                {riskId}<Link href={`/riskId${riskId}`} className='view-link' style={{marginLeft: 15, display: 'none'}}>View</Link>
            </div>
        },
        {
            title: 'Risk Event',
            dataIndex: 'riskEvent',
            sorter: (a: any, b: any) => a.riskEvent.length - b.riskEvent.length,
            render: (riskEvent: string) => {
                return <div className='text-risk-event'>
                    {riskEvent}
                </div>
            }
        },
        {
            title: 'Impact',
            dataIndex: 'impRiskTreatment',
            sorter: (a: any, b: any) => a.impRiskTreatment - b.impRiskTreatment,
            width: 150,
        },
        {
            title: 'Likelihood',
            dataIndex: 'likRiskTreatment',
            sorter: (a: any, b: any) => a.likRiskTreatment - b.likRiskTreatment,
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
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Information',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title: 'Focal Point',
            dataIndex: 'pic',
            key: 'pic',
        },
        {
            title: 'Cost (USD)',
            dataIndex: 'cost',
            key: 'cost',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const { 
        option, 
        riskCount, 
        riskSummaries, 
        riskTreatmentByCategories, 
        riskTreatmentDetails 
    } = state;

  return (<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
    <Spin spinning={loading}>
        <div className="main-home">
            <section className="risk-treatment-status">
                <div className="header">
                    <span className="title">Impact Risk Treatment Status</span>
                    <div className="btn-right-select">
                        <Select
                            className="btn-right-filter"
                            placeholder="Select category"
                            onChange={onChangeCategory}
                            options={option?.categories ? option.categories : []}
                            allowClear
                            style={{minWidth: 150}}
                        />

                        <Select
                            className="btn-right-filter"
                            placeholder="Select devision"
                            onChange={onChangeDivision}
                            options={option?.divisions ? option.divisions : []}
                            allowClear
                            style={{minWidth: 200}}
                        />

                        <Select
                            className="btn-right-filter"
                            placeholder="Select status"
                            onChange={onChangeStatus}
                            options={option?.statuses ? option.statuses : []}
                            allowClear
                            style={{minWidth: 150}}
                        />

                        <Select
                            className="btn-right-filter"
                            defaultValue="Impact Risk Treatment"
                            onChange={onChangeRiskTreatment}
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
                                {riskTreatmentByCategories.length && <DoughnutChart categories={riskTreatmentByCategories}  />}
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
                        />
                    </div>
                </div>
            </section>
        </div>
    </Spin>
  </ConfigProvider>
  )
}
