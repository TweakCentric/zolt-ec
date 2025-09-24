'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import logo from "@/../public/zolt_green.png";
import Image from 'next/image'
import Link from 'next/link'

// const vehicleTypes = [
//   "Sedan", "SUV", "Truck", "Hatchback", "Coupe", "Convertible", "Wagon", "Van", "Other"
// ]

// const mainUses = [
//   "Personal/Family", "Business/Commercial", "Rideshare/Taxi", "Delivery", "Other"
// ]

// const paymentPlans = [
//   "Monthly Payment Plan", "Annual Payment Plan", "Pay in Full", "Corporate Plan"
// ]

export default function JoinWaitlistForm() {
  const [formData, setFormData] = useState({
    joinAs: 'Driver / Rider',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    state: '',
    city: '',
    vehicleType: '',
    mainUse: '',
    ridersAssociation: false,
    associationName: '',
    paymentPlan: ''
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
                    <SelectValue placeholder="Select role" />
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
                      <SelectValue placeholder="Select state" />
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
                    <SelectValue placeholder="Select city" />
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
              </div>

              {/* Vehicle Type and Main Use */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleType" className="text-sm font-medium">
                    Vehicle Type
                  </Label>
                  <Select 
                    value={formData.vehicleType} 
                    onValueChange={(value) => handleInputChange('vehicleType', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {vehicleTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mainUse" className="text-sm font-medium">
                    Main Use
                  </Label>
                  <Select 
                    value={formData.mainUse} 
                    onValueChange={(value) => handleInputChange('mainUse', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select main use" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {mainUses.map((use) => (
                        <SelectItem key={use} value={use}>
                          {use}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Riders' Association */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">
                  Riders&apos; Association
                </Label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="association-yes"
                      checked={formData.ridersAssociation === true}
                      onCheckedChange={(checked) => handleInputChange('ridersAssociation', checked === true)}
                    />
                    <Label htmlFor="association-yes" className="text-sm">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="association-no"
                      checked={formData.ridersAssociation === false}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange('ridersAssociation', false)
                          handleInputChange('associationName', '')
                        }
                      }}
                    />
                    <Label htmlFor="association-no" className="text-sm">No</Label>
                  </div>
                </div>
              </div>

              {/* Association Name - Conditional */}
              {formData.ridersAssociation && (
                <div className="space-y-2">
                  <Label htmlFor="associationName" className="text-sm font-medium">
                    Name of Association [if Yes]
                  </Label>
                  <Input
                    id="associationName"
                    type="text"
                    value={formData.associationName}
                    onChange={(e) => handleInputChange('associationName', e.target.value)}
                    className="w-full"
                    placeholder="Enter association name"
                  />
                </div>
              )}

              {/* Payment Plan Options */}
              <div className="space-y-2">
                <Label htmlFor="paymentPlan" className="text-sm font-medium">
                  Payment Plan Options
                </Label>
                <Select 
                  value={formData.paymentPlan} 
                  onValueChange={(value) => handleInputChange('paymentPlan', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {paymentPlans.map((plan) => (
                      <SelectItem key={plan} value={plan}>
                        {plan}
                      </SelectItem>
                    ))} */}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#189132] hover:bg-green-700 text-white py-3 rounded-lg tracking-wide transition-colors"
              >
                Join Driver
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}