import React, { useEffect, useState } from 'react'
import ActionModal from '../modal/ActionModal'
import InputSelect from "../input/InputSelect"
// import Helper from '../../../helpers/Helper'
// import { SettingLS } from '../../dashboard/SettingLS'
import { useTranslation } from 'react-i18next'

export const fontSizeType = [1, 2, 3, 4, 5]

export const fontStyleType = [
    {
        value: "normal",
        label: "settingTable.normalSize"
    },
    {
        value: "italicized",
        label: "settingTable.italicizedSize"
    },
    {
        value: "bold",
        label: "settingTable.boldSize"
    },
    {
        value: "italicized_bold",
        label: "settingTable.italicizedBoldSize"
    }
]

const getFontSize = (listFontSize) => {
    let result = []
    for (let i in listFontSize) {
        result.push({
            label: listFontSize[i].toString(),
            value: listFontSize[i]
        })
    }
    return result
}

const getFontStyle = (listFontStyle) => {
    let result = []
    for (let i in listFontStyle) {
        result.push({
            label: listFontStyle[i],
            value: listFontStyle[i]
        })
    }
    return result
}


export default function SettingTable({ isOpen, callBackClose, callBackSetFontSize, callBackSetFontStyle }) {
    const { t } = useTranslation()

    const [fontSize, setFontSize] = useState(() => {
        return fontSizeType[1]
        //return Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontSize, fontSizeType[1])
    })
    const [fontStyle, setFontStyle] = useState(() => {
        return fontStyleType[0].value
        //return Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontStyle, fontStyleType[0].value)
    })

    const handleCancel = () => {
        callBackClose()
    }

    const handleAction = () => {
        callBackSetFontSize(fontSize)
        callBackSetFontStyle(fontStyle)
        // Helper.setSettingFromLocalStorage(SettingLS.TableSetting.fontSize, fontSize)
        // Helper.setSettingFromLocalStorage(SettingLS.TableSetting.fontStyle, fontStyle)
        callBackClose()
    }

    useEffect(() => {
        if (isOpen) {
            setFontSize(fontSizeType[1])
            setFontStyle(fontStyleType[0].value)
            // setFontSize(Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontSize, fontSizeType[1]))
            // setFontStyle(Helper.getSettingFromLocalStorage(SettingLS.TableSetting.fontStyle, fontStyleType[0].value))
        }
    }, [isOpen])

    return (
        <ActionModal handleAction={handleAction} handleCancel={handleCancel} titleAction={t("settingTable.update")} titleHeader={t("settingTable.title")} isOpen={isOpen} callBackClose={callBackClose}>
            <InputSelect
                isLanguage
                title="settingTable.fontSize"
                options={getFontSize(fontSizeType)}
                textKey="label"
                valueKey="value"
                value={fontSize}
                callBackOnChange={(data) => setFontSize(data)}
            />
            <InputSelect
                isLanguage
                title="settingTable.fontStyle"
                options={fontStyleType}
                textKey="label"
                valueKey="value"
                value={fontStyle}
                callBackOnChange={(data) => setFontStyle(data)}
            />
        </ActionModal>
    )
}
