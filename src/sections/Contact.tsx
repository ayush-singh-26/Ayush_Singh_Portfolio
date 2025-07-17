import ArrorUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center relative md:text-left'>
          <div 
            className='absolute inset-0 opacity-5 -z-10' 
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className='flex flex-col gap-8 items-center md:flex-row md:justify-between md:items-center'>
            <div className='flex-1'>
              <h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
              <p className='text-sm mt-2'>
                Ready to bring your next project to life?
              </p>
            </div>
            <div>
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
                <span>Contact Me</span>
                <ArrorUpRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};