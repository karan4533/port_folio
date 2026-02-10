import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import SectionDivider from './components/SectionDivider';
import IndustryOverview from './components/IndustryOverview';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import IndustryProjects from './components/IndustryProjects';
import Education from './components/Education';
import AcademicRoles from './components/AcademicRoles';
import Publications from './components/Publications';
import CertificationsAwards from './components/CertificationsAwards';
import MembershipsCollaborations from './components/MembershipsCollaborations';
import { profileData } from './data';

function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = profileData.navigation.map(nav => nav.id);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Sidebar
        data={profileData}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <MobileMenu
        data={profileData}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="lg:ml-80 relative z-10">
        <Header
          name={profileData.name}
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <div className="px-4 md:px-8 lg:px-12 py-8 max-w-7xl space-y-8">
          {/* Profile Section */}
          <PersonalDetails data={profileData} />

          {/* ====== IT / INDUSTRY SECTION ====== */}
          <SectionDivider
            number="I"
            title="IT / INDUSTRY ACHIEVEMENTS"
            subtitle="Enterprise AI, GenAI & Technology Leadership"
            color="blue"
          />

          <IndustryOverview data={profileData} />

          <TechSkills techSkills={profileData.techSkills} />

          <Experience experience={profileData.itExperience} />

          <IndustryProjects projects={profileData.industryProjects} />

          {/* ====== ACADEMIC SECTION ====== */}
          <SectionDivider
            number="II"
            title="ACADEMIC & RESEARCH ACHIEVEMENTS"
            subtitle="Education, Research, Publications & Collaborations"
            color="purple"
          />

          <Education education={profileData.education} />

          <AcademicRoles data={profileData} />

          <Publications data={profileData} />

          <CertificationsAwards data={profileData} />

          <MembershipsCollaborations data={profileData} />
        </div>
      </div>
    </div>
  );
}

export default App;
