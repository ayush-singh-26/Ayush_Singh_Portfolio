import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Scalable",
  "SEO-Friendly",
  "Intuitive",
  "Optimized",
  "Mobile-Ready",
  "Fast Loading",
  "User-Centric"
];

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-6 py-3 animate-move-left [animation-duration:30s]'>
            {[...Array(3)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div key={`${word}-${index}`} className='inline-flex gap-3 items-center'>
                    <span className='text-gray-900 uppercase font-extrabold text-sm whitespace-nowrap'>{word}</span>
                    <StarIcon className="size-5 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
