import ClubMember from "./_components/ClubMember";
import MemberCard from "./_components/memberCard";

function page() {
  return (
    <div className="container mt-10">
      <h1 className="text-xl">Top Management: (6 Members)</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 mt-6">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <MemberCard />
          ))}
      </div>
      <br />
      <br />

      <h1 className="text-xl">Members (62 Members)</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 mt-6">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ClubMember />
          ))}
      </div>
    </div>
  );
}

export default page;
