import styles from '../styles/AnnouncementBanner.module.css';

export default function AnnouncementBanner() {
  return (
    <div className={styles.banner}>
      <span>Free Shipping</span>
      <span>10% Off sitewide – use code <strong>WELCOME10</strong></span>
      <span>Join our mailing list for exclusive deals!</span>
    </div>
  );
}
