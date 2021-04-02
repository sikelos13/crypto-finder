import { Box } from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export const TabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
        >
            {value === index && (
                 <Box width="480px">{children}</Box>
            )}
        </Box>
    );
}