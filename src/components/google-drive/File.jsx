import {FaFile} from 'react-icons/fa';
import React from 'react';

export default function File({file}) {
    return (
        <a
            href={file.url}
            target='_blank'
            className='btn btn-outline-dark text-truncate w-100'>
            <FaFile/>
            {file.name}
        </a>
    );
}
