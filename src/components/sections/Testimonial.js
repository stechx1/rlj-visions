import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { testimonials } from '../../data/HeroSection/HeroSection';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: testimonials.mainPara,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    {testimonials.customers[0].review}
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    {testimonials.customers[0].name}
                  </span>
                  {/* <span className='text-color-low'> / </span> */}
                  {/* <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    {testimonials.customers[1].review}
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    {testimonials.customers[1].name}
                  </span>
                  {/* <span className='text-color-low'> / </span> */}
                  {/* <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    {testimonials.customers[2].review}
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    {testimonials.customers[2].name}
                  </span>
                  {/* <span className='text-color-low'> / </span> */}
                  {/* <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
