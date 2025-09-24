'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import logo from "@/../public/zolt_green.png";
import Image from 'next/image'
import Link from 'next/link'

const joinAsOptions = [
  "Dealer / Distributor",
]

export default function RegisterAsPartnerForm() {
  const [formData, setFormData] = useState({
    joinAs: 'Dealer / Distributor',
    businessName: '',
    firstName: '',
    lastName: '',
    position: '',
    phoneNumber: '',
    state: '',
    city: '',
    businessFocus: '',
    areaOfInterest: '',
    monthlyVehicleSales: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Reset city when state changes
      ...(field === 'state' ? { city: '' } : {})
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dealer form submitted:', formData)
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
                    {joinAsOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Business / Company Name */}
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">
                  Business / Company Name
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full"
                  required
                />
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

              {/* Position / Role */}
              <div className="space-y-2">
                <Label htmlFor="position" className="text-sm font-medium">
                  Position / Role
                </Label>
                <Input
                  id="position"
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              {/* Phone Number */}
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

              {/* State and City */}
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
                    value={formData.city} 
                    onValueChange={(value) => handleInputChange('city', value)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {getCitiesForState(formData.state).map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Business Focus and Area of Interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessFocus" className="text-sm font-medium">
                    Business Focus
                  </Label>
                  <Select 
                    value={formData.businessFocus} 
                    onValueChange={(value) => handleInputChange('businessFocus', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {businessFocusOptions.map((focus) => (
                        <SelectItem key={focus} value={focus}>
                          {focus}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="areaOfInterest" className="text-sm font-medium">
                    Area of Interest
                  </Label>
                  <Select 
                    value={formData.areaOfInterest} 
                    onValueChange={(value) => handleInputChange('areaOfInterest', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {areaOfInterestOptions.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Monthly Vehicle Sales */}
              <div className="space-y-2">
                <Label htmlFor="monthlyVehicleSales" className="text-sm font-medium">
                  Monthly Vehicle Sales
                </Label>
                <Input
                  id="monthlyVehicleSales"
                  type="number"
                  value={formData.monthlyVehicleSales}
                  onChange={(e) => handleInputChange('monthlyVehicleSales', e.target.value)}
                  className="w-full"
                  min="0"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#189132] hover:bg-green-700 text-white py-3 rounded-lg tracking-wide transition-colors"
              >
                Apply as Dealer Partner
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}