import {useMediaQuery} from "react-responsive";

function useIsMobile() {
    const isMobile = useMediaQuery({query: '(max-width: 600px)'})
    return isMobile
}

export default useIsMobile;
