import BaseApi from "./BaseApi"

const AccountApi = {
    Create: (username, pwd, note, type, listCooperativeId, groupUserId) => {
        const bodyData = {
            username: username,
            pwd: pwd,
            note: note,
            type: type,
            listCooperativeId: listCooperativeId,
            groupUserId: groupUserId
        }
        return BaseApi.POST("api/Account/Create", bodyData)
    },
    GetListAccountByCooperativeId: (cooperativeId, pageSize, pageIndex) => {
        const bodyData = {
            pageIndex: pageIndex,
            pageSize: pageSize
        }
        return BaseApi.POST(`api/Account/GetListAccountByCooperativeId?cooperativeId=${cooperativeId}`, bodyData)
    }
}

export default AccountApi