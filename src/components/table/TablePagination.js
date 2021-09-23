import React, { useState } from 'react'
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import Proptypes from "prop-types"
import BootstrapTable from "react-bootstrap-table-next";
import PaginationTable from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useTranslation } from "react-i18next"
import OptionsTable from "./OptionsTable"
import ColumnToggle from './ColumnToggle'
import SettingTable, { fontSizeType, fontStyleType } from "./SettingTable"
import Helper from '../../../helpers/Helper';
import { SettingLS } from '../../dashboard/SettingLS';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import classnames from "classnames"


export default function Table(propsTable) {

    const { SearchBar } = Search;

    const { t } = useTranslation()

    const searchProps = {
        placeholder: "type something..."
    };

    const options = {
        custom: true,
        totalSize: (propsTable.searchText === "" ? propsTable.size : propsTable.searchSize),
        page: (propsTable.searchText === "" ? propsTable.page : propsTable.pageSearch),
        paginationSize: 4,
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        disablePageTitle: true,
        // pageListRenderer: pageListRenderer,
        // page:4,
        // pageStartIndex: 0,
        // nextPageTitle: 'First page',
        // prePageTitle: 'Pre page',
        // firstPageTitle: 'Next page',
        // lastPageTitle: 'Last page',
        // disablePageTitle: true,
        onPageChange: propsTable.callBackOnchange,
        // sizePerPageList: [{
        //   text: '50', value: 50
        // },
        // {
        //   text: '70', value: 70
        // },
        // {
        //   text: '100', value: 100
        // }]
        // pageSize: 5,
        sizePerPageList: [
            {
                text: "50",
                value: 50,
            },
            {
                text: "70",
                value: 70,
            },
            {
                text: "100",
                value: 100,
            },
        ],
        sizePerPage: 50,
        // pageStartIndex: 0,
        // paginationSize: 10,

        prePage: "Prev",
        nextPage: "Next",
        firstPage: "First",
        lastPage: "Last",
        // paginationPosition: "top",
    };

    const [showSetingTable, setShowSettingTable] = useState(false)

    const [fontSize, setFontSize] = useState(() => {
        return Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontSize, fontSizeType[1])
    })

    const [fontStyle, setFontStyle] = useState(() => {
        return Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontStyle, fontStyleType[0].value)
    })

    const handleGetStyleFontSize = (value) => {
        if (value == 1) {
            return "row-table-size-1"
        }
        else if (value == 2) {
            return "row-table-size-2"
        }
        else if (value == 3) {
            return "row-table-size-3"
        }
        else if (value == 4) {
            return "row-table-size-4"
        }
        else if (value == 5) {
            return "row-table-size-5"
        }
    }

    const handleGetStyleFontStyle = (value) => {
        if (value == "normal") {
            return "row-table-style-1"
        }
        else if (value == "italicized") {
            return "row-table-style-2"
        }
        else if (value == "bold") {
            return "row-table-style-3"
        }
        else if (value == "italicized_bold") {
            return "row-table-style-4"
        }
    }

    return (
        <>
            <SettingTable
                isOpen={showSetingTable}
                callBackClose={() => setShowSettingTable(false)}
                callBackSetFontSize={(data) => setFontSize(data)}
                callBackSetFontStyle={(data) => setFontStyle(data)}
            />
            <PaginationProvider pagination={paginationFactory(options)}>
                {({ paginationProps, paginationTableProps }) => (


                    <ToolkitProvider
                        searchResetsPagination
                        keyField={propsTable.keyField ? propsTable.keyField : "id"}
                        data={propsTable.dataTable}
                        columns={propsTable.columns}
                        search={searchProps}
                        columnToggle={propsTable.isToggle}
                    >

                        {(props) => (
                            <>
                                <div className='d-flex justify-content-between'>
                                    <div className="d-flex">
                                        {propsTable.children}
                                    </div>

                                    <div className="d-flex">
                                        <div className={propsTable.isToggle && "mr-2"}>
                                            <SearchBar placeholder={t("tickets.main.search")}  {...props.baseProps} {...props.searchProps} />
                                        </div>
                                        {
                                            propsTable.isToggle &&
                                            <ColumnToggle callBackShowSettingTable={() => setShowSettingTable(true)} tableName={propsTable.tableName} {...props.columnToggleProps} />
                                        }
                                    </div>
                                </div>

                                {
                                    propsTable.isFilter ?
                                        <BootstrapTable
                                            hover
                                            selectRow={propsTable.isSelectRow ? propsTable.selectRowControl : { mode: 'checkbox', hideSelectColumn: true, hideSelectAll: true, }}
                                            {...props.baseProps}
                                            bootstrap4
                                            striped={true}
                                            filterPosition="top"
                                            filter={filterFactory()}
                                            pagination={PaginationTable(OptionsTable)}
                                            noDataIndication={t("config.extension.main.noResult")}
                                            rowClasses={classnames(handleGetStyleFontSize(fontSize), handleGetStyleFontStyle(fontStyle))}
                                        />
                                        :
                                        <BootstrapTable
                                            hover
                                            {...props.baseProps}
                                            selectRow={propsTable.isSelectRow ? propsTable.selectRowControl : { mode: 'checkbox', hideSelectColumn: true, hideSelectAll: true, }}
                                            bootstrap4
                                            striped={true}
                                            pagination={PaginationTable(OptionsTable)}
                                            noDataIndication={t("config.extension.main.noResult")}
                                            rowClasses={classnames(handleGetStyleFontSize(fontSize), handleGetStyleFontStyle(fontStyle))}
                                        />
                                }
                            </>
                        )}
                    </ToolkitProvider>
                )}
            </PaginationProvider>
        </>
    )
}


Table.propTypes = {
    /**
     * Dữ liệu bảng
     */
    dataTable: Proptypes.object,
    /**
     * Các cột trong bảng
     */
    columns: Proptypes.object,
    /**
     * Cho phép các thể ẩn hiện các cột
     */
    isToggle: Proptypes.bool,
    /**
     * Cho phép search trên từng cột
     */
    isFilter: Proptypes.bool,
    /**
     * Tên bảng để lưu local storage
     */
    tableName: Proptypes.string,
    /**
     * Key giá trị của mảng giữ liệu
     * 
     * Mặc định là "id"
     */
    keyField: Proptypes.string,

    isSelectRow: Proptypes.bool,

    selectRowControl: Proptypes.func,

    /**
     * Hàm sử lý khi thay đổi trang 
     */
    callBackOnchange: Proptypes.func,

    /**
     * 
     */
    size: Proptypes.number,

    /**
     * 
     */
    page: Proptypes.number,

    /**
     * 
     */
    searchSize: Proptypes.number,

    /**
     * 
     */
    pageSearch: Proptypes.number


}