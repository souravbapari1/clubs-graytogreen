import AboutAndJoin from "./_components/AboutAndJoin";
import ClubAchievements from "./_components/ClubAchievements";
import ClubObjectives from "./_components/ClubObjectives";
import Header from "./_components/Header";

function page() {
  return (
    <div>
      <Header />
      <AboutAndJoin />
      <ClubObjectives />
      <ClubAchievements />
    </div>
  );
}

export default page;
