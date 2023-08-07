import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import { PropTypes } from 'prop-types';
import '../styles.css'

export default function Input(props) {
    const [text, SetText] = useState("");
    const placeholder = props.placeholder;

    return (
        <Box className='input'>
            <TextField
                type='text'
                id='outlined-basic'
                variant='outlined'
                sx={{ width: '500px', height: '300px' }}
                placeholder={placeholder}
                defaultValue="Enter Text Here"
                value={text}
                onChange={(e) => SetText(e.target.value)}
                inputProps={{ maxLength: 100 }}
            >
                {props.inputName}
            </TextField>
        </Box>
    )
}

// definiendo types de los props
Input.propTypes = {
    inputName: PropTypes.string,
    placeholder: PropTypes.string
}

//asignando valores default a los props
Input.defaultProps = {
    inputName: "",
    placeholder: "input"
}


