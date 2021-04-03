import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const SkeletonLoaderSimilarCoins = () => (
    <Box display="flex">
        <Box mr={2} p={2} width="100%" >
            <Box mb={5} display="block">
                <Skeleton width="30%">
                    <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="40%">
                    <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="60%">
                    <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="80%">
                    <Typography>.</Typography>
                </Skeleton>
            </Box>
         </Box>
    </Box>
)