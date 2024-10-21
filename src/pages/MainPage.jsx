import TourForm from "../components/Tour/TourForm";
import TourList from "../components/Tour/TourList";

import { useTourAPI } from "../hook/useTourAPI";

export const MainPage = () => {
  const  [tour ] = useTourAPI();

  return (
    <div>
      <TourForm />
      <TourList tours={tour} />
    </div>
  );
};
