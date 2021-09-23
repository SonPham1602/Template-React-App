import Login from "../pages/auth/Login"
import Layout from "../pages/layouts/Layout"

const routeList = [
    {
        name: "login",
        path: '/',
        component: Login
    },
    {
        name: "dashboard",
        path: '/dashboard',
        component: Layout
    },
    {
        name: "phuongtien",
        path: '/phuongtien',
        component: Layout
    },
    {
        name: "nhansu",
        path: '/nhansu',
        component: Layout
    },
    {
        name: "congtyhopden",
        path: '/congtyhopden',
        component: Layout
    },
    {
        name: "nhacnho",
        path: '/nhacnho',
        component: Layout
    },
    {
        name: "hopdong",
        path: '/hopdong',
        component: Layout
    },
    {
        name: "quanlyhopden",
        path: '/quanlyhopden',
        component: Layout
    }
]

export default routeList