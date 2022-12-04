import React from 'react'
import './styles/CommonSection.css'
import { Container } from 'reactstrap'

const CommonSection = ({ title }) => {
    return (
        <section className="common_section">
            <Container className="text-center">
                <h2>{title}</h2>
            </Container>
        </section>
    )
}

export default CommonSection
