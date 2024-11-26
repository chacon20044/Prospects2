import React from 'react'
import Header from '../HEADER.js'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Contacto() {
  return (
    <>
      <Header />
      
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contact - Our League</h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>About Our League</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                Our soccer league is committed to the development of sport in the community. 
                We organize high-quality tournaments, and we promote a clean game and the sporting spirit. 
                With years of experience, we are proud of being pillars in the local football.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Presidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-8 justify-center">
                  <div className="text-center">
                    <h3 className="font-semibold">José Luis Chacón</h3>
                    <p className="text-sm text-muted-foreground">Operational President</p>
                    <img
                      src="https://i.ibb.co/wSnY7m8/Whats-App-Image-2024-11-19-at-7-31-29-PM.jpg"
                      alt="José Luis Chacón"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">César Aguirre</h3>
                    <p className="text-sm text-muted-foreground">Executive President</p>
                    <img
                      src="https://media-lax3-2.cdn.whatsapp.net/v/t61.24694-24/464468695_560030679848404_6335394190094075010_n.jpg?ccb=11-4&oh=01_Q5AaIHSf9nGe-1l3s9u31VyhPIszdaHKFel9j-6ik631_nY2&oe=674A7400&_nc_sid=5e03e0&_nc_cat=109"
                      alt="César Aguirre"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-sm text-center text-muted-foreground">Prospects2@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-sm text-center text-muted-foreground">+57 686 352 7956</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-sm text-center text-muted-foreground">4.7 Calzada Cetys S/N, Rivera, 21250 Mexicali, B.C., México</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  <a href="https://x.com/cesarmanuelagu9?s=21" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-8 w-8 text-blue-500 hover:text-blue-700" />
                  </a>
                  <a href="https://www.instagram.com/luis_chaconnnn/profilecard/?igsh=MWoxamx2dmVteHR6dw==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-8 w-8 text-pink-500 hover:text-pink-700" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61566667657770" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-8 w-8 text-blue-600 hover:text-blue-800" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </>
  )
}