'use client'
import React from 'react'
import { Button } from '@/src/components/ui/button'
import { InfiniteSlider } from '@/src/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/src/components/ui/progressive-blur'
import { cn } from '@/src/lib/utils'
import { Menu, X, ChevronRight, Car, User, Settings, Info, MapPin, Phone, Clock } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

import logo from '@/src/assets/images/logo.jpg'
import bannerImg from '@/src/assets/images/wanita.jpg'
import brand1 from '@/src/assets/images/regenerated_image_1777871487516.webp'
import brand2 from '@/src/assets/images/regenerated_image_1777872551437.png'
import brand3 from '@/src/assets/images/regenerated_image_1777872798321.png'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden pt-20">
                <section>
                    <div className="pt-16 md:pt-24 lg:pt-40 pb-0 pl-[1px]">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left pl-[1px] pb-0 pt-0">
                                <p className="text-white/90 text-sm font-bold uppercase tracking-[0.2em] mb-4 drop-shadow-md">
                                    Unbeatable price on your dream car!
                                </p>
                                <h1 className="max-w-2xl text-balance text-6xl font-black tracking-tighter md:text-7xl lg:mt-4 xl:text-8xl text-white drop-shadow-2xl uppercase">
                                    Juanita Cars
                                </h1>
                                <p className="mt-4 max-w-2xl text-balance text-xl text-white/95 font-bold drop-shadow-md uppercase tracking-tight">
                                    Home of Quality Cars
                                </p>
                                <p className="mt-6 max-w-xl text-balance text-sm text-white/80 font-medium drop-shadow-sm leading-relaxed">
                                    Whether you're looking for speed, comfort, or style — we have the perfect car to match your journey. Great prices, Trusted services, and Quality cars.
                                </p>

                                <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex flex-col items-center lg:items-start">
                                       <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Inquire Now</span>
                                       <span className="text-white text-2xl font-black tabular-nums tracking-tighter">0917-554-8888</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                            <img
                                className="size-full object-cover brightness-[0.65] bg-[#ff0000]"
                                src={bannerImg}
                                alt="Juanita Cars Banner"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80"></div>
                        </div>
                    </div>
                </section>
                
                <section className="bg-background py-12 border-y">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row gap-8">
                            <div className="md:max-w-44 md:border-r md:pr-12 text-center md:text-right">
                                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Premium Selection</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-15rem)]">
                                <InfiniteSlider
                                    duration={30}
                                    gap={64}>
                                    {[
                                        "https://images.unsplash.com/photo-1542362567-b052fd132937?auto=format&fit=crop&w=200&h=100&q=80",
                                        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=200&h=100&q=80",
                                        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=200&h=100&q=80",
                                        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&h=100&q=80",
                                        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=200&h=100&q=80",
                                        brand1,
                                        brand2,
                                        brand3,
                                    ].map((src, idx) => (
                                        <div key={idx} className="flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                                            <img
                                                className="h-12 w-auto object-contain rounded-lg"
                                                src={src}
                                                alt={`Car brand ${idx}`}
                                            />
                                        </div>
                                    ))}
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20 z-10"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20 z-10"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Inventory', href: '#inventory' },
    { name: 'Overview', href: '#overview' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header className="relative">
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-50 w-full pt-4">
                <div className={cn('mx-auto max-w-7xl rounded-full px-6 transition-all duration-300 lg:px-12 border border-transparent', scrolled && 'bg-background/80 backdrop-blur-2xl border-white/10 shadow-lg')}>
                    <motion.div
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                
                                <img
                                  src={logo}
                                  alt="Juanita Cars"
                                  className="h-8 w-auto"
                                />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn("group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200", scrolled ? 'text-foreground' : 'text-white')} />
                                <X className={cn("group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200", scrolled ? 'text-foreground' : 'text-white')} />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm font-medium">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className={cn("hover:text-red-500 duration-150", scrolled ? 'text-muted-foreground' : 'text-white/80')}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background/95 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none backdrop-blur-xl">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="text-foreground hover:text-red-500 block duration-150">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={cn("rounded-full", !scrolled && "border-white/20 text-white hover:bg-white/10")}>
                                    Contact
                                </Button>
                                <Button
                                    size="sm"
                                    className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
