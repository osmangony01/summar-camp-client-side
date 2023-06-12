import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useInstructorClasses = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: instructorClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summar-camp-server.vercel.app/instructor/classes?email=${user.email}`)
            return response.json()
        },
    })

    return [instructorClass, refetch];
};

export default useInstructorClasses;