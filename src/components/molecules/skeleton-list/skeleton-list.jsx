import Skeleton from '../skeleton/skeleton';

const SkeletonList = ({ amount }) =>
  Array(amount)
    .fill(0)
    .map((_, _key) => <Skeleton key={_key} />);

export default SkeletonList;
