import styles from '../styles/Filters.module.css';

const filters = [
  { name: 'Smart Switches', emoji: '🔌', link: '/smart-switches' },
  { name: 'Curtain Drivers', emoji: '🪟', link: '/curtain-drivers' },
  { name: 'Sensors', emoji: '🛡️', link: '/sensors' },
  { name: 'Smart Lights', emoji: '💡', link: '/lights' },
  { name: 'Matter Products', emoji: '⚡', link: '/matter-products' },
];

export default function Filters() {
  return (
    <section className={styles.filtersSection}>
      <div className={styles.container}>
        {filters.map(({ name, emoji, link }) => (
          <a key={name} href={link} className={styles.filterItem}>
            <span className={styles.icon}>{emoji}</span>
            <span className={styles.label}>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
