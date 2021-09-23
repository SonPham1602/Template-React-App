import React, { useState } from 'react'
import { Dropdown, DropdownToggle } from 'reactstrap'
import { FaPhoneAlt, FaPhoneSlash, FaPhoneSquare, FaListAlt, FaUser, FaUserCircle } from 'react-icons/fa'

import PageName from './header/PageName'
import DropDownUser from './header/DropDownUser'

export default function Header({ callBackCallAway, callBackOpenMissedCall, isSmall }) {


    const [showDropDownUser, setShowDropDownUser] = useState(false)
    return (
        <nav className={isSmall ? "headerStickOnTopSmall focus navbar navbar-expand navbar-light topbar static-top shadow position-fixed " : "headerStickOnTop focus navbar navbar-expand navbar-light bg-white topbar static-top shadow position-fixed"} >
            {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button> */}
            <div className="justify-content-between w-100 d-flex align-items-center">
                <PageName />
                <ul className="navbar-nav ml-auto">
                    {/* <li>
                    <div className="d-flex align-items-center pt-3">
                        <SearchOverview />
                    </div>

                </li> */}
                    <li>

                    </li>

                    <li className="nav-item  cursor-pointer">
                        <Dropdown className="no-arrow" isOpen={showDropDownUser} toggle={() => { setShowDropDownUser(!showDropDownUser) }}>
                            <DropdownToggle className="nav-link user-header" tag="span" data-toggle="dropdown">
                                <div className="borderLeftHeader pl-2" onClick={() => setShowDropDownUser(!showDropDownUser)}>
                                    {/* <span className="mr-2 d-none d-lg-inline text-gray-700">{userInfo != null && userInfo.name}</span> */}
                                    {/* <img className="img-profile rounded-circle border" src="./Businessman-96.png" alt="avatar user" /> */}
                                    <FaUserCircle className="btn-user-header btn-circle" />
                                </div>
                            </DropdownToggle>
                            <DropDownUser />
                        </Dropdown>

                    </li>
                </ul>
            </div>
        </nav >
    )
}
