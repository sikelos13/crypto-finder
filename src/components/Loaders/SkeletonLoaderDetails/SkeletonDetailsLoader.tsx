import { SkeletonDetailsCard } from "./SkeletonDetailsCard";
import Box from '@material-ui/core/Box';

export const SkeletonDetailsLoader = () => (
    <Box display="flex" className="skeleton-loader-detail">
        <Box mr={2} p={2} >
            <SkeletonDetailsCard />
        </Box>
    </Box>
)