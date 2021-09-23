import React, { useState } from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

export default function DeleteModal(props) {
    const { t } = useTranslation()
    return (
        <Modal size={props.isLarge && "lg"} isOpen={props.isOpen} toggle={props.callBackClose}>
            <div className="modal-header">
                <h5 className="modal-title" >{props.titleHeader}</h5>
                <div className="close" type="button" onClick={props.handleCancel}>
                    <span aria-hidden="true">×</span>
                </div>
            </div>
            <ModalBody>
                <div>
                    {props.message}
                </div>
                <div>
                    {props.children}
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-secondary" type="button" onClick={props.handleCancel}> {t("manager.account.delete.cancel")}</button>
                <button className="btn btn-danger" type="button" onClick={props.handleAction}>{props.titleAction ? props.titleAction : t("manager.account.delete.action")}</button>
            </ModalFooter>
        </Modal>
    )
}

DeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    callBackClose: PropTypes.func,
    handleCancel: PropTypes.func,
    handleAction: PropTypes.func,
    titleHeader: PropTypes.string,
    titleAction: PropTypes.string
}