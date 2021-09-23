import React, { useState, useContext, useEffect } from 'react'
import { FaComment, FaHeadset, FaClipboardList, FaFileAlt, FaUsers, FaAngleLeft, FaAngleRight, FaAngleDown, FaTachometerAlt, FaCog, FaTasks, FaDollarSign, FaEnvelope, FaBroadcastTower, FaComments } from 'react-icons/fa'
import { Collapse } from 'reactstrap'
import { Link, useLocation, useHistory, useRouteMatch, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Tooltip from 'react-tooltip-lite'
///////CONTEXT/////////
// import { UserInfoContext } from '../../../context/UserInfoContext'
// import { SettingsAppContext } from '../../../context/SettingsAppContext'

import ApiService from "../../apis/Account"
import routeList from '../../routes/Routes'

//config icon 
const largeIcon = 30
const smallIcon = 16

export default function LeftBar({ isSmall, callBackSetSmallNav }) {
    const location = useLocation()
    const history = useHistory()
    const routeMath = useRouteMatch()
    const params = useParams()


    // const { userInfo, updateUserInfo } = useContext(UserInfoContext)
    // const { setting } = useContext(SettingsAppContext)

    const { t, i18n } = useTranslation();

    const [isOpenReport, setOpenReport] = useState(false)
    const [isOpenGeneralQueueDetail, setOpenGeneralQueueDetail] = useState(false)
    const [isOpenGeneralQueue, setOpenGeneralQueue] = useState(false)
    const [isOpenSetting, setOpenSetting] = useState(false)
    const [isOpenManager, setOpenManager] = useState(false)
    const [isOpenSms, setOpenSms] = useState(false)
    const [isOpenEmail, setOpenEmail] = useState(false)

    const [select, setSelect] = useState()
    const [isSmallNav, setIsSmallNav] = useState(isSmall)
    const [permission, setPermission] = useState(() => {
        return routeList.map((item) => ({ value: item.name }))
    })
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const activeNavigationItem = (str) => {
        setSelect(str)
    }

    const closeAllCollapse = () => {
        setOpenReport(false)
        setOpenSetting(false)
        setOpenManager(false)
        setOpenGeneralQueue(false)
        setOpenGeneralQueueDetail(false)
        setOpenSms(false)
        setOpenEmail(false)
    }

    const handleCheckPermission = (str) => {
        for (let i in permission) {
            if (permission[i].value === str) {
                return permission[i].show
            }
        }
        return false
    }

    const handleActiveLeftbar = () => {
        for (let i in permission) {
            if (location.pathname === ("/" + permission[i].value)) {
                activeNavigationItem(permission[i].value)
                setSelect(permission[i].value)
                break
            }
        }
    }

    // useEffect(() => {
    //     if (userInfo != null) {
    //         if (userInfo.type === 0) {
    //             ApiService.GetListFunction().then(res => {
    //                 if (res.data.status === 1) {
    //                     let navigation = []
    //                     for (let i in res.data.functions) {
    //                         navigation.push({
    //                             value: res.data.functions[i].name,
    //                             show: true,
    //                             view: true,
    //                             insert: true,
    //                             update: true,
    //                             delete: true,
    //                             export: true,
    //                             import: true,
    //                         })
    //                     }
    //                     setPermission(navigation)
    //                 }
    //             })

    //         }
    //         else if (userInfo.name != null && userInfo.type !== 0) {
    //             let listPermission = userInfo.permission
    //             let result = []
    //             for (let i in listPermission) {
    //                 permission.forEach(item => {
    //                     if (listPermission[i].function != null) {
    //                         if (listPermission[i].function.name === item.value) {
    //                             let isShow = true
    //                             if (listPermission[i].view === 0 && listPermission[i].insert === 0 && listPermission[i].update === 0 && listPermission[i].delete === 0 && listPermission[i].export === 0 && listPermission[i].import === 0) {
    //                                 isShow = false
    //                             }
    //                             result.push({
    //                                 value: item.value,
    //                                 show: isShow,
    //                                 view: listPermission[i].view,
    //                                 insert: listPermission[i].insert,
    //                                 update: listPermission[i].update,
    //                                 delete: listPermission[i].delete,
    //                                 export: listPermission[i].export,
    //                                 import: listPermission[i].import
    //                             })
    //                         }
    //                     }

    //                 })
    //             }
    //             console.log("result", result)
    //             setPermission(result)
    //             // updateUserInfo({
    //             //     ...userInfo,
    //             //     permission:result
    //             // })
    //         }
    //     }
    //     console.log("nav user", userInfo)
    // }, [userInfo])

    // useEffect(() => {
    //     if (setting.language === "vn") {
    //         i18n.changeLanguage("vn")
    //     }
    //     else if (setting.language === "en") {
    //         i18n.changeLanguage("en")
    //     }
    // }, [setting])

    // useEffect(() => {
    //     handleActiveLeftbar()
    // }, [location])

    return (

        <ul id="style-7" style={{ height: '100%', overflowY: "auto", overflowX: "hidden" }} className={isSmallNav ? "navbar-nav bg-navigation-left sidebar sidebar-dark accordion toggled position-fixed" : "navbar-nav bg-navigation-left sidebar sidebar-dark accordion position-fixed"}>

            <div className='text-center'>
                {isSmallNav ?
                    <img style={{ width: 56, height: 50 }} className="img-profile  mx-0" src="./favicon.ico" alt="logo" />
                    :
                    <div className="sidebar-brand d-flex align-items-center justify-content-center text-white">
                        <img style={{ width: 190 }} className="img-profile my-1" src="./logo-Adsun.png" alt="logo" />
                        {/* <div className="sidebar-brand-text ml-2">Adsun CRM</div> */}
                    </div>
                }
            </div>
            <hr className="sidebar-divider my-0" />

            {
                handleCheckPermission("dashboard") === true &&
                <li className={select === "dashboard" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("dashboard"); closeAllCollapse() }}
                        className={select === "dashboard" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/dashboard"
                    >
                        {isSmallNav ?

                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.dashboard")}>
                                <FaTachometerAlt className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>

                            :
                            <>
                                <FaTachometerAlt className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.dashboard")}</span>
                            </>
                        }
                    </Link>
                </li>
            }

            {
                handleCheckPermission("dashboardradios") === true &&
                <li className={select === "dashboardradios" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("dashboardradios"); closeAllCollapse() }}
                        className={select === "dashboardradios" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/dashboardradios"
                    >
                        {isSmallNav ?

                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.dashboardRadios")}>
                                <FaBroadcastTower className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>

                            :
                            <>
                                <FaBroadcastTower className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.dashboardRadios")}</span>
                            </>
                        }
                    </Link>
                </li>
            }


            {
                handleCheckPermission("tickets") === true &&
                <li className={select === "tickets" ? "nav-item text-left nav-active" : "nav-item text-left "}>
                    <Link
                        onClick={() => { activeNavigationItem("tickets"); closeAllCollapse() }}
                        className={select === "tickets" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/tickets"
                    >
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.tickets")}>
                                <FaClipboardList className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaClipboardList className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.tickets")}</span>
                            </>

                        }
                    </Link>
                </li>
            }


            {
                handleCheckPermission("popup") === true &&
                <li className={select === "popup" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("popup"); closeAllCollapse() }}
                        className={select === "popup" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/popup">
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.popup")}>
                                <FaHeadset className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaHeadset className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.popup")}</span>
                            </>
                        }
                    </Link>
                </li>
            }

            {
                handleCheckPermission("contacts") === true &&
                <li className={select === "contacts" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("contacts"); closeAllCollapse() }}
                        className={select === "contacts" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/contacts">
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.contacts")}>
                                <FaUsers className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>

                            :
                            <>
                                <FaUsers className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.contacts")}</span>
                            </>
                        }
                    </Link>
                </li>
            }

            {
                handleCheckPermission("chat") === true &&
                <li className={select === "chat" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("contacts"); closeAllCollapse() }}
                        className={select === "chat" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/chat">
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.chat")}>
                                <FaComments className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>

                            :
                            <>
                                <FaComments className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.chat")}</span>
                            </>
                        }
                    </Link>
                </li>
            }

            {
                handleCheckPermission("templatesms") === true ?
                    <>
                        <li className="nav-item ">
                            <div className="nav-link collapsed cursor-pointer" onClick={() => { closeAllCollapse(); setOpenSms(!isOpenSms) }}>
                                {isSmallNav ?
                                    <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.sms")}>
                                        <FaComment className="mr-2 fa-fw fas text-white" size={largeIcon} />
                                    </Tooltip>

                                    :
                                    <>
                                        <FaComment className="mr-2 fa-fw fas" size={16} />
                                        <span>{t("navigationLeft.sms")}</span>
                                        {isOpenSms ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                                    </>
                                }

                            </div>
                            <Collapse isOpen={isOpenSms} >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    {
                                        handleCheckPermission("templatesms") === true &&
                                        <Link
                                            className={select === "templatesms" ? "collapse-item bg-select" : "collapse-item"}
                                            to='/templatesms'
                                            onClick={() => {

                                                activeNavigationItem("templatesms")
                                            }}>{t("navigationLeft.templateSms")}
                                        </Link>


                                    }
                                    {
                                        handleCheckPermission("sms") === true &&
                                        <Link
                                            className={select === "sms" ? "collapse-item bg-select" : "collapse-item"}
                                            to='/sms'
                                            onClick={() => activeNavigationItem("sms")}>{t("navigationLeft.sendSms")}
                                        </Link>
                                    }
                                </div>
                            </Collapse>
                        </li>
                    </>
                    :
                    <>
                        {
                            handleCheckPermission("sms") === true &&
                            <li className={select === "sms" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                                <Link
                                    onClick={() => { activeNavigationItem("sms"); closeAllCollapse() }}
                                    className={select === "sms" ? "nav-link activeNavItem text-white" : "nav-link"}
                                    to="/sms">
                                    {isSmallNav ?
                                        <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.sms")}>
                                            <FaComment className="mr-2 fa-fw fas text-white" size={largeIcon} />
                                        </Tooltip>

                                        :
                                        <>
                                            <FaComment className="mr-2 fa-fw fas" size={16} />
                                            <span>{t("navigationLeft.sms")}</span>
                                        </>
                                    }
                                </Link>
                            </li>
                        }
                    </>
            }

            {
                handleCheckPermission("email.sendemail") === true ?
                    <>
                        <li className="nav-item ">
                            <div className="nav-link collapsed cursor-pointer" onClick={() => { closeAllCollapse(); setOpenEmail(!isOpenEmail) }}>
                                {isSmallNav ?
                                    <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.templateEmail")}>
                                        <FaEnvelope className="mr-2 fa-fw fas text-white" size={largeIcon} />
                                    </Tooltip>

                                    :
                                    <>
                                        <FaEnvelope className="mr-2 fa-fw fas" size={16} />
                                        <span>{t("navigationLeft.email")}</span>
                                        {isOpenEmail ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                                    </>
                                }

                            </div>
                            <Collapse isOpen={isOpenEmail} >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    {
                                        handleCheckPermission("email.templateemail") === true &&
                                        <Link
                                            className={select === "email.templateemail" ? "collapse-item bg-select" : "collapse-item"}
                                            to='/email.templateemail'
                                            onClick={() => {

                                                activeNavigationItem("email.templateemail")
                                            }}>{t("navigationLeft.templateEmail")}
                                        </Link>


                                    }
                                    {
                                        handleCheckPermission("email.sendemail") === true &&
                                        <Link
                                            className={select === "email.sendemail" ? "collapse-item bg-select" : "collapse-item"}
                                            to='/email.sendemail'
                                            onClick={() => activeNavigationItem("email.sendemail")}>{t("navigationLeft.sendEmail")}
                                        </Link>
                                    }
                                </div>
                            </Collapse>
                        </li>
                    </>
                    :
                    <>
                        {
                            handleCheckPermission("email.sendemail") === true &&
                            <li className={select === "email.sendemail" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                                <Link
                                    onClick={() => { activeNavigationItem("email.sendemail"); closeAllCollapse() }}
                                    className={select === "email.sendemail" ? "nav-link activeNavItem text-white" : "nav-link"}
                                    to="/email.sendemail">
                                    {isSmallNav ?
                                        <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.sendemail")}>
                                            <FaEnvelope className="mr-2 fa-fw fas text-white" size={largeIcon} />
                                        </Tooltip>

                                        :
                                        <>
                                            <FaEnvelope className="mr-2 fa-fw fas" size={16} />
                                            <span>{t("navigationLeft.sendemail")}</span>
                                        </>
                                    }
                                </Link>
                            </li>
                        }
                    </>
            }

            {
                (handleCheckPermission("company") || handleCheckPermission("account") || handleCheckPermission("function") || handleCheckPermission("groupuser") || handleCheckPermission("tag") || handleCheckPermission("calllimit")) &&
                <li className="nav-item ">
                    <div className="nav-link collapsed cursor-pointer" onClick={() => { closeAllCollapse(); setOpenManager(!isOpenManager) }}>
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.manager")}>
                                <FaTasks className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>

                            :
                            <>
                                <FaTasks className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.manager")}</span>
                                {isOpenManager ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                            </>
                        }

                    </div>
                    <Collapse isOpen={isOpenManager} >
                        <div className="bg-white py-2 collapse-inner rounded">
                            {
                                handleCheckPermission("company") === true &&
                                <Link
                                    className={select === "company" ? "collapse-item bg-select" : "collapse-item"}
                                    to='/company'
                                    onClick={() => activeNavigationItem("company")}>{t("navigationLeft.company")}
                                </Link>

                            }

                            {
                                handleCheckPermission("account") === true &&
                                <Link
                                    className={select === "account" ? "collapse-item bg-select" : "collapse-item"}
                                    to='/account'
                                    onClick={() => activeNavigationItem("account")}>{t("navigationLeft.webAccount")}
                                </Link>
                            }

                            {
                                handleCheckPermission("function") === true &&
                                <Link
                                    className={select === "function" ? "collapse-item bg-select" : "collapse-item"}
                                    onClick={() => activeNavigationItem("function")}
                                    to="/function">{t("navigationLeft.function")}
                                </Link>
                            }

                            {
                                handleCheckPermission("groupuser") === true &&
                                <Link
                                    className={select === "groupuser" ? "collapse-item bg-select" : "collapse-item"}
                                    onClick={() => activeNavigationItem("groupuser")}
                                    to="/groupuser">{t("navigationLeft.groupUser")}
                                </Link>
                            }

                            {
                                handleCheckPermission("groupdriver") === true &&
                                <Link
                                    className={select === "groupdriver" ? "collapse-item bg-select" : "collapse-item"}
                                    onClick={() => activeNavigationItem("groupdriver")}
                                    to="/groupdriver">{t("navigationLeft.groupDriver")}
                                </Link>
                            }

                            {
                                handleCheckPermission("tag") === true &&
                                <Link
                                    onClick={() => activeNavigationItem("tag")}
                                    className={select === "tag" ? "collapse-item bg-select" : "collapse-item"}
                                    to="/tag">{t("navigationLeft.tag")}
                                </Link>
                            }

                            {
                                handleCheckPermission("configsms") === true &&
                                <Link
                                    onClick={() => activeNavigationItem("configsms")}
                                    className={select === "configsms" ? "collapse-item bg-select" : "collapse-item"}
                                    to="/configsms">{t("navigationLeft.configSms")}
                                </Link>
                            }




                            {
                                handleCheckPermission("email.config") === true &&
                                <Link
                                    onClick={() => activeNavigationItem("email.config")}
                                    className={select === "email.config" ? "collapse-item bg-select" : "collapse-item"}
                                    to="/email.config">Cấu hình email
                                </Link>
                            }

                            {/* {
                                userInfo.type === 0 &&
                                <Link
                                    onClick={() => activeNavigationItem("logs")}
                                    className={select === "callLimit" ? "collapse-item bg-select" : "collapse-item"}
                                    to="/logs">logs
                                </Link>
                            } */}

                        </div>
                    </Collapse>
                </li>
            }
            <hr className="sidebar-divider d-none d-md-block mb-0" />
            {
                (handleCheckPermission("generalreports.localcalls") || handleCheckPermission("generalreports.outgoings") || handleCheckPermission("generalreports.incomings") || handleCheckPermission("generalreports.voicemail")) &&
                <li className="nav-item ">
                    <div className="nav-link collapsed  cursor-pointer" onClick={() => { closeAllCollapse(); setOpenReport(!isOpenReport) }}>
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.generalReports")}>
                                <FaFileAlt className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaFileAlt className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.generalReports")}</span>
                                {isOpenReport ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                            </>
                        }
                    </div>
                    <Collapse isOpen={isOpenReport} >
                        <div className="bg-white py-2 collapse-inner rounded">
                            {
                                handleCheckPermission("generalreports.localcalls") &&
                                <Link className={select === "localcall" ? "collapse-item bg-select" : "collapse-item"} to='/localcall' onClick={() => activeNavigationItem("localcall")}>{t("navigationLeft.localCall")}</Link>
                            }

                            {
                                handleCheckPermission("generalreports.outgoings") &&
                                <Link className={select === "OutGoingCall" ? "collapse-item bg-select" : "collapse-item"} to='/OutGoingCall' onClick={() => activeNavigationItem("OutGoingCall")}>{t("navigationLeft.outgoings")}</Link>

                            }

                            {
                                handleCheckPermission("generalreports.incomings") &&
                                <Link className={select === "IncomingCall" ? "collapse-item bg-select" : "collapse-item"} to='/IncomingCall' onClick={() => activeNavigationItem("IncomingCall")}>{t("navigationLeft.incomings")}</Link>

                            }

                            {
                                handleCheckPermission("generalreports.voicemail") &&
                                <Link className={select === "voicemail" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("voicemail")} to='/voicemail'>{t("navigationLeft.voiceMail")}</Link>
                            }
                        </div>
                    </Collapse>
                </li>
            }

            {
                (
                    handleCheckPermission("detailqrgreports.answeredcalls") ||
                    handleCheckPermission("detailqrgreports.detailansweredcalls") ||
                    handleCheckPermission("detailqrgreports.servicelevel") ||
                    handleCheckPermission("detailqrgreports.unansweredcalls") ||
                    handleCheckPermission("detailqrgreports.abandondetailcalls") ||
                    handleCheckPermission("detailqrgreports.detailagentnohandlecall") ||
                    handleCheckPermission("generalqrgreports.answeredcalldistribution") ||
                    handleCheckPermission("generalqrgreports.abandon") ||
                    handleCheckPermission("generalqrgreports.holdtime") ||
                    handleCheckPermission("generalqrgreports.callhandle")
                ) &&
                <li className="nav-item ">
                    <div className="nav-link collapsed  cursor-pointer" onClick={() => { closeAllCollapse(); setOpenGeneralQueue(!isOpenGeneralQueue) }}>
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.generalQRGReports")}>
                                <FaFileAlt className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaFileAlt className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.generalQRGReports")}</span>
                                {isOpenGeneralQueue ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                            </>
                        }

                    </div>
                    <Collapse isOpen={isOpenGeneralQueue} >
                        <div className="bg-white py-2 collapse-inner rounded">

                            {
                                handleCheckPermission("generalqrgreports.answeredcalldistribution") &&
                                <Link className={select === "GeneralQRGAnsweredCallDistribution" ? "collapse-item bg-select" : "collapse-item"} to='/GeneralQRGAnsweredCallDistribution' onClick={() => activeNavigationItem("GeneralQRGAnsweredCallDistribution")}> {t("navigationLeft.answeredCallDistribution")} <br></br></Link>
                            }
                            {
                                handleCheckPermission("generalqrgreports.holdtime") &&
                                <Link className={select === "GeneralQRGHoldTime" ? "collapse-item bg-select" : "collapse-item"} to='/GeneralQRGHoldTime' onClick={() => activeNavigationItem("GeneralQRGHoldTime")}>{t("navigationLeft.holdtime")}</Link>
                            }
                            {
                                handleCheckPermission("generalqrgreports.callhandle") &&
                                <Link className={select === "GeneralQRGCallHandle" ? "collapse-item bg-select" : "collapse-item"} to='/GeneralQRGCallHandle' onClick={() => activeNavigationItem("GeneralQRGCallHandle")}>{t("navigationLeft.callHandle")}</Link>
                            }
                            {
                                handleCheckPermission("detailqrgreports.answeredcalls") &&
                                <Link className={select === "DetailQRGAnsweredCalls" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGAnsweredCalls' onClick={() => activeNavigationItem("DetailQRGAnsweredCalls")}>{t("navigationLeft.answeredCalls")}</Link>
                            }
                            {
                                handleCheckPermission("detailqrgreports.detailansweredcalls") &&
                                <Link className={select === "DetailQRGDetailAnsweredCalls" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGDetailAnsweredCalls' onClick={() => activeNavigationItem("DetailQRGDetailAnsweredCalls")}>{t("navigationLeft.detailAnsweredCalls")}</Link>
                            }
                            {
                                handleCheckPermission("detailqrgreports.servicelevel") &&
                                <Link className={select === "DetailQRGServiceLevel" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGServiceLevel' onClick={() => activeNavigationItem("DetailQRGServiceLevel")}>{t("navigationLeft.serviceLevel")}</Link>
                            }
                            {
                                handleCheckPermission("generalqrgreports.abandon") &&
                                <Link className={select === "GeneralQRGAbandon" ? "collapse-item bg-select" : "collapse-item"} to='/GeneralQRGAbandon' onClick={() => activeNavigationItem("GeneralQRGAbandon")}>{t("navigationLeft.abandon")}</Link>
                            }
                            {/* {
                                handleCheckPermission("detailqrgreports.unansweredcalls") &&
                                <Link className={select === "DetailQRGUnansweredCalls" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGUnansweredCalls' onClick={() => activeNavigationItem("DetailQRGUnnsweredCalls")}>{t("navigationLeft.unansweredCalls")}</Link>
                            } */}
                            {
                                handleCheckPermission("detailqrgreports.abandondetailcalls") &&
                                <Link className={select === "DetailQRGAbandonDetailCalls" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGAbandonDetailCalls' onClick={() => activeNavigationItem("DetailQRGAbandonDetailCalls")}>{t("navigationLeft.abandonDetailCalls")}</Link>
                            }
                            {
                                handleCheckPermission("detailqrgreports.detailagentnohandlecall") &&
                                <Link className={select === "DetailQRGAgentNoHandleCall" ? "collapse-item bg-select" : "collapse-item"} to='/DetailQRGAgentNoHandleCall' onClick={() => activeNavigationItem("DetailQRGAgentNoHandleCall")}>{t("navigationLeft.agentToHandleCalls1")} <br></br> {t("navigationLeft.agentToHandleCalls2")}</Link>
                            }
                        </div>
                    </Collapse>
                </li>
            }


            <hr className="sidebar-divider d-none d-md-block mb-0" />


            {(handleCheckPermission("extension") === true || handleCheckPermission("queue") === true || handleCheckPermission("ringgroup") === true || handleCheckPermission("config.pagegroup") === true) &&
                <li className="nav-item ">
                    <div className="nav-link collapsed  cursor-pointer" onClick={() => { closeAllCollapse(); setOpenSetting(!isOpenSetting) }}>
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.settings")}>
                                <FaCog className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaCog className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.settings")}</span>
                                {isOpenSetting ? <FaAngleDown className="float-right mt-1 mr-2" /> : <FaAngleRight className="float-right mt-1 mr-2" />}
                            </>
                        }

                    </div>
                    <Collapse isOpen={isOpenSetting} >
                        <div className="bg-white py-2 collapse-inner rounded">

                            {
                                handleCheckPermission("extension") === true &&
                                <Link className={select === "extension" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("extension")} to='/extensioncompany'>{t("navigationLeft.extension")}</Link>
                            }

                            {
                                handleCheckPermission("queue") === true &&
                                <Link className={select === "queue" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("queue")} to='/queuecompany'>{t("navigationLeft.queue")}</Link>
                            }

                            {
                                handleCheckPermission("ringgroup") === true &&
                                <Link className={select === "ringgroupcompany" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("ringgroupcompany")} to='/ringgroupcompany'>{t("navigationLeft.ringGroup")}</Link>
                            }

                            {
                                handleCheckPermission("config.pagegroup") === true &&
                                <Link className={select === "config.pagegroup" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.pagegroup")} to='/config.pagegroup'>{t("navigationLeft.pageGroup")}</Link>
                            }

                            {handleCheckPermission("config.musiconhold") === true &&
                                <>
                                    <hr className="m-0"></hr>
                                    <Link className={select === "config.musiconhold" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.musiconhold")} to='/config.musiconhold'>{t("navigationLeft.musicOnHold")}</Link>
                                </>
                            }
                            {handleCheckPermission("config.playrecording") === true &&
                                <Link className={select === "config.playrecording" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.playrecording")} to='/config.playrecording'>{t("navigationLeft.playRecording")}</Link>
                            }



                            {handleCheckPermission("config.timegroup") === true &&
                                <>
                                    <hr className="m-0"></hr>
                                    <Link className={select === "config.timegroup" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.timegroup")} to='/config.timegroup'>{t("navigationLeft.timeGroup")}</Link>
                                </>

                            }

                            {handleCheckPermission("config.timecondition") === true &&
                                <>
                                    <Link className={select === "config.timecondition" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.timecondition")} to='/config.timecondition'>{t("navigationLeft.timeCondition1")}<br></br>{t("navigationLeft.timeCondition2")}</Link>
                                    <hr className="m-0"></hr>
                                </>
                            }



                            {handleCheckPermission("config.announcement") === true &&
                                <Link className={select === "config.announcement" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.announcement")} to='/config.announcement'>{t("navigationLeft.announcement")}</Link>
                            }


                            {handleCheckPermission("config.trunk") === true &&
                                <Link className={select === "config.trunk" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.trunk")} to='/config.trunk'>{t("navigationLeft.trunk")}</Link>
                            }

                            {handleCheckPermission("config.outbound") === true &&
                                <Link className={select === "config.outbound" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.outbound")} to='/config.outbound'>{t("navigationLeft.outbound")}</Link>
                            }

                            {handleCheckPermission("config.inbound") === true &&
                                <Link className={select === "config.inbound" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.inbound")} to='/config.inbound'>{t("navigationLeft.inbound")}</Link>
                            }

                            {handleCheckPermission("config.ivr") === true &&
                                <Link className={select === "config.ivr" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.ivr")} to='/config.ivr'>{t("navigationLeft.ivr")}</Link>
                            }

                            {handleCheckPermission("config.featurecode") === true &&
                                <Link className={select === "config.featurecode" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.featurecode")} to='/config.featurecode'>{t("navigationLeft.featureCode")}</Link>
                            }

                            {handleCheckPermission("config.pinset") === true &&
                                <Link className={select === "config.pinset" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.pinset")} to='/config.pinset'>{t("navigationLeft.pinSet")}</Link>
                            }

                            {handleCheckPermission("config.setcid") === true &&
                                <Link className={select === "config.setcid" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("config.setcid")} to='/config.setcid'>{t("navigationLeft.setCid")}</Link>
                            }

                            {handleCheckPermission("blacklist") === true &&
                                <Link className={select === "blacklist" ? "collapse-item bg-select" : "collapse-item"} onClick={() => activeNavigationItem("blacklist")} to='/blacklist'>{t("navigationLeft.blackList")}</Link>
                            }





                            {/* <Link className="collapse-item" to='/extension'>Extension</Link>
                            <Link className="collapse-item" to='/ringgroup'>Ring Group</Link>
                            <Link className="collapse-item" to='/queue'>Queue</Link> */}
                        </div>
                    </Collapse>
                </li>
            }

            {handleCheckPermission("rate") === true &&
                <li className={select === "rate" ? "nav-item text-left nav-active" : "nav-item text-left"}>
                    <Link
                        onClick={() => { activeNavigationItem("rate"); closeAllCollapse() }}
                        className={select === "rate" ? "nav-link activeNavItem text-white" : "nav-link"}
                        to="/rate">
                        {isSmallNav ?
                            <Tooltip hoverDelay={500} direction="right" content={t("navigationLeft.settings")}>
                                <FaDollarSign className="mr-2 fa-fw fas text-white" size={largeIcon} />
                            </Tooltip>
                            :
                            <>
                                <FaDollarSign className="mr-2 fa-fw fas" size={16} />
                                <span>{t("navigationLeft.rate")}</span>
                            </>
                        }
                    </Link>
                </li>
            }

            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => { callBackSetSmallNav(!isSmallNav); setIsSmallNav(!isSmallNav) }} >
                    {isSmallNav ? <FaAngleRight className='text-white mb-1' /> :
                        <FaAngleLeft className='text-white mb-1' />}
                </button>
            </div>
            {/* <Footer /> */}



        </ul>

    )
}