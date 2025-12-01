import React from 'react';
import './Team.css';
import { teamMembers } from '../data/team';

const Team = () => {
    return (
        <section className="team-section" id="team">
            <div className="container">
                <div className="team-header">
                    <h2 className="team-title">Our Team</h2>
                    <p className="team-subtitle">
                        World-class professionals with experience in leading tech companies
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-avatar-container">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-avatar-img"
                                />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-position">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
