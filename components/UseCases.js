import styles from '../styles/UseCases.module.css';

const useCases = [
  {
    title: 'Reduce Your Energy Bills',
    text: 'Optimize your home energy usage with smart scheduling and real-time monitoring to save on electricity costs.',
    image: '/usecase-energy.jpg'
  },
  {
    title: 'Sustainable Smart Living',
    text: 'Embrace eco-friendly automation that helps you reduce carbon footprint while enjoying modern convenience.',
    image: '/usecase-sustainability.jpg'
  }
];

export default function UseCases() {
  return (
    <section className={styles.section}>
      {useCases.map((uc, idx) => (
        <div key={idx} className={styles.row}>
          <div className={styles.text}>
            <h2>{uc.title}</h2>
            <p>{uc.text}</p>
          </div>
          <div className={styles.image}>
            <img src={uc.image} alt={uc.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
