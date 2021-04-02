import { SkeletonColumn } from "./SkeletonColumn";
import Box from '@material-ui/core/Box';

export const SkeletonLoader = () => (
    <Box display="flex" width="100%" justifyContent="center" id="skeleton-loader">
        <Box width="22%" mr={2} p={2} className="Skeleton_FirstColumn">
            <SkeletonColumn />
        </Box>
        <Box width="22%" mr={2} p={2} className="Skeleton_SecondColumn">
            <SkeletonColumn />
        </Box>

        <Box width="22%" mr={2} p={2} className="Skeleton_ThirdColumn">
            <SkeletonColumn />
        </Box>

        <Box width="22%" mr={2} p={2} className="Skeleton_FourthColumn">
            <SkeletonColumn />
        </Box>
    </Box>
)