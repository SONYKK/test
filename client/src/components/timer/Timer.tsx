import React, {memo} from 'react';
import useCountdown from "./useCountdown";

const Timer = () => {
    const {secLeft} = useCountdown(120)

    return (
        <div>
            {`${secLeft} сек.`}
        </div>
    );
};

export default memo(Timer);
