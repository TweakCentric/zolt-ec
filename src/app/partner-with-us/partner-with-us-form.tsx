'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import logo from "@/../public/zolt_green.png";
import Image from 'next/image'
import Link from "next/link"

// const vehicleTypes = [
//   "Sedan", "SUV", "Truck", "Hatchback", "Coupe", "Convertible", "Wagon", "Van", "Other"
// ]

// const mainUses = [
//   "Personal/Family", "Business/Commercial", "Rideshare/Taxi", "Delivery", "Other"
// ]

// const paymentPlans = [
//   "Monthly Payment Plan", "Annual Payment Plan", "Pay in Full", "Corporate Plan"
// ]

export default function PartnerWithUsForm() {
  const [formData, setFormData] = useState({
    joinAs: 'Driver / Rider',
    firstName: '',
    lastName: '',
    organizationName: '',
    phoneNumber: '',
    email: "",
    investorType: '',
    ticketSize: '',
    areaOfFocus: '',
    country: '',
    state: '',
    city: '',
    additionalNotes: '',
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
                <Link href="/">
                    <Image src={logo} alt='logo' width={100}/>
                </Link>
            </div>
            <h1 className="text-[25px] md:text-[30px] font-semibold text-center leading-tight">
                Join the Zolt EV Movement
            </h1>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Join As */}
              <div className="space-y-2">
                <Label htmlFor="joinAs" className="text-sm font-medium">
                  Join as
                </Label>
                <Select 
                  value={formData.joinAs} 
                  onValueChange={(value) => handleInputChange('joinAs', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Driver_Rider">Driver / Rider</SelectItem>
                    <SelectItem value="Dealer_Distributorr">Dealer / Distributor</SelectItem>
                    <SelectItem value="Strategic_Partner">Strategic Partner</SelectItem>
                    <SelectItem value="Investor">Investor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="joinAs" className="text-sm font-medium">
                  Organization Name
                </Label>
                <Input
                    id="organizationName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    className="w-full"
                    required
                  />
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    Phone Number
                    </Label>
                    <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full"
                    required
                    />
                </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                    Email
                    </Label>
                    <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                    required
                    />
                </div>
              </div>

              {/* State and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="investorType" className="text-sm font-medium">
                    Investor Type
                  </Label>
                  <Input
                    id="investorType"
                    type="text"
                    value={formData.investorType}
                    onChange={(e) => handleInputChange('investorType', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">
                    Ticket Size
                  </Label>
                  <Input
                    id="ticketSize"
                    type="text"
                    value={formData.ticketSize}
                    onChange={(e) => handleInputChange('ticketSize', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaOfFocus" className="text-sm font-medium">
                  Area of Focus
                </Label>
                <Input
                    id="areaOfFocus"
                    type="text"
                    value={formData.areaOfFocus}
                    onChange={(e) => handleInputChange('areaOfFocus', e.target.value)}
                    className="w-full"
                    required
                  />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Country
                </Label>
                <Input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full"
                    required
                  />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-medium">
                    State
                </Label>
                <Select 
                    value={formData.state} 
                    onValueChange={(value) => handleInputChange('state', value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                    {/* {states.map((state) => (
                        <SelectItem key={state} value={state}>
                        {state}
                        </SelectItem>
                    ))} */}
                    </SelectContent>
                </Select>
                </div>
                <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                    City
                </Label>
                <Select 
                    value={formData.state} 
                    onValueChange={(value) => handleInputChange('city', value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                    {/* {states.map((state) => (
                        <SelectItem key={state} value={state}>
                        {state}
                        </SelectItem>
                    ))} */}
                    </SelectContent>
                </Select>
                </div>
                <div className="space-y-2">
                <Label htmlFor="additionalNotes" className="text-sm font-medium">
                  Additional Notes
                </Label>
                <Textarea
                    id="country"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="w-full"
                    rows={5}
                  />
              </div>
            </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#189132] hover:bg-green-700 text-white py-3 rounded-lg tracking-wide transition-colors"
              >
                Join Investor Circle
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}