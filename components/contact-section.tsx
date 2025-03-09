"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ContactSectionProps {
  phone: string
  email: string
  hours: string
}

export default function ContactSection({ phone, email, hours }: ContactSectionProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? Reach out to our team.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-muted-foreground">{phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-muted-foreground">{email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="text-muted-foreground">{hours}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-background p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

