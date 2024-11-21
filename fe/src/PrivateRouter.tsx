/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
    const token: any = localStorage.getItem("token") || null
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/signin")
        }
        setTimeout(() => {
            localStorage.clear();
        }, 3000000)
    }, [token, navigate])

    return children
}

export default PrivateRouter