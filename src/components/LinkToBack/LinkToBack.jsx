import {
    LinkBack,
    ArrowIcon,
  } from './LinkToBack.styled';

  import { useLocation, useNavigate } from 'react-router-dom';

export const LinkToBack =()=>{
const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
    return(
<LinkBack to={backLinkHref}>
          <ArrowIcon /> Back
        </LinkBack>
    )
}
;



