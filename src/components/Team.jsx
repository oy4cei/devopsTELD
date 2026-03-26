import React, { useEffect, useRef, useState } from 'react';
import './Team.css';
import { teamMembers } from '../data/team';

const Team = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="team-section" id="team" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Meet Our <span className="text-accent">Expert Team</span></h2>
                    <p>
                        World-class professionals with experience across major cloud platforms 
                        and leading tech companies.
                    </p>
                </div>

                <div className={`team-grid ${isVisible ? 'visible' : ''}`}>
                    {teamMembers.map((member, index) => (
                        <div key={member.id} className={`team-card ${member.fired ? 'fired' : ''}`} style={{ transitionDelay: `${index * 0.08}s` }}>
                            <div className="team-avatar-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-avatar"
                                />
                                {member.fired && (
                                    <div className="fired-badge">FIRED</div>
                                )}
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
