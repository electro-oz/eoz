import styles from '../styles/Filters.module.css';
import { Switch, SmartHome, Window, LightBulb, Zap } from 'lucide-react';

const filters = [
  { name: 'Smart Switches', icon: Switch, link: '/smart-switches' },
  { name: 'Curtain Drivers', icon: Window, link: '/curtain-drivers' },
  { name: 'Sensors', icon: SmartHome, link: '/sensors' },
  { name: 'Smart Lights', icon: LightBulb, link: '/lights' },
  { name: 'Matter Products', icon: Zap, link: '/matter-products' },
];

export default function Filters() {
  return (
    <section className={styles.filtersSection}>
      <div className={styles.container}>
        {filters.map(({ name, icon: Icon, link }) => (
          <a key={name} href={link} className={styles.filterItem}>
            <Icon size={24} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}