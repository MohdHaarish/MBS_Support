import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function AboutUs(){
  return (
  <motion.section id="about" className="section about-us" initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} variants={container}>
      <motion.div className="section-inner" variants={item}>
        <h3 className="section-title">About Us</h3>
        <p className="lead">We are MBS Support — a partner for robust, compliant, and people-first debt recovery solutions.</p>
        <p>We work alongside businesses to negotiate great outcomes at speed, finding the optimal solution to financial and operational challenges by reducing risk and protecting value where time and cash are tight. With our credit collection services, we make it a point to pay very special attention to case assessments, pre-litigation advices, friendly negotiation ways and quite candid analysis of any relative risks as well as rewards of litigation. Our approach to your debtors would remain firm, but at the same time, courteous and friendly. As we fully understand this fact that after all they are your clients and so it is our firm belief that for resolving any of the bad debts, our 3rd party debt collection methods should be friendly by using proven techniques only. At MBS Support, we believe that every customer is unique and has its own needs, therefore we understand your concern towards your problems and investment into it. That is when we come into the picture – to help you with ongoing compliance and structuring advisory.</p>

        <motion.div className="about-grid" variants={item}>
          <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 1.01, y: -4 }} transition={{type:'spring',stiffness:300}}>
            <h4>Mission</h4>
            <p>Services of Delivery of the highest quality standard. Applicable laws with comply rules and regulations. Company’s assets Use only for business purposes Maintain perfect standards and our commitment to quality with certified company. All professionalism dealings should be with utmost , integrity and honesty.</p>
          </motion.article>

          <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 1.01, y: -4 }} transition={{type:'spring',stiffness:300}}>
            <h4>Vision</h4>
            <p>MBS Support Private Limited Never misuse of the Company’s information to which access is given. Never engagement in activities that are in conflict with the Company’s interests. Never use of physical force or means of duress, coercion maximise the collection of all debts whilst remaining mindful of existing business relationships</p>
          </motion.article>

          <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 1.01, y: -4 }} transition={{type:'spring',stiffness:300}}>
            <h4>Fast Recovery</h4>
            <p>MBS Support Private Limited help our clients to return the money within a short period amicably in most of the claims we handle. We arrange payment adjustments and compensation plans by negotiations with the debtors' representatives. Our key clients love us and entrust us with their debt portfolios because we provide excellent client service and extraordinary results, that our competitors can not provide. MBS Support Private Limited will keep you informed of the progress and are always available should you wish to discuss your debts throughout the debt collection process. Investigations of the debtor for any assets Telephone calls and letters Personal visits Warnings and subsequent data exchange with Credit Reference Bureaus Investigations for any illegal or criminal business activity by the debtor</p>
          </motion.article>

          <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 1.01, y: -4 }} transition={{type:'spring',stiffness:300}}>
            <h4>Performance</h4>
            <p>Relieve the stress of chasing debtors and save valuable time by letting us manage the entire collections process. Avoid common pitfalls and delay tactics while ensuring your debtors address the matter promptly. Access proven strategies to accelerate repayment and utilize legal support if further action is necessary. At MBS Support Private Limited, we keep you updated on progress and are always available for any discussions regarding your debts throughout the collection process. Our services include thorough debtor investigations for assets, telephone calls and letters, personal visits, warnings, and subsequent data exchanges with Credit Reference Bureaus. Additionally, we conduct investigations into any illegal or criminal business activities associated with the debtor.</p>
          </motion.article>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
