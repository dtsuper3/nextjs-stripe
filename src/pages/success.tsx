import { useRouter } from 'next/router';
import React from 'react'

function Success() {
    const router = useRouter();
    const { session_id } = router.query
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Payment Succesfull</h1>
            <p style={{ marginTop: "20px" }}>{session_id}</p>
        </div>
    )
}

export default Success;