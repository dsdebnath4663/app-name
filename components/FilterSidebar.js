import React, { useState } from 'react';
// import { Slider } from '@material-ui/core';
import { Slider } from '@mui/material';

import './FilterSidebar.css'
import '../app/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons CSS

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([5, 100]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <img className='logo' src='/icons/logo.svg' alt='Logo' />
      <div className="filter-section p-3 mb-4">
        <h4 className="font-weight-bold custom-filter">Filter</h4>


        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">Preis</h4>


          <Slider
            className="custom-slider"
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="price-range"
            min={5}
            max={100}
            step={1}
          />

          <div className="price-range-values">
            <span className="custom-span"> {priceRange[0]}€</span>
            - <span className="custom-span"> {priceRange[1]}€</span>

          </div>
        </div>
        <hr />


        <div className="mb-3">
          <button onClick={toggleCollapse} className="btn btn-primary toggleCollapse  ">
            <h4 className="font-weight-bold custom-header-1">
              Hersteller<i className={`bi ${isCollapsed ? 'bi-chevron-down bi-design' : 'bi-chevron-up bi-design'}`} />
            </h4>

          </button>
          <div className={`checkbox-section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="checkbox-item">
              <input type="checkbox" id="filter1" />
              <label htmlFor="filter1">ADREXpharma</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter2" />
              <label htmlFor="filter2">Filter 2</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter3" />
              <label htmlFor="filter3">Filter 3</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter4" />
              <label htmlFor="filter4">Filter 4</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter5" />
              <label htmlFor="filter5">Filter 5</label>
            </div>
          </div>





        </div>

        <div class="mb-3 button-container">
          <button type="button" className="curve-button-two btn btn-primary">Preisoptionen</button>
        </div>
        <hr />

        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">THC Gehalt

          </h4>


          <Slider
            className="custom-slider"
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="price-range"
            min={5}
            max={100}
            step={1}
          />

          <div className="price-range-values">
            <span className="custom-span"> {priceRange[0]}€</span>
            - <span className="custom-span"> {priceRange[1]}€</span>

          </div>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">CBD Gehalt</h4>


          <Slider
            className="custom-slider"
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="price-range"
            min={5}
            max={100}
            step={1}
          />

          <div className="price-range-values">
            <span className="custom-span"> {priceRange[0]}€</span>
            - <span className="custom-span"> {priceRange[1]}€</span>

          </div>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">Genetik</h4>
          <div class=" button-group-override">
            <button type="button" class="button-graphics-two btn btn-primary"> Indica </button>
            <button type="button" class="button-graphics-four btn btn-primary">Sativa</button>
            <button type="button" class="button-graphics-four btn btn-primary">Hybrid</button>
          </div>
          <hr />
        </div>

        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">Genetik</h4>
          <div class=" button-group-override">
            <button type="button" class="button-graphics-five btn btn-primary color-one"> bestrahlt </button>
            <button type="button" class="button-graphics-five btn btn-primary color-two">nicht bestrahlt</button>
          </div>
          <hr />
        </div>

        <div className="mb-3">

          <button onClick={toggleCollapse} className="btn btn-primary toggleCollapse  ">
            <h4 className="font-weight-bold custom-header-1">
              Hersteller<i className={`bi ${isCollapsed ? 'bi-chevron-down bi-design' : 'bi-chevron-up bi-design'}`} />
            </h4>

          </button>
          <div className={`checkbox-section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="checkbox-item">
              <input type="checkbox" id="filter1" />
              <label htmlFor="filter1">ADREXpharma</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter2" />
              <label htmlFor="filter2">Filter 2</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter3" />
              <label htmlFor="filter3">Filter 3</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter4" />
              <label htmlFor="filter4">Filter 4</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="filter5" />
              <label htmlFor="filter5">Filter 5</label>
            </div>
          </div>

          <hr />




        </div>
        <div className="mb-3">
          <h4 className="font-weight-bold custom-header">
            <span>x</span>
            alle Filter zurücksetzen</h4>

          <hr />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
