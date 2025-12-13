import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Background */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
            <h1 className={`${lusitana.className} text-4xl font-bold text-white mb-2`}>
              Welcome Back
            </h1>
            <p className="text-blue-100 text-sm">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Form Content */}
          <form className="px-8 py-8 space-y-6">
            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-800 mb-3"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-lg border-2 border-gray-200 bg-gray-50 py-3 pl-12 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-800 mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-lg border-2 border-gray-200 bg-gray-50 py-3 pl-12 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
              </div>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-700 cursor-pointer hover:text-blue-600">
                <input type="checkbox" className="w-4 h-4 mr-2 rounded border-gray-300 text-blue-600 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button className="mt-6 w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Sign In <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
            </Button>

            {/* Error Messages */}
            <div className="flex h-8 items-end space-x-1">
              {/* Add form errors here */}
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                Sign up here
              </a>
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center text-blue-100 text-xs">
          <p>© 2024 Acme Dashboard. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
