import React from 'react';
import Header from '../HEADER.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volleyball, Handshake, AlertTriangle, Ban } from 'lucide-react';
import './page.css';

export default function TopPlayers() {
  const players = [
    { name: "Lionel Messi", goals: 30, assists: 14, yellowCards: 2, redCards: 0 },
    { name: "Cristiano Ronaldo", goals: 36, assists: 5, yellowCards: 4, redCards: 1 },
    { name: "Kylian Mbappé", goals: 30, assists: 10, yellowCards: 3, redCards: 0 },
    { name: "Erling Haaland", goals: 32, assists: 8, yellowCards: 1, redCards: 0 },
    { name: "Kevin De Bruyne", goals: 10, assists: 20, yellowCards: 2, redCards: 0 },
    { name: "Neymar Jr.", goals: 18, assists: 12, yellowCards: 5, redCards: 1 },
    { name: "Mohamed Salah", goals: 20, assists: 7, yellowCards: 2, redCards: 0 },
    { name: "Robert Lewandowski", goals: 20, assists: 6, yellowCards: 1, redCards: 0 },
    { name: "Harry Kane", goals: 20, assists: 5, yellowCards: 2, redCards: 0 },
    { name: "Luka Modrić", goals: 8, assists: 15, yellowCards: 3, redCards: 0 },
  ];

  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-blue-500 to-white transition-all duration-1000"
      >
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">Top 10 Football Players</h1>
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
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <Volleyball className="w-6 h-6 mr-2 text-blue-500" />
                      <span className="font-semibold">{player.goals} Goals</span>
                    </div>
                    <div className="flex items-center">
                      <Handshake className="w-6 h-6 mr-2 text-blue-500" />
                      <span className="font-semibold">{player.assists} Assists</span>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
                      <span className="font-semibold">{player.yellowCards} Yellow Cards</span>
                    </div>
                    <div className="flex items-center">
                      <Ban className="w-6 h-6 mr-2 text-red-500" />
                      <span className="font-semibold">{player.redCards} Red Cards</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Badge variant="secondary" className="text-sm">
                      Total Contributions: {player.goals + player.assists}
                    </Badge>
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