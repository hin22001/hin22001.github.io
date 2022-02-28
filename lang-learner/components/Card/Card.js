import React from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import styles from './Card.module.css'

const DashboardCard = ({ title }) => {

    const router = useRouter()

    const handleCardClick = () => {
        console.log("handleCardClick")
        router.push("test")
    }

    return (
        <div onClick={handleCardClick}>
            <Card variant="outlined" className={styles.card}>
                <CardHeader 
                    title={title}
                    className={styles.cardHeader}
                ></CardHeader>
                <CardContent>
                </CardContent>
            </Card>
        </div>
    )
}

export default DashboardCard