import React from 'react';
import Config from "../configs/Config"
import axios from "axios"
import Cookies from 'js-cookie'

const GetHeader = () => {
    let token = Cookies.get('token')
    return {
        'x-access-token': `${token}`
    }
}

const HandleError = (error) => {
    if (error.response) {
        //Xóa token lưu trong cookies đi
        Cookies.remove('token')
        if ((error.response.status) === 403) {
            window.location = "/login"
        }
        else if ((error.response.status) === 401) {
            window.location = "/login"
        }
    }
}


const ApiService = {
    GET: (path) => {
        return axios.get(Config.url_server + path, {
            headers: GetHeader()
        }).catch(error => {
            HandleError(error)
        })
    },
    POST: (path, data) => {
        return axios.post(Config.url_server + path, data, {
            headers: GetHeader()
        }).catch(error => {
            HandleError(error)
        })
    },
    PUT: (path, data) => {
        return axios.put(Config.url_server + path, data, {
            headers: GetHeader()
        }).catch(error => {
            HandleError(error)
        })
    },
    DELETE: (path, data) => {
        const headers = GetHeader()
        return axios.delete(Config.url_server + path, { headers, data })
            .catch(error => {
                HandleError(error)
            })
    }
}

export default ApiService