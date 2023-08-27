import type { NextPage } from "next";
import { memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerTrackListFormType = {
  dimension?: string;
  productDimensions?: string;
  dimensionText?: string;
  packageDimensions?: string;
  productDimensionsText?: string;

  /** Style props */
  artistNameFlexoZIndex?: Property.ZIndex;
};

const ContainerTrackListForm: NextPage<ContainerTrackListFormType> = memo(
  ({
    dimension,
    productDimensions,
    dimensionText,
    packageDimensions,
    productDimensionsText,
    artistNameFlexoZIndex,
  }) => {
    const storeTracksListStyle: CSS.Properties = useMemo(() => {
      return {
        zIndex: artistNameFlexoZIndex,
      };
    }, [artistNameFlexoZIndex]);

    return (
      <div
        className="w-[343px] h-[504px] flex flex-col items-center justify-center z-[1] text-left text-xs text-white font-gotham-pro"
        style={storeTracksListStyle}
      >
        <div className="relative w-[375px] h-[261px]">
          <img
            className="absolute h-[104.21%] w-[99.47%] top-[-2.3%] right-[0.27%] bottom-[-1.92%] left-[0.27%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className="absolute h-[91.57%] w-[90.67%] top-[5.75%] right-[4.53%] bottom-[2.68%] left-[4.8%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bgblurtitle.svg"
          />
          <div className="absolute top-[5px] left-[0px] bg-silver w-[375px] h-[250px] opacity-[0]" />
          <div className="absolute top-[9px] left-[16px] bg-silver w-[343px] h-[242px] opacity-[0]" />
          <div className="absolute top-[70px] left-[314px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.2)] w-10 h-[131px]" />
          <img
            className="absolute h-[38.7%] w-[10.67%] top-[26.82%] right-[5.6%] bottom-[34.48%] left-[83.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/backbuy.svg"
          />
          <img
            className="relative w-[16.01px] h-[15.97px]"
            alt=""
            src={dimension}
          />
          <img
            className="absolute h-[11.49%] w-[10.67%] top-[65.52%] right-[5.6%] bottom-[22.99%] left-[83.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-3881.svg"
          />
          <div className="absolute top-[68.2%] left-[87.47%] text-2xs leading-[16px] font-medium text-center">
            5.18
          </div>
          <div className="absolute top-[68.2%] left-[84.53%] text-2xs leading-[16px] font-medium text-center">
            $
          </div>
          <div className="absolute top-[218px] left-[278px] w-[59px] h-4">
            <img
              className="absolute top-[-1px] left-[-0.99px] w-[15.99px] h-4"
              alt=""
              src="/share.svg"
            />
            <div className="absolute top-[0px] left-[24px] leading-[16px] font-medium">
              Share
            </div>
          </div>
          <div className="absolute top-[217px] left-[132px] flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-[18px] h-[17.75px] overflow-hidden shrink-0"
              alt=""
              src={productDimensions}
            />
            <div className="relative leading-[16px] font-medium">
              Create NFT
            </div>
          </div>
          <div className="absolute w-[33.33%] top-[8.81%] left-[8.27%] leading-[16px] font-medium text-lightslategray flex items-center">
            Artist
          </div>
          <div className="absolute w-[16.27%] top-[15.71%] left-[42.93%] leading-[16px] text-lightslategray flex items-center">
            Remix by
          </div>
          <div className="absolute w-[20.27%] top-[15.71%] left-[60.53%] text-smi leading-[16px] flex items-center">
            Artist
          </div>
          <div className="absolute w-[33.33%] top-[15.71%] left-[8.27%] text-smi leading-[16px] flex items-center">
            Name of track
          </div>
          <div className="absolute top-[44px] left-[329px] text-3xs leading-[10px] font-medium">
            18
          </div>
          <img
            className="absolute top-[24.3px] left-[325px] w-[18.86px] h-[13.49px]"
            alt=""
            src="/like-statesetlike.svg"
          />
          <img
            className="absolute top-[218px] left-[37px] w-4 h-4"
            alt=""
            src="/iconcomments.svg"
          />
        </div>
        <div className="relative w-[375px] h-[261px]">
          <img
            className="absolute h-[92.72%] w-[91.47%] top-[3.45%] right-[4.27%] bottom-[3.83%] left-[4.27%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/mask-group1@2x.png"
          />
          <img
            className="absolute h-[91.57%] w-[90.67%] top-[5.75%] right-[4.53%] bottom-[2.68%] left-[4.8%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bgblurtitle.svg"
          />
          <div className="absolute top-[5px] left-[0px] bg-silver w-[375px] h-[250px] opacity-[0]" />
          <img
            className="absolute top-[8.89px] left-[16px] w-[343px] h-[242.22px] opacity-[0]"
            alt=""
            src="/area.svg"
          />
          <div className="absolute top-[70px] left-[314px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.2)] w-10 h-[131px]" />
          <img
            className="absolute h-[38.7%] w-[10.67%] top-[26.82%] right-[5.6%] bottom-[34.48%] left-[83.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/backbuy.svg"
          />
          <img
            className="relative w-[16.01px] h-[15.97px]"
            alt=""
            src={dimensionText}
          />
          <img
            className="absolute h-[11.49%] w-[10.67%] top-[65.52%] right-[5.6%] bottom-[22.99%] left-[83.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-3881.svg"
          />
          <div className="absolute top-[68.2%] left-[87.47%] text-2xs leading-[16px] font-medium text-center">
            5.18
          </div>
          <div className="absolute top-[68.2%] left-[84.53%] text-2xs leading-[16px] font-medium text-center">
            $
          </div>
          <div className="absolute top-[218px] left-[278px] w-[59px] h-4">
            <img
              className="absolute top-[-1px] left-[-0.99px] w-[15.99px] h-4"
              alt=""
              src={packageDimensions}
            />
            <div className="absolute top-[0px] left-[24px] leading-[16px] font-medium">
              Share
            </div>
          </div>
          <div className="absolute top-[217px] left-[132px] flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-[18px] h-[17.75px] overflow-hidden shrink-0"
              alt=""
              src={productDimensionsText}
            />
            <div className="relative leading-[16px] font-medium">
              Create NFT
            </div>
          </div>
          <div className="absolute w-[33.33%] top-[8.81%] left-[8.27%] leading-[16px] font-medium text-lightslategray flex items-center">
            Artist new
          </div>
          <div className="absolute w-[16.27%] top-[15.71%] left-[42.93%] leading-[16px] text-lightslategray flex items-center">
            Remix by
          </div>
          <div className="absolute w-[20.27%] top-[15.71%] left-[60.53%] text-smi leading-[16px] flex items-center">
            Artist
          </div>
          <div className="absolute w-[33.33%] top-[15.71%] left-[8.27%] text-smi leading-[16px] flex items-center">
            Name of track
          </div>
          <div className="absolute top-[44px] left-[329px] text-3xs leading-[10px] font-medium">
            18
          </div>
          <img
            className="absolute top-[24.3px] left-[325px] w-[18.86px] h-[13.49px]"
            alt=""
            src="/like-statesetlike.svg"
          />
          <img
            className="absolute top-[218px] left-[37px] w-4 h-4"
            alt=""
            src="/iconcomments.svg"
          />
        </div>
      </div>
    );
  }
);

export default ContainerTrackListForm;
