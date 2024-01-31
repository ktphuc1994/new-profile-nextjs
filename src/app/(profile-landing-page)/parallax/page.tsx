import mountainImg from '@/assets/images/regular/mountain.png';
import forestImg from '@/assets/images/regular/forest.png';

import styles from './index.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className={`parallax ${styles['parallax-wrapper']}`}>
        <header className='header'>
          <Image src={mountainImg} alt='mountain' className='background' />
          <Image src={forestImg} alt='forest' className='foreground' />
          <h1 className='title'>Welcome!</h1>
        </header>
        <section className='scroll-reveal'>
          <h2>
            <span>Lorem Title</span>
          </h2>
          <p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              saepe dolor nulla atque modi nam nemo hic commodi exercitationem
              nesciunt veniam et? Fuga quae enim ratione explicabo? Quis ratione
              consectetur debitis eos assumenda ex soluta esse mollitia ducimus,
              autem similique nulla porro distinctio vel asperiores id. Possimus
              dicta placeat maiores, voluptatem delectus velit perspiciatis,
              aliquid autem, neque exercitationem soluta atque? Esse a ratione
              sed suscipit modi. Officia velit veniam doloribus veritatis
              dolorum ex voluptates, ipsa repellendus numquam eaque consectetur!
              Quae, ex nobis fuga, non, deleniti vel ducimus animi velit
              consequatur recusandae dolores obcaecati optio placeat aperiam
              error hic. Tempore, aperiam!
            </span>
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            adipisci et nobis cupiditate natus, placeat quia beatae architecto
            ad? Odit expedita suscipit reprehenderit magni veniam. Quasi iusto
            quaerat atque odit? Quaerat illum ipsum deleniti aperiam, quo,
            corporis delectus dicta officia illo cum repellendus earum dolorum
            soluta provident hic consequuntur ab alias iure sit! Maiores,
            similique sint, commodi incidunt reprehenderit ab consequatur
            blanditiis harum dignissimos a sed ducimus architecto aliquam
            tempora voluptatem nulla nisi voluptates impedit doloribus saepe
            adipisci voluptas eius? Ratione ipsa voluptatum aliquam, laudantium
            aspernatur nulla sit distinctio! Eos eveniet, ratione dolorem
            tenetur harum numquam unde itaque, eum labore, voluptates totam
            ullam voluptatem officiis aliquam. Tempore ducimus fugit impedit,
            tempora itaque quasi reiciendis suscipit quibusdam obcaecati
            blanditiis at repudiandae. Magnam ipsam rerum placeat veniam
            repellendus explicabo recusandae culpa enim inventore! Dolor facere
            veniam, illum, in, voluptates dicta amet impedit voluptas odio
            repudiandae ullam aliquid odit alias recusandae at. Ex, hic
            nesciunt. Perspiciatis velit ducimus, sequi eum amet quasi
            provident, nesciunt veniam similique iure vitae voluptates officiis
            maxime, ab eveniet facilis explicabo sunt maiores. Inventore
            repudiandae maiores minima quibusdam doloremque esse velit
            dignissimos quae dolore. Laboriosam quo culpa aliquid adipisci
            incidunt sapiente soluta architecto. Provident assumenda optio qui
            placeat consequuntur?
          </p>
        </section>
      </div>
    </main>
  );
}
