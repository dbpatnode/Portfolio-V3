import React from 'react';
import resumeData from '../../resumeData';

const TopText = () => (
    <p className="first">
        <h1 data-splitting>Hi, I'm {resumeData.name}</h1>
    </p>
)

export default TopText