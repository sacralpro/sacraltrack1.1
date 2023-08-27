import type { NextPage } from "next";
import { memo } from "react";

const ArtistCardComponent: NextPage = memo(() => {
  return (
    <div className="absolute top-[15.14px] left-[0px] h-[490px] flex flex-col items-center justify-start gap-[44px] text-left text-xs text-white font-gotham-pro">
      <div className="flex flex-col items-center justify-start gap-[10px]">
        <div className="relative leading-[16px] font-medium">Artist name</div>
        <img
          className="relative rounded-mini w-[234px] h-44 object-cover"
          alt=""
          src="/photouser@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px] text-3xs">
        <div className="relative leading-[12.34px] font-medium">Friends</div>
        <div className="relative leading-[12.34px] font-medium">Message</div>
        <div className="relative leading-[12.34px] font-medium">My Tracks</div>
        <div className="relative leading-[12.34px] font-medium">Money</div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[149.98px] h-[31.48px]"
        onClick={onGroupButtonClick}
        style={groupButtonStyle}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12.34px] max-w-full overflow-hidden max-h-full"
          alt=""
          src={dimensions}
        />
        <div className="absolute h-[41.3%] w-[53.37%] top-[31.37%] right-[23.99%] bottom-[27.33%] left-[22.63%]">
          <div
            className="absolute top-[0%] left-[23.8%] text-5xs leading-[12.34px] font-medium font-gotham-pro text-white text-center"
            style={releaseATrackStyle}
          >
            Release a track
          </div>
          <img
            className="absolute h-[75.96%] w-[12.34%] top-[9.5%] right-[87.66%] bottom-[14.54%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={productDimensions}
          />
        </div>
      </button>
      <div className="flex flex-row items-center justify-start gap-[91px] text-5xs">
        <div className="relative w-[45.58px] h-2.5">
          <img
            className="absolute top-[1.23px] left-[0px] w-[7.41px] h-[7.41px] overflow-hidden"
            alt=""
            src={productDimensionsText}
          />
          <div className="absolute top-[0%] left-[29.79%] leading-[9.88px] font-medium">
            Log out
          </div>
        </div>
        <div className="relative leading-[12.34px] font-medium text-center">
          Settings
        </div>
      </div>
    </div>
  );
});

export default ArtistCardComponent;
