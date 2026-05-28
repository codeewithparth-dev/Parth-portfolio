import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedBlob from './AnimatedBlob'

const projects = [
  {
    number: '01',
    title: 'Omnicraft',
    subtitle: 'Creative Agency Website',
    description: 'A bold, cinematic agency website built for Omnicraft — dark aesthetic, smooth animations, and a premium feel that wins clients.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    status: 'Building',
    link: '#',
    featured: true,
  },
  {
    number: '02',
    title: 'Flourish Beauty Parlor',
    subtitle: 'Beauty Parlor Website',
    description: 'A beauty parlor website built for Flourish — elegant design, smooth animations, and a premium feel that wins clients.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    status: 'Completed',
    link: 'https://flourish-beauty-parlor.vercel.app/',
    featured: true,
  },
]

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="relative bg-(--black-2) py-25 md:py-35 overflow-hidden">
      <AnimatedBlob 
        className="hidden md:block"
        style={{ top: '10%', right: '-5%', width: '300px', height: '300px', zIndex: 0 }}
        opacity={0.15} 
        scale={1} 
      />
      <div className="container relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center [16px] [60px] md:[80px]"
        >
          <span className="text-(--lime) text-[12px] tracking-[4px] uppercase font-display font-bold">
            02 / Work
          </span>
          <div className="flex-1 [1px] bg-(--gray-2)" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--cream)',
            marginBottom: '40px',
          }}
          className="md:mb-16"
        >
          Selected <span style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>Work</span>
        </motion.h2>

        <div className="flex flex-col gap-4 md:gap-0.5">
          {projects.map((project, i) => (
            <motion.a
              key={project.number}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ padding: '24px' }}
            className="flex flex-col md:grid md:grid-cols-[60px_1fr_auto] items-start md:items-center gap-4 md:gap-6 p-6 md:p-[40px_36px] border border-(--gray-2) rounded-2xl bg-(--black) no-underline transition-all duration-400 mb-4 cursor-none relative overflow-hidden group hover:bg-[rgba(200,241,53,0.02)] hover:border-[rgba(200,241,53,0.4)]">
              
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--lime)',
                letterSpacing: '2px',
              }}>
                {project.number}
              </span>

              {/* Info */}
              <div>
                <div className="flex flex-col md:flex-row items-start md:items-center [12px] md:[16px] mb:[12px] md:[8px]">
                  <h3 className="font-display text-[20px] md:text-[24px] font-extrabold text-(--cream) tracking-[-0.5px]">
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: 'var(--lime)',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    border: '1px solid rgba(200,241,53,0.3)',
                    borderRadius: '20px',
                    fontFamily: 'var(--font-display)',
                    boxShadow: '0 0 8px rgba(200,241,53,0.4), 0 0 20px rgba(200,241,53,0.15)',
                  }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ color: 'var(--cream-muted)', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px', marginBottom: '16px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      letterSpacing: '1.5px',
                      color: 'var(--lime)',
                      padding: '6px 14px',
                      border: '1.5px solid var(--lime)',
                      borderRadius: '50px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(200,241,53,0.08)',
                      fontFamily: 'var(--font-display)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <motion.span
                className="hidden md:block text-[24px] text-(--lime) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                →
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
