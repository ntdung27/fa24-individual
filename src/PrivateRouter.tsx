/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
    const token: any = localStorage.getItem("userID") || null
    const userID = JSON.parse(token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userID) {
            navigate("/signin")
        }
    }, [userID, navigate])

    if (userID == 1) {
        return children 
    }

    return <div className="">You do not have authority to access. Contact to admin for more</div>
}

export default PrivateRouter