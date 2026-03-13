
import React from "react";
import Solafide3DWalkthroughWrapper from 'components/Solafide3DWalkthroughWrapper.tsx';
import { BrowserRouter, useNavigate } from 'react-router-dom';
//     <Button
//       className="btn-round btn-icon btn-simple slick-prev slick-arrow"
//       color="primary"
//       aria-label="Previous"
//       type="button"
//       onClick={props.onClick}
//     >
//       <i className="tim-icons icon-minimal-left" />
//     </Button>
//   );
// };
// // custom next button for the slick component
// const NextButton = (props) => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-next slick-arrow"
//       color="primary"
//       aria-label="Next"
//       type="button"
//     >
//       <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
//     </Button>
//   );
// };
export default function Index() {
  const navigate = useNavigate();
  return (
    <>

  
 <Solafide3DWalkthroughWrapper 
  onComplete={() => navigate('/home')}
/>


    </>
  );
}
