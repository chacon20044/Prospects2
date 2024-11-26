'use client'
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Trophy, Eye } from "lucide-react";
import Header from './HEADER.js';
import './estilopage.css';
import { motion } from 'framer-motion';

export default function Component() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp3589909.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 pt-16 pb-32">
          <motion.div
            className="text-center space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.ibb.co/DknTXCy/image-removebg-preview.png"
              alt="PROspectos logo"
              className="mx-auto w-64 h-auto"
            />
            <h2 className="text-3xl font-bold text-black shadow-text">
              Prospects today - Legends tomorrow
            </h2>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary" className="animate-pulse">
                Future
              </Badge>
              <Badge variant="secondary" className="animate-pulse delay-75">
                Compromise
              </Badge>
              <Badge variant="secondary" className="animate-pulse delay-150">
                Responsability
              </Badge>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* Visión y Misión */}
          <div className="grid gap-6">
            {/* Visión */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Target className="h-4 w-4 text-primary/20" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                <CardDescription>Where are we heading</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert">
                <p>
                In the future, our goal is to serve as a means of transportation for children who aspire 
                to achieve their dreams playing soccer. In actuality, there are a lot of mistakes in the 
                process of a player wanting to make the compromise of becoming a soccer player. PROspects 
                look to simplify this, by offering precise data of young players in order to become more than 
                just prospects. In this way, creating a direct impact in society and in the sport.
                </p>
                <br/>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Prospects compromise</h3>
                      <p className="text-sm text-muted-foreground">
                      We compromise to have 24/7 access to our services.
                     </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Misión */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Building2 className="h-6 w-6 text-primary/20" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our mission</CardTitle>
                <CardDescription>What we do day by day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="prose prose-gray dark:prose-invert">
                The mission of PROspects is to promote the sport in a specific place by creating 
                competences between teams. We also look to find young talent from other cities today 
                and give them more opportunities to show their talent and have a contract with a 
                professional team in the future.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Prospects communication</h3>
                      <p className="text-sm text-muted-foreground">
                      We prioritize being in contact with those outstanding players
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="abajo">.</div>
    </>
  );
}