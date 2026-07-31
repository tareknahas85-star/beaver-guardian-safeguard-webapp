import React, { useState } from 'react';
import { Screen } from './types';
import { Dashboard } from './components/Dashboard';
import { LocationTracking } from './components/LocationTracking';
import { AppRestrictions } from './components/AppRestrictions';
import { ScreenTime } from './components/ScreenTime';
import { WeeklyActivityReport } from './components/WeeklyActivityReport';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body-md">
      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={handleNavigate} />
      )}
      {currentScreen === 'location-tracking' && (
        <LocationTracking onNavigate={handleNavigate} />
      )}
      {currentScreen === 'app-restrictions' && (
        <AppRestrictions onNavigate={handleNavigate} />
      )}
      {currentScreen === 'screen-time' && (
        <ScreenTime onNavigate={handleNavigate} />
      )}
      {currentScreen === 'weekly-activity-report' && (
        <WeeklyActivityReport onNavigate={handleNavigate} />
      )}
    </div>
  );
}
