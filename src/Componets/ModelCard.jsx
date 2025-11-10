import React from 'react';

const ModelCard = ({card}) => {
    return (
        <div>
            <div>
                <div className="card bg-base-100  shadow-sm">
  <figure className=' w-full p-2 bg-gray-100'>
    <img className='rounded-2xl w-full'
      src={card.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.framework}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ModelCard;