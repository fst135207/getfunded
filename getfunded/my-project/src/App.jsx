import styles from './style.js';
import { Navbar, Hero, Stats, Business, Certificate, Pricing, CardDeal, Testimonials, Clients, CTA, Footer} from './components/index.js';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Certificate/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
);

export default App;