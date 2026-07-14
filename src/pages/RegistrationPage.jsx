import { useState, useEffect } from 'react';
import PixelBlast from '../components/PixelBlast';
import GradientText from '../components/GradientText';
import Stepper, { Step } from '../components/Stepper';
import CurvedLoop from '../components/CurvedLoop';
import SpotlightCard from '../components/SpotlightCard';
import FooterSection from '../sections/FooterSection';
import './RegistrationPage.css';

const UNIVERSITIES = [
  // Government Universities
  { id: "Colombo", name: "University of Colombo" },
  { id: "Peradeniya", name: "University of Peradeniya" },
  { id: "Sri Jayewardenepura", name: "University of Sri Jayewardenepura" },
  { id: "Kelaniya", name: "University of Kelaniya" },
  { id: "Moratuwa", name: "University of Moratuwa" },
  { id: "Jaffna", name: "University of Jaffna" },
  { id: "Ruhuna", name: "University of Ruhuna" },
  { id: "Open", name: "The Open University of Sri Lanka" },
  { id: "Eastern", name: "Eastern University, Sri Lanka" },
  { id: "South Eastern", name: "South Eastern University of Sri Lanka" },
  { id: "Rajarata", name: "Rajarata University of Sri Lanka" },
  { id: "Sabaragamuwa", name: "Sabaragamuwa University of Sri Lanka" },
  { id: "Wayamba", name: "Wayamba University of Sri Lanka" },
  { id: "Uva Wellassa", name: "Uva Wellassa University" },
  { id: "Visual and Performing Arts", name: "University of the Visual and Performing Arts" },
  { id: "Gampaha Wickramarachchi", name: "Gampaha Wickramarachchi University of Indigenous Medicine" },
  { id: "Vavuniya", name: "University of Vavuniya" },
  { id: "Buddhist and Pali", name: "Buddhist and Pali University of Sri Lanka" },
  { id: "Buddhasravaka Bhiksu", name: "Buddhasravaka Bhiksu University" },
  { id: "KDU", name: "General Sir John Kotelawala Defence University (KDU)" },
  { id: "Vocational Technology", name: "University of Vocational Technology (Univotec)" },
  { id: "Ocean University", name: "Ocean University of Sri Lanka" },

  // Private / Degree Awarding Institutes
  { id: "SLIIT", name: "Sri Lanka Institute of Information Technology (SLIIT)" },
  { id: "NSBM", name: "NSBM Green University" },
  { id: "NIBM", name: "National Institute of Business Management (NIBM)" },
  { id: "IIT", name: "Informatics Institute of Technology (IIT)" },
  { id: "CINEC", name: "CINEC Campus" },
  { id: "SLTC", name: "SLTC Research University" },
  { id: "Horizon", name: "Horizon Campus" },
  { id: "APIIT", name: "Asia Pacific Institute of Information Technology (APIIT)" },
  { id: "KIU", name: "Kaatsu International University (KIU)" },
  { id: "BCAS", name: "BCAS Campus" },
  { id: "ICBT", name: "International College of Business and Technology (ICBT)" },
  { id: "Esoft", name: "Esoft Metro Campus" },
  { id: "Other", name: "Other" }
];

export default function RegistrationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showUniversitySuggestions, setShowUniversitySuggestions] = useState(false);
  const [validationErrorMsg, setValidationErrorMsg] = useState('');
  const [errorField, setErrorField] = useState('');

  const [formData, setFormData] = useState({
    teamName: '',
    university: '',
    teamSize: 4,
    contactNumber: '',
    members: [
      { fullName: '', initials: '', email: '', mobile: '' },
      { fullName: '', initials: '', email: '', mobile: '' },
      { fullName: '', initials: '', email: '', mobile: '' },
      { fullName: '', initials: '', email: '', mobile: '' }
    ],
    termsAccepted: false
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredUniversities = formData.university.trim() === ''
    ? UNIVERSITIES
    : UNIVERSITIES.filter(u => u.name.toLowerCase().includes(formData.university.toLowerCase()));

  const handleFinalSubmit = () => {
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 500);
  };

  const handleTeamSizeChange = (size) => {
    setFormData(prev => {
      let newMembers = [...prev.members];
      if (size > newMembers.length) {
        for (let i = newMembers.length; i < size; i++) {
          newMembers.push({ fullName: '', initials: '', email: '', mobile: '' });
        }
      }
      return { ...prev, teamSize: size, members: newMembers };
    });
  };

  const handleMemberChange = (index, field, value) => {
    setFormData(prev => {
      const newMembers = [...prev.members];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prev, members: newMembers };
    });
  };

  const validateStep = (step) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Allows +94 or 0, followed by 7, one digit, and 7 more digits (spaces optional)
    const phoneRegex = /^(?:\+94|0)\s?7[0-9]\s?[0-9]{3}\s?[0-9]{4}$/;

    if (step === 1) {
      if (formData.teamName.trim().length < 3) return { msg: "Team name must be at least 3 characters long.", field: "teamName" };
      if (formData.university.trim() === '') return { msg: "Please select or enter a university.", field: "university" };
      if (!phoneRegex.test(formData.contactNumber.trim())) return { msg: "Please enter a valid mobile number (e.g. +947XXXXXXXX).", field: "contactNumber" };
      return null;
    }
    if (step >= 2 && step <= formData.teamSize + 1) {
      const memberIndex = step - 2;
      const member = formData.members[memberIndex];
      if (member.fullName.trim().length < 3) return { msg: "Full name must be at least 3 characters long.", field: `member_${memberIndex}_fullName` };
      if (member.initials.trim().length < 2) return { msg: "Please enter valid initials.", field: `member_${memberIndex}_initials` };
      if (!emailRegex.test(member.email.trim())) return { msg: "Please enter a valid email address.", field: `member_${memberIndex}_email` };
      if (!phoneRegex.test(member.mobile.trim())) return { msg: "Please enter a valid Sri Lankan mobile number (e.g. +94 7X XXX XXXX).", field: `member_${memberIndex}_mobile` };
      return null;
    }
    if (step === formData.teamSize + 2) {
      if (!formData.termsAccepted) return { msg: "You must accept the rules and regulations to register.", field: "terms" };
      return null;
    }
    return null;
  };

  const renderMemberFields = (index, label) => (
    <div className="member-card" key={index} style={{ marginBottom: 0 }}>
      <h4>{label}</h4>
      <div className="input-grid">
        <div className="input-group">
          <label>Full Name *</label>
          <input
            type="text"
            required
            className={errorField === `member_${index}_fullName` ? 'error-highlight' : ''}
            placeholder="John Doe"
            value={formData.members[index].fullName}
            onChange={e => { handleMemberChange(index, 'fullName', e.target.value); setErrorField(''); }}
          />
        </div>
        <div className="input-group">
          <label>Name with Initials *</label>
          <input
            type="text"
            required
            className={errorField === `member_${index}_initials` ? 'error-highlight' : ''}
            placeholder="J. Doe"
            value={formData.members[index].initials}
            onChange={e => { handleMemberChange(index, 'initials', e.target.value); setErrorField(''); }}
          />
        </div>
        <div className="input-group">
          <label>Email Address *</label>
          <input
            type="email"
            required
            className={errorField === `member_${index}_email` ? 'error-highlight' : ''}
            placeholder="john@university.edu"
            value={formData.members[index].email}
            onChange={e => { handleMemberChange(index, 'email', e.target.value); setErrorField(''); }}
          />
        </div>
        <div className="input-group">
          <label>Mobile Number *</label>
          <input
            type="tel"
            required
            className={errorField === `member_${index}_mobile` ? 'error-highlight' : ''}
            placeholder="+94 7X XXX XXXX"
            value={formData.members[index].mobile}
            onChange={e => { handleMemberChange(index, 'mobile', e.target.value); setErrorField(''); }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="registration-page">
        {/* Background Effect */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#ff3131"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          speed={0.6}
          transparent={true}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(9,9,9,0.7) 0%, rgba(9,9,9,0.95) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      <a href="#home" className="reg-back-btn">
        ← Back to Home
      </a>

      <div className="reg-container" style={{ maxWidth: '800px', flex: 1 }}>
        <div className="reg-header">
          <GradientText
            colors={["#D80606", "#820303", "#ffffff", "#D80606"]}
            animationSpeed={6}
            showBorder={false}
          >
            <h2>Team Registration</h2>
          </GradientText>
          <p>Secure your spot on the grid.</p>
        </div>

        {submitted ? (
          <SpotlightCard className="reg-form-card success-message" spotlightColor="rgba(255, 49, 49, 0.2)">
            <h3>Registration Complete!</h3>
            <p>Your team has been successfully registered for Red Cypher 3.0.</p>
            <p>Keep an eye on your emails for further instructions.</p>
            <a href="#home" className="reg-back-btn" style={{ position: 'relative', top: 0, left: 0, display: 'inline-flex', margin: '0 auto' }}>
              Return to Grid
            </a>
          </SpotlightCard>
        ) : (
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              setCurrentStep(step);
              setValidationErrorMsg('');
              setErrorField('');
            }}
            onFinalStepCompleted={handleFinalSubmit}
            backButtonText="Previous"
            nextButtonText="Next"
            disableStepIndicators={true}
            nextButtonProps={{
              onClick: (e) => {
                const error = validateStep(currentStep);
                if (error) {
                  e.preventDefault();
                  setValidationErrorMsg(error.msg);
                  setErrorField(error.field);
                } else {
                  setValidationErrorMsg('');
                  setErrorField('');
                }
              }
            }}
          >
            {/* Step 1: Team Details */}
            <Step>
              <SpotlightCard className="form-section" spotlightColor="rgba(255, 49, 49, 0.15)">
                <h3>Step 1: Team Configuration</h3>
                <div className="input-grid">
                  <div className="input-group full-width">
                    <label>Team Name *</label>
                    <input
                      type="text"
                      required
                      className={errorField === 'teamName' ? 'error-highlight' : ''}
                      placeholder="Enter your team name"
                      value={formData.teamName}
                      onChange={e => { setFormData({ ...formData, teamName: e.target.value }); setErrorField(''); }}
                    />
                  </div>
                  <div className="input-group" style={{ position: 'relative' }}>
                    <label>University / Institute *</label>
                    <input
                      type="text"
                      required
                      className={errorField === 'university' ? 'error-highlight' : ''}
                      placeholder="E.g., University of Ruhuna"
                      value={formData.university}
                      onChange={e => {
                        setFormData({ ...formData, university: e.target.value });
                        setShowUniversitySuggestions(true);
                        setErrorField('');
                      }}
                      onFocus={() => setShowUniversitySuggestions(true)}
                      onBlur={() => {
                        // Delay hiding so we can click the option
                        setTimeout(() => setShowUniversitySuggestions(false), 200);
                      }}
                    />
                    {showUniversitySuggestions && filteredUniversities.length > 0 && (
                      <div className="suggestions-dropdown" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: '#1a1a1a',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        marginTop: '4px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        zIndex: 10,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                      }}>
                        {filteredUniversities.map(uni => (
                          <div
                            key={uni.id}
                            style={{
                              padding: '10px 15px',
                              cursor: 'pointer',
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              color: '#fff',
                              transition: 'background 0.2s',
                              fontSize: '0.9rem'
                            }}
                            onMouseEnter={e => e.target.style.backgroundColor = 'rgba(255,49,49,0.2)'}
                            onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                            onMouseDown={(e) => {
                              // Prevent the input's onBlur from firing before this completes
                              e.preventDefault();
                              setFormData({ ...formData, university: uni.name });
                              setShowUniversitySuggestions(false);
                            }}
                          >
                            {uni.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="input-group">
                    <label>Team Size *</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleTeamSizeChange(Number(e.target.value))}
                    >
                      <option value={3}>3 Members</option>
                      <option value={4}>4 Members</option>
                    </select>
                  </div>
                  <div className="input-group full-width">
                    <label>Primary Contact Number *</label>
                    <input
                      type="tel"
                      required
                      className={errorField === 'contactNumber' ? 'error-highlight' : ''}
                      placeholder="+94 7X XXX XXXX"
                      value={formData.contactNumber}
                      onChange={e => { setFormData({ ...formData, contactNumber: e.target.value }); setErrorField(''); }}
                    />
                  </div>
                </div>
                {validationErrorMsg && (
                  <div style={{ color: '#ff3131', marginTop: '15px', fontSize: '0.9rem', textAlign: 'center' }}>
                    {validationErrorMsg}
                  </div>
                )}
              </SpotlightCard>
            </Step>

            {/* Dynamic Steps for Members based on team size */}
            {Array.from({ length: formData.teamSize }).map((_, i) => (
              <Step key={`member-${i}`}>
                <SpotlightCard className="form-section" spotlightColor="rgba(255, 49, 49, 0.15)">
                  <h3>Step {i + 2}: {i === 0 ? "Team Leader" : `Operative ${i + 1}`}</h3>
                  {renderMemberFields(i, `Details for Member ${i + 1}`)}
                  {validationErrorMsg && (
                    <div style={{ color: '#ff3131', marginTop: '15px', fontSize: '0.9rem', textAlign: 'center' }}>
                      {validationErrorMsg}
                    </div>
                  )}
                </SpotlightCard>
              </Step>
            ))}

            {/* Final Step: Validation & Submission */}
            <Step>
              <SpotlightCard className="form-section" spotlightColor="rgba(255, 49, 49, 0.15)">
                <h3>Final Step: Authorization</h3>
                <div className={`checkbox-group ${errorField === 'terms' ? 'error-highlight-box' : ''}`} style={{ background: errorField === 'terms' ? 'rgba(255, 49, 49, 0.1)' : 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: errorField === 'terms' ? '1px solid #ff3131' : '1px solid rgba(255,255,255,0.05)', transition: 'all 0.2s' }}>
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.termsAccepted}
                    onChange={e => { setFormData({ ...formData, termsAccepted: e.target.checked }); setErrorField(''); }}
                  />
                  <label htmlFor="terms">
                    We verify that all {formData.teamSize} team members are active undergraduate students and we agree to the <a href="#">Rules & Regulations</a> of Red Cypher 3.0.
                  </label>
                </div>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginTop: '20px' }}>
                  By clicking complete below, your squad will be permanently recorded in the mainframe.
                </p>
                {validationErrorMsg && (
                  <div style={{ color: '#ff3131', marginTop: '15px', fontSize: '0.9rem', textAlign: 'center' }}>
                    {validationErrorMsg}
                  </div>
                )}
              </SpotlightCard>
            </Step>
          </Stepper>
        )}
      </div>

        <div style={{ position: 'relative', zIndex: 5, width: '100%', marginTop: 'auto', marginBottom: '20px' }}>
          <CurvedLoop
            marqueeText="DECRYPT ✦ DEFEND  ✦ PREVAIL ✦ "
            speed={1.5}
            curveAmount={300}
            direction="left"
            interactive={true}
            className="cypher-marquee-text"
          />
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,49,49,0.2)' }}>
        <FooterSection />
      </div>
    </>
  );
}
