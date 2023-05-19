import React from 'react';
import { Layout, Space, Breadcrumb,Col, Row, Card, List, Button, Divider, Descriptions, Image, Input, Dropdown, theme ,Tabs ,Table ,Rate ,Collapse  } from 'antd';
import type { MenuProps, TabsProps  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
const { Panel } = Collapse;
import {
    CheckCircleOutlined ,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    TagFilled,
    FileTextOutlined,
    FundOutlined,
    DownOutlined,
} from '@ant-design/icons';
import {returnStatement} from "@babel/types";
const { Header, Footer, Sider, Content } = Layout;





const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    backgroundColor: '#375a7d',
    padding: 0,
};

const headerStyle1: React.CSSProperties = {
    margin:'0',
    padding: '0',
    width:'100%',
    backgroundColor: '#f5f7f9',
    fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'left',
    textSizeAdjust: '100%',
    marginBottom: '30px',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '#fff',
};

const contentStyle1: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    minWidth: 200,
    color: '#fff',
    backgroundColor: '#fff',
    marginRight:'2%' ,
    height:'100%',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#f5f7f9',
};

const middleSiderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
};

const middleContentStyle: React.CSSProperties = {
    minHeight: 120,
    minWidth: 200,
    backgroundColor: '#fff',
    height:'100%',
    color:'#333',
    margin:'0 0',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const colStyle: React.CSSProperties={

    color:'#333',
}

const cs1Div: React.CSSProperties={

    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#fff',
    height:'100%',
}
const desLabelStyle: React.CSSProperties={
    fontSize: '12px',
    lineHeight: '12px',
}
const desContentStyle: React.CSSProperties={
    fontSize: '12px',
    marginLeft:'40px',
    lineHeight: '12px',
}
const desPStyle: React.CSSProperties={
    margin: '0px',
    fontVariantNumeric: 'normal',
    fontVariantEastAsian: 'normal',
    fontStretch: 'normal',
    fontSize: '12px',
    lineHeight: 'normal',
    fontFamily: 'Helvetica Neue',
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: '1st menu item',
    },
    {
        key: '1',
        label: '1st menu item',
    },
    {
        key: '1',
        label: '1st menu item',
    },
    {
        key: '4',
        label: 'a danger item',
    },
];

const tabItems: TabsProps['items'] = [
    {
        key: '1',
        label: `Tab 1`,
        children: <a href={'www.baidu.com'}>a标签</a>,
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
    },
];

const { useToken } = theme;

const { Meta } = Card;


const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    margin: '10px 0px',
    padding: '0 0',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '1px solid #e1e1e1',
};

const columns: ColumnsType<DataType> = [
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Cheapest Price',
        dataIndex: 'price',
    },
];
interface DataType {
    key: React.Key;
    date: string;
    price: string;
}

const data: DataType[] = [
    {
        key: 1,
        date:'05/13',
        price:'$224'
    },
    {
        key: 2,
        date:'05/12',
        price:'$224'
    },
    {
        key: 3,
        date:'05/11',
        price:'$224'
    },
    {
        key: 4,
        date:'05/10',
        price:'$224'
    },
    {
        key: 5,
        date:'05/09',
        price:'$282'
    },
    {
        key: 6,
        date:'05/08',
        price:'$224'
    },

];

const menuStyle = {
    boxShadow: 'none',
};

const App: React.FC = () => (



    <Space direction="vertical" style={{
        width: '100%',

    }}
           size={[0, 48]}>
        <Layout>
            <Header style={headerStyle}>
                <Row>
                    <Col span={4} style={{}} >
                        <div>
                            <Image
                                alt="example"
                                src={`https://uptradeit.com/svg/logo.svg`}
                                preview={false}
                            />
                        </div>
                    </Col>
                    <Col span={11} style={{}}>
                        <div>
                            <Input placeholder="Search phone manufacturer and model" style={{
                                width: '100%',
                                height: '34.5px',
                                borderRadius: '4px',
                                padding: '8px',
                                fontSize: '16px',
                            }}/>

                        </div>
                    </Col>
                    <Col span={9} >
                        <div>
                            {/*<Dropdown*/}
                                {/*dropdownRender={(menu) => (*/}
                                    {/*<div style={{*/}
                                        {/*backgroundColor:'#fff',*/}
                                        {/*minHeight:'300px'*/}
                                    {/*}}>*/}
                                        {/*<Tabs defaultActiveKey="1" items={tabItems}  tabPosition={'left'} style={{*/}
                                            {/*padding: '15px 10px 15px 30px',*/}
                                        {/*}} />*/}

                                    {/*</div>*/}
                                {/*)}*/}
                            {/*>*/}
                                {/*<a onClick={(e) => e.preventDefault()}>*/}
                                    {/*<Space>*/}
                                        {/*Buy*/}
                                        {/*<DownOutlined />*/}
                                    {/*</Space>*/}
                                {/*</a>*/}
                            {/*</Dropdown>*/}
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Content style={contentStyle}>
                    <Row>
                        <Col span={8}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '40px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '30px',
                                }}>
                                    <div>
                                        <Image
                                            alt="example"
                                            src={`https://uptradeit.com/svg/certified.svg`}
                                            preview={false}
                                        />
                                    </div>
                                    <div style={{
                                        fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        textAlign: 'left',
                                    }}>
                                        <strong>UpTrade Certified</strong>
                                        <div style={{
                                            fontSize: '12px',
                                        }}>Quality, fully functional, used refurbished phones</div>

                                    </div>
                                </div>
                            </div>


                        </Col>
                        <Col span={8}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '40px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '30px',
                                }}>
                                    <div>
                                        <Image
                                            alt="example"
                                            src={`https://uptradeit.com/svg/return.svg`}
                                            preview={false}
                                        />
                                    </div>
                                    <div style={{
                                        fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        textAlign: 'left',
                                    }}>
                                        <strong>30 Day Free Returns</strong>
                                        <div style={{
                                            fontSize: '12px',
                                        }}>Return for any reason or no reason at all</div>

                                    </div>
                                </div>
                            </div>


                        </Col>
                        <Col span={8}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '40px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '30px',
                                }}>
                                    <div>
                                        <Image
                                            alt="example"
                                            src={`https://uptradeit.com/svg/secure-payment.svg`}
                                            preview={false}
                                        />
                                    </div>
                                    <div style={{
                                        fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        textAlign: 'left',
                                    }}>
                                        <strong>Secure Payment</strong>
                                        <div style={{
                                            fontSize: '12px',
                                        }}>Visa, MasterCard, American Express</div>

                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Layout>
                <Sider style={siderStyle}>Sider</Sider>
                <Layout>
                    <Header style={headerStyle1}>
                            <Breadcrumb
                                separator=">"
                                style={{
                                    alignItems: 'center',
                                    columnGap: '8px',
                                    fontSize: '10px',
                                    lineHeight: '21px',
                                    flexWrap: 'wrap',
                                    color: '#444',
                                    marginTop: '20px',
                                }}
                                items={[
                                    {
                                        title: 'Home',
                                    },
                                    {
                                        title: 'Buy Phone',
                                    },
                                    {
                                        title: 'Apple',
                                    },
                                    {
                                        title: 'Refurbished iPhone 11',
                                    },
                                ]}
                            />

                        <div style={{
                            lineHeight:'10px',
                            fontSize: '10px',
                            color: '#888',
                            padding: '8px 0',
                        }}>
                            Get a cheap iPhone 11 used. UpTrade compares prices from the most reputable used & refurbished device resellers to find you the best deal for iPhone 11 refurbished or used.
                        </div>


                    </Header>


                    <Layout style={{
                        backgroundColor:'#ffffff',
                        padding: '0px 10px 60px 10px',

                    }}>
                        <Content style={contentStyle1} >
                            <Row style={{
                                height:'100%',
                            }}>
                                <Col span={5}></Col>
                                <Col span={14}>
                                    <div style={cs1Div}>

                                        <div style={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: '#3d3d3d',
                                            lineHeight: 1.0,
                                            flexBasis: '50%',
                                            display: 'flex',
                                            padding:'5px',
                                        }} >

                                            <h1>
                                                Best Certified Used iPhone 11 and Refurbished iPhone 11
                                            </h1>

                                        </div>
                                        <Row>
                                            <Col style={colStyle} span={12}>
                                                {/*<Card*/}
                                                    {/*hoverable*/}
                                                    {/*cover={<img alt="example" src="https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone_11_113d9fe4b48f435b9dbc25f4993da897_8032f2d983014d2a93f34e73826dd920.webp" />}*/}
                                                {/*>*/}
                                                {/*</Card>*/}
                                                <Image
                                                    alt="example"
                                                    src={`https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone_11_113d9fe4b48f435b9dbc25f4993da897_8032f2d983014d2a93f34e73826dd920.webp`}
                                                    preview={false}
                                                />
                                            </Col>
                                            <Col style={colStyle} span={12}>
                                                <Row>
                                                    <Col span={24} style={{
                                                        fontSize: '100%',
                                                        fontFamily: 'inherit',
                                                        verticalAlign: 'baseline',
                                                        boxSizing: 'border-box',
                                                        fontSize: '10px',
                                                        fontWeight: 600,
                                                        color: '#3d3d3d',
                                                        padding: '10px',
                                                    }}>
                                                        <div style={{
                                                            display: 'block',
                                                            lineHeight:'15px',
                                                            marginBottom: '7.5px',
                                                        }}>
                                                            <CheckCircleOutlined /> Professionally Refurbished
                                                        </div>
                                                        <div style={{
                                                            display: 'block',
                                                            lineHeight:'15px',
                                                            marginBottom: '7.5px',
                                                        }}>
                                                            <FileTextOutlined /> Clean IMEI
                                                        </div>
                                                        <div style={{
                                                            display: 'block',
                                                            lineHeight:'15px',
                                                            marginBottom: '7.5px',
                                                        }}>
                                                            <FundOutlined /> Fully Functional
                                                        </div>
                                                        <div style={{
                                                            display: 'block',
                                                            lineHeight:'15px',
                                                            marginBottom: '7.5px',
                                                        }}>
                                                            <TagFilled /> 30-Day Money Back Guarantee
                                                        </div>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24} style={colStyle}>
                                                        <div style={{
                                                            textAlign:'left',
                                                            boxShadow: 'none',
                                                            lineHeight: '1.75',
                                                            fontSize: '18px',
                                                            fontWeight: '500',
                                                            border: 0,
                                                        }}>
                                                            From <strong style={{
                                                                fontSize:'36px',
                                                        }}>$224</strong>
                                                        </div>
                                                        <div style={{
                                                            color: '#fff',
                                                            borderRadius: '4px',
                                                            outline: 0,
                                                            boxShadow: 'none',
                                                            lineHeight: '1.75',
                                                            fontSize: '18px',
                                                            fontWeight: '500',
                                                            border: 0,
                                                        }}>
                                                            <Button  style={{
                                                                width: '60%',
                                                                appearance: 'auto',
                                                                writingMode: 'horizontal-tb !important',
                                                                textRendering: 'auto',
                                                                background: 'linear-gradient(180deg,#1ab4e7,#3498db)',
                                                                letterSpacing: 'normal',
                                                                wordSpacing: 'normal',
                                                                lineHeight: 'normal',
                                                                textTransform: 'none',
                                                                textIndent: '0px',
                                                                textShadow: 'none',
                                                                display: 'inline-block',
                                                                textAlign: 'center',
                                                                cursor: 'pointer',
                                                                color:'#fff',
                                                                margin: 0,
                                                            }}>View Products</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>

                                </Col>
                                <Col span={5}></Col>
                            </Row>


                        </Content>
                        <Sider style={{
                            textAlign: 'center',
                            color: '#666',
                            backgroundColor:'#ffffff',
                        }} width={'30%'}>
                            <div style={{
                                padding:'10px',
                            }}>
                                <div style={{
                                    fontSize: '24px',
                                    color: '#3d3d3d',
                                    fontWeight: '100',
                                    lineHeight: 1.0,
                                    textAlign:'center',
                                }}>
                                    <h4 style={{
                                        display:'block',
                                        marginBlockStart: '0.83em',
                                        marginBlockEnd: '0.83em',
                                        marginInlineStart: '0px',
                                        marginInlineEnd: '0px',
                                        color: '#666',
                                    }}>Specs</h4>
                                </div>
                                <Divider />
                                <div style={{
                                    maxHeight: '400px',
                                    overflowY: 'scroll',
                                    fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    textSizeAdjust: '100%',
                                }}>
                                    <Descriptions title="" size={'small'} layout={'horizontal'} column={1} style={{
                                        padding:'0px',
                                        fontVariantNumeric: 'normal',
                                        fontVariantEastAsian: 'normal',
                                        fontStretch: 'normal',
                                        fontSize: '12px',
                                        lineHeight: 'normal',
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-between',
                                    }}>
                                            <Descriptions.Item label="Release Date" labelStyle={desLabelStyle} contentStyle={desContentStyle}>Sep 2019</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Support Latest iOS" labelStyle={desLabelStyle} contentStyle={desContentStyle}>Yes</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Screen Size" labelStyle={desLabelStyle} contentStyle={desContentStyle}>6.1inches</Descriptions.Item>
                                            <Descriptions.Item label="Screen Resolution" labelStyle={desLabelStyle} contentStyle={desContentStyle}>1792 x 828</Descriptions.Item>
                                            <Descriptions.Item label="PPI" labelStyle={desLabelStyle} contentStyle={desContentStyle}>326</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Rear Camera" labelStyle={desLabelStyle} contentStyle={desContentStyle}>12MP + 12MP</Descriptions.Item>
                                            <Descriptions.Item label="Front Camera" labelStyle={desLabelStyle} contentStyle={desContentStyle}>12MP + ToF</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Processor" labelStyle={desLabelStyle} contentStyle={desContentStyle}>A13 Bionic</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Battery" labelStyle={desLabelStyle} contentStyle={desContentStyle}>3110 mAh</Descriptions.Item>
                                            <Descriptions.Item label="Wireless Charging" labelStyle={desLabelStyle} contentStyle={desContentStyle}>Yes</Descriptions.Item>
                                            <Descriptions.Item label="Fast Charging" labelStyle={desLabelStyle} contentStyle={desContentStyle}>Yes</Descriptions.Item>
                                            <Descriptions.Item label="Water Resistant" labelStyle={desLabelStyle} contentStyle={desContentStyle}>IP68</Descriptions.Item>
                                            <p style={desPStyle}></p>
                                            <Descriptions.Item label="Weight" labelStyle={desLabelStyle} contentStyle={desContentStyle}>194 g</Descriptions.Item>
                                            <Descriptions.Item label="Width" labelStyle={desLabelStyle} contentStyle={desContentStyle}>75.7 mm</Descriptions.Item>
                                            <Descriptions.Item label="Depth" labelStyle={desLabelStyle} contentStyle={desContentStyle}>8.3 mm</Descriptions.Item>
                                            <Descriptions.Item label="Height" labelStyle={desLabelStyle} contentStyle={desContentStyle}>150.9 mm</Descriptions.Item>
                                    </Descriptions>
                                </div>
                            </div>
                        </Sider>
                    </Layout>


                    {/*<Layout>*/}
                        {/*<Content style={contentStyle}>Content</Content>*/}
                    {/*</Layout>*/}


                </Layout>
                <Sider style={siderStyle}>Sider</Sider>
            </Layout>
            <Layout style={{
                margin:'60px 0px 0px 0px',
                backgroundColor:'#fff',
            }}>
                <Sider style={middleSiderStyle}></Sider>
                <Layout>
                    <Content style={middleContentStyle}>
                        <Card type={'inner'} hoverable={false} style={{
                            border: 0,
                            padding:'5px',
                            backgroundColor:'#fff',
                        }} >
                            <Card.Grid style={gridStyle}>
                                <Row style={{
                                    backgroundColor: '#fff',
                                    margin:0,
                                    padding:'0 20px',
                                }}>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                        }}>
                                            <Image
                                            width="100px"
                                            height="100px"
                                            alt="example"
                                            src={`https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/SmartphonesPLUS+logo.png`}
                                            preview={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            rowGap: '10px',
                                            fontSize: '24px',
                                            color: '#3d3d3d',
                                            height:'100%',
                                        }}>
                                            <span>iPhone 11</span>
                                            <div style={{
                                            fontSize: '18px',
                                            }}>Cricket 64GB Green</div>

                                        </div>
                                    </Col>
                                    <Col span={6} >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height:'100%',
                                            textAlign: 'left',
                                            rowGap: '10px',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                padding: '6px 0',
                                                justifyContent: 'center',
                                                width: '146px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                height: '36px',
                                                backgroundColor: '#d95040',

                                            }}>
                                                Fair
                                            </div>
                                        </div>


                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                            display: 'flex',
                                            columnGap: '16px',
                                            justifyContent: 'flex-end',
                                            alignItems: 'baseline',
                                            textAlign:'center',
                                            padding: '10px 0',
                                        }}>
                                            <span style={{
                                                textDecoration: 'line-through',
                                                fontSize: 24,
                                                color: '#727171',
                                            }}>$309</span>
                                            <span style={{
                                                fontSize: '36px',
                                                color: '#3d3d3d',
                                            }}>$232</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Row style={{
                                    backgroundColor: '#fff',
                                    margin:0,
                                    padding:'0 20px',
                                }}>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                        }}>
                                            <Image
                                                width="100px"
                                                height="100px"
                                                alt="example"
                                                src={`https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png`}
                                                preview={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            rowGap: '10px',
                                            fontSize: '24px',
                                            color: '#3d3d3d',
                                            height:'100%',
                                        }}>
                                            <span>iPhone 11</span>
                                            <div style={{
                                                fontSize: '18px',
                                            }}>T-Mobile 64GB Black</div>

                                        </div>
                                    </Col>
                                    <Col span={6} >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height:'100%',
                                            textAlign: 'left',
                                            rowGap: '10px',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                padding: '6px 0',
                                                justifyContent: 'center',
                                                width: '146px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                height: '36px',
                                                backgroundColor: '#d95040',

                                            }}>
                                                Fair
                                            </div>
                                        </div>


                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                            display: 'flex',
                                            columnGap: '16px',
                                            justifyContent: 'flex-end',
                                            alignItems: 'baseline',
                                            textAlign:'center',
                                            padding: '10px 0',
                                        }}>
                                            <span style={{
                                                fontSize: '36px',
                                                color: '#3d3d3d',
                                            }}>$224</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Row style={{
                                    backgroundColor: '#fff',
                                    margin:0,
                                    padding:'0 20px',
                                }}>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                        }}>
                                            <Image
                                                width="100px"
                                                height="100px"
                                                alt="example"
                                                src={`https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png`}
                                                preview={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            rowGap: '10px',
                                            fontSize: '24px',
                                            color: '#3d3d3d',
                                            height:'100%',
                                        }}>
                                            <span>iPhone 11</span>
                                            <div style={{
                                                fontSize: '18px',
                                            }}>T-Mobile 64GB White</div>

                                        </div>
                                    </Col>
                                    <Col span={6} >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height:'100%',
                                            textAlign: 'left',
                                            rowGap: '10px',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                padding: '6px 0',
                                                justifyContent: 'center',
                                                width: '146px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                height: '36px',
                                                backgroundColor: '#d95040',

                                            }}>
                                                Fair
                                            </div>
                                        </div>


                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                            display: 'flex',
                                            columnGap: '16px',
                                            justifyContent: 'flex-end',
                                            alignItems: 'baseline',
                                            textAlign:'center',
                                            padding: '10px 0',
                                        }}>
                                            <span style={{
                                                fontSize: '36px',
                                                color: '#3d3d3d',
                                            }}>$224</span>
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Row style={{
                                    backgroundColor: '#fff',
                                    margin:0,
                                    padding:'0 20px',
                                }}>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                        }}>
                                            <Image
                                                width="100px"
                                                height="100px"
                                                alt="example"
                                                src={`https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png`}
                                                preview={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            rowGap: '10px',
                                            fontSize: '24px',
                                            color: '#3d3d3d',
                                            height:'100%',
                                        }}>
                                            <span>iPhone 11</span>
                                            <div style={{
                                                fontSize: '18px',
                                            }}>T-Mobile 64GB Black</div>

                                        </div>
                                    </Col>
                                    <Col span={6} >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height:'100%',
                                            textAlign: 'left',
                                            rowGap: '10px',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                padding: '6px 0',
                                                justifyContent: 'center',
                                                width: '146px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                height: '36px',
                                                backgroundColor: '#58a55b',

                                            }}>
                                                Excellent
                                            </div>
                                        </div>


                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                            display: 'flex',
                                            columnGap: '16px',
                                            justifyContent: 'flex-end',
                                            alignItems: 'baseline',
                                            textAlign:'center',
                                            padding: '10px 0',
                                        }}>
                                            <span style={{
                                                fontSize: '36px',
                                                color: '#3d3d3d',
                                            }}>$282</span>
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Row style={{
                                    backgroundColor: '#fff',
                                    margin:0,
                                    padding:'0 20px',
                                }}>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                        }}>
                                            <Image
                                                width="100px"
                                                height="100px"
                                                alt="example"
                                                src={`https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/bestbuy+logo.png`}
                                                preview={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            rowGap: '10px',
                                            fontSize: '24px',
                                            color: '#3d3d3d',
                                            height:'100%',
                                        }}>
                                            <span>iPhone 11</span>
                                            <div style={{
                                                fontSize: '18px',
                                            }}>Unlocked 64GB Black</div>

                                        </div>
                                    </Col>
                                    <Col span={6} >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height:'100%',
                                            textAlign: 'left',
                                            rowGap: '10px',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                padding: '6px 0',
                                                justifyContent: 'center',
                                                width: '146px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                height: '36px',
                                                backgroundColor: '#58a55b',

                                            }}>
                                                Excellent
                                            </div>
                                        </div>


                                    </Col>
                                    <Col span={6}>
                                        <div style={{
                                            height:'100%',
                                            display: 'flex',
                                            columnGap: '16px',
                                            justifyContent: 'flex-end',
                                            alignItems: 'baseline',
                                            textAlign:'center',
                                            padding: '10px 0',
                                        }}>
                                            <span style={{
                                                fontSize: '36px',
                                                color: '#3d3d3d',
                                            }}>$419</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Grid>
                        </Card>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '32px',
                            marginBottom: '50px',
                        }}>
                            <a style={{
                                flexBasis: '30%',
                            }}>
                                <Button style={{
                                    background: 'linear-gradient(180deg,#1ab4e7,#3498db)',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    outline: 0,
                                    boxShadow: 'none',
                                    lineHeight: '25px',
                                    width: '100%',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    padding: '0px 0px',
                                    border: 0,
                                }}>More</Button>
                            </a>

                        </div>
                        <Divider />
                    </Content>
                </Layout>
                <Sider style={middleSiderStyle}></Sider>
            </Layout>



            <Layout>
                <Sider style={middleSiderStyle}></Sider>
                <Content style={middleContentStyle}>
                    <div style={{
                        width:'100%',
                    }}>

                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '40px',
                            letterSpacing: 0,
                            color: '#666',
                            textAlign: 'center',
                        }}>
                            About
                            Used Condition
                        </h2>
                        <div style={{

                        }}>
                            <p style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                letterSpacing: 0,
                                color: '#3d3d3d',
                                textAlign: 'center',
                                padding: '0 6vw',
                                marginBottom: '24px',

                            }}>
                                Tips: All Certified Used Phones/Devices are fully functional. The main difference is cosmetic. The better the condition, the more expensive. If you want the cheapest, pick
                                Fair
                                . If you want a balanced choice, choose Good .
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0 0vw',
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '0px',
                                marginBottom: '18px',
                                width: '83%',
                            }}>
                                <div style={{
                                    backgroundColor: '#5085eb',
                                    width: '146px',
                                    padding: '4px 0',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '99px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin:'0 80px 0 0px',
                                }}>
                                    Pristine
                                </div>
                                <div style={{
                                    fontSize: '12px',
                                    flex: 1,
                                    textAlign: 'left',

                                }}>
                                    Near flawless. Like New.
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '0px',
                                marginBottom: '18px',
                                width: '83%',
                            }}>
                                <div style={{
                                    backgroundColor: '#58a55b',
                                    width: '146px',
                                    padding: '4px 0',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '99px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin:'0 80px 0 0px',
                                }}>
                                    Excellent
                                </div>
                                <div style={{
                                    fontSize: '12px',
                                    flex: 1,
                                    textAlign: 'left',

                                }}>
                                    Minor Scratches (NOT visible at arm's length)
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '0px',
                                marginBottom: '18px',
                                width: '83%',
                            }}>
                                <div style={{
                                    backgroundColor: '#f2be42',
                                    width: '146px',
                                    padding: '4px 0',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '99px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin:'0 80px 0 0px',
                                }}>
                                    Good
                                </div>
                                <div style={{
                                    fontSize: '12px',
                                    flex: 1,
                                    textAlign: 'left',

                                }}>
                                    Light Scratches visible at arm's length
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '0px',
                                marginBottom: '18px',
                                width: '83%',
                            }}>
                                <div style={{
                                    backgroundColor: '#d95040',
                                    width: '146px',
                                    padding: '4px 0',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '99px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin:'0 80px 0 0px',
                                }}>
                                    Fair
                                </div>
                                <div style={{
                                    fontSize: '12px',
                                    flex: 1,
                                    textAlign: 'left',

                                }}>
                                    Heavy sign of wear and tear but still fully functional
                                </div>
                            </div>

                        </div>
                    </div>

                    <Divider />
                </Content>
                <Sider style={middleSiderStyle}></Sider>
            </Layout>


            <Layout>
                <Sider style={middleSiderStyle}></Sider>
                <Content style={middleContentStyle}>
                    <div style={{
                        width:'100%',
                        padding: '0 100px',
                    }}>

                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '40px',
                            letterSpacing: 0,
                            color: '#666',
                            textAlign: 'center',
                        }}>
                            Price Trend of
                            Last 7 Days
                        </h2>

                        <div style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            lineHeight: '24px',
                            color: '#1a1a1a',
                        }}>
                            <Table  columns={columns} dataSource={data}  pagination={false} />
                        </div>
                    </div>

                </Content>
                <Sider style={middleSiderStyle}></Sider>
            </Layout>

            <Layout>
                <Content style={{
                    minHeight: 120,
                    minWidth: 200,
                    backgroundColor: '#fff',
                    height:'100%',
                    color:'#333',
                    margin:'0 0',
                    padding:'0 30px',
                }}>
                    <Divider style={{
                        margin:'60px 0',
                    }}/>
                    <div style={{
                        width:'100%',
                        padding:'0 100px',
                    }}>

                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '40px',
                            letterSpacing: 0,
                            color: '#666',
                            textAlign: 'center',
                        }}>
                            Customer Reviews
                        </h2>
                        <div style={{
                            fontSize: '14px',
                            marginTop: '8px',
                            marginBottom: '16px',
                            textAlign: 'center',
                        }}>
                            <span style={{
                                fontFamily: 'Poppins,Helvetica,Arial,sans-serif',
                                fontWeight: '400',
                            }}>
                                4.54 Rating based on
                                <a href={'#'} style={{
                                    color: '#1ab4e7',
                                    textDecoration: 'underline'
                                }}>950 Reviews </a>
                            </span>
                            <span style={{
                                marginLeft:'24px',
                            }}>
                                Data From
                                 <Image
                                     width="80px"
                                    height="11px"
                                     alt="example"
                                     src={`https://uptradeit.com/svg/reviewsio-logo.svg`}
                                     preview={false}
                                 />
                            </span>
                        </div>
                        <div style={{
                        }}>
                            <Row gutter={24}>
                                <Col span={8}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px',
                                        padding: '24px',
                                        boxShadow: '0 1px 10px 0 rgb(0 0 0/7%)',
                                    }}>
                                        <div style={{

                                        }}>
                                            <div style={{
                                                margin: '24px 0',
                                            }}><Rate disabled defaultValue={5} style={{
                                                fontSize: '25px',
                                                color: '#ffb433',
                                            }} /></div>
                                            <div style={{
                                                color: '#272729',
                                                fontSize: '17px',
                                                height: '180px',
                                                display: '-webkit-box',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                webkitLineClamp: 7,
                                                webkitBoxOrient: 'vertical',
                                            }}>
                                                I got one phone, and then decided that I wanted a different one so - I have ordered, returned, gotten refunded and ordered anew with these people. And I have to say it was all seamless. I love the goal of creating less electronica waste by reusing it, and the phone that I have now works great.
                                            </div>

                                            <div style={{
                                                margin: '17px 0',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                lineHeight: 1.43,
                                                color: 'rgba(0,0,0,.65)',
                                            }}>
                                                Anonymous
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px',
                                        padding: '24px',
                                        boxShadow: '0 1px 10px 0 rgb(0 0 0/7%)',
                                    }}>
                                        <div style={{

                                        }}>
                                            <div style={{
                                                margin: '24px 0',
                                            }}><Rate disabled defaultValue={5} style={{
                                                fontSize: '25px',
                                                color: '#ffb433',
                                            }} /></div>
                                            <div style={{
                                                color: '#272729',
                                                fontSize: '17px',
                                                height: '180px',
                                                display: '-webkit-box',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                webkitLineClamp: 7,
                                                webkitBoxOrient: 'vertical',
                                            }}>
                                                This was my second phone that I got from uptradeit. The phone was described accurate and arrived quickly. No issues at all.
                                            </div>

                                            <div style={{
                                                margin: '17px 0',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                lineHeight: 1.43,
                                                color: 'rgba(0,0,0,.65)',
                                            }}>
                                                Anonymous
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px',
                                        padding: '24px',
                                        boxShadow: '0 1px 10px 0 rgb(0 0 0/7%)',
                                    }}>
                                        <div style={{

                                        }}>
                                            <div style={{
                                                margin: '24px 0',
                                            }}><Rate disabled defaultValue={5} style={{
                                                fontSize: '25px',
                                                color: '#ffb433',
                                            }} /></div>
                                            <div style={{
                                                color: '#272729',
                                                fontSize: '17px',
                                                height: '180px',
                                                display: '-webkit-box',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                webkitLineClamp: 7,
                                                webkitBoxOrient: 'vertical',
                                            }}>
                                                I’ve purchased an iPad and an iPhone from upgrade. I have been completely satisfied. They’ve exceeded my expectations on both purchases. I highly recommend them.
                                            </div>

                                            <div style={{
                                                margin: '17px 0',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                lineHeight: 1.43,
                                                color: 'rgba(0,0,0,.65)',
                                            }}>
                                                Pat OBrien
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>

                </Content>
            </Layout>

            <Layout>
                <Content style={{
                    minHeight: 120,
                    minWidth: 200,
                    backgroundColor: '#fff',
                    height:'100%',
                    color:'#333',
                    margin:'0 0',
                    padding:'70 30px',
                }}>
                    <Divider style={{
                        margin:'60px 0',
                    }}/>
                    <div style={{
                        width:'100%',
                    }}>

                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '40px',
                            letterSpacing: 0,
                            color: '#666',
                            textAlign: 'center',
                        }}>
                            FAQ
                        </h2>

                        <div style={{
                        }}>

                            <Collapse bordered={false} ghost={true} style={{
                                margin: '70px 0',

                            }}>
                                <Panel header="Why buy a refurbished or used iPhone 11?" key="1" style={{
                                    fontSize:'16px',
                                    fontWeight: 700,
                                }}>
                                    <div style={{
                                        color: 'grey',
                                        paddingLeft: '48px',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                    }}>
                                        Great question! A refurbished iPhone 11 is a great way to save cash when you are looking to buy an iPhone 11. Buying a refurbished iPhone 11 can is
                                        a great option and can net you big savings, especially when the price of the latest iPhone typically exceeds $1,000. Your refurbished iPhone 11 should be fully functional and work just like a brand new iPhone 11.
                                    </div>
                                </Panel>
                            </Collapse>

                            <Collapse bordered={false} ghost={true} style={{
                                margin: '70px 0',

                            }}>
                                <Panel header="What are the differences between Used and Refurbished iPhone 11?" key="1" style={{
                                    fontSize:'16px',
                                    fontWeight: 700,
                                }}>
                                    <div style={{
                                        color: 'grey',
                                        paddingLeft: '48px',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                    }}>
                                        Technically, they are divided into four categories: Used, Refurbished, Certified Used, and Certified Refurbished.
                                        <br/>
                                        <br/>
                                        A Used iPhone 11 means that the iPhone is used and sold as-is. It's the most common term being used in eBay, Craigslist, Facebook Marketplace, OfferUp, and other marketplaces. Because of the popularity of this term, even professional sellers or merchants may use the same term, although their products are technically Certified Used iPhones or Certified Refurbished iPhones.
                                        <br/>
                                        <br/>
                                        A Refurbished iPhone 11 means that the iPhone is used and has been refurbished to a sellable condition. To clarify, "Refurbishment" doesn't always mean opening up the phone and repair. Sometimes it may refer to basic cleaning without disassembling the phone.
                                        <br/>
                                        <br/>
                                        A Certified Used iPhone 11 means that the iPhone is used and has been certified by a professional seller or merchant. The certification requires a rigorous inspection process to ensure all functionalities work fine. The test items include but are not limited to Power, Display, Touchscreen, Cellular, WIFI, Sensors, Speaker, Receiver, Bluetooth, Charging Port, Audio Port, etc. In addition to the functionality test, it also runs the background check to make sure the phone is not blacklisted, lost or stolen, or still under a finance plan. That guarantees you a fully functional and safe-to-use iPhone. Remember, a Certified Used iPhone should only come from a professional seller. All phones listed on UpTrade are Certified Used or Certified Refurbished. So if you see some person claiming that they have a Certified Used iPhone for sale on Craigslist or other open marketplaces, it's probably not true.
                                        <br/>
                                        <br/>
                                        A Certified Refurbished iPhone 11 means that a phone is used and has been refurbished by a professional seller. Same as Certified Used iPhone, Certified Refurbished iPhone also requires a rigorous inspection process. There is no real difference between Certified Used and Certified Refurbished. Some professional sellers prefer using the term Certified Refurbished iPhone, and others like another.
                                        <br/>
                                        <br/>
                                        Last but not least, pay attention to the seller instead of the term. Each seller may have its definition and use the words differently. As long as the phone is being sold by a reputable professional seller, it doesn't matter whether it's called Used, Refurbished, Certified Used, or Certified Refurbished. The quality of the iPhone is good. Vice versa, getting a phone from an open marketplace or someone you don't know is risky. No matter how highly they say about the iPhone, you still risk getting scammed. Therefore, at UpTrade, we felt the necessity to have a marketplace showing the products from Reputable Professional Sellers and Merchants only. So you can rest assured of finding a good deal on a used iPhone 11 with excellent quality at UpTrade.
                                    </div>
                                </Panel>
                            </Collapse>

                            <Collapse bordered={false} ghost={true} style={{
                                margin: '70px 0',

                            }}>
                                <Panel header="How and where to buy a refurbished or used iPhone 11?" key="1" style={{
                                    fontSize:'16px',
                                    fontWeight: 700,
                                }}>
                                    <div style={{
                                        color: 'grey',
                                        paddingLeft: '48px',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                    }}>
                                        Short Answer: Similar to buying used cars or any used goods, It's critical to get it from a trustworthy seller. (For example, Apple, Amazon, Best Buy, etc.) All products listed on UpTrade are from reputable merchants and have excellent quality. You can rest assured to choose any iPhone 11 used or refurbished for sale here.
                                        <br/>
                                        <br/>
                                        Long Answer:
                                        There are six channels where you can buy a used or refurbished iPhone 11.
                                        <br/>
                                        <br/>
                                        1) OEM / Original Equipment Manufacturer (Apple) - Apple offers Apple Certified Refurbished iPhone on its website. There is no doubt that Apple has the top notch quality. All refurbished iPhones have gone through Apple's manufacturing inspection process and have been repaired as needed. As a result, the phones work precisely like new ones. Apple will replace the cosmetic part with even minimum scratch or sign of use. Therefore, all Apple Certified Refurbished iPhones look flawless. For the same reason, our website has listed all Apple Certified Refurbished iPhones as Pristine, the highest level, on our website. However, the price is significantly higher than other sellers. And the availability is limited.
                                        <br/>
                                        <br/>
                                        2) Wireless Carriers (Verizon, AT&T, T-Mobile, etc.) – Each Carrier offers its own refurbished program. Like Apple, they have their own or 3rd party facility to run the inspection and refurbishment processes for all used iPhones. Each Carrier has Reverse Logistics and Quality teams overseeing the operations. So the quality of refurbished iPhones is trustable. However, the availability may also be limited. Based on our research, we have not found a stable supply from AT&T and T-Mobile. Therefore, we are only listing Verizon Certified Refurbished iPhones on our website.
                                        <br/>
                                        <br/>
                                        3) Retail (Best Buy, GameStop) – Although it's retail, the used iPhones are offered online. The sources of the used iPhone 11 are open box, buyer remorse returns, etc. The used iPhones are processed in a dedicated facility for inspection, repair, and refurbishment. Only the used iPhone 11 that passed the entire process will be listed for resale. GameStop used to offer refurbished phones on their website, but the supply has become inconsistent. Hence, we only included Best Buy Refurbished iPhones on our website. Like the Wireless Carriers, Retail companies have their Reverse Logistics and Quality teams managing the operations. The quality of the refurbished iPhone 11 is guaranteed. It's easier to look it up on our website.
                                        <br/>
                                        <br/>
                                        4) Amazon – Amazon launched Amazon Renew in 2017. This program is for pre-owned, refurbished, and open-box products, including used iPhones. Unlike Wireless Carriers and Retail, which have dedicated facilities to inspect and refurbish products, Amazon Renew relies on its sellers to fulfill the work and control the quality. However, Amazon has its top-notched seller management operations for quality control. And all products on Amazon Renewed are backed by the Amazon Renewed Guarantee. So, you can trust Amazon Renew. In addition, we have included Amazon Renew (Used and Refurbished Phones) on our website so that you can easily compare the prices of the used iPhone 11 with other deals.
                                        <br/>
                                        <br/>
                                        5) Professional Resellers (e.g., Gazelle and many others) – These companies are dedicated to recycling and reselling Used and Refurbished Phones. As smartphone technologies mature, the differences between the new and old iPhone generations are diminishing. More people buy a used iPhone instead of getting a new one. That consumer behavior shift has driven the growth of these dedicated used phone Resellers. Each company has the facility to run a full inspection of each phone. Depending on the condition of each phone, it will be either refurbished for sale or disassembled for recycling. Some sellers may have their trade-in or cash buyback program to collect used iPhone 11's from consumers directly. This channel is a hidden gem. They offer Refurbished and Used iPhone 11 with excellent quality. Meanwhile, their prices are usually lower than OEM, Wireless Carriers, and Retail. At UpTrade, we have chosen the best companies and list their used and refurbished iPhone 11's on our website.
                                        <br/>
                                        <br/>
                                        6) Open Marketplace (Craigslist, Facebook Marketplace, etc.) – Everyone knows how it works. You find a listing that you like and buy it from an individual. Open Marketplace is the only channel we don't recommend unless you have super knowledge of smartphones and unmatched negotiation skills. True story: one of our staff, who has ten years of smartphone technical experience, even got scammed in an open marketplace. He was confident about his technical knowledge, but scammers had been advancing their technique, too. On top of that, the prices from Open Marketplace aren't necessarily competitive. We have done a Price Analysis across all channels to buy refurbished or used phones. The prices of Open Marketplace phones are not often the lowest. They are usually priced between Apple Certified Refurbishment (channel #1) and Dedicated Used & Refurbished Equipment Sellers (channel #5). If you see something listed at a super low price, it may be too good to be true, like what happened to our staff. On the other hand, suppose you are adamant about getting a deal from Open Marketplaces. In that case, we recommend at least the following: a) check the price on UpTrade for your negotiation reference; b) check the IMEI to see whether it is blacklisted or marked lost/stolen; c) check the battery health; d) meet the seller at a public place with a friend during daytime.
                                        <br/>
                                        <br/>
                                        In a nutshell, we recommend buying a Refurbished or Used iPhone 11 from OEM, Wireless Carriers, Retail, Amazon, or Professional Resellers. We have included all recommended companies on our website. In addition, all products have been categorized in standardized conditions for an apples-to-apples comparison. So compare the price to pick the one you like!
                                    </div>
                                </Panel>
                            </Collapse>

                            <Collapse bordered={false} ghost={true} style={{
                                margin: '70px 0',

                            }}>
                                <Panel header="What is an unlocked iPhone 11?" key="1" style={{
                                    fontSize:'16px',
                                    fontWeight: 700,
                                }}>
                                    <div style={{
                                        color: 'grey',
                                        paddingLeft: '48px',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                    }}>
                                        You may use an unlocked iPhone 11 with any carrier in the United States. Unlocked iPhone 11 Refurbished is compatible with Verizon, AT&T, T-Mobile, Sprint, MetroPCS, Cricket, US Cellular, Tracfone, and other phone carriers. Purchasing an unlocked iPhone 11 is an wonderful choice if you aren't sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone 11 will work with your current carrier. An unlocked iPhone 11 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.
                                    </div>
                                </Panel>
                            </Collapse>

                            <Collapse bordered={false} ghost={true} style={{
                                margin: '70px 0',

                            }}>
                                <Panel header="Are refurbished iPhones as good as new iPhones?" key="1" style={{
                                    fontSize:'16px',
                                    fontWeight: 700,
                                }}>
                                    <div style={{
                                        color: 'grey',
                                        paddingLeft: '48px',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                    }}>
                                        That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.
                                    </div>
                                </Panel>
                            </Collapse>

                        </div>
                    </div>

                </Content>
            </Layout>

            {/*<Footer style={footerStyle}>Footer</Footer>*/}
        </Layout>

    </Space>
);

export default App;
