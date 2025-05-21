'use client'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              We&apos;re Evolving: Introducing LovedByStyle
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-2xl font-semibold text-gray-600">lovedbymen.com</div>
              <div className="text-2xl text-pink-500">→</div>
              <div className="text-2xl font-bold text-pink-600">lovedbystyle.com</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
            <p className="text-xl text-gray-700 mb-8">
              We&apos;re excited to announce a new chapter in our journey — a rebrand that better reflects our dedication to style, connection, and meaningful exchange.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Evolution</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At LovedByMen, our mission began with a simple idea: to make the world brighter and more beautiful by helping women embrace their style with genuine feedback from men. As our community grew, so did our vision. We realized that the support, insight, and encouragement we fostered could — and should — be mutual.
                </p>
                <p className="text-lg text-gray-600">
                  With that in mind, we are proud to introduce LovedByStyle — a reimagined platform where both men and women can connect through fashion, share feedback, and inspire one another with confidence and care.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">LovedByStyle | Where Fashion Meets Mutual Support</h2>
                <p className="text-lg text-gray-600 mb-4">
                  LovedByStyle is more than a fashion platform — it&apos;s a social network built around honest expression, thoughtful dialogue, and shared growth. Here, men and women engage in meaningful exchanges, offering authentic feedback and discovering each other&apos;s unique tastes and perspectives.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our community goes beyond likes and surface-level comments. We believe in fostering genuine conversations that help users reflect on their style choices, learn from diverse viewpoints, and build lasting confidence.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you&apos;re refining your personal look or exploring new trends, LovedByStyle provides a space where fashion becomes a bridge — not only to self-expression but to deeper understanding and mutual appreciation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
                  <li>All your favorite features and content are still here — now presented under a refreshed identity.</li>
                  <li>A continued commitment to thoughtful interactions over empty validation.</li>
                  <li>A growing community built on support, curiosity, and respect for individuality.</li>
                </ul>
              </div>

              <p className="text-xl text-gray-700 italic">
                We invite you to be part of this evolution. Let&apos;s build a world where fashion isn&apos;t just about being seen — it&apos;s about being understood.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://lovedbystyle.com"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-lg hover:shadow-xl mb-8"
            >
              Explore the New Homepage
            </a>

            <div className="text-gray-500">
              <p>Thank you for being part of our journey!</p>
              <p className="mt-2">- The LovedByStyle Team</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 