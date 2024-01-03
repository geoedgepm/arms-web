'use client'
import {
    Descriptions, 
    Button, 
    Table,
    ConfigProvider
} from "@/components";
import './style.css';

export default function RiskDetail() {
    
    const items = [
        {
          key: '1',
          label: 'Period',
          children: '2023-Circle 1',
        },
        {
          key: '2',
          label: 'Department',
          children: 'Community & Corporate Affairs Department (CCA Department)',
        },
        {
          key: '3',
          label: 'Directorate',
          children: 'Legal Services and Agreements Directorate (LSAD)',
        },
        {
          key: '4',
          label: 'Division',
          children: 'General Legal Affairs Division',
        },
        {
          key: '5',
          label: 'Objectives',
          children: 'Provide legal advice and legal support related to all corporate engagements or commercial contracts between ASEC and external parties. This involves the law and legal matters under domestic law and regulations.',
        },
        {
            key: '6',
            label: 'Risk Category Level 1',
            children: 'Legal & Compliance',
          },
          {
            key: '7',
            label: 'Risk Category Level 2',
            children: 'Organisational Governance',
          },
          {
            key: '8',
            label: 'Risk Category Level 3',
            children: 'Incompliance, misinterpretation, and/or unavailability of internal policies and procedures',
          },
          {
            key: '9',
            label: 'Risk Event',
            children: 'Faults related to maintaining impartiality of ASEC - As a secretariat, ASEC should remain neutral (cannot take sides and interpret issues against a certain party). Therefore, it needs to be careful in interpreting issues during consultations. - The legal team engages with different parties, such as ASEC staff in other divisions/directorates, ASEAN member states, also ASEAN sectoral bodies. The member states have a different set of domestic rules and regulations and the ASEC have to be impartial and unbiased in undertaking ASECs roles.',
          },
    ];

    const columnsDetail = [
      {
          title: 'Risk Cause Category',
          dataIndex: 'cause_category',
          key: 'cause_category',
      },
      {
        title: 'Risk Cause',
        dataIndex: 'risk_cause',
        key: 'risk_cause',
    },
    ];

    const dataDetail = [
      {
        key: '1',
        cause_category: 'External',
        risk_cause: "Different sets of domestic policies, laws, and regulations of the Member States",
        
      },
      {
        key: '2',
        cause_category: 'External',
        risk_cause: "Lack of clarity of the exact party that is asking for legal advise",
        
      },
      {
        key: '3',
        cause_category: 'External',
        risk_cause: "Lack of clarity of the exact party that is asking for legal advise",
        
      },
      
    ];

    const itemsRiskScore = [
      {
        key: '1',
        label: 'Impact Rating',
        children: '3',
      },
      {
        key: '2',
        label: 'Likelihood Rating',
        children: '3',
      },
      {
        key: '3',
        label: 'Risk Score',
        children: '3',
      },
      {
        key: '4',
        label: 'Risk Score Description',
        children: (<span className="yellow-text">Medium</span>),
      },
    ];

    const itemsliklihoodDetail = [
      {
        key: '1',
        label: 'Category',
        children: '3',
      },
      {
        key: '2',
        label: 'Rating',
        children: '3',
      },
      {
        key: '3',
        label: 'Justification',
        children: '-Not available',
      },
      {
        key: '4',
        label: 'Existing Risk Treatment Category',
        children: 'Medium',
      },
      {
        key: '5',
        label: 'Existing Risk Treatment',
        children: '-Qualified manpower to manage the problem (ad-hoc)',
      },
      {
        key: '6',
        label: 'Existing Risk Treatment',
        children: 'Analysis & Monitoring on Trade, Industry, & Emerging Issues Division',
      },
    ];

    const columnsImpactDetail = [
      {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
      },
      {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
      },
      {
        title: 'Justification',
        dataIndex: 'justification',
        key: 'justification',
        width: '15%',
      },
      {
        title: 'Existing Risk Treatment Category',
        dataIndex: 'existing_risk_treatment_category',
        key: 'existing_risk_treatment_category',
      },
      {
        title: 'Existing Risk Treatment',
        dataIndex: 'existing_risk_treatment',
        key: 'existing_risk_treatment',
        width: '15%',
      },
      {
        title: 'Risk Treatment Focal Point',
        dataIndex: 'risk_treatment_focal_point',
        key: 'risk_treatment_focal_point',
        width: '15%',
      },
    ];

    const dataImpactDetail = [
      {
        key: '1',
        category: 'Existing Risk Treatment',
        rating: "3",
        justification: "-Ineffective cross sectoral or pillar coordination could have significant impact on stakeholder satisfaction",
        existing_risk_treatment_category: 'Mitigate/Reduce',
        existing_risk_treatment: '-Currently AMTIED has qualified manpower to manage the crisis (but may not be the case in the future)',
        risk_treatment_focal_point: 'Analysis & Monitoring on Trade, Industry, & Emerging Issues Division',
      },
      {
        key: '2',
        category: 'Existing Risk Treatment',
        rating: "3",
        justification: "-Ineffective cross sectoral or pillar coordination could have significant impact on stakeholder satisfaction",
        existing_risk_treatment_category: 'Mitigate/Reduce',
        existing_risk_treatment: '-Currently AMTIED has qualified manpower to manage the crisis (but may not be the case in the future)',
        risk_treatment_focal_point: 'Analysis & Monitoring on Trade, Industry, & Emerging Issues Division',
      },
      {
        key: '2',
        category: 'Existing Risk Treatment',
        rating: "3",
        justification: "-Ineffective cross sectoral or pillar coordination could have significant impact on stakeholder satisfaction",
        existing_risk_treatment_category: 'Mitigate/Reduce',
        existing_risk_treatment: '-Currently AMTIED has qualified manpower to manage the crisis (but may not be the case in the future)',
        risk_treatment_focal_point: 'Analysis & Monitoring on Trade, Industry, & Emerging Issues Division',
      },
    ];

    const columnsImpactAdditionalControls = [
      {
          title: 'Additional Controlls',
          dataIndex: 'additional_controlls',
          key: 'additional_controlls',
      },
      {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
        width: '15%',
      },
      {
        title: 'Risk Treatment Focal Point',
        dataIndex: 'risk_treatment_focal_point',
        key: 'risk_treatment_focal_point',
        width: '15%',
      },
      {
        title: 'Due Date',
        dataIndex: 'due_date',
        key: 'due_date',
      },
      {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Remark',
        dataIndex: 'remark',
        key: 'remark',
      },
    ];

    const dataImpactAdditionalControls = [
      {
        key: '1',
        additional_controlls: 'Mitigate/Reduce',
        details: "-Communication and coordination with and amongst immediate superior (s) and colleagues to address the problem",
        risk_treatment_focal_point: "Analysis & Monitoring on Trade, Industry, & Emerging Issues Division",
        due_date: '06/02/2023',
        cost: '0.00',
        status: 'Done',
        remark: '-',
      },
    ];

    const columnsImpactLikelihoodAdditional = [
      {
          title: 'Additional Controlls',
          dataIndex: 'additional_controlls',
          key: 'additional_controlls',
      },
      {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
        width: '15%',
      },
      {
        title: 'Risk Treatment Focal Point',
        dataIndex: 'risk_treatment_focal_point',
        key: 'risk_treatment_focal_point',
        width: '15%',
      },
      {
        title: 'Due Date',
        dataIndex: 'due_date',
        key: 'due_date',
      },
      {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Remark',
        dataIndex: 'remark',
        key: 'remark',
      },
    ];

    const dataImpactLikelihoodAdditional = [
      {
        key: '1',
        additional_controlls: 'Mitigate/Reduce',
        details: "-Communication and coordination with and amongst immediate superior (s) and colleagues to address the problem",
        risk_treatment_focal_point: "Analysis & Monitoring on Trade, Industry, & Emerging Issues Division",
        due_date: '06/02/2023',
        cost: '0.00',
        status: 'Done',
        remark: '-',
      },
    ];
   
    const itemsResidualAssessment = [
      {
        key: '1',
        label: 'Impact Rating',
        children: '3',
      },
      {
        key: '2',
        label: 'Liklihood Rating',
        children: '3',
      },
      {
        key: '3',
        label: 'Risk Score',
        children: '15',
      },
      {
        key: '4',
        label: 'Risk Score Description',
        children: (<span className="red-text">Very Significant</span>),
      },
    ];

    return(<ConfigProvider prefixCls="ar" iconPrefixCls="aricon">
        <div className="main-detail-content">
            <section className="risk-detail">
                <div className="header">
                    <Button className="btn-back">
                        <svg className="icon-arow-back" xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path d="M7.56253 8.99102C7.0045 9.54905 7.0045 10.4553 7.56253 11.0133L14.7054 18.1562C15.2634 18.7142 16.1697 18.7142 16.7277 18.1562C17.2857 17.5982 17.2857 16.6919 16.7277 16.1339L10.5938 9.99995L16.7232 3.86602C17.2813 3.30798 17.2813 2.40173 16.7232 1.8437C16.1652 1.28566 15.259 1.28566 14.7009 1.8437L7.55807 8.98656L7.56253 8.99102Z" fill="#D1D1D1"/>
                        </svg>
                        Back
                    </Button>

                    <span className="title">RSK_GA_3_10</span>
                </div>
                <div className="description-detail">
                    <Descriptions title="Risk Detail" layout="vertical" items={items} column={4} />
                    <div className="risk-couse-detail">
                    <div className="header">
                        <h3 className="title">Risk Cause Details</h3>
                    </div>
                    <Table
                        dataSource={dataDetail}
                        columns={columnsDetail}
                        rowKey="key"
                        className="striped-table" 
                        pagination={false}
                        scroll={{
                          // y: 240,
                          x: 300,
                        }}
                    />  
                    </div>
                </div>
            </section>
            <section className="inherent-risk-assessment-treatment">
              <div className="header">
                  <h3 className="title">Inherent Risk Assessment & Treatment</h3>
              </div>
              <div className="risk-score">
                <div className="header-risk-score">
                  <span className="title">Risk Score</span>
                </div>
                <div className="risk-score-content">
                  <Descriptions layout="vertical" column={4} items={itemsRiskScore} />
                </div>

                <div className="header-risk-score">
                  <span className="title">Inherent Impact Details</span>
                </div>
                  
                <Table
                  dataSource={dataImpactDetail}
                  columns={columnsImpactDetail}
                  rowKey="key"
                  className="striped-table" 
                  pagination={false}
                  scroll={{
                    // y: 240,
                    x: 300,
                  }}
                />  

                <div className="header-risk-score">
                  <span className="title">Inherent Likelihood Details</span>
                </div>
                <div className="likelihood-details">
                  <Descriptions layout="vertical" column={6} items={itemsliklihoodDetail} />
                </div>

              </div>
            </section>
            <section className="additional-risk-treatment">
              <div className="header">
                  <h3 className="title">Additional Risk Treatment</h3>
              </div>

              <div className="additional-risk-treatment-content">
                  <div className="header-risk-score">
                  <span className="title">Impact Additional Controls</span>
                  </div>
                  <Table
                  dataSource={dataImpactAdditionalControls}
                  columns={columnsImpactAdditionalControls}
                  rowKey="key"
                  className="striped-table" 
                  pagination={false}
                  scroll={{
                    // y: 240,
                    x: 300,
                  }}
                  />  

                  <div className="header-risk-score">
                  <span className="title">Likelihood Additional Controls</span>
                  </div>
                  <Table
                  dataSource={dataImpactLikelihoodAdditional}
                  columns={columnsImpactLikelihoodAdditional}
                  rowKey="key"
                  className="striped-table" 
                  pagination={false}
                  scroll={{
                    // y: 240,
                    x: 300,
                  }}
                  />    


              </div>
            </section>
            <section className="residual-risk-assessment">
              <div className="header">
                  <h3 className="title">Residual Risk Assessment</h3>
              </div>

              <div className="residual-risk-assessment-content">
                  <div className="header-risk-score">
                    <span className="title">Risk Score</span>
                  </div>
                  <div className="likelihood-details">
                    <Descriptions layout="vertical" column={4} items={itemsResidualAssessment} />
                  </div>
              </div>
            </section>
        </div>
    </ConfigProvider>)
}
