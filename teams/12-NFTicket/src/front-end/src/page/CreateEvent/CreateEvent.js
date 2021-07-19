import { DatePicker, List, ListView, Checkbox, InputItem, Button, WhiteSpace, Menu } from 'antd-mobile'
import React, { Component } from 'react'
import TopBar from '../../component/TopBar'
import styles from './CreateEvent.module.css';
import time from '../../images/icon_time.png'
import downArrow from '../../images/down_arrow.png'
import del from '../../images/icon_del.png'
import add from '../../images/icon_add.png'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
//action
import { setBottomstatusAction, setAccountokmodalAction } from '../../store/action/App';

const CheckboxItem = Checkbox.CheckboxItem;
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const data = [
    {
        value: '1',
        label: 'Draft',
        isLeaf: true,
    }, {
        value: '2',
        label: 'Launched',
    },
    {
        value: '3',
        label: 'Suspended',

    }, {
        value: '4',
        label: 'Finished',
    }, {
        value: '5',
        label: 'Closed',
    }
];



class CreateEvent extends Component {


    state = {
        date: now,
        initData: '',
        show: false,
        currentState: 'Please select the status',
        date: now,
        showZone: false //显示座位区域
    };
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
        this.setState({
            show: false,
            currentState: label
        })
    }

    handleSelectState = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        //actions  隐藏底部状态栏
        this.props.actions.setBottomstatus(true);
    }
    selectSiteType = (e, key) => {
        console.log('xujie====', key)
        var mShowZone = false
        if (key == 3) {
            mShowZone = true
        }
        this.setState({
            showZone: mShowZone
        })
    }
    render() {
        //搜索框高度
        const searchbarHeight = 45;
        //空白区域高度
        const whitespaceHeight = 9;
        //账户信息高度
        const accountInfoHeight = 42;
        //最后+26是因为直接按照前面的减去之后会有一部分留白区域,多种机型上都是26,就加上这个26[**暂时不清楚什么原因**]
        const height = parseInt(window.innerHeight) - searchbarHeight - whitespaceHeight - accountInfoHeight + 51;
        const mShow = this.state.show




        return (
            <div className={styles.container}>
                <TopBar></TopBar>
                <div className={styles.contant} style={{ height: "" + height + "px" }}>
                    <WhiteSpace />
                    <div className={styles.flexcontent}>
                        <div className={styles.title}><span>Create a event</span></div>
                        <div className={styles.name1}><span>Event Name</span></div>
                        <div className={styles.inputout}>
                            <InputItem
                                placeholder="eg.Taylor Swift concert"
                            />
                        </div>
                        <div className={styles.name2}><span>Poster</span></div>
                        <div>
                            <Button type="primary" inline size="small" style={{ borderRadius: '30px', width: '120px', height: '30px', marginLeft: '10px' }}>Select file</Button>
                        </div>
                        <div className={styles.name2}><span>Location</span></div>
                        <div>
                            <CheckboxItem key='0'>
                                Online
                        </CheckboxItem>
                        </div>
                        <div>
                            <CheckboxItem key='1'>Offline</CheckboxItem>
                        </div>
                        <InputItem placeholder='Site address'></InputItem>
                        <div className={styles.name2}><span>Discription</span></div>
                        <div className={styles.inputout}>
                            <InputItem
                                placeholder="eg.The instruction about Taylor Swift concert"
                            />
                        </div>
                        <div className={styles.name2}><span>Session</span></div>
                        <div className={styles.sessioninput}>
                            <img src={time} className={styles.timeIcon}></img>

                            <DatePicker
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                            >
                                <List.Item className={styles.selectTime}></List.Item>
                            </DatePicker>

                            {/* <input placeholder="Select time(UTC+8)"></input> */}
                        </div>

                        <div className={styles.name2}><span>Ticket Price</span></div>
                        <div className={styles.checkinputcontent}>
                            <div className={styles.checkinputline}>
                                <div className={styles.checkboxleft}>
                                    <CheckboxItem key='2' onChange={(e) => { this.selectSiteType(e, '2') }} checked={!this.state.showZone} >
                                        <span style={{ fontSize: '16px' }}>Unify</span>
                                    </CheckboxItem>
                                </div>
                                <div className={styles.checkboxright}>
                                    <InputItem placeholder="Input price" />
                                </div>
                            </div>
                            <div className={styles.sitezone}>
                                <CheckboxItem key='3' onChange={(e) => { this.selectSiteType(e, '3') }} checked={this.state.showZone}>
                                    <span style={{ fontSize: '16px' }}>Site Zone</span>
                                </CheckboxItem>
                                {
                                    //显示和隐藏
                                    this.state.showZone ? (
                                        <div >
                                            <div>
                                                <img src={del} alt="" className={styles.iconDel}></img>
                                                <span className={styles.siteZoneLable}>A Zone</span>
                                                <input placeholder="Price (NMT)" className={styles.ticketInput} ></input>
                                            </div>
                                            <div>
                                                <input placeholder="Row" className={styles.siteRows} ></input>
                                                <span className={styles.rowAndSeats}>X</span>
                                                <input placeholder="Seats" className={styles.siteSeats} ></input>
                                            </div>
                                            <div>
                                                <img src={add} alt="" className={styles.iconDel}></img>
                                                <span className={styles.siteZoneLable}>B Zone</span>
                                                <input placeholder="Price (NMT)" className={styles.ticketInput} ></input>
                                            </div>
                                            <div>
                                                <input placeholder="Row" className={styles.siteRows} ></input>
                                                <span className={styles.rowAndSeats}>X</span>
                                                <input placeholder="Seats" className={styles.siteSeats} ></input>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                        {/* Selling Time */}
                        <div className={styles.name2}><span>Selling Time</span></div>
                        <div className={styles.selltime}>
                            <div className={styles.selltimeinput}>
                                <img src={time} className={styles.timeIcon}></img>
                                <span style={{ margin: "5px", fontWeight: 'bold' }}>Start Time</span>
                                <DatePicker
                                    value={this.state.date}
                                    onChange={date => this.setState({ date })}
                                >
                                    <List.Item className={styles.selectTime}></List.Item>
                                </DatePicker>

                            </div>
                            <div className={styles.selltimeinput}>
                                <img src={time} className={styles.timeIcon}></img>
                                <span style={{ margin: "5px", fontWeight: 'bold' }}>End Time</span>
                                <DatePicker
                                    value={this.state.date}
                                    onChange={date => this.setState({ date })}
                                >
                                    <List.Item className={styles.selectTime}></List.Item>
                                </DatePicker>

                            </div>
                        </div>
                        {/* Ticket Inspector */}
                        <div className={styles.name2}><span>Ticket Inspector</span></div>
                        <div className={styles.inputout}>
                            <InputItem placeholder="Please input ticket inspector’s wallet address" />
                        </div>
                        <div className={styles.name2}><span>Event Status</span></div>
                        <div className={styles.selectState} onClick={() => this.handleSelectState()}>
                            <span className={styles.hintLable}>{this.state.currentState}</span>
                            <img src={downArrow} alt="" className={styles.downArrow}></img>
                        </div>
                        {mShow ? (<Menu
                            data={data}
                            value={['1']}
                            level={1}
                            onChange={this.onChange}
                            height={document.documentElement.clientHeight * 0.25}
                        />) : null}



                        {/* Save */}
                        <div className={styles.savebtngroup}>
                            <div>
                                <Button onClick={() => { console.log(111); }}
                                    style={{
                                        backgroundColor: 'white', border: '2px solid #108ee9', fontSize: '13px',
                                        color: '#108ee9',
                                        lineHeight: '24px', borderRadius: '30px', width: '128px', height: '31px', margin: '20px'
                                    }}>
                                    Preview
                                </Button>
                            </div>
                            <div>
                                <Button type="primary" inline size="small"
                                    style={{ borderRadius: '30px', width: '128px', height: '31px', margin: '20px' }} onClick={() => {
                                        setTimeout(() => {
                                            this.props.history.push('/Home');
                                            this.props.actions.setAccountOKModal(true);
                                        }, 300)
                                    }}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


//获取最新的store里的状态，通过this.props获取
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}
//更新状态提交到store
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setBottomstatus: setBottomstatusAction,
            setAccountOKModal: setAccountokmodalAction
        }, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEvent);