import {Button} from 'react-bootstrap';
import {FaFolder} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import React from 'react';

export default function Folder({folder}) {
    return (
        <Button
            as={Link}
            to={`/folder/${folder.id}`}
            variant='outline-dark'
            className='text-truncate w-100'>
            <FaFolder className='mr-2'/>
            {folder.name}
        </Button>
    );
}
