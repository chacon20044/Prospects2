'use client';
import React, { useState } from 'react';
import Header from '../HEADER.js'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VibrateIcon as Volleyball, Handshake, AlertTriangle, Ban, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WeeklyHighlights() {
  const [currentWeek, setCurrentWeek] = useState(1);

  const weeklyVideos = [
"https://www.youtube.com/embed/TkIJ6TxXVzg",
   "https://www.youtube.com/embed/sPBPHkWMn8s",
    "https://www.youtube.com/embed/3j8PXcZqoLc",
    "https://www.youtube.com/embed/hp4qaBt58Dc", ];
  const players = [
    { name: "Antionio Ruiz", badge: "MVP" },
    { name: "Hector Perez ", badge: "Best Offense" },
    { name: "Cesar Aguirre", badge: "Best Defense" },
    { name: "Gibran Garcia", badge: "Most Improved" },
  ];

  const changeWeek = (increment) => {
    setCurrentWeek((prevWeek) => {
      const newWeek = prevWeek + increment;
      return newWeek > 0 && newWeek <= weeklyVideos.length ? newWeek : prevWeek;
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-blue-500 to-white transition-all duration-1000">
  <main className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8 text-center text-primary">Week {currentWeek} Highlights</h1>
    
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-4xl aspect-video">
        <iframe 
          src={weeklyVideos[currentWeek - 1]} 
          title={`Week ${currentWeek} Highlights`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
          <div className="flex justify-center space-x-4 mb-8">
  <button 
    onClick={() => changeWeek(-1)} 
    disabled={currentWeek === 1}
    className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transform transition-all duration-300 ${
      currentWeek === 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
    }`}
  >
    <ChevronLeft className="mr-2 h-5 w-5" /> Previous Week
  </button>
  <button 
    onClick={() => changeWeek(1)} 
    disabled={currentWeek === weeklyVideos.length}
    className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transform transition-all duration-300 ${
      currentWeek === weeklyVideos.length
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
    }`}
  >
    Next Week <ChevronRight className="ml-2 h-5 w-5" />
  </button>
</div>
          {/*   <div className="flex justify-center space-x-4 mb-8">
  <button 
    onClick={() => changeWeek(-1)} 
    disabled={currentWeek === 1}
    className="px-4 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
  >
    <ChevronLeft className="mr-2 h-4 w-4" /> Previous Week
  </button>
  <button 
    onClick={() => changeWeek(1)} 
    disabled={currentWeek === weeklyVideos.length}
    className="px-4 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
  >
    Next Week <ChevronRight className="ml-2 h-4 w-4" />
  </button>
</div>*/ } 

          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Team of the week 4</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {players.map((player, index) => (
              <Card
                key={player.name}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    #{index + 1} {player.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Badge>{player.badge}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}