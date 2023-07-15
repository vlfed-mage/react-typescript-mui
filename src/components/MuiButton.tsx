import React, { useState } from 'react';

import {
    Button,
    ButtonGroup,
    IconButton,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([]);
    const [exclusiveFormats, setExclusiveFormats] = useState<string | null>(null);
    console.log(formats, exclusiveFormats);
    const handleFormatChange = (
        e: React.MouseEvent<HTMLElement>,
        updatedFormats: string[],
    ) => {
        setFormats(updatedFormats);
    };
    const handleExclusiveFormatChange = (
        e: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null,
    ) => {
        setExclusiveFormats(updatedFormats);
    };

    return (
        <Stack spacing={4} alignItems='flex-start'>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='google.com'>
                    Text
                </Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <br />
            <Typography variant='h5'>Text Colors</Typography>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>
                    primary
                </Button>
                <Button variant='text' color='secondary'>
                    secondary
                </Button>
                <Button variant='text' color='error'>
                    error
                </Button>
                <Button variant='text' color='warning'>
                    warning
                </Button>
                <Button variant='text' color='info'>
                    info
                </Button>
                <Button variant='text' color='success'>
                    success
                </Button>
            </Stack>
            <Typography variant='h5'>Contained Colors</Typography>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>
                    primary
                </Button>
                <Button variant='contained' color='secondary'>
                    secondary
                </Button>
                <Button variant='contained' color='error'>
                    error
                </Button>
                <Button variant='contained' color='warning'>
                    warning
                </Button>
                <Button variant='contained' color='info'>
                    info
                </Button>
                <Button variant='contained' color='success'>
                    success
                </Button>
            </Stack>
            <Typography variant='h5'>Outlined Colors</Typography>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>
                    primary
                </Button>
                <Button variant='outlined' color='secondary'>
                    secondary
                </Button>
                <Button variant='outlined' color='error'>
                    error
                </Button>
                <Button variant='outlined' color='warning'>
                    warning
                </Button>
                <Button variant='outlined' color='info'>
                    info
                </Button>
                <Button variant='outlined' color='success'>
                    success
                </Button>
            </Stack>
            <Typography variant='h5'>Buttons size</Typography>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>
                    small
                </Button>
                <Button variant='contained' size='medium'>
                    medium
                </Button>
                <Button variant='contained' size='large'>
                    large
                </Button>
            </Stack>
            <Typography variant='h5'>Buttons icon</Typography>
            <Stack spacing={2} direction='row'>
                <Button
                    variant='contained'
                    startIcon={<SendIcon />}
                    disableRipple
                    onClick={() => alert('Clicked')}>
                    Send
                </Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>
                    Send
                </Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Typography variant='h5'>Buttons group</Typography>
            <Stack spacing={2}>
                <ButtonGroup variant='contained' disableElevation>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='outlined'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup
                    variant='text'
                    orientation='vertical'
                    size='small'
                    color='secondary'
                    aria-label='alignment button group'>
                    <Button onClick={() => alert('Left clicked')}>Left</Button>
                    <Button onClick={() => alert('Center clicked')}>Center</Button>
                    <Button onClick={() => alert('Right clicked')}>Right</Button>
                </ButtonGroup>
            </Stack>
            <Typography variant='h5'>Toggle Buttons</Typography>
            <Stack direction='row'>
                <ToggleButtonGroup
                    aria-label='text-formatting'
                    value={formats}
                    onChange={handleFormatChange}
                    size='small'
                    color='warning'
                    orientation='vertical'>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Typography variant='h5'>Exclusive Toggle Buttons</Typography>
            <Stack direction='row'>
                <ToggleButtonGroup
                    exclusive
                    aria-label='exclusive-text-formatting'
                    value={exclusiveFormats}
                    onChange={handleExclusiveFormatChange}
                    size='small'
                    color='success'>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};
