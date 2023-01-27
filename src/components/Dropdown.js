import React from 'react';

const Dropdown = () => {
    return (
        <>
            <form className='mx-5'>
                <div className="col-auto my-1 row">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Select Method</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </form>

        </>
    )
}

export default Dropdown