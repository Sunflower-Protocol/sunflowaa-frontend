import Image from 'next/image';
import FlowingMenu from './FlowingMenu';

const menuItems = [
  { link: '#', text: 'Stream Music', image: '/Assets/Logo/music-logo.png' },
  { link: '#', text: 'Create & Remix', image: '/Assets/Logo/remix-logo.png' },
  { link: '#', text: 'Monetize Your Music', image: '/Assets/Logo/monetize-logo.png' }
];

export default function FeaturesSection() {
  return (
      <section className="min-h-screen bg-gray-50 p-6 flex flex-col" id="features">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
            Discover amazing music experiences with Sunflowaa
          </h2>

          <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={menuItems} />
          </div>
        </div>
      </section>
  );
}