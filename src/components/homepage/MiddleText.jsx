import React from 'react';
import resumeData from '../../resumeData';
import SocialLinks from './SocialLinks';

const MiddleText = () => (
    <p className="second">
        <h3> {resumeData.roleDescription}</h3>
        <hr />
        <SocialLinks />
    </p>
)

export default MiddleText