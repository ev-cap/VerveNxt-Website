import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, MessageSquare, Send, ListFilter, Search, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

// Sample blog posts data (in a real app, this would come from an API or CMS)
const blogPostsData = [
  {
    id: 7,
    title: "Mastering the Electric Drive: A Guide to the Effective Use of Electric Vehicles (EVs)",
    excerpt: "Electric vehicles are transforming how we travel. Learn to charge, drive, and maintain your EV for maximum efficiency.",
    content: `<div class="prose prose-lg max-w-none">
      <p class="lead text-xl text-gray-700 mb-6">Electric vehicles (EVs) are transforming the way we drive, save money, and reduce our environmental impact. Whether you're new to EVs or considering the switch, these tips will help you get the most out of your electric ride.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🔋</span> 1. Smart Charging: Timing Is Everything
      </h2>
      <p class="text-gray-700 mb-6">Charge during off-peak hours, avoid daily 100% charges, and consider a Level 2 charger at home to prolong battery life and save money.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🚦</span> 2. Drive Efficiently to Maximise Range
      </h2>
      <p class="text-gray-700 mb-6">Use regenerative braking, avoid aggressive acceleration, and maintain steady speeds to make every kWh count.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🗺️</span> 3. Plan Your Routes with Charging in Mind
      </h2>
      <p class="text-gray-700 mb-6">Apps like PlugShare and ABRP help you locate chargers and plan long trips with confidence.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🌦️</span> 4. Adapt to Weather Conditions
      </h2>
      <p class="text-gray-700 mb-6">Precondition your EV while plugged in, park indoors when possible, and use seat heaters to conserve battery during cold weather.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🛠️</span> 5. Maintain Your EV for Long-Term Reliability
      </h2>
      <p class="text-gray-700 mb-6">Check tyre pressure, monitor brake wear, and keep an eye on battery health to ensure your EV runs smoothly for years.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🏡</span> 6. Optimise Home Charging Setup
      </h2>
      <p class="text-gray-700 mb-6">Install a dedicated Level 2 charger and use a surge protector to make daily charging safe and convenient.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🌍</span> 7. Be a Sustainable EV Driver
      </h2>
      <p class="text-gray-700 mb-6">Whenever possible, power your EV with renewable energy and support local clean-energy initiatives.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🧠</span> 8. Stay Informed and Connected
      </h2>
      <p class="text-gray-700 mb-6">Keep up with software updates and join EV communities to learn about the latest developments.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">⚡</span> Final Thoughts: Drive Smart, Drive Electric
      </h2>
      <p class="text-gray-700 mb-6">By embracing efficient habits and staying informed, you can maximise your EV's potential and help build a cleaner future.</p>
    </div>`,
    author: "VerveNxt Team",
    date: "June 15, 2025",
    category: "EV Lifestyle",
    imageUrl: "/images/blog/mastering-electric-drive.jpg",
    slug: "mastering-electric-drive-guide"
  },
  {
    id: 1,
    title: "A Practical Guide to Maintaining Your Electric Vehicle (EV) in India",
    excerpt: "With lower running costs and fewer moving parts, EVs are easier to maintain. This guide breaks down everything you need to know about maintaining your EV effectively on Indian roads—through monsoons, potholes, and heatwaves.",
    content: `<div class="prose prose-lg max-w-none">
      <p class="lead text-xl text-gray-700 mb-6">Electric vehicles (EVs) are rapidly gaining ground in India—and for good reason. With lower running costs, eco-friendliness, and fewer moving parts, EVs are often easier to maintain than traditional petrol or diesel vehicles.</p>
      
      <p class="text-gray-600 mb-8">But 'low maintenance' doesn't mean 'no maintenance'.</p>
      
      <p class="text-gray-600 mb-12">To keep your EV running smoothly and efficiently on Indian roads—through monsoons, potholes, heatwaves, and traffic jams—you'll need to follow some specific practices. This guide breaks down everything you need to know about maintaining your EV effectively in India.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🚗</span> 1. Understand What Makes EV Maintenance Different
      </h2>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-semibold text-blue-800 mb-4">Electric vehicles have:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>No engine oil or fuel filter</li>
          <li>Fewer moving parts (no clutch, no gearbox)</li>
          <li>Less brake wear due to regenerative braking</li>
        </ul>
      </div>

      <div class="bg-green-50 p-6 rounded-xl mb-12">
        <p class="font-semibold text-green-800 mb-4">This means:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Lower servicing frequency</li>
          <li>Fewer mechanical failures</li>
          <li>Reduced service bills (up to 40–60% lower than ICE vehicles)</li>
        </ul>
      </div>

      <p class="text-gray-600 mb-12">But you still need to be proactive—especially in a country with diverse road conditions and weather like India.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🔋</span> 2. Battery Health: The Heart of Your EV
      </h2>
      
      <p class="text-gray-700 mb-6">In EVs, the battery pack is like the engine. Keeping it healthy ensures:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p class="font-semibold text-blue-600">Maximum range</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p class="font-semibold text-blue-600">Better performance</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p class="font-semibold text-blue-600">Higher resale value</p>
        </div>
      </div>

      <div class="bg-yellow-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> Best Battery Maintenance Tips:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Avoid full charges daily. Keep it between 20% and 80% for regular use.</li>
          <li>Don't let the battery drain to 0% often—it strains the cells.</li>
          <li>Pre-condition the battery during extreme weather (most EVs offer this feature).</li>
          <li>Use slow charging (AC) for daily top-ups; fast charging (DC) occasionally for long trips.</li>
          <li>Park in shade during hot summers to avoid overheating.</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">💡</span> Brands like Tata, MG, and Hyundai offer 8-year/1.6 lakh km warranties for peace of mind.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🛞</span> 3. Tyre Care: Crucial for Indian Roads
      </h2>
      
      <p class="text-gray-700 mb-6">EVs are heavier due to battery packs and produce more torque, which can wear tyres faster—especially on Indian roads.</p>

      <div class="bg-green-50 p-6 rounded-xl mb-12">
        <h3 class="text-xl font-semibold text-green-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> How to Maintain EV Tyres:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Check tyre pressure monthly (under-inflated tyres drain battery faster).</li>
          <li>Rotate tyres every 10,000 km to ensure even wear.</li>
          <li>Inspect tread depth regularly—important during monsoons.</li>
          <li>Align and balance tyres during service to avoid steering issues.</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🧼</span> 4. Keep the Undercarriage Clean, Especially in Monsoon
      </h2>
      
      <p class="text-gray-700 mb-6">Water, slush, and mud can accumulate and corrode suspension parts or connectors—even though most EVs have IP-rated battery protection.</p>

      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-blue-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> Monsoon Tips:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Pressure wash the underbody once a month during rainy season.</li>
          <li>Avoid deep waterlogging—some EVs have water-wading limits.</li>
          <li>Dry parking areas reduce moisture damage.</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">🌧️</span> Check with your dealer about your EV's water ingress protection (usually rated IP67 for Indian EVs).
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">⚙️</span> 5. Regular Software Updates = Better Performance
      </h2>
      
      <p class="text-gray-700 mb-6">EVs are smart vehicles—and updates often fix bugs, improve range, or add features.</p>

      <div class="bg-yellow-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> What You Should Do:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Connect your car to Wi-Fi or hotspot regularly to receive OTA (over-the-air) updates.</li>
          <li>Check the manufacturer's app for notifications.</li>
          <li>Ask for manual updates during service visits if you don't have OTA.</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">📲</span> For example, Tata updates Nexon EV software to optimize regen braking and battery management.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🛠️</span> 6. Schedule Annual Health Checks
      </h2>
      
      <p class="text-gray-700 mb-6">Even though EVs require fewer service visits, an annual checkup is crucial.</p>

      <div class="bg-green-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-green-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> What Gets Checked:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Battery health and cooling system</li>
          <li>Electrical connectors and wiring</li>
          <li>Brake pads and fluids</li>
          <li>Tyres, wipers, and suspension</li>
          <li>HVAC system (essential for Indian heat)</li>
        </ul>
      </div>

      <p class="text-gray-700 mb-12">Many Indian EV makers offer scheduled servicing packages (e.g., Tata EZ Service or MG Shield) that keep your vehicle covered for 3–5 years.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">⚡</span> 7. Charging Equipment Care
      </h2>
      
      <p class="text-gray-700 mb-6">Your home charger or portable cable is essential for day-to-day use. Keep it safe.</p>

      <div class="bg-yellow-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> Charging Safety Tips:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Install a surge protector for your home charger (especially during thunderstorms).</li>
          <li>Keep the charging area dry and ventilated.</li>
          <li>Avoid extension cords—they can cause overheating.</li>
          <li>Clean charger ports with a dry cloth—no water or spray!</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">🔌</span> Most OEMs provide a home charger unit with proper installation through certified technicians.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🧽</span> 8. Interior & Exterior Cleaning for Indian Conditions
      </h2>
      
      <p class="text-gray-700 mb-6">Dust, humidity, and heat can affect the look and feel of your EV if not maintained.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span class="mr-2">✅</span> Interior Tips:
          </h3>
          <ul class="list-disc list-inside space-y-3 text-gray-700">
            <li>Use sunshades to protect dashboard and seats from UV damage.</li>
            <li>Clean the touchscreen and digital displays with a microfiber cloth.</li>
            <li>Vacuum regularly to avoid dust buildup (especially in Delhi NCR or Bengaluru).</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <span class="mr-2">✅</span> Exterior Tips:
          </h3>
          <ul class="list-disc list-inside space-y-3 text-gray-700">
            <li>Wash once a week with water-resistant wax polish.</li>
            <li>Check door seals to prevent moisture leaks.</li>
            <li>Use ceramic coating to protect paint in harsh sun areas like Rajasthan or Chennai.</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🔁</span> 9. Keep Battery Degradation in Check
      </h2>
      
      <p class="text-gray-700 mb-6">Battery degradation is slow but real. After 5–6 years, you may lose 10–20% of capacity depending on use.</p>

      <div class="bg-yellow-50 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
          <span class="mr-2">✅</span> Tips to Reduce Battery Aging:
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Avoid charging to 100% unless needed.</li>
          <li>Don't fast-charge daily—it heats the battery.</li>
          <li>Monitor battery reports during annual service.</li>
          <li>Use eco mode during heavy traffic to avoid energy spikes.</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">📊</span> EVs like the MG ZS EV and Tata Nexon EV allow users to track battery health via their app.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">📦</span> 10. Spare Parts Availability & Service Network
      </h2>
      
      <p class="text-gray-700 mb-6">EV spare parts are fewer, but you should still be aware of:</p>

      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Availability of headlamps, bumpers, infotainment parts</li>
          <li>Battery module or BMS unit replacement (rare, but costly if out of warranty)</li>
          <li>Motor cooling fan or AC compressor (check during annual service)</li>
        </ul>
      </div>

      <p class="text-gray-700 mb-12">Stick with brands that have local service centers in your state. Tata and MG currently have the widest EV service coverage in India.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">🧠</span> Bonus: Stay Connected with EV Communities
      </h2>
      
      <p class="text-gray-700 mb-6">Indian EV owners are a helpful bunch. Join local WhatsApp or Telegram groups to:</p>

      <div class="bg-green-50 p-6 rounded-xl mb-8">
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li>Share charger locations</li>
          <li>Report service issues</li>
          <li>Discuss updates and features</li>
          <li>Get discounts on accessories</li>
        </ul>
      </div>

      <div class="bg-blue-100 p-4 rounded-lg mb-12">
        <p class="text-blue-800 flex items-center">
          <span class="mr-2">👥</span> Communities like PluginIndia, r/IndianEVs on Reddit, and Facebook groups are highly active.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span class="mr-3">✅</span> Final Checklist for Maintaining Your EV in India
      </h2>

      <div className="overflow-x-auto mb-12">
        <table className="min-w-full bg-white rounded-xl shadow-sm border-2 ">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tip</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Battery health check</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Every 6–12 months</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Avoid deep discharges</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tyre rotation</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Every 10,000 km</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Maintain pressure</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Software updates</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">As available</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OTA or service center</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Brake inspection</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Annually</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regenerative braking wears less</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Underbody cleaning</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly in monsoon</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Prevent rust or clogging</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Charger check</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Look for frayed cables</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cabin & infotainment care</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Weekly</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Use microfiber cloths</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="mr-3">🏁</span> Final Thoughts: Low Maintenance ≠ No Maintenance
      </h2>
      
      <p className="text-gray-700 mb-6">EVs offer a smoother, quieter, and more economical driving experience—especially in India. But a little care goes a long way in preserving battery life, improving resale value, and ensuring your EV delivers peak performance every day.</p>
    </div>`,
    author: "Pravin Sharma",
    date: "June 8, 2025",
    category: "EV Maintenance",
    imageUrl: "/images/blog/ev-maintenance-guide.jpg",
    slug: "practical-guide-maintaining-ev-india"
  },
  {
    id: 2,
    title: "The Future of EV Charging: Trends to Watch in 2025",
    excerpt: "As electric vehicles become mainstream, charging technology is evolving rapidly. Discover the key innovations shaping the future...",
    content: "<p>The world of electric vehicles (EVs) is advancing at an unprecedented pace. As more drivers make the switch to electric, the demand for efficient, accessible, and intelligent charging solutions is skyrocketing. In 2025, we anticipate several key trends that will redefine the EV charging landscape.</p><h2>Smarter Charging Networks</h2><p>Expect to see more AI-powered charging networks that optimize energy distribution, predict demand, and offer dynamic pricing. These networks will integrate seamlessly with smart grids, contributing to overall energy stability.</p><h2>Ultra-Fast Charging (UFC)</h2><p>While fast charging is already available, 2025 will likely see a wider deployment of ultra-fast chargers capable of adding hundreds of miles of range in just a few minutes. This will be crucial for long-distance travel and reducing range anxiety.</p><h2>Wireless EV Charging</h2><p>Inductive charging technology is maturing. We may see more pilot programs and even commercial availability of wireless charging pads for homes and public spaces, offering unparalleled convenience.</p><h2>Vehicle-to-Grid (V2G) Technology</h2><p>EVs will increasingly become mobile energy storage units. V2G technology will allow EV owners to sell excess energy back to the grid, supporting grid stability and potentially earning them income.</p><p>At VerveNxt, we are closely monitoring these trends and actively working on incorporating cutting-edge solutions into the ROOL app to ensure our users always have access to the best and most convenient charging experiences.</p>",
    author: "Jane Doe",
    date: "June 1, 2025",
    category: "EV Technology",
    imageUrl: "/images/blog/ev-charging-future.jpg",
    slug: "future-of-ev-charging"
  },
  {
    id: 3,
    title: "ROOL's Mission: Making Sustainable Travel a Reality",
    excerpt: "Learn how VerveNxt is pioneering solutions to make EV ownership seamless and contribute to a greener planet through the ROOL app.",
    content: "<p>Our core mission at VerveNxt is to accelerate the transition to sustainable transportation. We believe that electric vehicles are a cornerstone of this transition, but their adoption can be hindered by complexities in the charging ecosystem. That's where ROOL comes in.</p><h2>Simplifying the Complex</h2><p>ROOL is designed to be the single point of contact for all EV charging needs. By aggregating multiple charging networks into one intuitive platform, we eliminate the need for users to juggle various apps and payment methods. This simplification is key to making EV ownership more attractive and less daunting for a wider audience.</p><h2>Promoting Green Energy</h2><p>Beyond convenience, ROOL aims to guide users towards charging stations powered by renewable energy sources whenever possible. We are also exploring features that will allow users to track their carbon footprint reduction and understand their positive environmental impact.</p><p>Join us on this journey as we build a future where sustainable travel is not just a choice, but a delightful and effortless experience for everyone.</p>",
    author: "John Smith",
    date: "May 28, 2025",
    category: "Sustainability",
    imageUrl: "/images/blog/sustainable-travel.jpg",
    slug: "rool-mission-sustainability"
  },
  {
    id: 4,
    title: "Top 5 Benefits of Using an EV Charging Aggregator App",
    excerpt: "Tired of juggling multiple apps? An aggregator like ROOL simplifies your charging experience. Here's how...",
    content: "<p>Electric vehicle (EV) charging aggregator apps like ROOL are revolutionizing how EV drivers find and use charging stations. Instead of managing multiple accounts and apps for different charging networks, an aggregator provides a unified solution. Here are the top 5 benefits:</p><ol><li><strong>One App for All Networks:</strong> Access a vast network of charging stations from various providers through a single interface. No more app-switching!</li><li><strong>Real-Time Availability and Status:</strong> Get live updates on charger availability, type, and operational status before you arrive, saving time and frustration.</li><li><strong>Simplified Payments:</strong> Link your payment method once and pay seamlessly across different networks, often with integrated payment systems.</li><li><strong>Efficient Route Planning:</strong> Many aggregators offer route planning features that incorporate necessary charging stops, making long-distance EV travel easier.</li><li><strong>Personalized Experience:</strong> Save favorite stations, view charging history, and sometimes even get recommendations based on your vehicle and preferences.</li></ol><p>ROOL aims to deliver all these benefits and more, ensuring that your EV charging experience is as smooth as your drive.</p>",
    author: "Alex Green",
    date: "May 15, 2025",
    category: "EV Lifestyle",
    imageUrl: "/images/blog/ev-aggregator-benefits.jpg",
    slug: "benefits-ev-aggregator"
  },
  {
    id: 5,
    title: "Navigating Range Anxiety: Tips for New EV Owners",
    excerpt: "Worried about running out of charge? We share practical tips and how ROOL helps you drive with confidence.",
    content: "<p>Range anxiety is a common concern for new electric vehicle (EV) owners. However, with a bit of planning and the right tools, it's easily managed. Here are some tips:...</p>",
    author: "Sarah Miller",
    date: "June 5, 2025",
    category: "EV Lifestyle",
    imageUrl: "/images/blog/range-anxiety-tips.jpg",
    slug: "navigating-range-anxiety"
  },
  {
    id: 6,
    title: "The Environmental Impact of EVs: A Closer Look",
    excerpt: "Electric vehicles are a key part of a sustainable future. We delve into the real environmental benefits.",
    content: "<p>Switching to an electric vehicle (EV) is a significant step towards reducing your carbon footprint. Let's explore the environmental benefits in detail:...</p>",
    author: "Dr. Eco Friend",
    date: "June 10, 2025",
    category: "Sustainability",
    imageUrl: "/images/blog/ev-environmental-impact.jpg",
    slug: "environmental-impact-evs"
  }
];


const CommentsSection = ({ postId }) => {
  const { user, signInWithGoogleMock } = useAuth(); // Changed to use useAuth hook
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
    setComments(storedComments);
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      toast({ title: "Oops!", description: "Comment cannot be empty.", variant: "destructive" });
      return;
    }
    if (!user) {
      toast({ title: "Please sign in", description: "You need to be signed in to comment.", variant: "destructive" });
      return;
    }
    const newComment = {
      id: Date.now(),
      text: comment,
      author: user.name,
      avatar: user.avatar,
      date: new Date().toISOString(),
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setComment('');
    toast({ title: "Success!", description: "Your comment has been posted." });
  };

  const handleSignIn = () => {
    signInWithGoogleMock(); // Use the mock sign-in from context
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12 pt-8 border-t border-gray-200"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
        Comments ({comments.length})
      </h2>
      {user ? (
        <form onSubmit={handleCommentSubmit} className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
          <div className="flex items-start space-x-4">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={`Commenting as ${user.name}... What are your thoughts?`}
                className="w-full p-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                rows="4"
              />
              <Button type="submit" className="mt-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <Send className="w-4 h-4 mr-2" /> Post Comment
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-8 p-6 bg-gray-100 rounded-xl text-center">
          <p className="text-gray-700 mb-3 text-lg">Want to join the conversation?</p>
          <Button onClick={handleSignIn} className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-lg">
            Sign In to Comment
          </Button>
          <p className="text-xs text-gray-500 mt-2">(Mock Sign-In: Supabase integration needed for real authentication)</p>
        </div>
      )}
      <div className="space-y-6">
        {comments.length > 0 ? comments.map((c) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-lg"
          >
            {c.avatar ? (
              <img 
                src={c.avatar} 
                alt={c.author} 
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                {c.author.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-blue-700">{c.author}</p>
                <p className="text-xs text-gray-500">{new Date(c.date).toLocaleDateString()}</p>
              </div>
              <p className="text-gray-700 leading-relaxed">{c.text}</p>
            </div>
          </motion.div>
        )) : (
          <p className="text-gray-500 py-4 text-center text-lg">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </motion.div>
  );
};


const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (slug) {
      const post = blogPostsData.find(p => p.slug === slug);
      setSelectedPost(post);
    } else if (blogPostsData.length > 0 && !selectedPost) {
      setSelectedPost(null); 
    }
  }, [slug, navigate, selectedPost]);

   useEffect(() => {
    if (location.pathname === '/blog' && !slug) {
      setSelectedPost(null);
    }
  }, [location.pathname, slug]);


  const filteredPosts = blogPostsData.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
  };

  const PostContentDisplay = ({ post }) => {
    if (!post) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-10">
          <Search className="w-24 h-24 text-gray-300 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-700 mb-2">Select a Post</h2>
          <p className="text-gray-500 text-lg">Choose an article from the list to read its content here.</p>
        </div>
      );
    }

    return (
      <motion.div
        key={post.id} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="p-6 md:p-10 h-full overflow-y-auto"
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-blue-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1.5 text-blue-500" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-gradient leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-10">
            <img
              src={post.imageUrl || "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed selection:bg-yellow-200 selection:text-yellow-800"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <CommentsSection postId={post.id} />
        </div>
      </motion.div>
    );
  };


  return (
    <div className="pt-20 min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-sky-100">
      <header className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gradient mb-3">VerveNxt Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your hub for EV news, sustainability tips, and ROOL app updates.
          </p>
        </div>
      </header>

      <div className="flex-grow flex container mx-auto px-0 md:px-6 py-8 gap-0 md:gap-8">
        <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl rounded-r-lg md:rounded-lg p-6 overflow-y-auto flex-shrink-0"
            style={{ maxHeight: 'calc(100vh - 160px)' }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Browse Articles</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                <ChevronsLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative mb-6">
              <Input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="mb-6">
              <Button variant="outline" className="w-full justify-start text-gray-600">
                <ListFilter className="w-4 h-4 mr-2" /> Filter / Sort
              </Button>
            </div>

            <nav className="space-y-3">
              {filteredPosts.length > 0 ? filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <Link
                  to={`/blog/${post.slug}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handlePostSelect(post);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`block p-4 rounded-lg transition-all duration-200 ease-in-out group
                    ${selectedPost?.id === post.id 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'}`}
                >
                  <h3 className={`font-semibold text-lg mb-1 group-hover:text-blue-600 ${selectedPost?.id === post.id ? 'text-white' : 'text-gray-800'}`}>{post.title}</h3>
                  <p className={`text-sm ${selectedPost?.id === post.id ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-600'}`}>{post.excerpt.substring(0,70)}...</p>
                  <div className={`mt-2 text-xs flex items-center ${selectedPost?.id === post.id ? 'text-blue-200' : 'text-gray-400 group-hover:text-gray-500'}`}>
                    <Calendar className="w-3 h-3 mr-1" /> {post.date}
                  </div>
                </Link>
                </motion.div>
              )) : (
                <p className="text-gray-500 p-4 text-center">No articles found matching your search.</p>
              )}
            </nav>
          </motion.aside>
        )}
        </AnimatePresence>

        <motion.main 
          className="flex-grow bg-white shadow-xl rounded-lg overflow-hidden relative"
          initial={false} 
        >
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(true)} 
              className="absolute top-4 left-4 z-10 bg-white/70 backdrop-blur-sm md:hidden"
              aria-label="Open sidebar"
            >
              <ChevronsRight className="h-5 w-5" />
            </Button>
          )}
          <AnimatePresence mode="wait">
            <PostContentDisplay post={selectedPost} />
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
};

export default BlogPage;