import styles from "./CountryItem.module.css";

type Props = { country: Country };

const CountryItem: React.FC<Props> = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;

// function CountryItem({ country }) {
//   return (
//     <li className={styles.countryItem}>
//       <span>{country.emoji}</span>
//       <span>{country.country}</span>
//     </li>
//   );
// }

// export default CountryItem;
