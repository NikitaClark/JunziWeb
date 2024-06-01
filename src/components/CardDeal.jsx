import { max, nikita, anastasia, alex } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import './CardDeal.css';

const CardDeal = () => (
  <section className={layout.section}>
    <div className="flex-[1] flex flex-col justify-start mr-10">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[52px] text-white ss:leading-[100.8px] leading-[10px]">
      Our team</h1>
      <div className="services">
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[310px] md:mr-22 sm:mr-5 mr-0 my-5 feedback-card ">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={nikita} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Nikita Clark</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px] ">
          Co-Founder <br/> Engineering/Communication</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[310px] md:mr-22 sm:mr-5 mr-0 my-5 feedback-card ">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={alex} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Alexander Zakharov </h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px] ">
          Head of Engineering <br /> Software/Management</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[310px] md:mr-22 sm:mr-5 mr-0 my-5 feedback-card ">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={max} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Maxim Onishenko</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px]">
          Senior Developer <br /> SoftDev/WebDev</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[310px] md:mr-22 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={anastasia} alt="billing" className="w-[100%] h-[80%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
          Anastasia Ivanova</h2>
          <p className="font-poppins font-normal text-dimWhite text-center text-[19px] leading-[24px]">
          Web Designer <br />Design/Vision</p>
        </div>
        
      </div>
    </div>
  </section>
);

export default CardDeal;
