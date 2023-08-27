import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import LeftSideBar from "../components1/left-side-bar";
import ContainerTrackListForm from "../components1/container-track-list-form";
import Top100 from "../components1/top100";
import Playyer from "../components1/playyer";

const SacralTrackFinalDesignCo: NextPage = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Sacral Track - Release a track " to the project
  }, []);

  return (
    <div className="relative bg-darkslategray w-full h-[632px] overflow-hidden text-left text-3xs text-white font-gotham-pro">
      <div className="absolute top-[30px] left-[20.5px] rounded-[12.34px] bg-gray-400 box-border w-[848px] flex flex-row py-1.5 px-3 items-center justify-between border-[0.2px] border-solid border-gray-600">
        <div className="relative w-[83.6px] h-3">
          <img
            className="absolute h-[80.27%] w-[calc(100%_-_71.26px)] top-[7.16%] right-[71.26px] bottom-[12.57%] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/logo.svg"
          />
          <b className="absolute top-[0%] left-[21.6px] leading-[11.73px]">
            Sacral Track
          </b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[36px]">
          <div className="flex flex-row items-center justify-start gap-[10px] font-gotham-pro-narrow">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/icon-componentsvg.svg"
            />
            <div className="relative leading-[12px] font-medium">Hip-Hop</div>
          </div>
          <div className="relative leading-[7.41px]">People</div>
          <div className="relative leading-[7.41px]">News</div>
          <div className="relative leading-[7.41px]">Events</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px]">
          <img
            className="relative w-[82.09px] h-[30.86px]"
            alt=""
            src="/button--search.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[61.72px] h-[30.86px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-388.svg"
            />
            <div className="absolute top-[30.76%] left-[10%] text-5xs leading-[9.88px] font-medium font-gotham-pro text-left">
              <span className="text-mediumseagreen-100">$</span>
              <span className="text-white">10,8</span>
            </div>
            <img
              className="absolute h-full w-6/12 top-[0%] right-[0%] bottom-[0%] left-[50%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/button--cart.svg"
            />
          </button>
        </div>
      </div>
      <div className="absolute top-[92.86px] left-[20px] w-[849px] flex flex-row flex-wrap items-center justify-center gap-[20px]">
        <LeftSideBar
          dimensions="/rectangle-392.svg"
          productDimensions="/icon.svg"
          productDimensionsText="/icon--logout.svg"
          leftSideBarZIndex="2"
          groupDivCursor="pointer"
          groupDivBorder="none"
          groupDivPadding="0"
          groupDivBackgroundColor="transparent"
          releaseATrackDisplay="inline-block"
          onGroupButtonClick={onGroupButtonClick}
        />
        <ContainerTrackListForm
          dimension="/union.svg"
          productDimensions="/logotype.svg"
          dimensionText="/union1.svg"
          packageDimensions="/share1.svg"
          productDimensionsText="/logotype1.svg"
        />
        <div className="h-[508px] flex flex-col items-start justify-start gap-[20px] z-[0]">
          <Top100 />
          <Playyer />
        </div>
      </div>
    </div>
  );
};

export default SacralTrackFinalDesignCo;
