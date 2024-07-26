import prismaClient from "../prisma"

interface ShowJobsProps {
    query: string
}

class ShowJobsService {
    async execute({ query }: ShowJobsProps) {
        // Verifica se query é uma string e não está vazia
        if (typeof query !== 'string' || query.trim() === '') {
            throw new Error('Query deve ser uma string não vazia');
        }
    
        // Converte a query para minúsculas para uma busca insensível a maiúsculas
        const lowerQuery = query.toLowerCase();
    
        const jobs = await prismaClient.job.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: lowerQuery,
                            mode: 'insensitive', // Insensível a maiúsculas/minúsculas
                        },
                    },
                    {
                        summary: {
                            contains: lowerQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        description: {
                            contains: lowerQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        location: {
                            contains: lowerQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        company: {
                            contains: lowerQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        type: {
                            contains: lowerQuery,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
        });
    
        return jobs;
    }
    
}

export { ShowJobsService }