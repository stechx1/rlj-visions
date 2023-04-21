import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm, ValidationError } from '@formspree/react';
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
  const [state, handleSubmit] = useForm('xlekabzr');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    handleSubmit();
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, [500]);
  };

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
    '@media (max-width: 767px)': {
      container: {
        flexDirection: 'column',
      },
    },
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div style={contactStyles.container}>
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
              <form
                onSubmit={handleSubmit}
                action='https://formspree.io/f/xlekbjvq'
                method='POST'
              >
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  label='Name'
                  id='Name'
                  name='Name'
                  // labelHidden
                  // hasIcon='right'
                  placeholder='Your name'
                ></Input>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='email'
                  label='Email'
                  id='Email'
                  // labelHidden
                  // hasIcon='right'
                  placeholder='Enter your email address'
                ></Input>
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='textarea'
                  label='Message'
                  name='message'
                  id='Message'
                  rows={5}
                  // labelHidden
                  // hasIcon='right'
                  placeholder='Your message here.'
                ></Input>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <div style={{ marginTop: '20px' }}>
                  <Button
                    onClick={handleClick}
                    color='primary'
                    wideMobile
                    type='submit'
                  >
                    Submit
                  </Button>
                </div>
              </form>
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
