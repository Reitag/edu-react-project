import { REQUEST_STATUS } from "../../shared/constants/requestStatus";

export const RequestStatus = ({ statuses, children }) => {
  const statusArray = Array.isArray(statuses) ? statuses : [statuses];

  const isPendingOrIdle = (status) =>
    status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE;

  const isRejected = (status) => status === REQUEST_STATUS.REJECTED;

  if (statusArray.some(isPendingOrIdle)) {
    return <>Loading...</>;
  }

  if (statusArray.some(isRejected)) {
    return <>Error</>;
  }

  return <>{children}</>;
};
