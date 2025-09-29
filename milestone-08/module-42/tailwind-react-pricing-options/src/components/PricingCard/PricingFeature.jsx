import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex mt-4'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeature;