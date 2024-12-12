import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, Phone, Calendar, MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { InlineWidget } from "react-calendly";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const formData = {
        user_name: formRef.current.user_name.value,
        user_email: formRef.current.user_email.value,
        message: formRef.current.message.value,
        company_name: 'Mastro HR',
        recipient_name: 'Mastro',
        reply_to: formRef.current.user_email.value
      };
  
      const result = await emailjs.send(
        'service_nhzv0si',
        'template_lefmfgu',
        formData,
        'MH3PZvwl-MF4ZWLVw'
      );
  
      if (result.text === 'OK') {
        setSubmitStatus('success');
        formRef.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const StatusMessage = ({ status }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-center gap-2 p-4 rounded-lg ${
        status === 'success' 
          ? 'bg-green-500/20 text-green-50' 
          : 'bg-red-500/20 text-red-50'
      }`}>
      {status === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-400" />
      ) : (
        <XCircle className="w-5 h-5 text-red-400" />
      )}
      {status === 'success' ? t.form.successMessage : t.form.errorMessage}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-flow opacity-30" />
      
      <motion.div 
        className="relative z-10 pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-50 leading-tight tracking-tighter mb-8"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: t.hero.title.replace(/\n/g, '<br/>') }}
          />
        </div>

        <motion.div 
          className="bg-primary-50/10 backdrop-blur-xl border-t border-primary-50/20 rounded-t-[2.5rem]"
          variants={containerVariants}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-primary-50 mb-8">{t.form.title}</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-100 mb-2" htmlFor="user_name">
                        {t.form.fields.name.label}
                      </label>
                      <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-primary-50/5 border border-primary-50/20 rounded-lg 
                        text-primary-50 placeholder-primary-200 focus:outline-none focus:border-accent-500
                        transition-colors duration-200"
                        placeholder={t.form.fields.name.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-100 mb-2" htmlFor="user_email">
                        {t.form.fields.email.label}
                      </label>
                      <input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-primary-50/5 border border-primary-50/20 rounded-lg 
                        text-primary-50 placeholder-primary-200 focus:outline-none focus:border-accent-500
                        transition-colors duration-200"
                        placeholder={t.form.fields.email.placeholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-100 mb-2" htmlFor="message">
                        {t.form.fields.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-primary-50/5 border border-primary-50/20 rounded-lg 
                      text-primary-50 placeholder-primary-200 focus:outline-none focus:border-accent-500
                      transition-colors duration-200 resize-none"
                      placeholder={t.form.fields.message.placeholder}
                    ></textarea>
                  </div>

                  <AnimatePresence>
                    {submitStatus && <StatusMessage status={submitStatus} />}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-500 text-primary-50 px-6 py-4 rounded-lg hover:bg-accent-600 transition duration-300 font-medium text-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {t.form.submitButton}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-primary-50 mb-6">{t.info.title}</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent-500/20 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary-50">{t.info.email.label}</h3>
                        <p className="text-primary-100">ciao@mastrohr.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent-500/20 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary-50">{t.info.phone.label}</h3>
                        <p className="text-primary-100">{t.info.phone.value}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent-500/20 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary-50">{t.info.location.label}</h3>
                        <p className="text-primary-100">{t.info.location.value}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-primary-50 mb-6">{t.calendar.title}</h2>
                  <p className="text-primary-100 mb-4">{t.calendar.description}</p>
                  <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className="w-full bg-primary-50/10 text-primary-50 px-6 py-4 rounded-lg hover:bg-primary-50/20 transition duration-300 font-medium text-lg flex items-center justify-center gap-2 group">
                    <Calendar className="w-5 h-5" />
                    {t.calendar.button}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setIsCalendlyOpen(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-4 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}>
              <InlineWidget url="https://calendly.com/michelepavone-info/30min" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;