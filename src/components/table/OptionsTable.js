
import React, { useContext } from 'react'
import { useTranslation } from "react-i18next"

const customTotal = (from, to, size) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const { t } = useTranslation()

    return (
        <span className="react-bootstrap-table-pagination-total ml-2">
            {t("table.pagination.show")} {from} {t("table.pagination.to")} {to} {t("table.pagination.of")}  {size} {t("table.pagination.result")}
        </span>
    )
}


const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
        text: '50', value: 50
    },
    {
        text: '70', value: 70
    },
    {
        text: '100', value: 100
    }]
};
export default options