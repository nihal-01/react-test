import React from 'react';

import './Main.css';
import { avatarImg, videoPng } from '../../assets/images';

export default function Main() {
    return (
        <div>
            <img src={videoPng} alt='' className='main-img' />
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <h2 className='main-content-title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, laudantium.
                    </h2>
                    <p className='main-content-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aperiam temporibus ducimus ratione iure quisquam
                        quas accusamus, architecto nulla cumque voluptatum.
                        Iusto fugit unde quisquam nam nostrum explicabo quam
                        mollitia voluptatem.
                    </p>

                    <div className='main-meta-wrapper'>
                        <img
                            src={avatarImg}
                            alt=''
                            className='main-avatar-img'
                        />
                        <div>
                            <h3 className='main-meta-name'>Nihal N</h3>
                            <p className='main-meta-info'>Web developer</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <button className='main-hello-btn'>Hello world</button>
                    <button className='main-hello-btn1'>Hello world</button>
                </div>
            </div>

            <div>
                <div></div>
            </div>
        </div>
    );
}
