/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from '@/src/components/blocks/hero-section-5';
import { Button } from '@/src/components/ui/button';
import { Car, Star, MapPin, Phone, Clock, ChevronRight, PlayCircle, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-red-200 selection:text-red-900">
      <HeroSection />

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-zinc-50 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Premium Used Cars in <span className="text-red-600">Cainta, Rizal</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Juanita Cars, we pride ourselves on offering a meticulously inspected selection of pre-owned vehicles. 
                Whether you're looking for your first car, a family SUV, or a sleek sports car, our inventory is curated 
                to meet the highest standards of reliability and performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "150+ Certified Pre-owned Cars",
                  "Easy Financing Options",
                  "Meticulous 100-Point Inspection",
                  "Trade-in Services Available",
                  "Door-to-door Delivery",
                  "After-sales Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-600 size-5" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative group w-full">
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop" 
                alt="Car Showroom" 
                className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-xl text-red-600">
                    <Star className="size-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.8/5</p>
                    <p className="text-sm text-muted-foreground font-medium">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground italic serif">
                Our Fleet
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our latest arrivals. Every vehicle is ready for a test drive today in Cainta.
              </p>
            </div>
            <Button variant="outline" className="rounded-full">View Full Catalog</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "2021 Toyota Fortuner V",
                price: "₱1,550,000",
                img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
                tag: "SUV"
              },
              {
                title: "2022 Honda Civic RS",
                price: "₱1,280,000",
                img: "/src/assets/images/regenerated_image_1777871486692.webp",
                tag: "Sedan"
              },
              {
                title: "2020 Mitsubishi Montero",
                price: "₱1,150,000",
                img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
                tag: "SUV"
              }
            ].map((car, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={car.img} alt={car.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded-md">{car.tag}</span>
                      <h3 className="text-xl font-bold mt-2 text-zinc-900">{car.title}</h3>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                    <p className="text-2xl font-bold text-red-600">{car.price}</p>
                    <Button size="sm" variant="ghost" className="rounded-full group/btn">
                      Details <ChevronRight className="ml-1 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo/Video Showcase */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight">Showcase</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">See our clean inventory through high-definition photos and walk-around videos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/src/assets/images/regenerated_image_1777872553250.webp" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <PlayCircle className="size-16" />
              </div>
            </div>
            {[
              "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=600&auto=format&fit=crop",
              "/src/assets/images/regenerated_image_1777872554081.png",
              "/src/assets/images/regenerated_image_1777872555820.png"
            ].map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src={img} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="size-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Thousands</h2>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} className="size-5 fill-red-600 text-red-600" />)}
              <span className="ml-2 font-bold">4.9 on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Santos",
                review: "Smooth transaction from reservation to delivery. The car was in perfect condition as advertised. Highly recommended dealer in Rizal!",
                stars: 5
              },
              {
                name: "Liza Gomez",
                review: "Juanita Cars team made the financing process so easy for us. We got our SUV in just 3 days! Best service in Cainta.",
                stars: 5
              },
              {
                name: "Ricardo Reyes",
                review: "I've bought two cars here over the last 5 years. Honest people, great prices, and they really stand by their inventory.",
                stars: 5
              }
            ].map((rev, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm flex flex-col justify-between">
                <p className="text-zinc-600 italic leading-relaxed">"{rev.review}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 uppercase">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{rev.name}</h4>
                    <p className="text-xs text-muted-foreground">Certified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 underline-offset-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-xl">
                  <Car className="size-8" />
                </div>
                <span className="text-2xl font-bold italic tracking-tight">Juanita Cars</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The premier used car dealership in Cainta, Rizal. Dedicated to quality, transparency, and top-tier customer service since 2010.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold">About Us</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#overview" className="hover:text-red-500 transition-colors">Our Story</a></li>
                <li><a href="#inventory" className="hover:text-red-500 transition-colors">Our Process</a></li>
                <li><a href="#reviews" className="hover:text-red-500 transition-colors">Customer Success</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Sell Your Car</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold" id="about">Contact & Branches</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <MapPin className="text-red-600 size-5 shrink-0" />
                    <span className="text-white font-semibold">Policarpio Street Branch</span>
                  </div>
                  <span className="ml-8">H4C7+P5F, Policarpio St, Cainta, 1900 Rizal</span>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <MapPin className="text-red-600 size-5 shrink-0" />
                    <span className="text-white font-semibold">Tropical Branch</span>
                  </div>
                  <span className="ml-8">Cainta, Rizal</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-red-600 size-5 shrink-0" />
                  <span className="text-white font-bold">0917-554-8888</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-red-600 size-5 shrink-0" />
                  <div>
                    <p className="text-white font-medium">Open · Closes 6:30 PM</p>
                    <p className="text-xs">Monday - Saturday</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold">Directions</h4>
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group cursor-pointer relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs text-center md:text-left">
            <p>© 2026 Juanita Cars Used Car Dealer. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Feedback</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
