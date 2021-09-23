import React, { useEffect, useContext, useState } from 'react'
// import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
////////COMPONENT////////
import Header from './Header'
import LeftBar from './LeftBar'
////////DASHBOARD//////////
import Dashboard from '../dashboard/Dashboard'
import PhuongTien from '../phuongtien/PhuongTien'
///////CONTEXT//////////////
// import { UserInfoContext } from '../../context/UserInfoContext'
// import { SettingsAppContext } from '../../context/SettingsAppContext'

import ApiService from '../../apis/Account'
import routeList from '../../routes/Routes'
import Login from '../auth/Login'

export default function Layout({ }) {

    // const { userInfo } = useContext(UserInfoContext)
    // const { changeNavigationType, setting } = useContext(SettingsAppContext)


    const [isSmallNav, setIsSmallNav] = useState(false)

    const [permission, setPermission] = useState(() => {
        return routeList.map(item => ({ value: item.name }))
    })


    const handleCheckPermission = (str) => {
        // for (let i in permission) {
        //     if (permission[i].value === str) {
        //         return permission[i].show
        //     }
        // }
        return true
    }

    // useEffect(() => {
    //     if (userInfo != null) {
    //         if (userInfo.type === 0) {
    //             let navigation = []
    //             ApiService.GetListFunction().then(res => {
    //                 if (res.data.status === 1) {
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
    //                 }
    //                 setPermission(navigation)
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
    //             setPermission(result)
    //         }
    //     }
    // }, [userInfo])




    return (

        <Router>
            <Route exact path="/" component={Login} />
            {/* <ToastProvider placement="bottom-right" autoDismissTimeout={2500}> */}
            <div className="layout-wrapper ">
                <div>
                    <LeftBar isSmall={isSmallNav} callBackSetSmallNav={(check) => {
                        setIsSmallNav(check);
                        //changeNavigationType(check)
                    }} />
                </div>
                <div>
                    <Header isSmall={isSmallNav}  ></Header>

                    <div id="content-wrapper" className={isSmallNav ? "d-flex flex-column mainContentWithSmallNav" : "d-flex flex-column mainContent"}>

                        <div id="content">
                            <div className="container-fluid">
                                <Switch>
                                    {handleCheckPermission("demo") && <Route exact path="/demo" component={PhuongTien} />}
                                    {handleCheckPermission("dashboard") && <Route exact path="/dashboard" component={Dashboard} />}
                                    {handleCheckPermission("phuongtien") && <Route exact path="/phuongtien" component={PhuongTien} />}
                                </Switch>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {/* </ToastProvider> */}
        </Router>
    )
}