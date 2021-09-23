import React, { useContext } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from 'reactstrap'
import PropTypes from "prop-types"
import { useTranslation } from 'react-i18next'
////////CONTEXT/////
// import { ThemeContext } from "../../../context/ThemeContext"

export default function ActionModal(props) {
    const { t } = useTranslation()
   // const { theme } = useContext(ThemeContext)

    return (
        <Modal size={props.isLarge && "lg"} isOpen={props.isOpen} toggle={props.callBackClose}>
            <div className="modal-header">
                <h5 className="modal-title" >{props.titleHeader}</h5>
                <div className="close" type="button" onClick={props.handleCancel}>
                    <span aria-hidden="true">×</span>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
            <ModalFooter>
                <div className="btn btn-secondary" onClick={props.handleCancel}>{t("config.queue.add.cancel")}</div>
                {
                    !props.isNoAction &&
                    <>
                        {
                            props.isLoadingProcess === true ?
                                <>
                                    {
                                        props.loading ?
                                            <button className="btn btn-primary" disabled><Spinner size="sm" /> {props.titleLoading}</button>
                                            :
                                            <div className="btn btn-primary" onClick={props.handleAction}>{props.titleAction}</div>
                                    }
                                </>
                                :
                                <div className="btn btn-primary" onClick={props.handleAction}>{props.titleAction}</div>
                        }
                    </>
                }
            </ModalFooter>
        </Modal>
    )
}

ActionModal.propTypes = {
    //Chỉnh kích thước cửa modal lớn
    isLarge: PropTypes.bool,
    /**
      *  Hàm xử lý đóng những không xóa dữ liệu tạm
      */
    callBackClose: PropTypes.func,
    /**
     *  Biến trạng thái mở đóng của Modal
     */
    isOpen: PropTypes.bool,
    /**
     *  Tiêu để của Modal
     */
    titleHeader: PropTypes.string,
    /**
    *  Modal không action
    */
    isNoAction: PropTypes.bool,
    /**
     * Tiêu đề của button Action
     */
    titleAction: PropTypes.string,
    /**
  * Tiêu đề của button Action
  */
    titleLoading: PropTypes.string,
    /**
     * Hàm xử lý khi thực hiện nhấn vào Action Button
     */
    handleAction: PropTypes.func,
    /**
   *    Hàm xử lý khi thực hiện nhấn vào Cancel Button
   */
    handleCancel: PropTypes.func,
    /**
     * Hiệu ứng loading cho form xử lý lâu
     */
    isLoadingProcess: PropTypes.bool,
    /**
     * Trạng thái loading
     */
    loading: PropTypes.bool
}