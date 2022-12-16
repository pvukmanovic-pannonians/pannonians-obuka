import { useEffect  } from "react";

export const Background = ({children}) => {

  useEffect(() => {
    console.log("Komponenta Background renederovana na ekranu ;)");
  }, []); 

    return (
      <>
        <div style={{backgroundColor: "teal", padding: "12px 24px"}}>
          <h4>A separate component that has children.</h4>
          {children}
        </div>
      </>
    );
  };

export function alertiranje() {
    alert ("anything anything");
};
