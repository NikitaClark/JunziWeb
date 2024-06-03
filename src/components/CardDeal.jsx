import { max, nikita, anastasia, alex, vasya } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import './CardDeal.css';
import './CustomButton.css';

const CardDeal = () => (
  <section className={layout.section}>
    <div className="flex-[1] flex flex-col justify-start mr-10">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[52px] text-white ss:leading-[100.8px] leading-[10px]">
      Our team</h1>
      <div className="services">
        <div class="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={nikita} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Nikita Clark</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px] ">
          Co-Founder <br/> Engineering/Communication</p>
        </div>
        <div class="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={alex} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Alexander Zakharov </h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px] ">
          Head of Engineering <br /> Software/Management</p>
        </div>
        <div class="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={vasya} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Vasiliy Ivashchenkov</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px]">
          Senior Developer <br /> SoftDev/WebDev</p>
        </div>
        <div class="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={anastasia} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Anastasia Ivanova</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px]">
          Web Designer <br />Design/Vision</p>
        </div>
        

        
      </div>
      <div>
      <p className="font-poppins font-semibold text-white text-center text-[32px] leading-[29.4px] mb-3">
        Let's assemble your team.</p>
      <button className="schedule-button ">Schedule a Call</button>
    </div>
    </div>
  </section>
);

export default CardDeal;
