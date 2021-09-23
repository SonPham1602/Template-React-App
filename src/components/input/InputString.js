import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap"
import uniqid from "uniqid"
import Proptypes from "prop-types"
import { useTranslation } from "react-i18next"

export default function InputSelect({ isLanguage, isNoTitle, valueKey, textKey, title, value, callBackOnChange, isRequire, options, optionsComponent }) {
    const { t } = useTranslation()

    return (
        <InputGroup className="mb-2">
            {isNoTitle ?
                <>
                </>
                :
                <InputGroupAddon className="w-25" addonType="prepend">
                    <InputGroupText className="w-100">
                        {isLanguage ? t(title) : title}
                        {isRequire && <label className="text-danger m-0 ml-1">*</label>}
                    </InputGroupText>
                </InputGroupAddon>
            }

            <select value={value} onChange={(event) => callBackOnChange(event.target.value)} className="form-control">
                <>
                    {optionsComponent &&
                        <>
                            {optionsComponent}
                        </>
                    }
                </>

                {
                    options.map(item => {
                        return (
                            <option key={uniqid()} value={item[valueKey]}>
                                {isLanguage ? t(item[textKey]) : item[textKey]}
                            </option>
                        )
                    })
                }
            </select>
        </InputGroup>
    )
}

InputSelect.propTypes = {
    /**
     * Key giá trị trong mảng
     */
    valueKey: Proptypes.string,
    textKey: Proptypes.string,
    title: Proptypes.string,
    /**
     * Giá trị
     */
    value: Proptypes.object,
    callBackOnChange: Proptypes.func,
    /**
     * Hiện dấu sao trong input
     */
    isRequire: Proptypes.bool,
    /**
     * Sử dụng đa ngôn ngữ
     */
    isLanguage: Proptypes.bool
}