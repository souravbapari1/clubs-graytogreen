import Image from "next/image";
import React from "react";
import ClubSocialLink from "../gallery/_components/ClubSocialLink";

function Header() {
  return (
    <div className="w-full h-96 bg-primary relative">
  <Image
    src="https://s3-alpha-sig.figma.com/img/fc3a/feae/00050c121b8f535ccce0ccb5ec52335e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~9haYrjxbgo3TyJN6HqvML0FdnrBIiZtGTLGMmTvbCXJapuxMJphIEw7ZJujjG3~iJqwsrVOwSNM5ZiEqT5rkV8KOF9-QxVsRkHGfpNyPkvTFZTOllPPMU5JSx~3FwS5evoeD2Ttmj7DGRcmakfVf~sw6hlfvXZCpEhre6sLpXpQeDxg8c0nxfCXiu3U4paColi2J4ruvV74LbxjUiihWmgqqNxxV6HZnJVRMaOye0UnxGZ-94lo-eQmm6lqBX7WNSCIykL2XhPcoenPkGTrt31oZ2q~w8Du-x9EEGhX4GP0GqtbXAfglGDEOo8KpQOu2F0zDwLaMn~Yv1ruBGmiA__"
    width={5000}
    height={2000}
    alt="club"
    className="w-full h-full object-cover"
  />
  <h2
    id="New-Heading"
    className="h-auto text-[40px] text-white font-bold p-5 w-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
  >
    Green Minds, Sustainable Actions
  </h2>
</div>

  );
}

export default Header;
