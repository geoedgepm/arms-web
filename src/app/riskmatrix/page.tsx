import { 
   Row,
   Col,
   Select,
   Table,
   Button,
   ConfigProvider
} from '@/components';
import { faChartArea,faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';


export default function RiskMatrix() {
   
   const handleChange = (value:string) => {
      console.log(`selected ${value}`);
  };

  const dataSource = [
      {
        key: '1',
        name: '5 - Almost Always',
        very_low: 'Medium Risk Count: 0',
        low: 'Significant Risk Count: 4',
        moderate: 'Significant Risk Count: 1',
        high: 'Very Significant Risk Count: 1',
        very_high: 'Very Significant Risk Count: 1',
      },
      {
          key: '2',
          name: '4 - Almost Always',
          very_low: 'Medium Risk Count: 0',
          low: 'Significant Risk Count: 4',
          moderate: 'Significant Risk Count: 1',
          high: 'Very Significant Risk Count: 1',
          very_high: 'Very Significant Risk Count: 1',
        },
        {
          key: '3',
          name: '3 - Almost Always',
          very_low: 'Medium Risk Count: 0',
          low: 'Significant Risk Count: 4',
          moderate: 'Significant Risk Count: 1',
          high: 'Very Significant Risk Count: 1',
          very_high: 'Very Significant Risk Count: 1',
        },
        {
          key: '4',
          name: '2 - Almost Always',
          very_low: 'Medium Risk Count: 0',
          low: 'Significant Risk Count: 4',
          moderate: 'Significant Risk Count: 1',
          high: 'Very Significant Risk Count: 1',
          very_high: 'Very Significant Risk Count: 1',
        },
        {
          key: '5',
          name: '1 - Almost Always',
          very_low: 'Medium Risk Count: 0',
          low: 'Significant Risk Count: 4',
          moderate: 'Significant Risk Count: 1',
          high: 'Very Significant Risk Count: 1',
          very_high: 'Very Significant Risk Count: 1',
        },
  ];
    
  const columns = [
      {
        title: '',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '1 - Very Low',
        dataIndex: 'very_low',
        key: 'very_low',
      //   render: (text, record) => {
      //     // const customClassName = text > 25 ? 'custom-highlight' : ''; 
      //     return <span className="columns-color-green">{text}</span>;
      //   },
      },
      {
        title: '2 - Low',
        dataIndex: 'low',
        key: 'low',
      },
      {
          title: '3 - Moderate',
          dataIndex: 'moderate',
          key: 'moderate',
        },
        {
          title: '4 - High',
          dataIndex: 'high',
          key: 'high',
        },
        {
          title: '5 - Very High',
          dataIndex: 'very_high',
          key: 'very_high',
        },
  ];

  const columnsDetail = [
      {
          title: 'Risk ID',
          dataIndex: 'risk_id',
          key: 'risk_id',
      },
      {
          title: 'Event',
          dataIndex: 'event',
          key: 'event',
          width: '22%'
      },
      {
          title: 'Department',
          dataIndex: 'department',
          key: 'department',
          width: '22%'
      },
      {
          title: 'Directorate',
          dataIndex: 'directorate',
          key: 'directorate',
      },
      {
          title: 'Division',
          dataIndex: 'division',
          key: 'division',
      },
      {
          title: 'Inherent Risk Score',
          dataIndex: 'inherent_risk_score',
          key: 'inherent_risk_score',
      },
      {
          title: 'Residual Risk Score',
          dataIndex: 'residual_risk_score',
          key: 'residual_risk_score',
      },
  ];
  
  const dataDetail = [
      {
          key: '1',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
      {
          key: '2',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
      {
          key: '3',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
      {
          key: '4',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
      {
          key: '5',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
      {
          key: '6',
          risk_id: 'RSK_GA_3_10',
          event: "Divergence in interest, objectives, vision and national interest/national laws and regulation among AMS leads to difficulties in",
          department: 'ASEAN Economic Community Department (AEC Department)',
          directorate: 'Market Integration Directorate',
          division: 'External Economic Relations Division',
          inherent_risk_score: 'Significant',
          residual_risk_score: 'Significant',
      },
  
  ];
   return(<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
        <div className="main-matrix">
            <section className="risk-matrix">
                <div className="header"> 
                    <h3 className="title">Risk Matrix</h3>
                </div>

                <div className='box-content'>
                    <Row gutter={[16,16]}>
                        <Col span={12} sm={12} xs={24}>
                            <div className='box'>
                                <div className='icon chart1'>
                                    <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                                </div>
                                <div className='text'>
                                    <span>Number Of Risk With Rating</span>
                                    <h3>150</h3>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12} sm={12} xs={24}>
                            <div className='box'>
                                <div className='icon chart2'>
                                    <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                                </div>
                                <div className='text'>
                                    <span>Number Of Risk With Rating</span>
                                    <h3>150</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className='residual-risk-matrix'>
                <div className='header'>
                    <h3 className='title'>Residual Risk Matrix</h3>
                    <Select
                        defaultValue="Inherent Risk Matrix"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                        ]}
                    />
                </div>

                <div className='teable-content'>
                    <Table dataSource={dataSource} columns={columns} pagination={false}/>
                </div>
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
                            <Button className='btn-filter'>
                                <FontAwesomeIcon className='icon-bars-filter' icon={faBars} />
                                More Filters
                            </Button>
                        </div>
                    </div>
                    <div className="table-detail">
                        <Table
                        dataSource={dataDetail}
                        columns={columnsDetail}
                        rowKey="key"
                        className="striped-table" 
                        />
                    </div>
                </div>
            </section>
        </div>   
    </ConfigProvider>);
}