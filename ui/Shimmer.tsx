import styles from "../styles/shimmer.module.css";
export default function Shimmer({ style }: { style?: React.CSSProperties }) {
  return <div className={`${styles.shimmerBG}`} style={style}  data-testid="shimmer"></div>;
}