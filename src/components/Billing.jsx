import { apple, bill, google, ai, csd, mad, pai, qa, ux } from "../assets";
import styles, { layout } from "../style";
import './Billing.css';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className="flex-[1] flex flex-col justify-start mr-10">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[52px] text-white ss:leading-[100.8px] leading-[10px]">
      From Concept to Completion:<br/>Our Full-Stack Expertise.</h1>
      <div className="services">
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-3 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={csd} alt="billing" className="w-[20%] h-[60%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
            Custom Software Development</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
        <img src={mad} alt="billing" className="w-[20%] h-[60%]" />
        </div>
          <h2 className="font-poppins font-semibold text-center text-white text-[26px] leading-[29.4px] mb-3">
            Mobile App Development</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={qa} alt="billing" className="w-[20%] h-[120%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-8">
            QA and Testing</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Make your technology bulletproof with manual and automated testing.</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={ux} alt="billing" className="w-[20%] h-[100%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
            UX/UI Design</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Create beautiful, pixel-perfect, and easy-to-use designs that delight you and your users.</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={ai} alt="billing" className="w-[20%] h-[100%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
            AI and Data Science</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Use leading AI, machine learning, and data engineering technologies to unlock business value.</p>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-0 relative`}>
        <img src={pai} alt="billing" className="w-[20%] h-[100%]" />
        </div>
          <h2 className="font-poppins font-semibold text-white text-center text-[26px] leading-[29.4px] mb-3">
            Platform and Infrastructure</h2>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[24px]">
            Ensure applications are secure, fault tolerant, and highly available with our DevOps and Security engineers.</p>
        </div>
      </div>
    </div>

  </section>
);

export default Billing;
