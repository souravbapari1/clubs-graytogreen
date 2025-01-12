import ClubGalleryCategory from "../_components/ClubGalleryCategory";
import GalleryTab from "./_components/GalleryTab";
import GalleryView from "./GalleryView";

function page() {
  return (
    <div className="container">
      {/* <GalleryTab />
      <GalleryView /> */}
      <ClubGalleryCategory />
    </div>
  );
}

export default page;
