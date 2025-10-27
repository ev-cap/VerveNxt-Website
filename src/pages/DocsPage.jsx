import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Smartphone,
  Home,
  User,
  Wallet,
  QrCode,
  ArrowRight,
  Search,
  ChevronDown,
  ChevronUp,
  Lock,
  Navigation,
  Zap,
  Calendar,
  CreditCard,
  MessageCircle,
  MapPin,
  Star,
  History,
  Settings,
  Bell,
  LogOut,
  Receipt,
  FileText,
  Award,
  Route
} from 'lucide-react';

const DocsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFlow, setExpandedFlow] = useState(null);

  const categories = [
    { id: 'all', name: 'All Flows', icon: BookOpen, color: 'indigo' },
    { id: 'auth', name: 'Authentication', icon: Lock, color: 'purple' },
    { id: 'home', name: 'Home Tab', icon: Home, color: 'blue' },
    { id: 'account', name: 'Account', icon: User, color: 'green' },
    { id: 'wallet', name: 'Wallet', icon: Wallet, color: 'yellow' },
    { id: 'qr', name: 'QR Scanner', icon: QrCode, color: 'pink' },
    { id: 'cross', name: 'Complete Journeys', icon: Route, color: 'cyan' }
  ];

  const documentationFlows = {
    auth: {
      title: 'Authentication Flows',
      icon: Lock,
      color: 'purple',
      description: 'User registration and login processes',
      flows: [
        {
          name: 'New User Registration',
          steps: [
            { text: 'Welcome Screen', detail: 'Introduction to ROOL app with key features' },
            { text: 'Sign Up', detail: 'Choose registration method (phone/email)' },
            { text: 'User Details', detail: 'Enter name, email, and basic information' },
            { text: 'OTP Verification', detail: 'Verify phone number via 6-digit code' },
            { text: 'Interest Selection', detail: 'Choose preferences (EV types, charging habits)' },
            { text: 'Main App', detail: 'Access to full app features' }
          ],
          tips: [
            'Keep your phone number handy for OTP verification',
            'Select interests to get personalized station recommendations',
            'Complete your profile later from Account settings'
          ]
        },
        {
          name: 'Existing User Login',
          steps: [
            { text: 'Welcome Screen', detail: 'Tap "Sign In" to continue' },
            { text: 'Sign In', detail: 'Enter registered phone number or email' },
            { text: 'Phone Entry', detail: 'Confirm your registered contact' },
            { text: 'OTP Verification', detail: 'Enter 6-digit verification code' },
            { text: 'Main App', detail: 'Quick access to your dashboard' }
          ],
          tips: [
            'Use biometric login for faster access (if enabled)',
            'OTP expires in 5 minutes - request new code if needed',
            'Enable "Remember Me" for trusted devices'
          ]
        }
      ]
    },
    home: {
      title: 'Home Tab Flows',
      icon: Home,
      color: 'blue',
      description: 'Station discovery, charging, and navigation features',
      flows: [
        {
          name: 'Station Discovery',
          steps: [
            { text: 'Home Screen', detail: 'Your main dashboard view' },
            { text: 'Location Permission', detail: 'Allow GPS access for nearby stations' },
            { text: 'Current Location', detail: 'Auto-detect your position' },
            { text: 'Station Search', detail: 'Find stations within radius' },
            { text: 'Map/List View', detail: 'Toggle between views for convenience' },
            { text: 'Station Selection', detail: 'Tap station to view details' },
            { text: 'Station Details Sheet', detail: 'View amenities, pricing, availability' }
          ],
          tips: [
            'Use filters to find stations with specific amenities',
            'Check real-time availability before traveling',
            'Save frequent stations to favorites'
          ]
        },
        {
          name: 'Basic Charging Flow',
          steps: [
            { text: 'QR Scanner', detail: 'Scan station charger QR code' },
            { text: 'Start Charging', detail: 'Initiate charging session' },
            { text: 'Vehicle Selection', detail: 'Choose your registered vehicle' },
            { text: 'Parameter Selection', detail: 'Set time, money limit, or units' },
            { text: 'Session Creation', detail: 'Confirm and create session' },
            { text: 'Charging Screen', detail: 'Monitor real-time progress' },
            { text: 'Payment Processing', detail: 'Auto-debit from wallet/payment method' },
            { text: 'Session Complete', detail: 'Charging finished notification' },
            { text: 'Receipt', detail: 'View and download receipt' }
          ],
          tips: [
            'Set charging limit to avoid overcharging',
            'Monitor charging speed and estimated completion time',
            'Receipt automatically saved to Charging History'
          ]
        },
        {
          name: 'Route Planning',
          steps: [
            { text: 'Home', detail: 'Tap Route Planner' },
            { text: 'Route Planner', detail: 'Open route planning interface' },
            { text: 'Starting Point', detail: 'Set your current or custom location' },
            { text: 'Destination', detail: 'Enter your target destination' },
            { text: 'Vehicle Parameters', detail: 'Input battery level and range' },
            { text: 'Route Creation', detail: 'AI suggests optimal charging stops' },
            { text: 'Credit Consumption', detail: 'Uses route credits (if applicable)' },
            { text: 'Full Screen Map', detail: 'Navigate with turn-by-turn directions' }
          ],
          tips: [
            'Update vehicle battery status for accurate planning',
            'Route planner considers charging station availability',
            'Save frequently used routes'
          ]
        },
        {
          name: 'Station Booking',
          steps: [
            { text: 'Home', detail: 'Navigate to station details' },
            { text: 'Station Details', detail: 'View station information' },
            { text: 'Book Now', detail: 'Initiate booking process' },
            { text: 'Date Selection', detail: 'Choose booking date' },
            { text: 'Time Selection', detail: 'Select time slot' },
            { text: 'Duration', detail: 'Estimate charging duration' },
            { text: 'Vehicle Selection', detail: 'Choose vehicle to charge' },
            { text: 'Booking Summary', detail: 'Review booking details and cost' },
            { text: 'Payment', detail: 'Complete payment' },
            { text: 'Confirmation', detail: 'Receive booking confirmation' },
            { text: 'My Bookings', detail: 'Access from Account tab' }
          ],
          tips: [
            'Book during off-peak hours for better availability',
            'Modify or cancel bookings up to 1 hour before',
            'Set reminders for your booking time'
          ]
        },
        {
          name: 'Station Search with Filters',
          steps: [
            { text: 'Home', detail: 'Open search bar' },
            { text: 'Search Bar', detail: 'Enter location or station name' },
            { text: 'Filter Options', detail: 'Access advanced filters' },
            { text: 'Apply Filters', detail: 'Set connector type, power, amenities' },
            { text: 'Results Display', detail: 'View filtered stations' },
            { text: 'Station Selection', detail: 'Choose from results' },
            { text: 'Station Details', detail: 'View complete information' },
            { text: 'Actions', detail: 'Navigate, book, or start charging' }
          ],
          tips: [
            'Filter by connector type compatible with your vehicle',
            'Sort by distance, price, or rating',
            'Save filter presets for quick searches'
          ]
        },
        {
          name: 'Favorite Station Management',
          steps: [
            { text: 'Home', detail: 'Select any station' },
            { text: 'Station Details', detail: 'View station information' },
            { text: 'Add to Favourites', detail: 'Tap heart icon' },
            { text: 'Favourites List', detail: 'Access from Home quick menu' },
            { text: 'Station Access', detail: 'Quick access to favorite stations' },
            { text: 'Quick Actions', detail: 'Navigate, book, or charge' }
          ],
          tips: [
            'Favorite your home and workplace stations',
            'Receive notifications about favorite station updates',
            'Organize favorites by location'
          ]
        }
      ]
    },
    account: {
      title: 'Account Tab Flows',
      icon: User,
      color: 'green',
      description: 'Profile, vehicles, history, and settings management',
      flows: [
        {
          name: 'Profile Management',
          steps: [
            { text: 'Account Tab', detail: 'Access account settings' },
            { text: 'Profile', detail: 'View your profile information' },
            { text: 'Edit Information', detail: 'Update name, email, phone' },
            { text: 'Save Changes', detail: 'Confirm updates' },
            { text: 'Success Toast', detail: 'Confirmation message' },
            { text: 'Account Screen', detail: 'Return to account home' }
          ],
          tips: [
            'Keep contact information updated for notifications',
            'Add profile photo for personalization',
            'Verify email for account recovery'
          ]
        },
        {
          name: 'Vehicle Management',
          steps: [
            { text: 'Account', detail: 'Navigate to account tab' },
            { text: 'My Vehicles', detail: 'View registered vehicles' },
            { text: 'Add Vehicle', detail: 'Tap "Add New Vehicle"' },
            { text: 'Vehicle Search', detail: 'Search make and model' },
            { text: 'Details Form', detail: 'Enter license plate, color, nickname' },
            { text: 'Image Upload', detail: 'Add vehicle photo (optional)' },
            { text: 'Primary Selection', detail: 'Set as default vehicle' },
            { text: 'Vehicle Creation', detail: 'Save vehicle information' },
            { text: 'Success', detail: 'Vehicle added confirmation' },
            { text: 'My Vehicles', detail: 'View updated vehicle list' }
          ],
          tips: [
            'Add all your EVs for easy switching',
            'Primary vehicle auto-selected for charging',
            'Update vehicle details as needed'
          ]
        },
        {
          name: 'Charging History',
          steps: [
            { text: 'Account', detail: 'Open account tab' },
            { text: 'Charging History', detail: 'View all past sessions' },
            { text: 'Session List', detail: 'Browse chronological list' },
            { text: 'Session Expansion', detail: 'Tap to expand details' },
            { text: 'Session Details', detail: 'View duration, cost, energy' },
            { text: 'Receipt/Station Info', detail: 'Download receipt or view station' },
            { text: 'Actions', detail: 'Re-book, navigate, or share' }
          ],
          tips: [
            'Export history for expense tracking',
            'Filter by date range or vehicle',
            'Track charging patterns and costs'
          ]
        },
        {
          name: 'Payment Options Setup',
          steps: [
            { text: 'Account', detail: 'Navigate to account settings' },
            { text: 'Payment Options', detail: 'Manage payment methods' },
            { text: 'Add Payment Method', detail: 'Add new card/UPI' },
            { text: 'Method Selection', detail: 'Choose payment type' },
            { text: 'Details Entry', detail: 'Enter payment information' },
            { text: 'Validation', detail: 'Verify payment method' },
            { text: 'Save', detail: 'Store securely' },
            { text: 'Profile Step Update', detail: 'Profile completion progress' }
          ],
          tips: [
            'Add backup payment methods',
            'Set default payment for auto-debit',
            'Payment info encrypted and secure'
          ]
        },
        {
          name: 'Notification Settings',
          steps: [
            { text: 'Account', detail: 'Open settings' },
            { text: 'Notifications', detail: 'Access notification preferences' },
            { text: 'Category Selection', detail: 'Choose notification types' },
            { text: 'Permission Management', detail: 'Enable/disable categories' },
            { text: 'Settings Update', detail: 'Save preferences' },
            { text: 'Device Integration', detail: 'Sync with device settings' },
            { text: 'Account Screen', detail: 'Return to account' }
          ],
          tips: [
            'Enable charging completion alerts',
            'Get station availability notifications',
            'Customize notification frequency'
          ]
        },
        {
          name: 'Booking Management',
          steps: [
            { text: 'Account', detail: 'Access account tab' },
            { text: 'My Bookings', detail: 'View all bookings' },
            { text: 'Booking List', detail: 'Active and past bookings' },
            { text: 'Booking Details', detail: 'View booking information' },
            { text: 'Actions (Modify/Cancel)', detail: 'Update or cancel booking' },
            { text: 'Confirmation', detail: 'Confirm changes' },
            { text: 'List Update', detail: 'Refreshed booking list' }
          ],
          tips: [
            'Modify bookings up to 1 hour before',
            'Cancellation may incur fees',
            'Receive booking reminders'
          ]
        },
        {
          name: 'Support Access',
          steps: [
            { text: 'Account', detail: 'Open account menu' },
            { text: 'FAQ\'s', detail: 'Browse frequently asked questions' },
            { text: 'Category Selection', detail: 'Choose topic category' },
            { text: 'FAQ Expansion', detail: 'Read answer' },
            { text: 'Still Need Help', detail: 'Contact support option' },
            { text: 'Contact Support', detail: 'Fill support form' },
            { text: 'Support Request', detail: 'Submit ticket' }
          ],
          tips: [
            'Check FAQs before contacting support',
            'Include session ID for faster resolution',
            'Support available 24/7'
          ]
        },
        {
          name: 'Chat Bot Interaction',
          steps: [
            { text: 'Account', detail: 'Access help section' },
            { text: 'Chat Bot', detail: 'Open AI assistant' },
            { text: 'Query Input', detail: 'Type your question' },
            { text: 'AI Processing', detail: 'Bot analyzes query' },
            { text: 'Response Generation', detail: 'Receive instant answer' },
            { text: 'Action Buttons', detail: 'Quick action suggestions' },
            { text: 'Navigation', detail: 'Jump to relevant screen' },
            { text: 'Return to Chat', detail: 'Continue conversation' }
          ],
          tips: [
            'Ask about features, billing, or troubleshooting',
            'Bot learns from your usage patterns',
            'Escalate to human support if needed'
          ]
        },
        {
          name: 'Logout Process',
          steps: [
            { text: 'Account', detail: 'Open account settings' },
            { text: 'Logout', detail: 'Tap logout button' },
            { text: 'Confirmation Modal', detail: 'Confirm logout action' },
            { text: 'API Logout', detail: 'Server session termination' },
            { text: 'Device Token Clear', detail: 'Remove device authentication' },
            { text: 'Cache Clear', detail: 'Clear local data' },
            { text: 'Context Clear', detail: 'Reset app state' },
            { text: 'Welcome Screen', detail: 'Return to login' }
          ],
          tips: [
            'Logout to switch accounts',
            'Your data is securely saved',
            'Biometric login available on return'
          ]
        }
      ]
    },
    wallet: {
      title: 'Wallet Tab Flows',
      icon: Wallet,
      color: 'yellow',
      description: 'Balance management, transactions, and payments',
      flows: [
        {
          name: 'Wallet Balance Check',
          steps: [
            { text: 'Wallet Tab', detail: 'Open wallet dashboard' },
            { text: 'Balance Display', detail: 'View current balance' },
            { text: 'Transaction History', detail: 'Recent activity overview' },
            { text: 'Recent Transactions', detail: 'Last 10 transactions' },
            { text: 'Transaction Details', detail: 'Tap for full details' }
          ],
          tips: [
            'Enable auto-recharge for uninterrupted charging',
            'Set low balance alerts',
            'Track spending by category'
          ]
        },
        {
          name: 'Add Money Flow',
          steps: [
            { text: 'Wallet', detail: 'Access wallet section' },
            { text: 'Add Money', detail: 'Tap "Add Money" button' },
            { text: 'Amount Selection', detail: 'Choose or enter custom amount' },
            { text: 'Payment Method', detail: 'Select saved card/UPI/net banking' },
            { text: 'Payment Gateway', detail: 'Secure payment processing' },
            { text: 'Transaction Processing', detail: 'Payment confirmation' },
            { text: 'Balance Update', detail: 'Wallet balance refreshed' },
            { text: 'Success Animation', detail: 'Confirmation with updated balance' }
          ],
          tips: [
            'Add money before long trips',
            'Use promocodes for bonus credits',
            'Minimum add: ₹100, Maximum: ₹10,000'
          ]
        },
        {
          name: 'Transaction History',
          steps: [
            { text: 'Wallet', detail: 'Open wallet tab' },
            { text: 'View All Transactions', detail: 'Access complete history' },
            { text: 'Filter Options', detail: 'Filter by type, date, amount' },
            { text: 'Transaction Search', detail: 'Search by reference ID' },
            { text: 'Transaction Selection', detail: 'Tap for details' },
            { text: 'Receipt Display', detail: 'View transaction receipt' }
          ],
          tips: [
            'Export transactions as CSV/PDF',
            'Filter by charging vs. wallet recharges',
            'Download tax invoices'
          ]
        },
        {
          name: 'Receipt Generation',
          steps: [
            { text: 'Wallet', detail: 'Navigate to wallet' },
            { text: 'Transaction Selection', detail: 'Choose transaction' },
            { text: 'Receipt Screen', detail: 'View detailed receipt' },
            { text: 'Download/Share Options', detail: 'Save or send receipt' },
            { text: 'Receipt Actions', detail: 'Email, print, or save to device' }
          ],
          tips: [
            'Receipts include GST breakdown',
            'Auto-email receipts (enable in settings)',
            'Archive receipts for tax purposes'
          ]
        },
        {
          name: 'Transaction Dispute',
          steps: [
            { text: 'Wallet', detail: 'Open wallet tab' },
            { text: 'All Transactions', detail: 'View transaction list' },
            { text: 'Transaction Selection', detail: 'Select disputed transaction' },
            { text: 'Report Issue', detail: 'Tap "Report Problem"' },
            { text: 'Support Form', detail: 'Describe issue with details' },
            { text: 'Ticket Creation', detail: 'Support ticket generated' },
            { text: 'Support Response', detail: 'Resolution within 48 hours' }
          ],
          tips: [
            'Report disputes within 30 days',
            'Attach screenshots for faster resolution',
            'Track dispute status in Support section'
          ]
        }
      ]
    },
    qr: {
      title: 'QR Tab Flows',
      icon: QrCode,
      color: 'pink',
      description: 'QR code scanning and charging initiation',
      flows: [
        {
          name: 'QR Scanning',
          steps: [
            { text: 'QR Tab', detail: 'Open QR scanner' },
            { text: 'Camera Permission', detail: 'Allow camera access' },
            { text: 'QR Detection', detail: 'Scan charger QR code' },
            { text: 'Validation', detail: 'Verify charger availability' },
            { text: 'Navigation to Start Charging', detail: 'Auto-redirect to charging screen' }
          ],
          tips: [
            'Ensure good lighting for scanning',
            'Clean camera lens if scan fails',
            'QR code located on charger unit'
          ]
        },
        {
          name: 'Alternative QR Entry',
          steps: [
            { text: 'QR Tab', detail: 'Access QR scanner' },
            { text: 'Manual Entry', detail: 'Tap "Enter Code Manually"' },
            { text: 'Code Validation', detail: 'Enter charger ID (8-digit code)' },
            { text: 'Navigation to Start Charging', detail: 'Proceed to charging flow' }
          ],
          tips: [
            'Use manual entry if QR is damaged',
            'Charger ID displayed on unit',
            'Double-check code before submitting'
          ]
        },
        {
          name: 'QR Permission Denied',
          steps: [
            { text: 'QR Tab', detail: 'Attempt to open scanner' },
            { text: 'Permission Request', detail: 'Camera access prompt' },
            { text: 'Denied', detail: 'User denies permission' },
            { text: 'Settings Redirect', detail: 'Prompt to enable in settings' },
            { text: 'Manual Entry Option', detail: 'Use alternative entry method' }
          ],
          tips: [
            'Enable camera in phone settings',
            'App Settings → Permissions → Camera',
            'Manual entry always available'
          ]
        }
      ]
    },
    cross: {
      title: 'Complete User Journeys',
      icon: Route,
      color: 'cyan',
      description: 'End-to-end flows combining multiple features',
      flows: [
        {
          name: 'Complete New User Journey',
          steps: [
            { text: 'Welcome → Sign Up → OTP → Interests', detail: 'Initial registration' },
            { text: 'Main App → Account', detail: 'Access profile settings' },
            { text: 'Complete Profile → Add Vehicle', detail: 'Setup vehicle information' },
            { text: 'Add Payment Method', detail: 'Configure payment options' },
            { text: 'Profile Complete', detail: 'Account fully set up' },
            { text: 'Home → QR Scan → Charging', detail: 'First charging session' },
            { text: 'Payment → History', detail: 'Session completion and receipt' }
          ],
          tips: [
            'Complete profile for full feature access',
            'Add vehicle before first charge',
            'First charge may have welcome bonus'
          ]
        },
        {
          name: 'Returning User Daily Flow',
          steps: [
            { text: 'Welcome → Sign In', detail: 'Quick biometric login' },
            { text: 'Home → Station Search', detail: 'Find nearby stations' },
            { text: 'Station Details → Book Session', detail: 'Reserve charging slot' },
            { text: 'Payment → Confirmation', detail: 'Booking confirmed' },
            { text: 'QR Scan → Charging', detail: 'Start session at booked time' },
            { text: 'Payment → Receipt', detail: 'Complete and record' }
          ],
          tips: [
            'Save favorite stations for quick access',
            'Enable push notifications for booking reminders',
            'Check wallet balance before charging'
          ]
        },
        {
          name: 'Route Planning to Charging',
          steps: [
            { text: 'Home → Route Planner', detail: 'Plan long-distance trip' },
            { text: 'Route with Stops', detail: 'View suggested charging stops' },
            { text: 'Station Selection → Book Session', detail: 'Reserve at waypoint' },
            { text: 'Navigate → Arrive', detail: 'Drive to station' },
            { text: 'QR Scan → Charging', detail: 'Start charging session' },
            { text: 'Continue Journey', detail: 'Resume trip after charging' }
          ],
          tips: [
            'Plan route before long trips',
            'Book charging stops in advance',
            'Monitor battery level during journey'
          ]
        },
        {
          name: 'Multi-Vehicle User Journey',
          steps: [
            { text: 'My Vehicles → Add Multiple Vehicles', detail: 'Register all EVs' },
            { text: 'Set Primary', detail: 'Choose default vehicle' },
            { text: 'Home → QR Scan', detail: 'Start charging session' },
            { text: 'Vehicle Selection → Charging', detail: 'Choose which EV to charge' },
            { text: 'Vehicle Change → Another Session', detail: 'Switch for second vehicle' }
          ],
          tips: [
            'Set primary vehicle for quick sessions',
            'Track charging history per vehicle',
            'Different vehicles may have different connector types'
          ]
        },
        {
          name: 'Wallet Integration Journey',
          steps: [
            { text: 'Wallet → Add Money', detail: 'Top up wallet balance' },
            { text: 'Payment → Balance Update', detail: 'Confirm added funds' },
            { text: 'Home → QR Scan → Charging', detail: 'Start session' },
            { text: 'Wallet Payment', detail: 'Auto-debit from wallet' },
            { text: 'Transaction Record → Receipt', detail: 'Session complete with receipt' }
          ],
          tips: [
            'Pre-load wallet for faster checkout',
            'Enable auto-recharge to avoid interruptions',
            'Wallet payments earn more loyalty points'
          ]
        },
        {
          name: 'Support Journey',
          steps: [
            { text: 'Account → FAQ\'s', detail: 'Search for answers' },
            { text: 'No Solution → Contact Support', detail: 'Escalate to support team' },
            { text: 'Support Request → Chat Bot', detail: 'AI-assisted resolution' },
            { text: 'Query Resolution', detail: 'Issue resolved' },
            { text: 'Return to App', detail: 'Continue using app' }
          ],
          tips: [
            'Try FAQ and chatbot first for instant help',
            'Include session ID for charging-related issues',
            'Support available 24/7 via chat'
          ]
        },
        {
          name: 'Profile Completion Journey',
          steps: [
            { text: 'Account → Complete Profile', detail: 'View completion checklist' },
            { text: 'Profile Screen → Image Upload', detail: 'Add profile photo' },
            { text: 'My Vehicles → Add Vehicle', detail: 'Register your EV' },
            { text: 'Payment Options → Add Method', detail: 'Add payment card' },
            { text: 'Interest Selection', detail: 'Set preferences' },
            { text: 'Profile Complete', detail: 'Unlock all features' }
          ],
          tips: [
            'Complete profile for personalized experience',
            'Earn welcome bonus after completion',
            'Skip steps and complete later'
          ]
        }
      ]
    }
  };

  const toggleFlow = (flowName) => {
    setExpandedFlow(expandedFlow === flowName ? null : flowName);
  };

  const filteredFlows = () => {
    const flows = [];
    const categories = activeCategory === 'all'
      ? Object.keys(documentationFlows)
      : [activeCategory];

    categories.forEach(cat => {
      documentationFlows[cat].flows.forEach(flow => {
        const matchesSearch = flow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            flow.steps.some(step =>
                              step.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              step.detail.toLowerCase().includes(searchQuery.toLowerCase())
                            );
        if (matchesSearch) {
          flows.push({ ...flow, category: cat, categoryData: documentationFlows[cat] });
        }
      });
    });

    return flows;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <motion.div
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-20 text-center text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">ROOL App Documentation</h1>
            <p className="text-xl mb-2">Complete Guide to EV Charging Made Simple</p>
            <p className="text-lg opacity-90">Learn every feature, flow, and function of the ROOL mobile app</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md sticky top-0 z-40 border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search flows, features, or steps..."
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? `bg-${cat.color}-600 text-white shadow-lg`
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-slate-600">
              Showing <span className="font-semibold">{filteredFlows().length}</span> flow{filteredFlows().length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Flows List */}
          <div className="space-y-4">
            {filteredFlows().map((flow, index) => {
              const CategoryIcon = flow.categoryData.icon;
              const isExpanded = expandedFlow === `${flow.category}-${flow.name}`;

              return (
                <motion.div
                  key={`${flow.category}-${flow.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Flow Header */}
                  <button
                    onClick={() => toggleFlow(`${flow.category}-${flow.name}`)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-${flow.categoryData.color}-100 rounded-lg`}>
                        <CategoryIcon className={`w-6 h-6 text-${flow.categoryData.color}-600`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900">{flow.name}</h3>
                        <p className="text-sm text-slate-500">{flow.categoryData.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">{flow.steps.length} steps</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Flow Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      {/* Steps */}
                      <div className="space-y-3 mb-6">
                        {flow.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className={`w-8 h-8 rounded-full bg-${flow.categoryData.color}-100 text-${flow.categoryData.color}-600 font-bold flex items-center justify-center text-sm`}>
                                {stepIndex + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-slate-900">{step.text}</h4>
                                {stepIndex < flow.steps.length - 1 && (
                                  <ArrowRight className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                              <p className="text-slate-600 text-sm">{step.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tips Section */}
                      {flow.tips && flow.tips.length > 0 && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Pro Tips
                          </h4>
                          <ul className="space-y-2">
                            {flow.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-amber-800 text-sm flex gap-2">
                                <span className="text-amber-500">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredFlows().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No flows found</h3>
              <p className="text-slate-500">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Quick Reference Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(documentationFlows).map(([key, section]) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 bg-opacity-50 rounded-lg p-6 cursor-pointer backdrop-blur-sm"
                    onClick={() => setActiveCategory(key)}
                  >
                    <Icon className={`w-10 h-10 text-${section.color}-400 mb-4`} />
                    <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{section.description}</p>
                    <p className="text-slate-400 text-xs">{section.flows.length} flows available</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Need Help?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-slate-200 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-300 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Read Blog Articles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
