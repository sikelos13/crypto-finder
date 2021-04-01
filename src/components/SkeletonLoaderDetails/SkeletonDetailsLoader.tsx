import { SkeletonDetailsCard } from "./SkeletonDetailsCard";
import Box from '@material-ui/core/Box';

export const SkeletonDetailsLoader = () => (
    <Box display="flex" width="50%" justifyContent="center" mt={2}>
        <Box mr={2} p={2} className="Skeleton_FirstColumn">
            <SkeletonDetailsCard />
        </Box>
    </Box>
)