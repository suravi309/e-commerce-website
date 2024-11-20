import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    console.log(typeof bookId, typeof id,  typeof data[0].bookId)

    const book = data.find(book => book.bookId === id);

    
    const {bookId: currentBookId,image,bookName,author,category,review,tags,totalPages,publisher,price,rating } = book;



    const handleMarkAsRead = (id) =>{

        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }

    return (
        <div className='my-12'>
            <h2>Book details: {bookId}</h2>
            <div className="hero bg-base-200 min-h-screen border border-b-emerald-700 rounded-lg  p-10">
                <div className="hero-content flex-col lg:flex-row">
                <img className='w-72 border border-b-emerald-700 rounded-lg p-10 bg-white' src={image} alt="" />

                    <div className='m-10'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h1>{author}</h1>
                    <div className="flex w-full flex-col border-opacity-50">                    
                    <h2>{category}</h2>
                    
                    </div>
                    <p className="py-6 font-semibold border border-b-emerald-700 rounded-lg p-10 bg-white">Review
                    {review}
                    </p>
                    <h1 className='font-semibold gap-4'>Tag:{tags}</h1>
                    <h1 className='font-semibold'>Number of Pages:{totalPages}</h1>
                    <h2 className='font-semibold'>Publisher:{publisher}</h2>
                    <h2 className='font-semibold'>Price:{price}</h2>
                    <div className="card-actions gap-10 pb-10">
                    <h2 className='font-semibold'>Rating:{rating}</h2>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                    
                    
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleAddToWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;