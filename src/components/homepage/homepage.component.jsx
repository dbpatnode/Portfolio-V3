import React from 'react';
import './homepage.style.scss';
import TopText from './TopText'
import MiddleText from './MiddleText'
import ScrollDownButton from './ScrollDownButton';

const HomePage = () => (
    <div className="homepage">
            <div className="banner-text">
                <TopText />
                <MiddleText />
                <ScrollDownButton />
            </div>
    </div >
)

export default HomePage
