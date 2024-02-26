// import local styles and assets
import officeImage from '@/assets/images/regular/office-background-02.jpg';
import profileAvatarImage from '@/assets/images/regular/profile-avatar.jpg';
import styles from './index.module.scss';

// import local components
import Image from 'next/image';

const WelcomeHeader = () => {
  return (
    <div className={`${styles.welcomeHeader} full-width`}>
      <div className='user-name'>
        <div className='user-name__inner'>
          <Image
            className='user-name__avatar'
            src={profileAvatarImage}
            alt='profile-avatar'
          />
          <div className='user-name__text'>
            <p className='user-name__full-name'>Thien Phuc Khuc</p>
            <p className='user-name__occupation'>ReactJS - NodeJS Developer</p>
          </div>
        </div>
      </div>
      <Image
        className='full-width welcome__background'
        src={officeImage}
        alt='office-background'
      />
    </div>
  );
};

export default WelcomeHeader;
