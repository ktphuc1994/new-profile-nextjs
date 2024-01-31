import styles from './index.module.scss';

// import local componnets
import Scroller from '@/Component/Shared/Scroller';

const picturePart = [1, 2];

const ScrollPageAnimation = () => {
  return (
    <div className={styles['scroll-base-wrapper']}>
      <div className='scroll-watcher'></div>
      <div className='parallax-wrapper'>
        <img src='https://picsum.photos/1600/900' alt='parallax' />
        <h1>Welcome to Scroll Base</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem
          aut porro at, architecto officiis explicabo minima! Sapiente, quasi
          dolores.
        </p>
      </div>
      {picturePart.map((picture, index) => (
        <div className='picture-wrapper' key={picture + index}>
          <img src='https://picsum.photos/800/600' alt={`lorempic${picture}`} />
          <p className='text-part'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptas harum quisquam! Laboriosam, similique! Expedita perferendis
            beatae suscipit, exercitationem aspernatur inventore animi veniam
            vel accusamus libero. Aperiam necessitatibus saepe doloribus
            dignissimos, ratione maxime, corporis sunt quasi recusandae quae
            animi autem aliquid dolore? Perferendis quaerat in ab impedit sint
            rerum animi consequuntur saepe non! Fugit explicabo sit facilis
            itaque optio. Dolorem, pariatur. Esse ratione ducimus, modi eius
            explicabo, soluta error reprehenderit dicta quidem illo placeat fuga
            voluptatem doloremque eaque assumenda aspernatur, fugit omnis
            similique quas! Inventore, praesentium doloremque nihil, sit, iste
            perspiciatis minus a consectetur ipsa unde aspernatur at odio earum.
          </p>
        </div>
      ))}
      <div className='skill-section'>
        <Scroller />
        <Scroller direction='right' />
      </div>
    </div>
  );
};

export default ScrollPageAnimation;
