import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Contact = ({
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

  const sectionHeader = {
    title: 'Contact Us',
  };

  const contactStyles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    "@media (max-width: 767px)": {
      container: {
        flexDirection: 'column',
      },
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div
            style={contactStyles.container}
          >
            <Image
              src={require('./../../assets/images/studio.jpeg')}
              alt='Features split 01'
              width={528}
              height={396}
            />
            <div
              style={{
                marginLeft: '60px',
                width: '100%',
              }}
            >
              <Input
                type='text'
                label='Name'
                // labelHidden
                // hasIcon='right'
                placeholder='Your name'
              ></Input>
              <Input
                type='email'
                label='Email'
                // labelHidden
                // hasIcon='right'
                placeholder='Enter your email address'
              ></Input>
              <Input
                type='textarea'
                label='Message'
                rows={5}
                // labelHidden
                // hasIcon='right'
                placeholder='Your message here.'
              ></Input>
              <div style={{ marginTop: '20px' }}>
                <Button tag={'a'} color='primary' wideMobile href='/'>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
