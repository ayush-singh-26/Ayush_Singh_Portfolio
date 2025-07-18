import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'Youtube',
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    target: '_blank'
  },
  {
    title: 'Twitter',
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
    target: '_blank'
  },
  {
    title: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    target: '_blank'
  },
  {
    title: 'Linkedin',
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    target: '_blank'
  },
]

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-4'>
          <div className='text-white/40 text-sm text-center'>
            © 2025 Ayush Singh. All rights reserved.
          </div>

          <nav className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target={link.target}
                rel="noopener noreferrer"
                className='inline-flex items-center gap-1.5 hover:text-white transition-colors'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};