// import styles and types
import styles from './index.module.scss';

// import local constants
import socialIcons from './index.const';

const Footer = () => {
  return (
    <div className={`${styles.footer} full-view`}>
      <div className='footer__social-media'>
        {socialIcons.map((item) => (
          <a
            className='media-icon'
            href={item.link}
            key={item.id}
            target='_blank'
          >
            <item.Icon fontSize='large' />
          </a>
        ))}
      </div>
      <div className='footer__copyrights'>
        &copy;2024 Robert Khuc | All Rights Reserved
      </div>
      <div className='footer__waves'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </div>
    </div>
  );
};

export default Footer;
