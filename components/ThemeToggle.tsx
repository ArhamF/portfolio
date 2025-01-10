'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className="flex items-center gap-2 px-2">
      <button
        onClick={toggleTheme}
        className={`
          relative h-6 w-12 rounded-full
          bg-gray-800/50 border border-gray-700/50
          transition-colors duration-200
          ${theme === 'dark' ? 'bg-purple-900/50' : ''}
        `}
      >
        <div
          className={`
            absolute top-0.5 left-0.5
            h-5 w-5 rounded-full
            bg-gray-200 shadow-md
            transform transition-transform duration-200
            flex items-center justify-center
            ${theme === 'dark' ? 'translate-x-6 bg-purple-400' : ''}
          `}
        >
          {theme === 'dark' ? (
            <Moon className="h-3 w-3 text-purple-900" />
          ) : (
            <Sun className="h-3 w-3 text-amber-500" />
          )}
        </div>
      </button>
    </div>
  )
}

