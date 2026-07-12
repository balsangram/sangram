import SectionTitle from '../SectionTitle/SectionTitle'
import Timeline from '../Timeline/Timeline'
import { experiences } from '../../utils/data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Roles shaped by real production systems."
          description="Backend-heavy ownership across APIs, realtime features, payments, and data stores."
        />
        <Timeline items={experiences} />
      </div>
    </section>
  )
}
