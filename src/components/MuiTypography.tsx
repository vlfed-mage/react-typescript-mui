import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1' gutterBottom>
                h1 heading
            </Typography>
            <Typography variant='h2'>h2 heading</Typography>
            <Typography variant='h3' gutterBottom>
                h3 heading
            </Typography>
            <Typography variant='h4'>h4 heading</Typography>
            <Typography variant='h5' gutterBottom>
                h5 heading
            </Typography>
            <Typography variant='h6'>h6 heading</Typography>

            <Typography variant='h4' component='h1'>
                h1 heading with h4 styles
            </Typography>

            <Typography variant='subtitle1'>subtitle 1 (renders as h6)</Typography>
            <Typography variant='subtitle2'>subtitle 2 (renders as h6)</Typography>

            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            {/*the same as*/}
            <Typography variant='body1'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography variant='body2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </div>
    );
};
