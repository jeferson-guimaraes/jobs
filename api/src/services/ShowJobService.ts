import prismaClient from "../prisma"

interface ShowJobProps {
    id: string
}

class ShowJobService {
    async execute({ id }: ShowJobProps){
        const job = await prismaClient.job.findFirst({
            where:{
                id: id
            }
        })

        return job
    }
}

export { ShowJobService }