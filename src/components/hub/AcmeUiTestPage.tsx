/**
 * Test page for @acme/ui integration
 * This page verifies that the external UI library works correctly
 */

import { Header, WegoraLogo } from '@acme/ui'
import '@acme/ui/styles.css'

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    children: [
      { id: 'product-a', label: 'Product A', href: '/products/a' },
      { id: 'product-b', label: 'Product B', href: '/products/b' },
    ],
  },
]

const mockUser = {
  id: '1',
  name: 'Max Mustermann',
  email: 'max@wegora.de',
}

export function AcmeUiTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Test Header from @acme/ui */}
      <Header
        navItems={navItems}
        user={mockUser}
        onLogout={() => console.log('logout clicked')}
        sticky={false}
      />

      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">@acme/ui Integration Test</h1>

        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">WegoraLogo Component</h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Default (WEG context, medium)</p>
              <WegoraLogo />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Owner context (teal dot)</p>
              <WegoraLogo dotContext="owner" />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Small size</p>
              <WegoraLogo size="sm" />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Large size</p>
              <WegoraLogo size="lg" />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">No dot</p>
              <WegoraLogo dotContext="none" />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Design Tokens</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">WEG Colors</p>
              <div className="flex gap-1">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-50)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-100)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-200)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-300)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-400)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-500)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-600)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-weg-700)' }} />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Owner Colors</p>
              <div className="flex gap-1">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-50)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-100)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-200)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-300)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-400)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-500)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-600)' }} />
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--wegora-owner-700)' }} />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Status Colors</p>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded text-white text-sm" style={{ backgroundColor: 'var(--wegora-success)' }}>Success</div>
                <div className="px-3 py-1 rounded text-white text-sm" style={{ backgroundColor: 'var(--wegora-warning)' }}>Warning</div>
                <div className="px-3 py-1 rounded text-white text-sm" style={{ backgroundColor: 'var(--wegora-error)' }}>Error</div>
                <div className="px-3 py-1 rounded text-white text-sm" style={{ backgroundColor: 'var(--wegora-info)' }}>Info</div>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center text-gray-400 mt-8 text-sm">
          If you see this page with the Header, Logo variants, and color swatches, the integration works!
        </p>
      </main>
    </div>
  )
}
