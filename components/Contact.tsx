'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from '@/contexts/ThemeContext'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ArhamF', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arham-farooqi-983860243/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:arhamfarooqi100@gmail.com', label: 'Email' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>
        
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="bg-background"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                className="min-h-[150px] bg-background"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          You can also find me on these platforms:
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 p-4 rounded-lg
                border border-gray-200 dark:border-gray-800
                hover:border-purple-500 dark:hover:border-purple-500
                transition-colors duration-200
              `}
            >
              <Icon className="h-5 w-5 text-purple-500" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50">
          <h4 className="font-semibold mb-2">Office Hours</h4>
          <p className="text-gray-500 dark:text-gray-400">
            Monday - Friday<br />
            8:30 AM - 5:00 PM EST
          </p>
        </div>
      </div>
    </div>
  )
}

