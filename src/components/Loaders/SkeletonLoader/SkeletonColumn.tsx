import Box from '@material-ui/core/Box';
import { SkeletonCard } from './components/SkeletonCard';

export const SkeletonColumn = () => {
    return (
        <Box>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </Box>
    )
}