import Spline from '@splinetool/react-spline';


export const SplineVirusIcon = ({ splineRef }) => {
  
  const onLoad = (spline) => {
    if(splineRef) {
      splineRef.current = spline;
    }
  };

  return (
   
      <Spline 
        scene="https://prod.spline.design/BljQVjFtuJVpHMhc/scene.splinecode" 
        onLoad={onLoad}
      />
  
  );
}

