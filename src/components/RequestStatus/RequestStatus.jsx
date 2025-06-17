import { REQUEST_STATUS } from "../../shared/constants/requestStatus";

const PENDING_STATUSES = [REQUEST_STATUS.PENDING, REQUEST_STATUS.IDLE];
const REJECTED_STATUSES = [REQUEST_STATUS.REJECTED];

export const RequestStatus = ({ statuses, children }) => {
  const statusArray = Array.isArray(statuses) ? statuses : [statuses];

  if (statusArray.some((status) => PENDING_STATUSES.includes(status))) {
    return <>Loading...</>;
  }

  if (statusArray.some((status) => REJECTED_STATUSES.includes(status))) {
    return <>Error</>;
  }

  return <>{children}</>;
};
