import React from 'react';

import './Sidebar.css';

const data = [
    {
        _id: 0,
        date: '12-04-2022',
        name: 'jjisdn sdfi',
        desc: 'this is a description',
        isOpen: true,
    },
    {
        _id: 3,
        date: '12-04-2022',
        name: 'jjisdn sdfi',
        desc: 'this is a description',
        isOpen: true,
    },
    {
        _id: 5,
        date: '12-04-2022',
        name: 'jjisdn sdfi',
        desc: 'this is a description',
        isOpen: true,
    },
    {
        _id: 6,
        date: '12-04-2022',
        name: 'jjisdn sdfi',
        desc: 'this is a description',
        isOpen: true,
    },
];

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className='sidebar-title'>Lorem ipsum, dolor </h2>
            <hr className='sidebar-line' />

            <div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='sidebar-item-wrapper'>
                            <p className='sidebar-item-text'>{item.date}</p>
                            <div className='sidebar-item-box'>
                                <p className='sidebar-item-name'>{item.name}</p>
                                <p className='sidebar-item-desc'>{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
