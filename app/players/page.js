'use client';

import React, { useState } from 'react';
import Header from '../HEADER.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volleyball, Handshake, AlertTriangle, Ban, Heart, Users } from 'lucide-react';

const players = [
  { name: "Lionel Messi", position: "Forward", team: "Inter Miami", goals: 30, assists: 14, yellowCards: 2, redCards: 0, health: "Fit", manager: "Gerardo Martino", managerEmail: "gerardo.martino@intermiami.com" },
  { name: "Cristiano Ronaldo", position: "Forward", team: "Al Nassr", goals: 36, assists: 5, yellowCards: 4, redCards: 1, health: "Injured", manager: "Rudi Garcia", managerEmail: "rudi.garcia@alnassr.com" },
  { name: "Kylian Mbappé", position: "Forward", team: "Paris Saint-Germain", goals: 30, assists: 10, yellowCards: 3, redCards: 0, health: "Fit", manager: "Luis Enrique", managerEmail: "luis.enrique@psg.com" },
  { name: "Erling Haaland", position: "Forward", team: "Manchester City", goals: 32, assists: 8, yellowCards: 1, redCards: 0, health: "Fit", manager: "Pep Guardiola", managerEmail: "pep.guardiola@manchestercity.com" },
  { name: "Kevin De Bruyne", position: "Midfielder", team: "Manchester City", goals: 10, assists: 20, yellowCards: 2, redCards: 0, health: "Injured", manager: "Pep Guardiola", managerEmail: "pep.guardiola@manchestercity.com" },
  { name: "Neymar Jr.", position: "Forward", team: "Al Hilal", goals: 18, assists: 12, yellowCards: 5, redCards: 1, health: "Injured", manager: "Jorge Jesus", managerEmail: "jorge.jesus@alhilal.com" },
  { name: "Mohamed Salah", position: "Forward", team: "Liverpool", goals: 20, assists: 7, yellowCards: 2, redCards: 0, health: "Fit", manager: "Jürgen Klopp", managerEmail: "jurgen.klopp@liverpoolfc.com" },
  { name: "Robert Lewandowski", position: "Forward", team: "Barcelona", goals: 20, assists: 6, yellowCards: 1, redCards: 0, health: "Fit", manager: "Xavi Hernández", managerEmail: "xavi.hernandez@fcbarcelona.com" },
  { name: "Harry Kane", position: "Forward", team: "Bayern Munich", goals: 20, assists: 5, yellowCards: 2, redCards: 0, health: "Fit", manager: "Thomas Tuchel", managerEmail: "thomas.tuchel@fcbayern.com" },
  { name: "Luka Modrić", position: "Midfielder", team: "Real Madrid", goals: 8, assists: 15, yellowCards: 3, redCards: 0, health: "Fit", manager: "Carlo Ancelotti", managerEmail: "carlo.ancelotti@realmadrid.com" },
  { name: "Cesar Aguirre", position: "Defender", team: "Salvatierra", goals: 0, assists: 0, yellowCards: 20, redCards: 20, health: "Fit", manager: "Carlos Aguirre", managerEmail: "carlos.aguirre@salvatierra.com" },
  { name: "Antionio Ruiz", position: "Goalkeeper", team: "Tonyweb", goals: 0, assists: 0, yellowCards: 0, redCards: 0, health: "Fit", manager: "Antonio Ruiz", managerEmail: "antonio.ruiz@tonyweb.com" },
];

const positions = ["All Positions", ...new Set(players.map(player => player.position))];

export default function PlayersPage() {
  const [selectedPosition, setSelectedPosition] = useState("All Positions");

  const filteredPlayers = selectedPosition !== "All Positions"
    ? players.filter(player => player.position === selectedPosition)
    : players;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow w-full relative overflow-hidden bg-gradient-to-b from-blue-500 to-white">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">Football Players Database</h1>

          <div className="mb-6">
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              {positions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredPlayers.map((player) => (
              <Card key={player.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{player.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <Users className="w-6 h-6 mr-2 text-blue-500" />
                      <span className="font-semibold">{player.position}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-red-500" />
                      <span className="font-semibold">{player.health}</span>
                    </div>
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
                  <div className="mt-4 flex justify-between items-center">
                    <Badge variant="secondary" className="text-sm">
                      Team: {player.team}
                    </Badge>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="font-semibold">Manager: {player.manager}</span>
                    <div>
                      <a
                        href={`mailto:${player.managerEmail}`}
                        className="text-blue-500 hover:underline mt-2 inline-block"
                      >
                        Contact Manager
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}