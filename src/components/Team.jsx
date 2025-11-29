import React from 'react';
import './Team.css';
import { teamMembers } from '../data/team';

const Team = () => {
    return (
        <section className="team-section" id="team">
            <div className="container">
                <div className="team-header">
                    <h2 className="team-title">Наша команда</h2>
                    <p className="team-subtitle">
                        Профессионалы мирового уровня с опытом работы в ведущих технологических компаниях
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card">
                            <div
                                className="team-avatar"
                                style={{ backgroundColor: member.color }}
                            >
                                <span className="avatar-initials">{member.initials}</span>
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
