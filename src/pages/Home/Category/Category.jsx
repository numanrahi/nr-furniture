import React from 'react';
import './Category.css'
const Category = () => {
    return (
        <div>
            <div className='text-center m-3 fs-3'>Browse The Range</div>
            <section className='d-flex justify-content-around'>
                <div>
                    <img className='category-card' src="https://i.ibb.co/qxsM3qV/re.png" alt="" />
                    <p className='text-center'>Dining</p>
                </div>
                <div>
                    <img className='category-card' src="https://i.ibb.co/QQXDjpz/living-re.png" alt="" />
                    <p className='text-center'>Living</p>
                </div>
                <div>
                    <img className='category-card' src="https://i.ibb.co/Y3pDPbY/image-101-re.png" alt="" />
                    <p className='text-center'>Bedroom</p>
                </div>
            </section>
        </div>
    );
};

export default Category;