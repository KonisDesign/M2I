import React from 'react';
import './Category.css';

const Category = ({ activeCategory, setActiveCategory, categoryList }) => {
    return (
        // J'ai modifié ce composant afin de mettre les classe CSS input-group de bootstrap
        <div class="input-group">
            <select
                name="category"
                className="custom-select categories"
                id="inputGroupSelect"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value="">---</option>
                {
                    categoryList.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))
                }
            </select>
            <div class="input-group-append">
                <button className='btn btn-secondary' onClick={() => setActiveCategory('')}>Reset</button>
            </div>
        </div>
    );
};

export default Category;