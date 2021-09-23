import React, { useState, useContext } from 'react'
import { FaSignOutAlt, FaCogs, FaUser, FaBook, FaUnlockAlt, FaInfo } from 'react-icons/fa'
import { DropdownMenu } from 'reactstrap'
// import { useToasts } from "react-toast-notifications";
import { useTranslation } from 'react-i18next'
///////COMPONENT/////
// import Logout from '../../logout/Logout'
// import UserGuide from '../../userGuide/UserGuide'
// import UserInfo from '../../userInfo/UserInfo';
// import ChangePwd from "../../changePwd/changePwd";
// import SettingsApp from "../../settingsApp/SettingsApp"
import ReleaseProductInfo from "../../../release/ReleaseInfo.json"
//////////CONTEXT//////
// import ViewUpdateInfo from '../../viewUpdateInfo/ViewUpdateInfo';

export default function DropDownUser({ callBackLogout }) {

    const ReleaseInfo = ReleaseProductInfo


    // const { addToast } = useToasts();
    const { t, i18n } = useTranslation();
    const [showLogout, setShowLogout] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [showChangePwd, setShowChangePwd] = useState(false);
    const [showSetingApp, setShowSettingApp] = useState(false)
    const [showUserGuide, setShowUserGuide] = useState(false)
    //Hiển thị phiên bản mới 
    const [showUpdateInfo, setShowUpdateInfo] = useState(null)

    // const handleChangePwdSuccess = () => {
    //     addToast("Đổi mật khẩu thành công", {
    //         appearance: "success",
    //         autoDismiss: true,
    //     });
    // }

    return (
        <>
            {/* <UserGuide isOpen={showUserGuide} callBackClose={() => setShowUserGuide(false)} />
            <SettingsApp isOpen={showSetingApp} callBackClose={() => setShowSettingApp(false)} />
            <Logout isOpen={showLogout} callBackClose={() => setShowLogout(false)} />
            <UserInfo isOpen={showUserInfo} callBackClose={() => setShowUserInfo(false)} />
            <ChangePwd isOpen={showChangePwd} callBackClose={() => setShowChangePwd(false)} callBackChandePwdSuccess={handleChangePwdSuccess} />
            <ViewUpdateInfo callBackClose={() => setShowUpdateInfo(null)} isOpenProps={showUpdateInfo} /> */}
            {/* <div className="dropdown-menu dropdown-menu-right shadow d-block "> */}
            <DropdownMenu right className="shadow dropdownUser">
                <div className="dropdown-item cursor-pointer" onClick={() => setShowUserInfo(true)}>
                    <FaUser className="mr-2 " />
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.profile")}
                </div>
                <div className="dropdown-item cursor-pointer" onClick={() => setShowSettingApp(true)} >
                    <FaCogs className="mr-2 " />
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.settings")}
                </div>
                <div className="dropdown-item cursor-pointer" onClick={() => setShowChangePwd(true)}>
                    <FaUnlockAlt className="mr-2 " />
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.changePassword")}
                </div>
                <div className="dropdown-item cursor-pointer" onClick={() => setShowUserGuide(true)}>
                    <FaBook className="mr-2" />
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.userGuide")}
                </div>
                <div className="dropdown-item cursor-pointer" onClick={() => setShowUpdateInfo(true)}>
                    <FaInfo className="mr-2" />
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.info")} {ReleaseInfo.release[ReleaseInfo.release.length - 1].version}
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item cursor-pointer" onClick={() => setShowLogout(true)}>
                    <FaSignOutAlt className="mr-2 " />
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    {t("dropdownUser.logout")}
                </div>
            </DropdownMenu>
        </>
    )
}