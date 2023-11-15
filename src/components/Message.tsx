import styles from "./Message.module.css";

type Props = { message: string };

const Message: React.FC<Props> = ({ message }) => {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;

// function Message({ message }) {
//   return (
//     <p className={styles.message}>
//       <span role="img">👋</span> {message}
//     </p>
//   );
// }

// export default Message;
