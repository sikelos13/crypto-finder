import { SkeletonDetailsCard } from "./SkeletonDetailsCard";
import Box from '@material-ui/core/Box';

export const SkeletonDetailsLoader = () => (
    <Box display="flex" mt={2} p={1}>
        <Box mr={2} p={2} className="Skeleton_FirstColumn">
            <SkeletonDetailsCard />
        </Box>
    </Box>
)