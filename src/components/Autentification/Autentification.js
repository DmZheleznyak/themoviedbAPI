import React from 'react'

import TextField from '@material-ui/core/TextField';

const autentification = (props) => {

    return (
        <div style={{ width: `50%`, height: `300px`, margin: 'auto' }}>
            <form>
            <TextField
                error
                id="outlined-email-input"
                label="Email"
                // className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
            />
            <TextField
                error
                id="outlined-password-input"
                label="Password"
                // className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />
            </form>
        </div>
    )
}

export default autentification;