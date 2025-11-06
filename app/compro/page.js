// app/compro/page.jsx
import { AboutUs } from '../components/AboutUs';
import { CompanyProfile } from '../components/CompanyProfile';
import { ScopeOfWork } from '../components/ScopeOfWork';
import { TjmGroup } from '../components/TjmGroup';
import { VisionMission } from '../components/VisionMission';

export default function CompanyProfilePage() {
  return (
    <>
      <CompanyProfile />
      <AboutUs />
      <ScopeOfWork />
      <TjmGroup />
      <VisionMission />
    </>
  );
}
