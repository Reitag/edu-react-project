import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/entities/request/slice";

export const useRequest = (thunk, params /*, shouldSkip = false*/) => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) =>
    //request ? selectRequestStatus(state, request?.requestId) : null
    selectRequestStatus(state, request?.requestId)
  );

  useEffect(() => {
    //if (shouldSkip) return;

    const request = dispatch(thunk(params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, params, thunk /*, shouldSkip*/]);

  return requestStatus;
};
