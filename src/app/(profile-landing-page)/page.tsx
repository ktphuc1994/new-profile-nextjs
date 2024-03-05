// import local components
import AllProject from '@/Component/HomePage/AllProjects';
import WelcomeHeader from '@/Component/HomePage/WelcomeHeader';

export default function Home() {
  return (
    <section className={`content-grid`}>
      <WelcomeHeader />
      <AllProject />
    </section>
  );
}
