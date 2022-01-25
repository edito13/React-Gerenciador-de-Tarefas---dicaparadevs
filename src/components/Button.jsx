/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import React from 'react'

import './Button.css'

export default ({ children, onClick} ) => (
    <button onClick={onClick}>{children}</button>
) 