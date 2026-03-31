import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {

    const models = use(modelPromise);

    console.log(models);

    return (
        <div className='mx-40'>
            <div className='text-center pb-10'>
                <h2 className='font-bold text-5xl mb-2'>Choose your Ai model</h2>
                <p className=''>One subscription gives you access to all frontier ai model.</p>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {models.map(model =>
                    <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
                )}
            </div>

        </div>
    );
};

export default Models;