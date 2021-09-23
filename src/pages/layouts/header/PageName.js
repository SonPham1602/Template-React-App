import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PageName() {
    const location = useLocation()
    const [name, setName] = useState()
    const { t, i18n } = useTranslation()

    useEffect(() => {
        // console.log("location",location);
        let pathName = location.pathname
        if (pathName.includes("dashboard")) {
            setName("dashboard.main.titlePanel")
        }

        else if (pathName.includes("email.sendemail")) {
            setName("navigationLeft.sendEmail")
        }

        else if (pathName.includes("email.templateemail")) {
            setName("navigationLeft.templateEmail")
        }

        else if (pathName.includes("extensioncompany")) {
            setName("navigationLeft.extension")
        }
        else if (pathName.includes("queuecompany")) {
            setName("navigationLeft.queue")
        }
        else if (pathName.includes("ringgroupcompany")) {
            setName("navigationLeft.ringGroup")
        }
        else if (pathName.includes("config.pagegroup")) {
            setName("navigationLeft.pageGroup")
        }
        else if (pathName.includes("config.musiconhold")) {
            setName("navigationLeft.musicOnHold")
        }
        else if (pathName.includes("emailconfig")) {
            setName("navigationLeft.emailConfig")
        }
        else if (pathName.includes("config.pinset")) {
            setName("navigationLeft.pinSet")
        }
        else if (pathName.includes("config.setcid")) {
            setName("navigationLeft.setCid")
        }
        else if (pathName.includes("config.ivr")) {
            setName("navigationLeft.ivr")
        }
        else if (pathName.includes("config.announcement")) {
            setName("navigationLeft.announcement")
        }
        else if (pathName.includes("config.trunk")) {
            setName("navigationLeft.trunk")
        }
        else if (pathName.includes("blacklist")) {
            setName("navigationLeft.blackList")
        }

        else if (pathName.includes("tickets")) {
            setName("tickets.main.titlePanel")
        }
        else if (pathName.includes("contacts")) {
            setName("navigationLeft.contacts")
        }
        else if (pathName.includes("popup")) {
            setName("navigationLeft.popup")
        }
        else if (pathName.includes("account")) {
            setName("navigationLeft.webAccount")
        }
        else if (pathName.includes("groupuser")) {
            setName("navigationLeft.groupUser")
        }
        else if (pathName.includes("groupdriver")) {
            setName("navigationLeft.groupDriver")
        }
        else if (pathName.includes("function")) {
            setName("navigationLeft.function")
        }
        else if (pathName.includes("company")) {
            setName("navigationLeft.company")
        }
        else if (pathName.includes("tag")) {
            setName("navigationLeft.tag")
        }
        else if (pathName.includes("callLimit")) {
            setName("navigationLeft.callLimit")
        }

        else if (pathName.includes("localcall")) {
            setName("navigationLeft.localCall")
        }
        else if (pathName.includes("OutGoingCall")) {
            setName("navigationLeft.outgoings")
        }
        else if (pathName.includes("IncomingCall")) {
            setName("navigationLeft.incomings")
        }
        else if (pathName.includes("voicemail")) {
            setName("navigationLeft.voiceMail")
        }


        else if (pathName.includes("GeneralQRGAbandon")) {
            setName("navigationLeft.abandon")
        }
        else if (pathName.includes("GeneralQRGHoldTime")) {
            setName("navigationLeft.holdtime")
        }
        else if (pathName.includes("GeneralQRGCallHandle")) {
            setName("navigationLeft.callHandle")
        }

        else if (pathName.includes("GeneralQRGAnsweredCallDistribution")) {
            setName("navigationLeft.answeredCallDistribution")
        }

        else if (pathName.includes("DetailQRGAgentNoHandleCall")) {
            setName("navigationLeft.agentToHandleCalls")
        }

        else if (pathName.includes("DetailQRGAnsweredCalls")) {
            setName("navigationLeft.answeredCalls")
        }
        else if (pathName.includes("DetailQRGDetailAnsweredCalls")) {
            setName("navigationLeft.detailAnsweredCalls")
        }
        else if (pathName.includes("DetailQRGServiceLevel")) {
            setName("navigationLeft.serviceLevel")
        }
        else if (pathName.includes("DetailQRGUnansweredCalls")) {
            setName("navigationLeft.unansweredCalls")
        }
        else if (pathName.includes("DetailQRGAbandonDetailCalls")) {
            setName("navigationLeft.abandonDetailCalls")
        }

        else if (pathName.includes("rate")) {
            setName("navigationLeft.rate")
        }
        else if (pathName.includes("configsms")) {
            setName("navigationLeft.configSms")
        }
        else if (pathName.includes("templatesms")) {
            setName("navigationLeft.templateSms")
        }


        else if (pathName.includes("sms")) {
            setName("navigationLeft.sms")
        }

        else if (pathName.includes("config.timecondition")) {
            setName("navigationLeft.timeCondition")
        }

        else if (pathName.includes("config.timegroup")) {
            setName("navigationLeft.timeGroup")
        }

        else if (pathName.includes("config.playrecording")) {
            setName("navigationLeft.playRecording")
        }


        else if (pathName.includes("config.featurecode")) {
            setName("navigationLeft.featureCode")
        }


        else if (pathName.includes("config.outbound")) {
            setName("navigationLeft.outbound")
        }


        else if (pathName.includes("config.inbound")) {
            setName("navigationLeft.inbound")
        }


        else {
            setName("")
        }
    }, [location, i18n])

    return (
        <div>
            <h1 className="h5 text-gray-800">{t(name)}</h1>
        </div>
    )
}