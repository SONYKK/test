import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";

export default function useCountdown(start:number) {
    const [secLeft, setSecLeft] = useState(start);
    const navigate = useNavigate();
    const goToRes = () => navigate(RouteNames.RESULT)

    useEffect(()=> {
        if (secLeft <= 0) {
            goToRes()
        }
        const timeout = setTimeout(()=> {
            setSecLeft(secLeft - 1);
        }, 1000);
        
        return ()=> clearTimeout(timeout);
    }, [secLeft, goToRes]);
    
        return {secLeft}
}
