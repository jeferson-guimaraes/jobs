import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../services/api"
import { JobProps } from "../../types/job"
import { Container } from "../../styles/global"
import { Title } from "../Home/styles"
import { Summary } from "./styles"

const url = import.meta.env.VITE_API

const Job = () => {
    const { id } = useParams<{ id: string }>()
    const [job, setJob] = useState<JobProps | null>(null)

    const getJob = async (url: string) => {
        const res = await api.get(url)
        setJob(res.data)
    }

    useEffect(() => {
        const jobUrl = `${url}/job/${id}`

        getJob(jobUrl)
    }, [])

    return (
        <Container>
            {job ? (
                <Container>
                    <Title>{job.title}</Title>
                    <Summary>{job.description}</Summary>
                </Container>
            ) : (
                <div>Carregando ...</div>
            )}
        </Container>
    )
}

export default Job